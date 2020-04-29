import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Comment, Thread } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useCallback, useMemo } from 'react';
import * as GQL from './useReplyComment.generated';

export const useReplyComment = (
  comment: Maybe<{
    id: Comment['id'];
    thread: Maybe<{ id: Thread['id'] }>;
  }>
) => {
  const [createReplyMut, status] = GQL.useReplyMutation();

  const mutating = status.loading;

  const reply = useCallback(
    async (content: string) => {
      if (mutating || !comment || !comment.thread) {
        return;
      }
      return createReplyMut({
        variables: {
          threadId: comment.thread.id,
          inReplyToCommentId: comment.id,
          comment: { content }
        },
        refetchQueries: [
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE })
        ]
      });
    },
    [mutating]
  );

  return useMemo(
    () => ({
      reply
    }),
    [reply]
  );
};
