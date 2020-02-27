import { useActivityPreview } from 'fe/activities/preview/useActivityPreview';
import * as GQL from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import { CollectionPreviewHOC } from '../collection/CollectionPreview';
import { CommentPreviewHOC } from '../comment/CommentPreview';
import { CommunityPreviewHOC } from '../community/CommunityPreview';
import { ResourcePreviewHOC } from '../resource/ResourcePreview';
import { UserPreviewHOC } from '../user/UserPreview';
import { getActivityEvent, getActivityMainContext } from './lib';
import { getActivityActions } from './lib/getActivityActions';
import { getActivityActor } from './lib/getActivityActor';
import { getActivitySimpleLink } from './lib/getActivitySimpleLink';
import { useActivityReplyFormik } from './lib/useActivityReplyFormik';
import { useActivityToggleLikeFormik } from './lib/useActivityToggleLikeFormik';
import { GQLConcreteContext } from './types';

export interface Props {
  activityId: GQL.Activity['id'];
}
export const ActivityPreviewHOC: FC<Props> = ({ activityId }) => {
  const { activity } = useActivityPreview(activityId);
  const replyFormik = useActivityReplyFormik(activity);
  const toggleLikeFormik = useActivityToggleLikeFormik(activity);
  const activityPreviewProps = useMemo<null | UI.Props>(() => {
    if (!activity) {
      return {
        status: UI.Status.Loading
      };
    } else {
      if (!(activity.user && activity.context)) {
        console.error('ActivityPreviewHOC: user or context :null', activity);
        return null;
      }
      const context = getActivityMainContext(activity.context);
      const eventString = getActivityEvent(activity);

      if (!(context && eventString)) {
        console.error(
          `ActivityPreviewHOC: can't provide concreteContext or verb`,
          activity,
          context,
          eventString
        );
        return null;
      }
      const actions = getActivityActions(
        context,
        replyFormik,
        toggleLikeFormik
      );

      const PreviewElement = getActivityContextPreview(context);

      const props: UI.ActivityLoaded = {
        status: UI.Status.Loaded,
        createdAt: activity.createdAt,
        actor: getActivityActor(activity.user),
        event: eventString,
        preview: PreviewElement,
        actions,
        link: getActivitySimpleLink(context)
      };
      return props;
    }
  }, [activity, replyFormik, toggleLikeFormik]);
  return (
    activityPreviewProps && <UI.ActivityPreview {...activityPreviewProps} />
  );
};

const getActivityContextPreview = (context: GQLConcreteContext) => {
  if (context.__typename === 'Collection') {
    return <CollectionPreviewHOC collectionId={context.id} />;
  } else if (context.__typename === 'Comment') {
    return <CommentPreviewHOC commentId={context.id} />;
  } else if (context.__typename === 'Community') {
    return <CommunityPreviewHOC communityId={context.id} />;
  } else if (context.__typename === 'Resource') {
    return <ResourcePreviewHOC resourceId={context.id} />;
  } /* if(context.__typename === 'User') */ else {
    return <UserPreviewHOC userId={context.userId} />;
  }
};
