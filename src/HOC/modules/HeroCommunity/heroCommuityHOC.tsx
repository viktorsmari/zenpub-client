import { Community } from 'graphql/types.generated';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import HeroCommunity, {
  Props as HeroProps,
  Status
} from 'ui/modules/HeroCommunity';
import { EditCommunityPanelHOC } from '../EditCommunityPanel/editCommunityPanelHOC';
import * as GQL from './getHeroCommunity.generated';
import { FlagModalHOC } from '../FlagModal/flagModalHOC';

export interface Props {
  communityId: Community['id'];
}

export interface HeroCommunityCtx {
  useHeroCommunityQuery: typeof GQL.useHeroCommunityQuery;
  useHeroCommunityMeQuery: typeof GQL.useHeroCommunityMeQuery;
  useHeroCommunityUnfollowMutation: typeof GQL.useHeroCommunityUnfollowMutation;
  useHeroCommunityFollowMutation: typeof GQL.useHeroCommunityFollowMutation;
}
export const HeroCommunityCtx = createContext<HeroCommunityCtx>({
  useHeroCommunityQuery: GQL.useHeroCommunityQuery,
  useHeroCommunityMeQuery: GQL.useHeroCommunityMeQuery,
  useHeroCommunityUnfollowMutation: GQL.useHeroCommunityUnfollowMutation,
  useHeroCommunityFollowMutation: GQL.useHeroCommunityFollowMutation
});

export const HeroCommunityHOC: SFC<Props> = ({ communityId }) => {
  const {
    useHeroCommunityMeQuery,
    useHeroCommunityQuery,
    useHeroCommunityFollowMutation,
    useHeroCommunityUnfollowMutation
  } = useContext(HeroCommunityCtx);
  const [joinMutation, joinMutationStatus] = useHeroCommunityFollowMutation();
  const [
    unjoinMutation,
    unjoinMutationStatus
  ] = useHeroCommunityUnfollowMutation();
  const { data: session } = useHeroCommunityMeQuery();
  const communityQuery = useHeroCommunityQuery({
    variables: { communityId }
  });
  const heroProps = useMemo<HeroProps>(
    () => {
      if (
        communityQuery.loading ||
        communityQuery.error ||
        !communityQuery.data ||
        !communityQuery.data.community
      ) {
        return {
          community: {
            status: Status.Loading
          }
        };
      }
      const community = communityQuery.data.community;
      const canModify =
        !!session &&
        !!session.me &&
        !!community.creator &&
        session.me.user.id === community.creator.id;

      const props: HeroProps = {
        community: {
          status: Status.Loaded,
          canModify,
          following: !!community.myFollow,
          flagged: !!community.myFlag,
          icon: community.icon || '',
          name: community.name,
          fullName: community.displayUsername,
          totalMembers:
            (community.followers && community.followers.totalCount) || NaN,
          summary: community.summary || '',
          toggleJoin: {
            toggle: () =>
              community.myFollow
                ? community.myFollow.id !== '#' &&
                  unjoinMutation({
                    variables: { contextId: community.myFollow.id },
                    optimisticResponse: {
                      __typename: 'RootMutationType',
                      delete: {
                        __typename: 'Follow',
                        context: {
                          __typename: 'Community',
                          myFollow: null,
                          id: community.id
                        }
                      }
                    }
                    /* 
                  optimisticResponse:{__typename:'RootMutationType',delete:{__typename:'Follow'}},
                  update:(_proxy,res)=>{
                      communityQuery.updateQuery((cache)=>{
                        if(cache.community && res.data && res.data.delete){
                          const newCache:GQL.HeroCommunityQuery = {
                            ...cache,
                            community:{
                              ...cache.community,
                              myFollow:null
                            }
                          } 
                          return newCache
                        }
                        return cache
                      })
                      // const cache = proxy.readQuery<GQL.HeroCommunityQuery,GQL.HeroCommunityQueryVariables>({ query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
                      // if(cache && cache.community && res.data && res.data.delete){
                      //   const newCache:GQL.HeroCommunityQuery = {
                      //     ...cache,
                      //     community:{
                      //       ...cache.community,
                      //       myFollow:null
                      //     }
                      //   } 
                      //   proxy.writeQuery<GQL.HeroCommunityQuery>({data:newCache, query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
                      // }
                    } */
                  })
                : joinMutation({
                    variables: { contextId: community.id },
                    optimisticResponse: {
                      __typename: 'RootMutationType',
                      createFollow: {
                        __typename: 'Follow',
                        context: {
                          __typename: 'Community',
                          id: community.id,
                          myFollow: { __typename: 'Follow', id: '#' }
                        }
                      }
                    }
                    /* optimisticResponse:{__typename:'RootMutationType',createFollow:{__typename:'Follow',id:'#'}},
                  update:(_proxy,res)=>{
                    communityQuery.updateQuery((cache)=>{
                      if(cache.community && res.data && res.data.createFollow){
                        const newCache:GQL.HeroCommunityQuery = {
                          ...cache,
                          community:{
                            ...cache.community,
                            myFollow:res.data.createFollow
                          }
                        } 
                        return newCache
                      }
                      return cache
                    })
                    // const cache = proxy.readQuery<GQL.HeroCommunityQuery,GQL.HeroCommunityQueryVariables>({ query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
                    // if(cache && cache.community && res.data && res.data.createFollow){
                    //   const newCache:GQL.HeroCommunityQuery = {
                    //     ...cache,
                    //     community:{
                    //       ...cache.community,
                    //       myFollow:res.data.createFollow
                    //     }
                    //   } 
                    //   proxy.writeQuery<GQL.HeroCommunityQuery>({data:newCache, query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
                    // }
                  } */
                  }),

            isSubmitting: community.myFollow
              ? unjoinMutationStatus.loading
              : joinMutationStatus.loading
          },
          EditCommunityPanel: ({ done }) => (
            <EditCommunityPanelHOC done={done} communityId={community.id} />
          ),
          FlagModal: ({ done }) => (
            <FlagModalHOC
              done={done}
              contextId={communityId}
              flagged={!!community.myFlag}
            />
          )
        }
      };
      return props;
    },
    [
      communityQuery,
      session,
      joinMutation,
      joinMutationStatus,
      unjoinMutation,
      unjoinMutationStatus
    ]
  );
  return <HeroCommunity {...heroProps} />;
};
