import {
  ActivityPreviewContext,
  ActivityPreviewContextData
} from 'ui/modules/ActivityPreview';
import {
  GetActivityPreviewQuery,
  useGetActivityPreviewQuery
} from './getActivityPreview.generated';
import { ActivityVerb } from 'graphql/types.generated';

export const useActivityPreviewContext: ActivityPreviewContext = ({
  activityId
}) => {
  const activityQ = useGetActivityPreviewQuery({ variables: { activityId } });
  const activity = activityQ.data && activityQ.data.activity;

  return {
    activity: activity
      ? {
          ...actor(activity),
          ...typeVerbContextComment(activity),
          createdAt: activity.createdAt
        }
      : null
  };
};

type _ActivityD = Exclude<
  ActivityPreviewContextData['activity'],
  null | undefined
>;
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
      throw `unknown activity.verb :${activity.verb}`;
    }
    return {
      type: context.__typename,
      verb,
      ...contextComment(context)
    };
  } else {
    throw '';
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
