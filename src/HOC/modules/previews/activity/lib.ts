import { ActivityPreviewFragment } from './ActivityPreview.generated';
import { ActivityVerb } from 'graphql/types.generated';
import { GQLConcreteContext } from './types';
import Maybe from 'graphql/tsutils/Maybe';

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

export const getActivityEvent = (activity: ActivityPreviewFragment) => {
  const { context } = activity;
  if (!context) {
    return null;
  }
  let verb: string | null = null;
  let typename: string | null = null;
  if (
    context.__typename === 'Flag' ||
    context.__typename === 'Follow' ||
    context.__typename === 'Like'
  ) {
    if (!context.context) {
      return null;
    }
    typename = context.context.__typename;
    verb =
      context.__typename === 'Flag'
        ? `Flagged`
        : context.__typename === 'Follow'
        ? `Flagged`
        : context.__typename === 'Like'
        ? `Liked`
        : null; /// never
  } else {
    verb =
      activity.verb === ActivityVerb.Created
        ? 'Created'
        : activity.verb === ActivityVerb.Updated
        ? 'Updated'
        : null; // never
    typename = context.__typename;
  }
  return typename && verb && `${verb} ${typename}`;
};
