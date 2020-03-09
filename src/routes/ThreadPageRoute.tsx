import React, { FC } from 'react';
import { ThreadPage } from 'HOC/pages/thread/ThreadPage';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface ThreadPageRouter {
  threadId: string;
}
const ThreadPageRouter: FC<RouteComponentProps<ThreadPageRouter>> = ({
  match
}) => {
  const threadId = match.params.threadId;

  const props: ThreadPage = {
    threadId
  };

  return <ThreadPage {...props} />;
};

export const ThreadPageRoute: RouteProps = {
  exact: true,
  path: '/thread/:threadId',
  component: ThreadPageRouter
};
