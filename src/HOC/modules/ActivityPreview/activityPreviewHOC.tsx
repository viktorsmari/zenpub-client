import React, { useMemo } from 'react';
import * as GQL from './getActivityPreview.generated';
import { ActivityVerb, Activity } from 'graphql/types.generated';
import * as UI from 'ui/modules/ActivityPreview';
import { SFC } from 'react';
import { ContextType } from 'ui/modules/ActivityPreview/preview';
import { useFormik } from 'formik';
import { FormikHook } from 'common/types';

export interface Props {
  activityId: Activity['id'];
}
export const ActivityPreviewHOC: SFC<Props> = ({ activityId }) => {
  const activityQ = GQL.useGetActivityPreviewQuery({
    variables: { activityId }
  });
  const [likeMut, likeMutStatus] = GQL.useActivityPreviewLikeMutation();
  const [unlikeMut, unlikeMutStatus] = GQL.useActivityPreviewUnlikeMutation();
  const [
    createThreadMut,
    createThreadMutStatus
  ] = GQL.useActivityPreviewCreateThreadMutation();
  const [
    createReplyMut,
    createReplyMutStatus
  ] = GQL.useActivityPreviewCreateReplyMutation();

  const props = useMemo<UI.Props>(
    () => {
      const activity = activityQ.data && activityQ.data.activity;
      const replyFormik = useFormik<{ replyMessage: string }>({
        initialValues: { replyMessage: '' },
        onSubmit: ({ replyMessage }) => {
          if (
            !activity ||
            createReplyMutStatus.loading ||
            createThreadMutStatus.loading
          ) {
            return;
          } else if (activity.context.__typename === 'Comment') {
            const { thread, id } = activity.context;
            return createReplyMut({
              variables: {
                threadId: thread.id,
                inReplyToId: id,
                comment: { content: replyMessage }
              }
            });
          } else {
            return createThreadMut({
              variables: {
                contextId: activity.id,
                comment: { content: replyMessage }
              }
            });
          }
        }
      });
      const toggleLikeFormik = useFormik<{}>({
        initialValues: {},
        onSubmit: () => {
          if (
            !activity ||
            'Like' === activity.context.__typename ||
            'Flag' === activity.context.__typename ||
            'Follow' === activity.context.__typename ||
            likeMutStatus.loading ||
            unlikeMutStatus.loading
          ) {
            return;
          } else {
            const { myLike } = activity.context;
            if (myLike) {
              return unlikeMut({ variables: { contextId: myLike.id } });
            } else {
              return likeMut({ variables: { contextId: activity.id } });
            }
          }
        }
      });
      if (!activity) {
        return {
          activity: {
            status: UI.Status.Loading
          }
        };
      } else {
        let context: UI.Context;
        switch (activity.context.__typename) {
          case 'Comment': {
            context = CommentCtxBuilder(activity.context);
            break;
          }
          case 'Resource': {
            context = ResourceCtxBuilder(activity.context);
            break;
          }
          case 'Collection': {
            context = CollectionCtxBuilder(activity.context);
            break;
          }
          case 'Community': {
            context = CommunityCtxBuilder(activity.context);
            break;
          }
          case 'Like': {
            context = LikeCtxBuilder(activity.context);
            break;
          }
          case 'Follow': {
            context = FollowCtxBuilder(activity.context);
            break;
          }
          case 'Flag': {
            context = FlagCtxBuilder(activity.context);
            break;
          }
        }
        return {
          activity: {
            ...BaseCtxBuilder(activity, replyFormik),
            context
          }
        };
      }
    },
    [activityQ]
  );
  return <UI.ActivityPreview {...props} />;
};

type ConcreteContext =
  | GQL.ActivityPreviewCommentCtxExtendedFragment
  | GQL.ActivityPreviewResourceCtxFragment
  | GQL.ActivityPreviewCollectionCtxFragment
  | GQL.ActivityPreviewCommunityCtxFragment;

type SimpleContext =
  | GQL.ActivityPreviewLikeCtxFragment
  | GQL.ActivityPreviewFollowCtxFragment
  | GQL.ActivityPreviewFlagCtxFragment;
const isSimpleContext = (
  context: NoMaybeActivity['context']
): context is SimpleContext =>
  context.__typename === 'Flag' ||
  context.__typename === 'Like' ||
  context.__typename === 'Follow';

