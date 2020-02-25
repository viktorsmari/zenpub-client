import React, { FC } from 'react';
import {
  CommunityPageTab,
  CommunityPage
} from 'HOC/pages/community/CommunityPage';
import NotFound from 'pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface CommunityPageRouter {
  communityId: string;
  tab?: string;
}
const CommunityPageRouter: FC<RouteComponentProps<CommunityPageRouter>> = ({
  match
}) => {
  const communityId = match.params.communityId;
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'collections'
      ? CommunityPageTab.Collections
      : maybeTabStr === 'discussions'
      ? CommunityPageTab.Discussions
      : !maybeTabStr
      ? CommunityPageTab.Activities
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: CommunityPage = {
    communityId,
    tab,
    basePath: `/communities/${communityId}`
  };

  return <CommunityPage {...props} />;
};

export const CommunityPageRoute: RouteProps = {
  exact: true,
  path: '/communities/:communityId/:tab?',
  component: CommunityPageRouter
};
