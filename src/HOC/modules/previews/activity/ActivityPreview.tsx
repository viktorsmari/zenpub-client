import { useActivityPreview } from 'fe/activities/preview/useActivityPreview';
import * as GQL from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import { CollectionPreviewHOC } from '../collection/CollectionPreview';
import { CommentPreviewHOC } from '../comment/CommentPreview';
import { CommunityPreviewHOC } from '../community/CommunityPreview';
import { ActivityPreviewFragment } from './ActivityPreview.generated';
import { getActivityActor } from './lib/getActivityActor';
import { getActivityMainContext } from './lib/getActivityMainContext';
import { getActivitySimpleLink } from './lib/getActivitySimpleLink';
import { getCommunityInfoStrings } from './lib/getContextCommunityInfo';
import { ActivityContext } from './types';
import { ResourcePreviewHOC } from '../resource/ResourcePreview';
import { UserPreviewHOC } from '../user/UserPreview';

export interface Props {
  activityId: GQL.Activity['id'];
}
export const ActivityPreviewHOC: FC<Props> = ({ activityId }) => {
  const { activity } = useActivityPreview(activityId);
  const props = useMemo<null | UI.Props>(() => {
    if (!activity) {
      return { status: UI.Status.Loading };
    } else {
      const mainContext = getActivityMainContext(activity.context);
      if (!(activity.user && activity.context && mainContext)) {
        console.error('ActivityPreviewHOC: user or context :null', activity);
        return null;
      }

      const event = getEventString(activity) || '';
      const link = getActivitySimpleLink(mainContext);
      const communityInfoStrings = getCommunityInfoStrings(mainContext);

      const props: UI.Props = {
        status: UI.Status.Loaded,
        createdAt: activity.createdAt,
        actor: getActivityActor(activity.user),
        event,
        link,
        ...communityInfoStrings,
        preview: <PreviewComponent context={mainContext} />
      };
      return props;
    }
  }, [activity]);
  return props && <UI.ActivityPreview {...props} />;
};

export const PreviewComponent: FC<{
  context: ActivityContext;
}> = ({ context }) => {
  if (context.__typename === 'Collection') {
    return <CollectionPreviewHOC collectionId={context.id} />;
  } else if (context.__typename === 'Comment') {
    return <CommentPreviewHOC commentId={context.id} />;
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

export const getEventString = (activity: ActivityPreviewFragment) => {
  if (!activity.context) {
    return null;
  }
  const verb =
    activity.context.__typename === 'Flag'
      ? 'Flagged'
      : activity.context.__typename === 'Like'
      ? 'Liked'
      : activity.context.__typename === 'Follow'
      ? 'Followed'
      : activity.verb === GQL.ActivityVerb.Created
      ? `Created`
      : `Updated`; //activity.verb === GQL.ActivityVerb.Updated

  const mainContext = getActivityMainContext(activity.context);
  return mainContext && `${verb} ${mainContext.__typename}`;
};
