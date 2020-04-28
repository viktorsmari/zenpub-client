import { useCallback, useMemo } from 'react';
import { useCreateThreadMutation } from 'fe/mutation/createThread/useCreateThread.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { CommunityThreadsQueryRefetch } from 'fe/thread/community/useCommunityThreads.generated';
import { Community } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export type ContextTypes = Community;
export type Context = Pick<ContextTypes, '__typename' | 'id'>;

export const useCreateThreadContext = (
  contextId: Maybe<Context['id']>,
  __typename: Maybe<Context['__typename']>
) => {
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
        },
        refetchQueries:
          __typename === 'Community'
            ? [
                CommunityThreadsQueryRefetch({
                  communityId: contextId,
                  limit: DEFAULT_PAGE_SIZE
                })
              ]
            : undefined
      }).then(res => res.data?.createThread?.thread?.id);
    },
    [contextId, __typename, mutating]
  );

  return useMemo(
    () => ({
      createThread
    }),
    [createThread]
  );
};