type NoMaybeActivity = Exclude<GQL.GetActivityPreviewQuery['activity'], null>;
const getActualContext = (activity: NoMaybeActivity) => {
  if (isSimpleContext(activity.context)) {
    return activity.context.context;
  } else {
    return activity.context;
  }
};
const BaseCtxBuilder = (
  activity: NoMaybeActivity,
  replyFormik: UI.BaseActivity['replyFormik']
): UI.BaseActivity => {
  const { user, createdAt, verb, context } = activity;
  return {
    actor: getActor(user),
    status: UI.Status.Loaded,
    contextType: ContextType[context.__typename],
    createdAt,
    inReplyToContext: inReplyToContext(activity),
    replies: 0,
    verb,
    replyFormik
  };
};
const inReplyToContext = (
  activity: NoMaybeActivity
): UI.BaseActivity['inReplyToContext'] => {
  let inReplyContextCtx: ConcreteContext | GQL.ActivityPreviewBaseUserFragment;
  if (
    !isSimpleContext(activity.context) &&
    activity.context.__typename !== 'Comment'
  ) {
    return null;
  } else if (activity.context.__typename === 'Comment') {
    if (!activity.context.inReplyTo) {
      return null;
    } else {
      inReplyContextCtx = activity.context.inReplyTo;
    }
  } else {
    inReplyContextCtx = activity.context.context;
  }

  const actor =
    inReplyContextCtx && 'creator' in inReplyContextCtx
      ? getActor(inReplyContextCtx.creator)
      : null;
  return {
    actor,
    context: inReplyContextCtx,
    type: getContextType('Collection')
  };
  //context.__typename
};
const getContextType = (
  type: NoMaybeActivity['context']['__typename']
): ContextType => {
  switch (type) {
    case 'Comment':
      return ContextType.Comment;
    case 'Resource':
      return ContextType.Resource;
    case 'Collection':
      return ContextType.Collection;
    case 'Community':
      return ContextType.Community;
    case 'Like':
      return ContextType.Like;
    case 'Follow':
      return ContextType.Follow;
    case 'Flag':
      return ContextType.Flag;
  }
};
const getActor = (usr: GQL.ActivityPreviewBaseUserFragment): UI.Actor => {
  return {
    icon: usr.icon || usr.image || '',
    name: usr.name || '',
    preferredUsername: usr.preferredUsername,
    link: usr.isLocal
      ? {
          external: false,
          url: `/user/${usr.id}`
        }
      : {
          external: true,
          url: usr.canonicalUrl || ''
        }
  };
};

const withLike = (
  toggleLikeFormik: FormikHook<{}>,
  ctx: ConcreteContext
): UI.WithLike => {
  const totalLikes = ctx.__typename === 'Community' ? 0 : ctx.likes.totalCount;
  return {
    iLikeIt: !!ctx.myLike,
    totalLikes,
    toggleLikeFormik
  };
};

type ConcreteType<T> = Omit<
  T,
  Exclude<keyof (UI.BaseActivity & UI.WithLike), 'contextType'>
>;
const CommentCtxBuilder = (
  context: GQL.ActivityPreviewCommentCtxFragment
): ConcreteType<UI.CommentContext> => {
  return {
    contextType: ContextType.Comment,
    msgContent: context.content
  };
};
const ResourceCtxBuilder = (
  context: GQL.ActivityPreviewResourceCtxFragment
): ConcreteType<UI.ResourceContext> => {};
const CollectionCtxBuilder = (
  context: GQL.ActivityPreviewCollectionCtxFragment
): ConcreteType<UI.CollectionContext> => {};
const CommunityCtxBuilder = (
  context: GQL.ActivityPreviewCommunityCtxFragment
): ConcreteType<UI.CommunityContext> => {};

type SimpleType<T> = Omit<T, Exclude<keyof UI.BaseActivity, 'contextType'>>;
const LikeCtxBuilder = (
  context: GQL.ActivityPreviewLikeCtxFragment
): SimpleType<UI.LikeContext> => {
  return {
    contextType: ContextType.Like
  };
};
const FollowCtxBuilder = (
  context: GQL.ActivityPreviewFollowCtxFragment
): SimpleType<UI.FollowContext> => {
  return {
    contextType: ContextType.Follow
  };
};
const FlagCtxBuilder = (
  context: GQL.ActivityPreviewFlagCtxFragment
): SimpleType<UI.FlagContext> => {
  return {
    contextType: ContextType.Flag
  };
};
