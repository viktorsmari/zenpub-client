import { ActivityPreviewFragment } from 'HOC/modules/previews/activity/ActivityPreview.generated';
import { ActivityVerb } from 'graphql/types.generated';
import { getActivityMainContext } from './getActivityMainContext';
import Maybe from 'graphql/tsutils/Maybe';

export const getEventString = (activity: Maybe<ActivityPreviewFragment>) => {
  return activity
    ? getEventStringByContext(activity.context, activity.verb)
    : '';
};
export const getEventStringByContext = (
  context: ActivityPreviewFragment['context'],
  verb: ActivityVerb
) => {
  if (!context) {
    return '';
  }
  const mainContext = getActivityMainContext(context);
  if (!mainContext) {
    return '';
  }
  const { __typename } = mainContext;
  const event =
    context.__typename === 'Flag'
      ? `Flagged ${__typename}`
      : context.__typename === 'Like'
      ? `Liked ${__typename}`
      : context.__typename === 'Follow'
      ? `Followed ${__typename}`
      : context.__typename === 'Comment'
      ? context.inReplyTo
        ? `Replied to a thread`
        : `Started a thread`
      : verb === ActivityVerb.Created
      ? `Created ${__typename}`
      : `Updated ${__typename}`; //verb === ActivityVerb.Updated

  return event;
};
