import React from 'react';
import {
  GetActivityPreviewQuery,
  useGetActivityPreviewQuery
} from './getActivityPreview.generated';
import { ActivityVerb, Activity } from 'graphql/types.generated';
import {
  ActivityPreview,
  Props as ActivityPreviewProps
} from 'ui/modules/ActivityPreview';
import { SFC } from 'react';

export interface Props {
  activityId: Activity['id'];
}
export const ActivityPreviewHOC: SFC<Props> = ({ activityId }) => {
  const activityQ = useGetActivityPreviewQuery({ variables: { activityId } });
  const activity = activityQ.data && activityQ.data.activity;

  const props: ActivityPreviewProps = {
    activity: activity
      ? {
          ...actor(activity),
          ...typeVerbContextComment(activity),
          createdAt: activity.createdAt
        }
      : null
  };
  return <ActivityPreview {...props} />;
};

type _ActivityD = Exclude<ActivityPreviewProps['activity'], null | undefined>;
type _ActivityQ = Exclude<
  GetActivityPreviewQuery['activity'],
  null | undefined
>;
const actor = (activity: _ActivityQ): Pick<_ActivityD, 'actor'> => {
  const user = activity.user;
  return {
    actor: {
      ...user,
      icon: user.icon || user.image || '',
      name: user.name || ''
    }
  };
};
const typeVerbContextComment = (
  activity: _ActivityQ
): Pick<_ActivityD, 'type' | 'verb' | 'context' | 'comment'> => {
  const { context } = activity;
  if (
    context.__typename === 'Collection' ||
    context.__typename === 'Comment' ||
    context.__typename === 'Community' ||
    context.__typename === 'Resource'
  ) {
    const verb =
      context.__typename === 'Comment' && context.inReplyTo
        ? 'InReplyTo'
        : activity.verb === ActivityVerb.Created
          ? 'Created'
          : activity.verb === ActivityVerb.Updated
            ? 'Updated'
            : null;
    if (!verb) {
      return err(`unknown activity.verb :${activity.verb}`);
    }
    return {
      type: context.__typename,
      verb,
      ...contextComment(context)
    };
  } else {
    return err(`unhandled context.__typename :${context.__typename}`);
  }
};
const contextComment = (
  context: _ActivityQ['context']
): Pick<_ActivityD, 'context' | 'comment'> => {
  if (
    context.__typename === 'Collection' ||
    context.__typename === 'Community' ||
    context.__typename === 'Resource'
  ) {
    return {
      comment: '',
      context: {
        actor: {
          id: context.creator.id,
          name: context.creator.name || ''
        },
        icon: context.icon || '',
        summary: context.summary || '',
        title: context.name,
        url: context.canonicalUrl || ''
      }
    };
  } else if (context.__typename === 'Comment') {
    if (context.inReplyTo) {
      return {
        comment: context.content,
        context: {
          actor: {
            id: context.inReplyTo.creator.id,
            name: context.inReplyTo.creator.name || ''
          },
          icon: '',
          summary: '',
          title: '',
          url: context.canonicalUrl || ''
        }
      };
    } else {
      return {
        comment: context.content,
        context: {
          actor: {
            id: context.creator.id,
            name: context.creator.name || ''
          },
          icon: '',
          summary: '',
          title: '',
          url: context.canonicalUrl || ''
        }
      };
    }
  } else {
    // if (!context.context.__typename || context.context.__typename === 'Thread' || context.context.__typename === 'User') {
    return {
      comment: '',
      context: {
        actor: {
          id: '',
          name: ''
        },
        icon: '',
        summary: '',
        title: '',
        url: ''
      }
    };
    // } else {

    //   const comment = context.context.__typename === 'Comment' ? context.context.content : '';
    //   const actor = 'creator' in context.context ? {
    //     id: context.context.creator.id,
    //     name: context.context.creator.name || ''
    //   } : {
    //       id: '',
    //       name: ''
    //     };
    //   const url = 'canonicalUrl' in context.context ? context.context.canonicalUrl || '' : ''
    //   return {
    //     comment,
    //     context: {

    //       actor,
    //       icon: '',
    //       summary: '',
    //       title: '',
    //       url
    //     }
    //   }
    // }
  }
};

const err = (_: any) => {
  alert(_);
  throw new Error(`${_}`);
};
