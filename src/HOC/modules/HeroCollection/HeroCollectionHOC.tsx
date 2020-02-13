import { useDeleteMutationMutation } from 'graphql/delete.generated';
import { useFollowMutationMutation } from 'graphql/follow.generated';
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
}
export const HeroCollectionCtx = createContext({
  useHeroCollectionQuery: GQL.useHeroCollectionQuery,
  useHeroCollectionMeQuery: GQL.useHeroCollectionMeQuery
});

export const HeroCollectionHOC: SFC<Props> = ({ collectionId }) => {
  const { useHeroCollectionMeQuery, useHeroCollectionQuery } = useContext(
    HeroCollectionCtx
  );
  const { data: session } = useHeroCollectionMeQuery();
  const [joinMutation, joinMutationStatus] = useFollowMutationMutation();
  const [unjoinMutation, unjoinMutationStatus] = useDeleteMutationMutation();
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
          //FIXME https://gitlab.com/moodlenet/meta/issues/185
          isMine,
          following: !!collection.myFollow,
          flagged: !!collection.myFlag,
          icon: collection.icon || '',
          name: collection.name,
          fullName: collection.displayUsername,
          //FIXME https://gitlab.com/moodlenet/meta/issues/185
          summary: collection.summary || '',
          // FIXME Alec, not sure this is clean enuf pls doublecheck
          communityName: collection.community!.name,
          communityId: collection.community!.id,
          communityIcon: collection.community!.icon || '',
          toggleJoin: {
            toggle: () =>
              collection.myFollow
                ? unjoinMutation({
                    variables: { contextId: collection.myFollow.id }
                  }).then(() => collectionQuery.refetch())
                : joinMutation({
                    variables: { contextId: collection.id }
                  }).then(() => collectionQuery.refetch()),
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
