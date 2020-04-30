import { CommunityOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/community/useCommunityOutboxActivities.generated';
import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Comment, Community, Thread } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useCallback, useMemo } from 'react';
import * as GQL from './useReplyComment.generated';
import {
  ThreadCommentsQuery,
  ThreadCommentsQueryVariables,
  ThreadCommentsDocument
} from '../thread/useThreadComments.generated';
import { mnCtx } from 'fe/lib/graphql/ctx';
import { MyInboxActivitiesQueryRefetch } from 'fe/activities/inbox/my/useMyInboxActivities.generated';
export const useReplyComment = (
  comment: Maybe<{
    id: Comment['id'];
    thread: Maybe<{ id: Thread['id'] }>;
  }>,
  communityId: Maybe<Community['id']>,
  to: Maybe<string>
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
        context: mnCtx<GQL.ReplyMutation>({
          successMsg: () => `Sent reply ${to ? `@${to} ` : ''} correctly`
        }),
        refetchQueries: [
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          MyInboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          ...(communityId
            ? [
                CommunityOutboxActivitiesQueryRefetch({
                  communityId,
                  limit: DEFAULT_PAGE_SIZE
                })
              ]
            : [])
        ],
        update: (proxy, result) => {
          const comment = result.data?.createReply;
          if (!comment) {
            return;
          }
          try {
            const threadCommentsQueryRes = proxy.readQuery<
              ThreadCommentsQuery,
              ThreadCommentsQueryVariables
            >({
              query: ThreadCommentsDocument,
              variables: { threadId, limit: DEFAULT_PAGE_SIZE }
            });
            if (
              !threadCommentsQueryRes?.thread?.comments ||
              threadCommentsQueryRes.thread.comments.pageInfo.hasNextPage
            ) {
              return;
            }
            const edges = [
              ...threadCommentsQueryRes.thread.comments.edges,
              comment
            ];

            const data: ThreadCommentsQuery = {
              ...threadCommentsQueryRes,
              thread: {
                ...threadCommentsQueryRes.thread,
                comments: {
                  ...threadCommentsQueryRes.thread.comments,
                  edges
                }
              }
            };
            proxy.writeQuery<ThreadCommentsQuery, ThreadCommentsQueryVariables>(
              {
                data,
                query: ThreadCommentsDocument,
                variables: { threadId, limit: DEFAULT_PAGE_SIZE }
              }
            );
          } catch (err) {}
        }
      });
    },
    [mutating, communityId, to]
  );

  return useMemo(
    () => ({
      reply
    }),
    [reply]
  );
};
