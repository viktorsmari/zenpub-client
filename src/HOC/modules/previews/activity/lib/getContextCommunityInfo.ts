import { GQLConcreteContext } from '../types';
import { CommunityInfoFragment } from '../../community/CommunityPreview.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { UserPreviewFragment } from '../../user/UserPreview.generated';
import { getActivitySimpleLink } from './getActivitySimpleLink';
export const getContextCommunityInfo = (
  context: Exclude<GQLConcreteContext, UserPreviewFragment>
): Maybe<CommunityInfoFragment> => {
  if (context.__typename === 'Community') {
    return context;
  } else if (context.__typename === 'Collection') {
    return context.community;
  } else if (context.__typename === 'Resource') {
    return context.collection?.community;
  } else if (context.__typename === 'Comment') {
    return (
      context.thread &&
      context.thread.context &&
      (context.thread.context.__typename === 'Flag'
        ? null
        : context.thread.context.__typename === 'Resource'
        ? context.thread.context.collection?.community
        : context.thread.context.__typename === 'Collection'
        ? context.thread.context.community
        : context.thread.context.__typename === 'Community'
        ? context.thread.context
        : null) // context.thread.context:never
    );
  }
  return null;
};
export const getCommunityInfoStrings = (context: GQLConcreteContext) => {
  let communityLink = '';
  let communityName = '';
  if (context.__typename !== 'User') {
    const communityInfo = getContextCommunityInfo(context);
    if (communityInfo) {
      communityLink = getActivitySimpleLink(communityInfo);
      communityName = communityInfo.name;
    }
  }
  return {
    communityLink,
    communityName
  };
};
