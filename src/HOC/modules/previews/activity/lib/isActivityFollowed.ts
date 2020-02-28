import { GQLConcreteContext } from '../types';

export const isContextFollowed = (context: GQLConcreteContext): boolean => {
  if (context.__typename === 'Community') {
    return !!context.myFollow;
  } else if (context.__typename === 'Collection') {
    return !!context.community?.myFollow;
  } else if (context.__typename === 'Resource') {
    return !!context.collection?.community?.myFollow;
  } else if (context.__typename === 'User') {
    return !!context.myFollow;
  } else if (context.__typename === 'Comment') {
    return !!(
      (
        context.thread &&
        context.thread.context &&
        (context.thread.context.__typename === 'Flag'
          ? false
          : context.thread.context.__typename === 'Resource'
          ? !!context.thread.context.collection?.community?.myFollow
          : context.thread.context.__typename === 'Collection'
          ? !!context.thread.context.community?.myFollow
          : context.thread.context.__typename === 'Community'
          ? !!context.thread.context.myFollow
          : false)
      ) // context.thread.context:never
    );
  }
  return false;
};
