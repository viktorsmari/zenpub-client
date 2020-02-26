import { useActivityPreview } from 'fe/activities/preview/useActivityPreview';
import * as GQL from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import { CollectionPreviewHOC } from '../collection/CollectionPreview';
import { CommentPreviewHOC } from '../comment/CommentPreview';
import { CommunityPreviewHOC } from '../community/CommunityPreview';
import { ResourcePreviewHOC } from '../resource/ResourcePreview';
import { UserPreviewHOC } from '../user/UserPreview';
import { getActivityActions } from './lib/getActivityActions';
import { getActivityActor } from './lib/getActivityActor';
import { getActivityContext } from './lib/getActivityContext';
import { getActivityGqlConcreteContext } from './lib/getActivityGqlConcreteContext';
import { getActivityInReplyContext } from './lib/getActivityInReplyContext';
import { getActivityVerbType } from './lib/getActivityVerbType';
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
  const props = useMemo<UI.Props>(() => {
    if (!activity) {
      return {
        status: UI.Status.Loading
      };
    } else {
      const user = activity.user;
      const activityContext = activity.context;
      if (!(user && activityContext)) {
        console.error(
          'ActivityPreviewHOC: user or activityContext :null',
          activity
        );
        return {
          status: UI.Status.Loading
        };
      }
      const gqlContext = getActivityGqlConcreteContext(activityContext);
      const verbType = getActivityVerbType(activity);
      if (!(gqlContext && verbType)) {
        console.error(
          `ActivityPreviewHOC: can't provide concreteContext or verb`,
          activity,
          gqlContext,
          verbType
        );
        return {
          status: UI.Status.Loading
        };
      }
      const context = getActivityContext(gqlContext, verbType);
      if (!context) {
        console.error(
          `ActivityPreviewHOC: can't provide context`,
          activity,
          gqlContext,
          verbType
        );
        return {
          status: UI.Status.Loading
        };
      }
      const actions = getActivityActions(
        gqlContext,
        replyFormik,
        toggleLikeFormik
      );
      const inReplyToCtx = getActivityInReplyContext(activityContext);

      const PreviewElement = getActivityContextPreview(gqlContext);

      const props: UI.ActivityLoaded = {
        status: UI.Status.Loaded,
        createdAt: activity.createdAt,
        actor: getActivityActor(user),
        event: `${activity.verb}`,
        preview: PreviewElement,
        context,
        actions,
        inReplyToCtx
      };
      return props;
    }
  }, [activity, replyFormik, toggleLikeFormik]);
  return <UI.ActivityPreview {...props} />;
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
