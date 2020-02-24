import React, { FC } from 'react';
import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityPageActivities';
import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { useCommunity } from 'fe/community/useCommunity';
import { useCommunityThreads } from 'fe/threads/community/useCommunityThreads';
import { Community } from 'graphql/types.generated';
import {
  CommunityPage,
  CommunityPageTab
} from 'HOC/pages/community/CommunityPage';
export { CommunityPageTab } from 'HOC/pages/community/CommunityPage';

export interface CommunityPageCtrl {
  communityId: Community['id'];
  tab: CommunityPageTab;
}
export const CommunityPageCtrl: FC<CommunityPageCtrl> = ({
  communityId,
  tab
}) => {
  const { community, createThread } = useCommunity(communityId);
  const { threads } = useCommunityThreads(communityId);
  const { collections } = useCommunityCollections(communityId);
  const { activities } = useCommunityOutboxActivities(communityId);

  const props: CommunityPage = {
    tab,
    activities,
    collections,
    community,
    communityId,
    createThread,
    threads
  };
  return <CommunityPage {...props} />;
};
