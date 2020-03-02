import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  CommentProps as ThreadPreviewUIProps,
  Thread as ThreadPreviewUI
} from 'ui/modules/Previews/Thread';

export interface Props {
  threadId: Thread['id'];
}

export const ThreadPreviewHOC: FC<Props> = ({ threadId }) => {
  const { thread } = useThreadPreview(threadId);

  const threadPreviewProps = useMemo<ThreadPreviewUIProps | null>(() => {
    const fstComment = thread?.comments?.edges[0]?.node;
    if (!(thread && thread.comments && fstComment)) {
      return null;
    }

    const props: ThreadPreviewUIProps = {
      content: fstComment.content,
      createdAt: fstComment.createdAt,
      members: [],
      totalLikes: `${fstComment.likerCount || 0}`,
      totalReplies: `${thread.comments.totalCount - 1}`,
      link: `/threads/${thread.id}`
    };

    return props;
  }, [thread]);

  return threadPreviewProps && <ThreadPreviewUI {...threadPreviewProps} />;
};
