import * as UIP from 'ui/modules/ActivityPreview/preview';
import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { UserPreviewFragment } from '../user/UserPreview.generated';

export type GQLConcreteContext =
  | CommentPreviewFragment
  | ResourcePreviewFragment
  | CollectionPreviewFragment
  | CommunityPreviewFragment
  | UserPreviewFragment;

export const verbMap = {
  Create: UIP.ContextVerb.Created,
  Update: UIP.ContextVerb.Updated,
  Flag: UIP.ContextVerb.Flag,
  Follow: UIP.ContextVerb.Follow,
  Like: UIP.ContextVerb.Like
};

export type VerbType = keyof typeof verbMap;
