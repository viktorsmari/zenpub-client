import React, { useMemo, FC } from 'react';
import { Thread as ThreadPageUI, Props } from 'ui/pages/thread';
import { CommentPreviewHOC } from 'HOC/modules/previews/comment/CommentPreview';
import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';

export interface ThreadPage {
  threadId: Thread['id'];
}
export const ThreadPage: FC<ThreadPage> = ({ threadId }) => {
  const thread = useThreadPreview(threadId);
  const uiProps = useMemo<null | Props>(() => {
    const { context, mainComment, comments } = thread;
    if (!(mainComment && context)) {
      return null;
    }
    const actorContext = context.__typename === 'Flag' ? null : context;
    const {
      communityName,
      communityId,
      communityIcon
    } = getCommunityInfoStrings(actorContext);

    const MainThread = (
      <CommentPreviewHOC commentId={mainComment.id} mainComment={true} />
    );
    const Comments = (
      <>
        {comments.nodes.map(comment => (
          <CommentPreviewHOC commentId={comment.id} mainComment={false} />
        ))}
      </>
    );

    const props: Props = {
      Comments,
      MainThread,
      communityIcon,
      communityId,
      communityName
    };
    return props;
  }, [thread]);
  return uiProps && <ThreadPageUI {...uiProps} />;
};
