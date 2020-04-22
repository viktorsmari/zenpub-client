import React, { FC } from 'react';
import { ActivityContextPreviewFragment } from 'fe/lib/activity/types';
import { CollectionPreviewHOC } from '../collection/CollectionPreview';
import { CommentPreviewHOC } from '../comment/CommentPreview';
import { CommunityPreviewHOC } from '../community/CommunityPreview';
import { ResourcePreviewHOC } from '../resource/ResourcePreview';
import { UserPreviewHOC } from '../user/UserPreview';
import { LikedCommentPreviewHOC } from '../commentLiked/CommentLikedPreview';
import { getActivityMainContext } from 'fe/lib/activity/getActivityMainContext';

export const PreviewComponent: FC<{
  context: ActivityContextPreviewFragment;
}> = ({ context }) => {
  if (context.__typename === 'Collection') {
    return <CollectionPreviewHOC collectionId={context.id} />;
  } else if (context.__typename === 'Comment') {
    return <CommentPreviewHOC commentId={context.id} mainComment={false} />;
  } else if (context.__typename === 'Community') {
    return <CommunityPreviewHOC communityId={context.id} />;
  } else if (context.__typename === 'Resource') {
    return <ResourcePreviewHOC resourceId={context.id} />;
  } else if (context.__typename === 'User') {
    return <UserPreviewHOC userId={context.userId} />;
  } else {
    if (
      context.__typename === 'Like' &&
      context.context?.__typename === 'Comment'
    ) {
      return <LikedCommentPreviewHOC commentId={context.context.id} />;
    } else {
      const mainContext = getActivityMainContext(context);
      return mainContext ? <PreviewComponent context={mainContext} /> : null;
    }
  }
};
