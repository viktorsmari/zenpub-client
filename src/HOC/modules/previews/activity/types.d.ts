import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { FlagPreviewFragment } from '../flag/FlagPreview.generated';
import { FollowPreviewFragment } from '../follow/FollowPreview.generated';
import { LikePreviewFragment } from '../like/LikePreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { UserPreviewFragment } from '../user/UserPreview.generated';

export type GQLConcreteContext =
  | CommentPreviewFragment
  | ResourcePreviewFragment
  | CollectionPreviewFragment
  | CommunityPreviewFragment
  | UserPreviewFragment;

export type ActivityContext =
  | GQLConcreteContext
  | FlagPreviewFragment
  | LikePreviewFragment
  | FollowPreviewFragment;
