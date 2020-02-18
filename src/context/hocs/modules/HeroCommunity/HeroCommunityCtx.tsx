import React, { FC, useMemo, useCallback } from 'react';
import { Community } from 'graphql/types.generated';
import { HeroCommunityCtx } from 'HOC/modules/HeroCommunity/heroCommuityHOC';
import * as GQL from './HeroCommunityCtx.generated';

const OPTIMISTIC_ID = '#';
const canMutate = (_: any) => (_ === OPTIMISTIC_ID ? undefined : true);

export interface HeroCommunityCtxProvider {
  communityId: Community['id'];
}
export const HeroCommunityCtxProvider: FC<HeroCommunityCtxProvider> = ({
  communityId,
  children
}) => {
  const [join, joinStatus] = GQL.useHeroCommunityJoinMutation();
  const [unjoin, unjoinStatus] = GQL.useHeroCommunityUnjoinMutation();
  const meQ = GQL.useHeroCommunityMeQuery();
  const communityQ = GQL.useHeroCommunityQuery({ variables: { communityId } });

  const toggleJoin = useCallback(() => {
    if (
      !communityQ.data?.community ||
      joinStatus.loading ||
      unjoinStatus.loading
    ) {
      return;
    }
    const {
      data: { community }
    } = communityQ;
    return community.myFollow
      ? canMutate(community.myFollow.id) &&
          unjoin({
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
          })
      : join({
          variables: { contextId: community.id },
          optimisticResponse: {
            __typename: 'RootMutationType',
            createFollow: {
              __typename: 'Follow',
              context: {
                __typename: 'Community',
                id: community.id,
                myFollow: { __typename: 'Follow', id: OPTIMISTIC_ID }
              }
            }
          }
        });
  }, [communityQ, joinStatus, unjoinStatus]);

  const community = communityQ.data?.community || null;
  const me = meQ.data?.me || null;

  const ctx = useMemo<HeroCommunityCtx>(() => {
    return {
      community,
      me,
      toggleJoin
    };
  }, [community, me, toggleJoin]);

  return (
    <HeroCommunityCtx.Provider value={ctx}>
      {children}
    </HeroCommunityCtx.Provider>
  );
};

// toggle: () =>
// community.myFollow
//   ? community.myFollow.id !== '#' &&
//     unjoinMutation({
//       variables: { contextId: community.myFollow.id },
//       optimisticResponse: {
//         __typename: 'RootMutationType',
//         delete: {
//           __typename: 'Follow',
//           context: {
//             __typename: 'Community',
//             myFollow: null,
//             id: community.id
//           }
//         }
//       }
//       /*
//     optimisticResponse:{__typename:'RootMutationType',delete:{__typename:'Follow'}},
//     update:(_proxy,res)=>{
//         communityQuery.updateQuery((cache)=>{
//           if(cache.community && res.data && res.data.delete){
//             const newCache:GQL.HeroCommunityQuery = {
//               ...cache,
//               community:{
//                 ...cache.community,
//                 myFollow:null
//               }
//             }
//             return newCache
//           }
//           return cache
//         })
//         // const cache = proxy.readQuery<GQL.HeroCommunityQuery,GQL.HeroCommunityQueryVariables>({ query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
//         // if(cache && cache.community && res.data && res.data.delete){
//         //   const newCache:GQL.HeroCommunityQuery = {
//         //     ...cache,
//         //     community:{
//         //       ...cache.community,
//         //       myFollow:null
//         //     }
//         //   }
//         //   proxy.writeQuery<GQL.HeroCommunityQuery>({data:newCache, query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
//         // }
//       } */
//     })
//   : joinMutation({
//       variables: { contextId: community.id },
//       optimisticResponse: {
//         __typename: 'RootMutationType',
//         createFollow: {
//           __typename: 'Follow',
//           context: {
//             __typename: 'Community',
//             id: community.id,
//             myFollow: { __typename: 'Follow', id: '#' }
//           }
//         }
//       }
//       /* optimisticResponse:{__typename:'RootMutationType',createFollow:{__typename:'Follow',id:'#'}},
//     update:(_proxy,res)=>{
//       communityQuery.updateQuery((cache)=>{
//         if(cache.community && res.data && res.data.createFollow){
//           const newCache:GQL.HeroCommunityQuery = {
//             ...cache,
//             community:{
//               ...cache.community,
//               myFollow:res.data.createFollow
//             }
//           }
//           return newCache
//         }
//         return cache
//       })
//       // const cache = proxy.readQuery<GQL.HeroCommunityQuery,GQL.HeroCommunityQueryVariables>({ query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
//       // if(cache && cache.community && res.data && res.data.createFollow){
//       //   const newCache:GQL.HeroCommunityQuery = {
//       //     ...cache,
//       //     community:{
//       //       ...cache.community,
//       //       myFollow:res.data.createFollow
//       //     }
//       //   }
//       //   proxy.writeQuery<GQL.HeroCommunityQuery>({data:newCache, query:GQL.HeroCommunityDocument, variables:communityQuery.variables})
//       // }
//     } */
//     }),
