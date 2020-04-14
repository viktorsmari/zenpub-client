import { useCallback, useMemo } from 'react';
import { useCreateThreadMutation } from 'fe/mutation/createThread/useCreateThread.generated';
import Maybe from 'graphql/tsutils/Maybe';

export const useCreateThreadContext = (contextId: Maybe<string>) => {
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
      }).then(res => res.data?.createThread?.thread?.id);
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
