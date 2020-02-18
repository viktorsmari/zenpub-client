import { Community } from 'graphql/types.generated';
import { CommunityPageCtx } from 'HOC/pages/community/CommunityPageHOC';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import * as GQL from './CommunityPage.generated';
import { CommunityPageActivitiesCtxProvider } from './CommunityPageActivitiesCtx';
import { CommunityPageCollectionsCtxProvider } from './CommunityPageCollectionsCtx';
import { CommunityPageThreadsCtxProvider } from './CommunityPageThreadsCtx';
import { HeroCommunityCtxProvider } from 'context/hocs/modules/HeroCommunity/HeroCommunityCtx';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPageCtxProvider: FC<Props> = ({
  communityId,
  children
}) => {
  const history = useHistory();
  const [
    createThreadMut,
    createThreadMutStatus
  ] = GQL.useCommunityPageCreateThreadMutation();
  const communityQ = GQL.useCommunityPageQuery({ variables: { communityId } });
  useEffect(() => {
    communityQ.refetch();
  }, []);

  const createThread: CommunityPageCtx['createThread'] = useCallback(
    ({ text }) => {
      if (
        !text ||
        createThreadMutStatus.loading ||
        !communityQ.data?.community
      ) {
        return;
      }
      const community = communityQ.data.community;

      return createThreadMut({
        variables: {
          contextId: community.id,
          comment: { content: text }
        }
      }).then(res => {
        const newThreadId = res.data?.createThread?.thread?.id;
        if (newThreadId) {
          history.push(`/thread/${newThreadId}`);
        }
      });
    },
    [communityQ, createThreadMutStatus.loading]
  );

  const ctx = useMemo<CommunityPageCtx>(
    () => ({
      community: communityQ.data?.community,
      createThread
    }),
    [communityQ, createThread]
  );
  return (
    <CommunityPageCtx.Provider value={ctx}>
      <HeroCommunityCtxProvider communityId={communityId}>
        <CommunityPageActivitiesCtxProvider communityId={communityId}>
          <CommunityPageCollectionsCtxProvider communityId={communityId}>
            <CommunityPageThreadsCtxProvider communityId={communityId}>
              {children}
            </CommunityPageThreadsCtxProvider>
          </CommunityPageCollectionsCtxProvider>
        </CommunityPageActivitiesCtxProvider>
      </HeroCommunityCtxProvider>
    </CommunityPageCtx.Provider>
  );
};
