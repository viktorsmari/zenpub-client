import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateThreadMutation } from 'fe/mutation/createThread/useCreateThread.generated';
import Maybe from 'graphql/tsutils/Maybe';

export const useCreateThreadContext = (contextId: Maybe<string>) => {
  const history = useHistory();
  const [createThreadMut, createThreadMutStatus] = useCreateThreadMutation();
  const mutating = createThreadMutStatus.loading;
  const createThread = useCallback(
    async (content: string) => {
      if (!contextId || mutating) {
        return;
      }

      return createThreadMut({
        variables: {
          contextId,
          comment: { content }
        }
      }).then(res => {
        const newThreadId = res.data?.createThread?.thread?.id;
        if (newThreadId) {
          history.push(`/thread/${newThreadId}`);
        }
      });
    },
    [contextId, mutating]
  );

  return useMemo(
    () => ({
      createThread
    }),
    [createThread]
  );
};
