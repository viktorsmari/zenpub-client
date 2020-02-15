import { Collection } from 'graphql/types.generated';
import { EditCollectionPanelHOC } from 'HOC/modules/EditCollectionPanel/editCollectionPanelHOC';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import HeroCollection, {
  Props as HeroProps,
  Status
} from 'ui/modules/HeroCollection';
import * as GQL from './HeroCollection.generated';

export interface Props {
  collectionId: Collection['id'];
}

export interface HeroCollectionCtx {
  useHeroCollectionQuery: typeof GQL.useHeroCollectionQuery;
  useHeroCollectionMeQuery: typeof GQL.useHeroCollectionMeQuery;
  useHeroCollectionUnfollowMutation: typeof GQL.useHeroCollectionUnfollowMutation;
  useHeroCollectionFollowMutation: typeof GQL.useHeroCollectionFollowMutation;
}
export const HeroCollectionCtx = createContext({
  useHeroCollectionUnfollowMutation: GQL.useHeroCollectionUnfollowMutation,
  useHeroCollectionFollowMutation: GQL.useHeroCollectionFollowMutation,
  useHeroCollectionQuery: GQL.useHeroCollectionQuery,
  useHeroCollectionMeQuery: GQL.useHeroCollectionMeQuery
});

export const HeroCollectionHOC: SFC<Props> = ({ collectionId }) => {
  const {
    useHeroCollectionMeQuery,
    useHeroCollectionQuery,
    useHeroCollectionUnfollowMutation,
    useHeroCollectionFollowMutation
  } = useContext(HeroCollectionCtx);
  const { data: session } = useHeroCollectionMeQuery();
  const [joinMutation, joinMutationStatus] = useHeroCollectionFollowMutation();
  const [
    unjoinMutation,
    unjoinMutationStatus
  ] = useHeroCollectionUnfollowMutation();
  const collectionQuery = useHeroCollectionQuery({
    variables: { collectionId }
  });
  const heroProps = useMemo<HeroProps>(
    () => {
      if (
        collectionQuery.loading ||
        collectionQuery.error ||
        !collectionQuery.data ||
        !collectionQuery.data.collection
      ) {
        return {
          collection: {
            status: Status.Loading
          }
        };
      }
      const collection = collectionQuery.data.collection;
      const isMine =
        !!session &&
        !!session.me &&
        !!collection.creator &&
        session.me.user.id === collection.creator.id;

      const props: HeroProps = {
        collection: {
          status: Status.Loaded,
          isMine,
          following: !!collection.myFollow,
          flagged: !!collection.myFlag,
          icon: collection.icon || '',
          name: collection.name,
          fullName: collection.displayUsername,
          summary: collection.summary || '',
          communityName:
            (collection.community && collection.community.name) || '',
          communityId: (collection.community && collection.community.id) || '',
          communityIcon:
            (collection.community && collection.community.icon) || '',
          toggleJoin: {
            toggle: () =>
              collection.myFollow
                ? collection.myFollow.id !== '#' &&
                  unjoinMutation({
                    variables: { contextId: collection.myFollow.id },
                    optimisticResponse: {
                      __typename: 'RootMutationType',
                      delete: {
                        __typename: 'Follow',
                        context: {
                          __typename: 'Collection',
                          myFollow: null,
                          id: collection.id
                        }
                      }
                    }
                  })
                : joinMutation({
                    variables: { contextId: collection.id },
                    optimisticResponse: {
                      __typename: 'RootMutationType',
                      createFollow: {
                        __typename: 'Follow',
                        context: {
                          __typename: 'Collection',
                          id: collection.id,
                          myFollow: { __typename: 'Follow', id: '#' }
                        }
                      }
                    }
                  }),
            isSubmitting: collection.myFollow
              ? unjoinMutationStatus.loading
              : joinMutationStatus.loading
          },
          EditCollectionPanel: ({ done }) => (
            <EditCollectionPanelHOC done={done} collectionId={collection.id} />
          ),
          FlagModal: ({ done }) => (
            <FlagModalHOC
              done={done}
              contextId={collectionId}
              flagged={!!collection.myFlag}
            />
          )
        }
      };
      return props;
    },
    [
      collectionQuery,
      session,
      joinMutation,
      joinMutationStatus,
      unjoinMutation,
      unjoinMutationStatus
    ]
  );
  return <HeroCollection {...heroProps} />;
};
