import React, { useContext } from 'react';
import { BLOCK_REQUEST } from '../../apollo/client';
import { ActionContext } from '../../context/global/actionCtx';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';
import { useGetThreadQuery } from '../../graphql/generated/getThread.generated';
import { showToastMessage } from '../../redux/toastMsgs';
import Stateless from './stateless';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const threadQuery = useGetThreadQuery({ variables: { id } });
  const { dispatch } = useContext(ActionContext);
  useInterceptor({
    operation: 'undoLikeComment',
    request: () => () => threadQuery.refetch()
  });
  useInterceptor({
    operation: 'likeComment',
    request: () => () => threadQuery.refetch()
  });
  useInterceptor({
    operation: 'createReply',
    request: () => resp => {
      resp &&
        resp !== BLOCK_REQUEST &&
        dispatch(showToastMessage.create({ content: 'Reply sent!' }));
      threadQuery.refetch();
    }
  });

  return <Stateless threadQuery={threadQuery} />;
};

export default Thread;
