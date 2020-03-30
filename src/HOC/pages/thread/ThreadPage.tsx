import React, { useMemo, FC } from 'react';
import { Thread as ThreadPageUI, Props } from 'ui/pages/thread';
import { CommentPreviewHOC } from 'HOC/modules/previews/comment/CommentPreview';
import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import {
  ActivityPreview,
  Status as ActivityPreviewStatus,
  ActivityLoaded as ActivityPreviewProps
} from 'ui/modules/ActivityPreview';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { useThreadComments } from 'fe/comment/thread/useThreadComments';
import { PreviewIndex } from 'HOC/modules/previews';

export interface ThreadPage {
  threadId: Thread['id'];
}
export const ThreadPage: FC<ThreadPage> = ({ threadId }) => {
  const { commentPage } = useThreadComments(threadId);
  const thread = useThreadPreview(threadId);
  const uiProps = useMemo<null | Props>(() => {
    const { context, mainComment } = thread;
    if (!(mainComment && context)) {
      return null;
    }
    const actorContext = context.__typename === 'Flag' ? null : context;

    const {
      communityName,
      communityId,
      communityIcon
    } = getCommunityInfoStrings(actorContext);

    const activityProps: Pick<
      ActivityPreviewProps,
      'status' | 'communityLink' | 'communityName' | 'link' | 'event'
    > = {
      communityLink: `/communities/${communityId}`,
      communityName,
      event: 'Created Comment',
      link: '',
      status: ActivityPreviewStatus.Loaded
    };

    const MainThread = (
      <ActivityPreview
        {...{
          ...activityProps,
          actor: mainComment.creator
            ? getActivityActor(mainComment.creator)
            : { icon: '', link: '', name: '' },
          preview: (
            <CommentPreviewHOC commentId={mainComment.id} mainComment={true} />
          ),
          createdAt: mainComment.createdAt
        }}
      />
    );

    const Comments = (
      <>
        {commentPage.edges.map(comment => (
          <ActivityPreview
            key={comment.id}
            {...{
              ...activityProps,
              actor: comment.creator
                ? getActivityActor(comment.creator)
                : { icon: '', link: '', name: '' },
              preview: (
                <CommentPreviewHOC commentId={comment.id} mainComment={false} />
              ),
              createdAt: comment.createdAt
            }}
          />
        ))}
      </>
    );
    const Context = <PreviewIndex ctx={thread.context} />;
    const props: Props = {
      Comments,
      Context,
      MainThread,
      communityIcon,
      communityId,
      communityName,
      isCommunityContext: thread.context?.__typename === 'Community'
    };

    return props;
  }, [thread]);
  return uiProps && <ThreadPageUI {...uiProps} />;
};
