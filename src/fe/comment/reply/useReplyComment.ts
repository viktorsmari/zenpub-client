import { CommunityOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/community/useCommunityOutboxActivities.generated';
import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Comment, Community, Thread } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useCallback, useMemo } from 'react';
import * as GQL from './useReplyComment.generated';

export const useReplyComment = (
  comment: Maybe<{
    id: Comment['id'];
    thread: Maybe<{ id: Thread['id'] }>;
  }>,
  communityId: Maybe<Community['id']>
) => {
  const [createReplyMut, status] = GQL.useReplyMutation();

  const mutating = status.loading;

  const reply = useCallback(
    async (content: string) => {
      if (mutating || !comment || !comment.thread) {
        return;
      }
      const threadId = comment.thread.id;
      return createReplyMut({
        variables: {
          threadId,
          inReplyToCommentId: comment.id,
          comment: { content }
        },
        refetchQueries: [
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          ...(communityId
            ? [
                CommunityOutboxActivitiesQueryRefetch({
                  communityId,
                  limit: DEFAULT_PAGE_SIZE
                })
              ]
            : [])
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
