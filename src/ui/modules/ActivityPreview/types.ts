import { FormikHook } from 'common/types';

export enum ContextType {
  Comment,
  Resource,
  Collection,
  Community,
  Like,
  Follow,
  Flag
}

export enum ActivityPreviewVerb {
  Updated,
  Created,
  InReplyTo
}
export enum Status {
  Loading,
  Loaded
}

export interface Actor {
  icon: string;
  link: {
    url: string;
    external: boolean;
  };
  name: string;
  preferredUsername: string;
}
export interface BaseActivity {
  contextType: ContextType;
  verb: ActivityPreviewVerb;
  createdAt: string;
  actor: Actor;
  link: {
    url: string;
    external: boolean;
  };
  replyFormik: FormikHook<{ replyMessage: string }>;
}

export interface WithLike {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number | null;
  iLikeIt: boolean;
}

// interface WithFollow {
//   toggleFollowFormik: FormikHook<{}>
//   following: boolean
// }

export interface ConcreteActivityData {
  concrete: true;
  icon: string;
  title: string;
  link: {
    url: string;
    external: boolean;
  };
}

export interface CommentActivityData extends BaseActivity, WithLike {
  contextType: ContextType.Comment;
  msgContent: string;
}
export interface ResourceActivityData
  extends BaseActivity,
    ConcreteActivityData,
    WithLike {
  contextType: ContextType.Resource;
}
export interface CollectionActivityData
  extends BaseActivity,
    ConcreteActivityData,
    WithLike {
  contextType: ContextType.Collection;
}
export interface CommunityActivityData
  extends BaseActivity,
    ConcreteActivityData,
    WithLike {
  contextType: ContextType.Community;
}

export interface LikeActivityData extends BaseActivity, ConcreteActivityData {
  contextType: ContextType.Like;
}
export interface FlagActivityData extends BaseActivity, ConcreteActivityData {
  contextType: ContextType.Flag;
}
export interface FollowActivityData extends BaseActivity, ConcreteActivityData {
  contextType: ContextType.Follow;
}

export type ActivityData =
  | CommentActivityData
  | ResourceActivityData
  | CollectionActivityData
  | CommunityActivityData
  | LikeActivityData
  | FlagActivityData
  | FollowActivityData;
