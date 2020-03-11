import { ActivityPreviewFragment } from 'HOC/modules/previews/activity/ActivityPreview.generated';
import { ActivityVerb } from 'graphql/types.generated';
import { getActivityMainContext } from './getActivityMainContext';
import Maybe from 'graphql/tsutils/Maybe';

export const getEventString = (activity: Maybe<ActivityPreviewFragment>) => {
  console.log('activity %O', activity?.context);
  if (!activity?.context) {
    return '';
  }
  const verb =
    activity.context.__typename === 'Flag'
      ? 'Flagged'
      : activity.context.__typename === 'Like'
      ? 'Liked'
      : activity.context.__typename === 'Follow'
      ? 'Followed'
      : activity.verb === ActivityVerb.Created
      ? `Created`
      : `Updated`; //activity.verb === ActivityVerb.Updated

  const mainContext = getActivityMainContext(activity.context);
  return mainContext ? `${verb} ${mainContext.__typename}` : '';
};
