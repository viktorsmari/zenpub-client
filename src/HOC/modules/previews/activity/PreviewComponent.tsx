import * as GQL from 'graphql/types.generated';
import React, { FC } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import { ActionProps } from 'ui/modules/ActivityPreview/Actions';
import { CollectionPreviewHOC } from '../collection/CollectionPreview';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommentPreviewHOC } from '../comment/CommentPreview';
import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import { CommunityPreviewHOC } from '../community/CommunityPreview';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { FlagPreviewFragment } from '../flag/FlagPreview.generated';
import { FollowPreviewFragment } from '../follow/FollowPreview.generated';
import { LikePreviewFragment } from '../like/LikePreview.generated';
import { ResourcePreviewHOC } from '../resource/ResourcePreview';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { UserPreviewHOC } from '../user/UserPreview';
import { UserPreviewFragment } from '../user/UserPreview.generated';
import { getActivityMainContext } from './lib/getActivityMainContext';
import { getActivitySimpleLink } from './lib/getActivitySimpleLink';
import { isContextFollowed } from './lib/isActivityFollowed';
import { useActivityReplyFormik } from './lib/useActivityReplyFormik';
import { useActivityToggleLikeFormik } from './lib/useActivityToggleLikeFormik';
import { ActivityContext } from './types';

export type BaseProps = Pick<
  UI.ActivityLoaded,
  'status' | 'createdAt' | 'actor'
>;

export interface ContextActivityPreviewProps<Ctx extends ActivityContext> {
  baseProps: BaseProps;
  context: Ctx;
  verb: string | GQL.ActivityVerb;
}

export const PreviewComponent: FC<{
  context: ActivityContext;
  baseProps: BaseProps;
  verb: GQL.ActivityVerb | string;
}> = ({ baseProps, context, verb }) => {
  if (context.__typename === 'Collection') {
    const collectionActivityPreviewProps: ContextActivityPreviewProps<CollectionPreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <CollectionActivityPreview {...collectionActivityPreviewProps} />;
  } else if (context.__typename === 'Comment') {
    const commentActivityPreviewProps: ContextActivityPreviewProps<CommentPreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <CommentActivityPreview {...commentActivityPreviewProps} />;
  } else if (context.__typename === 'Community') {
    const communityActivityPreviewProps: ContextActivityPreviewProps<CommunityPreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <CommunityActivityPreview {...communityActivityPreviewProps} />;
  } else if (context.__typename === 'Flag') {
    const flagActivityPreviewProps: ContextActivityPreviewProps<FlagPreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <FlagActivityPreview {...flagActivityPreviewProps} />;
  } else if (context.__typename === 'Follow') {
    const followActivityPreviewProps: ContextActivityPreviewProps<FollowPreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <FollowActivityPreview {...followActivityPreviewProps} />;
  } else if (context.__typename === 'Like') {
    const likeActivityPreviewProps: ContextActivityPreviewProps<LikePreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <LikeActivityPreview {...likeActivityPreviewProps} />;
  } else if (context.__typename === 'Resource') {
    const resourceActivityPreviewProps: ContextActivityPreviewProps<ResourcePreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <ResourceActivityPreview {...resourceActivityPreviewProps} />;
  } else if (context.__typename === 'User') {
    const userActivityPreviewProps: ContextActivityPreviewProps<UserPreviewFragment> = {
      baseProps,
      context,
      verb
    };

    return <UserActivityPreview {...userActivityPreviewProps} />;
  } else {
    return null; // never
  }
};

export const getConcreteEvent = (verb: GQL.ActivityVerb | string) =>
  verb === GQL.ActivityVerb.Created
    ? `Created`
    : verb === GQL.ActivityVerb.Updated
    ? `Updated`
    : verb;

export const CollectionActivityPreview: FC<ContextActivityPreviewProps<
  CollectionPreviewFragment
>> = ({ baseProps, context, verb }) => {
  const props: UI.ActivityLoaded = {
    ...baseProps,
    actions: null,
    event: getConcreteEvent(verb) + ' ' + 'Collection',
    link: getActivitySimpleLink(context),
    preview: <CollectionPreviewHOC collectionId={context.id} />
  };

  return <UI.ActivityPreview {...props} />;
};

