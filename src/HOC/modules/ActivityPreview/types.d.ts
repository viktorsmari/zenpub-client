import * as APGQL from './getActivityPreview.generated';

export type MaybeActivityPreviewData =
  | APGQL.ActivityPreviewDataFragment
  | null
  | undefined;

export type GQLConcreteContext =
  | APGQL.ActivityPreviewCommentCtxExtendedFragment
  | APGQL.ActivityPreviewResourceCtxFragment
  | APGQL.ActivityPreviewCollectionCtxFragment
  | APGQL.ActivityPreviewCommunityCtxFragment
  | APGQL.ActivityPreviewUserCtxFragment;
