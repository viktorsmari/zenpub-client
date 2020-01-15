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

export enum ActivityVerb {
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
  verb: ActivityVerb;
  createdAt: string;
  actor: Actor;
  link: {
    url: string;
    external: boolean;
  };
  inReplyToContext: {
    type: ContextType;
    // context: ConcreteContext;
    context: {
      link: {
        url: string;
        external: boolean;
      };
    };
    actor: Actor | null;
  } | null;
  replies: number | null;
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

export interface ConcreteContext {
  concrete: true;
  icon: string;
  title: string;
  link: {
    url: string;
    external: boolean;
  };
}

export interface CommentContext extends BaseActivity, WithLike {
  contextType: ContextType.Comment;
  msgContent: string;
}
export interface ResourceContext
  extends BaseActivity,
    ConcreteContext,
    WithLike {
  contextType: ContextType.Resource;
}
export interface CollectionContext
  extends BaseActivity,
    ConcreteContext,
    WithLike {
  contextType: ContextType.Collection;
}
export interface CommunityContext
  extends BaseActivity,
    ConcreteContext,
    WithLike {
  contextType: ContextType.Community;
}

export interface LikeContext extends BaseActivity {
  contextType: ContextType.Like;
}
export interface FlagContext extends BaseActivity {
  contextType: ContextType.Flag;
}
export interface FollowContext extends BaseActivity {
  contextType: ContextType.Follow;
}

export type Context =
  | CommentContext
  | ResourceContext
  | CollectionContext
  | CommunityContext
  | LikeContext
  | FlagContext
  | FollowContext;
