import { useCommentPreview } from 'fe/comment/preview/useCommentPreview';
import { Comment } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import { Text } from 'rebass/styled-components';
// import { Comment as CommentPreviewUI, Props as CommentPreviewProps } from 'ui/modules/Previews/Comment';

interface CommentPreviewProps {
  content: string;
}

export interface Props {
  commentId: Comment['id'];
}

export const CommentPreviewHOC: FC<Props> = ({ commentId }) => {
  const { comment } = useCommentPreview(commentId);
  const commentPreviewProps = useMemo<CommentPreviewProps | null>(() => {
    if (!comment) {
      return null;
    }

    const { content } = comment;

    const props: CommentPreviewProps = {
      content
    };
    return props;
  }, [comment]);

  return (
    // commentPreviewProps && <CommentPreviewUI {...commentPreviewProps} />
    commentPreviewProps && (
      <>
        <Text p={2} variant="text">
          {commentPreviewProps.content}
        </Text>
      </>
    )
  );
};