export const CommentActivityPreview: FC<ContextActivityPreviewProps<
  CommentPreviewFragment
>> = ({ baseProps, context, verb }) => {
  const actions: ActionProps = {
    FlagModal: null /*  ({ done }) => <FlagModalHOC {... {
          done,
          contextId: context.id,
          flagged: !!context.myFlag
        }} /> */,
    like: {
      iLikeIt: !!context.myLike,
      toggleLikeFormik: useActivityToggleLikeFormik(context),
      totalLikes: context.likerCount || 0
    },
    reply: {
      replyFormik: useActivityReplyFormik(context)
    }
  };

  const props: UI.ActivityLoaded = {
    ...baseProps,
    actions: isContextFollowed(context) ? actions : null,
    event: getConcreteEvent(verb) + ' ' + 'Comment',
    link: getActivitySimpleLink(context),
    preview: <CommentPreviewHOC commentId={context.id} />
  };

  return <UI.ActivityPreview {...props} />;
};

export const CommunityActivityPreview: FC<ContextActivityPreviewProps<
  CommunityPreviewFragment
>> = ({ baseProps, context, verb }) => {
  const props: UI.ActivityLoaded = {
    ...baseProps,
    actions: null,
    event: getConcreteEvent(verb) + ' ' + 'Community',
    link: getActivitySimpleLink(context),
    preview: <CommunityPreviewHOC communityId={context.id} />
  };

  return <UI.ActivityPreview {...props} />;
};

export const ResourceActivityPreview: FC<ContextActivityPreviewProps<
  ResourcePreviewFragment
>> = ({ baseProps, context, verb }) => {
  const actions: ActionProps = {
    FlagModal: null,
    like: {
      iLikeIt: !!context.myLike,
      toggleLikeFormik: useActivityToggleLikeFormik(context),
      totalLikes: context.likes?.totalCount || 0
    },
    reply: null
  };

  const props: UI.ActivityLoaded = {
    ...baseProps,
    actions: isContextFollowed(context) ? actions : null,
    event: getConcreteEvent(verb) + ' ' + 'Resource',
    link: getActivitySimpleLink(context),
    preview: <ResourcePreviewHOC resourceId={context.id} />
  };

  return <UI.ActivityPreview {...props} />;
};

export const UserActivityPreview: FC<ContextActivityPreviewProps<
  UserPreviewFragment
>> = ({ baseProps, context, verb }) => {
  const props: UI.ActivityLoaded = {
    ...baseProps,
    actions: null,
    event: getConcreteEvent(verb) + ' ' + 'User',
    link: getActivitySimpleLink(context),
    preview: <UserPreviewHOC userId={context.userId} />
  };

  return <UI.ActivityPreview {...props} />;
};

export const FlagActivityPreview: FC<ContextActivityPreviewProps<
  FlagPreviewFragment
>> = ({ baseProps, context, verb }) => {
  const mainContext = getActivityMainContext(context);
  if (!mainContext) {
    return null;
  }
  const previewVerb = `Flagged`;
  return (
    <PreviewComponent
      baseProps={baseProps}
      context={mainContext}
      verb={previewVerb}
    />
  );
};

export const FollowActivityPreview: FC<ContextActivityPreviewProps<
  FollowPreviewFragment
>> = ({ baseProps, context, verb }) => {
  const mainContext = getActivityMainContext(context);
  if (!mainContext) {
    return null;
  }
  const previewVerb = `Followed`;
  return (
    <PreviewComponent
      baseProps={baseProps}
      context={mainContext}
      verb={previewVerb}
    />
  );
};

export const LikeActivityPreview: FC<ContextActivityPreviewProps<
  LikePreviewFragment
>> = ({ baseProps, context, verb }) => {
  const mainContext = getActivityMainContext(context);
  if (!mainContext) {
    return null;
  }
  const previewVerb = `Liked`;
  return (
    <PreviewComponent
      baseProps={baseProps}
      context={mainContext}
      verb={previewVerb}
    />
  );
};
