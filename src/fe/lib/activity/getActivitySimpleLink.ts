import { CollectionPreviewFragment } from 'HOC/modules/previews/collection/CollectionPreview.generated';
import { CommentPreviewFragment } from 'HOC/modules/previews/comment/CommentPreview.generated';
import { CommunityPreviewFragment } from 'HOC/modules/previews/community/CommunityPreview.generated';
import { ResourcePreviewFragment } from 'HOC/modules/previews/resource/ResourcePreview.generated';
import { UserPreviewFragment } from 'HOC/modules/previews/user/UserPreview.generated';
import Maybe from 'graphql/tsutils/Maybe';

export const linkPathMap = {
  User: 'user',
  Community: 'communities',
  Thread: 'thread',
  Collection: 'collections'
};

type LinkCtx =
  | Pick<UserPreviewFragment, '__typename' | 'userId'>
  | Pick<CommentPreviewFragment, '__typename' | 'thread'>
  | Pick<ResourcePreviewFragment, '__typename' | 'payload'>
  | Pick<
      CollectionPreviewFragment | CommunityPreviewFragment,
      '__typename' | 'id'
    >;

export const getActivitySimpleLink = (ctx: Maybe<LinkCtx>) => {
  if (!ctx) {
    return '';
  } else if (ctx.__typename === 'Comment') {
    return `/${linkPathMap.Thread}/${ctx.thread?.id}`;
  } else if (ctx.__typename === 'Resource') {
    return ctx.payload?.url || '';
  } else if (ctx.__typename === 'User') {
    return `/${linkPathMap.User}/${ctx.userId}`;
  } else {
    const { __typename, id } = ctx;
    return `/${linkPathMap[__typename]}/${id}`;
  }
};
