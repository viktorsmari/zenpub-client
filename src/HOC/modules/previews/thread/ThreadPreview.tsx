import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import { CommentPreviewHOC } from '../comment/CommentPreview';

export interface Props {
  threadId: Thread['id'];
}

export const ThreadPreviewHOC: FC<Props> = ({ threadId }) => {
  const { thread } = useThreadPreview(threadId);

  const threadPreviewProps = useMemo<CommentPreviewHOC | null>(() => {
    const commentId = thread?.comments?.edges[0]?.node.id;
    if (!commentId) {
      return null;
    }

    const props: CommentPreviewHOC = {
      commentId
    };

    return props;
  }, [thread]);

  return threadPreviewProps && <CommentPreviewHOC {...threadPreviewProps} />;
};
