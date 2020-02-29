import Maybe from 'graphql/tsutils/Maybe';
import { ActivityPreviewFragment } from 'HOC/modules/previews/activity/ActivityPreview.generated';
import { ActorPreviewFragment } from 'fe/lib/activity/types';

export const getActivityMainContext = (
  context: Maybe<ActivityPreviewFragment['context']>
): Maybe<ActorPreviewFragment> => {
  if (!context) {
    return null;
  }
  if (
    context.__typename === 'Flag' ||
    context.__typename === 'Follow' ||
    context.__typename === 'Like'
  ) {
    if (!context.context) {
      return null;
    }
    if (context.context.__typename === 'Thread') {
      return context.context.comments?.edges[0]?.node;
    }
    return getActivityMainContext(context.context);
  }
  // "Collection" | "Comment" | "Community" | "Resource" | "User"
  return context;
};
