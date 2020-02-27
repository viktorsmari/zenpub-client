import { CollectionPreviewFragment } from '../../collection/CollectionPreview.generated';
import { CommentPreviewFragment } from '../../comment/CommentPreview.generated';
import { CommunityPreviewFragment } from '../../community/CommunityPreview.generated';
import { ResourcePreviewFragment } from '../../resource/ResourcePreview.generated';
import { UserPreviewFragment } from '../../user/UserPreview.generated';

export const linkPathMap = {
  User: 'user',
  Community: 'communities',
  Thread: 'thread',
  Collection: 'collections'
};

type LinkCtx =
  | Pick<UserPreviewFragment, '__typename' | 'userId'>
  | Pick<CommentPreviewFragment, '__typename' | 'thread'>
  | Pick<ResourcePreviewFragment, '__typename' | 'url'>
  | Pick<
      CollectionPreviewFragment | CommunityPreviewFragment,
      '__typename' | 'id'
    >;

export const getActivitySimpleLink = (ctx: LinkCtx) => {
  if (ctx.__typename === 'Comment') {
    return `/${linkPathMap.Thread}/${ctx.thread?.id}`;
  } else if (ctx.__typename === 'Resource') {
    return ctx.url || '';
  } else if (ctx.__typename === 'User') {
    return `/${linkPathMap.User}/${ctx.userId}`;
  } else {
    const { __typename, id } = ctx;
    return `/${linkPathMap[__typename]}/${id}`;
  }
};
