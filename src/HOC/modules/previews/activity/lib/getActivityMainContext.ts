import Maybe from 'graphql/tsutils/Maybe';
import { ActivityPreviewFragment } from '../ActivityPreview.generated';
import { GQLConcreteContext } from '../types';

export const getActivityMainContext = (
  context: ActivityPreviewFragment['context']
): Maybe<GQLConcreteContext> => {
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
