import React, { FC, useMemo } from 'react';
import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityOutboxActivities';
import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { useCommunity } from 'fe/community/useCommunity';
import { useCommunityThreads } from 'fe/thread/community/useCommunityThreads';
import { Community } from 'graphql/types.generated';
import {
  CommunityPage,
  CommunityPageTab
} from 'HOC/pages/community/CommunityPage';
export { CommunityPageTab } from 'HOC/pages/community/CommunityPage';

export interface CommunityPageCtrl {
  communityId: Community['id'];
  tab: CommunityPageTab;
  basePath: string;
}
export const CommunityPageCtrl: FC<CommunityPageCtrl> = ({
  communityId,
  tab,
  basePath
}) => {
  const { community, createThread } = useCommunity(communityId);
  const { threads } = useCommunityThreads(communityId);
  const { collections } = useCommunityCollections(communityId);
  const { activities } = useCommunityOutboxActivities(communityId);

  const communityPageProps = useMemo<CommunityPage>(() => {
    const props: CommunityPage = {
      tab,
      activities,
      collections,
      community,
      communityId,
      createThread,
      threads,
      basePath
    };
    return props;
  }, [
    tab,
    activities,
    collections,
    community,
    communityId,
    createThread,
    threads,
    basePath
  ]);

  return <CommunityPage {...communityPageProps} />;
};
