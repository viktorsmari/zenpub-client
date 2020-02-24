import { RouteProps, RouteComponentProps } from 'react-router-dom';
import React, { FC } from 'react';
import { CommunityPage } from 'HOC/pages/community/CommunityPage';
import { useCommunity } from 'fe/community/useCommunity';
import { useCommunityThreads } from 'fe/threads/community/useCommunityThreads';
import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityPageActivities';

interface CommunityPageRouteController
  extends RouteComponentProps<{ communityId: string }> {}
const CommunityPageRouteController: FC<CommunityPageRouteController> = ({
  match
}) => {
  const communityId = match.params.communityId;
  const { community, createThread } = useCommunity(communityId);
  const { threads } = useCommunityThreads(communityId);
  const { collections } = useCommunityCollections(communityId);
  const { activities } = useCommunityOutboxActivities(communityId);

  const props: CommunityPage = {
    activities,
    collections,
    community,
    communityId,
    createThread,
    threads
  };
  return <CommunityPage {...props} />;
};

export const CommunityPageRoute: RouteProps = {
  exact: true,
  path: '/communities/:communityId/:tab?',
  component: CommunityPageRouteController
};
