import { ActivityPreviewContext } from 'ui/modules/ActivityPreview';

export const useActivityPreviewContext: ActivityPreviewContext = (
  {
    /* activityId */
  }
) => {
  return {
    actor: {
      icon: 'string',
      id: 'string',
      name: 'string',
      preferredUsername: 'string'
    },
    createdAt: 'string',
    type: 'Comment',
    verb: 'Like',
    context: {
      icon: 'string',
      title: 'string',
      summary: 'string',
      url: 'string',
      actor: {
        id: 'string',
        name: 'string'
      }
    },
    comment: 'string'
  };
};
