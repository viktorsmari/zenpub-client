import { useActivityPreview } from 'fe/activities/preview/useActivityPreview';
import * as GQL from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { getActivityMainContext } from 'fe/lib/activity/getActivityMainContext';
import { ActivityContextPreviewFragment } from 'fe/lib/activity/types';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { CommentPreviewHOC } from 'HOC/modules/previews/comment/CommentPreview';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import { ResourcePreviewHOC } from 'HOC/modules/previews/resource/ResourcePreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';

export interface Props {
  activityId: GQL.Activity['id'];
}
export const ActivityPreviewHOC: FC<Props> = ({ activityId }) => {
  const activityBox = useActivityPreview(activityId);
  const props = useMemo<null | UI.Props>(() => {
    const {
      activity,
      communityInfoStrings,
      eventString,
      link,
      mainContext
    } = activityBox;

    if (!activity) {
      return { status: UI.Status.Loading };
    } else {
      if (!(activity.user && activity.context && mainContext)) {
        console.error('ActivityPreviewHOC: user or context :null', activity);
        return null;
      }

      const props: UI.Props = {
        status: UI.Status.Loaded,
        createdAt: activity.createdAt,
        actor: getActivityActor(activity.user),
        event: eventString,
        link,
        ...communityInfoStrings,
        preview: <PreviewComponent context={mainContext} />
      };
      return props;
    }
  }, [activityBox]);

  return props && <UI.ActivityPreview {...props} />;
};

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
    const mainContext = getActivityMainContext(context);
    return mainContext ? <PreviewComponent context={mainContext} /> : null;
  }
};
