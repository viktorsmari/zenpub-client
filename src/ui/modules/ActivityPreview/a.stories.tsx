import { storiesOf } from '@storybook/react';
import React from 'react';
import { ActivityPreview, ActivityPreviewContext } from '.';

storiesOf('Modules/Activity', module)
  .add('Resource/Community/Collection', () => {
    const activityPreviewContext: ActivityPreviewContext = () => {
      return {
        actor: {
          icon: 'https://picsum.photos/80/80',
          id: '2',
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        comment:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        context: {
          icon: 'https://picsum.photos/id/382/200/200',
          title: 'The best resource',
          summary:
            'A storybook decorator that allows you to use routing-aware components in your stories',
          url: 'https://picsum.photos/80/80',
          actor: {
            id: '2',
            name: 'Alec'
          }
        },
        createdAt: '29-01-2020',
        type: 'Resource',
        verb: 'create'
      };
    };
    return (
      <ActivityPreviewContext.Provider value={activityPreviewContext}>
        <ActivityPreview activityId={'1'} />
      </ActivityPreviewContext.Provider>
    );
  })
  .add('inReply', () => {
    const activityPreviewContext: ActivityPreviewContext = () => {
      return {
        actor: {
          icon: 'https://picsum.photos/80/80',
          id: '2',
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        comment:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        context: {
          icon: 'https://picsum.photos/id/382/200/200',
          title: 'The best resource',
          summary:
            'A storybook decorator that allows you to use routing-aware components in your stories',
          url: 'https://picsum.photos/80/80',
          actor: {
            id: '2',
            name: 'Alec'
          }
        },
        createdAt: '29-01-2020',
        type: 'InReplyTo',
        verb: 'create'
      };
    };
    return (
      <ActivityPreviewContext.Provider value={activityPreviewContext}>
        <ActivityPreview activityId={'1'} />
      </ActivityPreviewContext.Provider>
    );
  })
  .add('Comment', () => {
    const activityPreviewContext: ActivityPreviewContext = () => {
      return {
        actor: {
          icon: 'https://picsum.photos/80/80',
          id: '2',
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        comment:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        context: {
          icon: 'https://picsum.photos/id/382/200/200',
          title: 'The best resource',
          summary:
            'A storybook decorator that allows you to use routing-aware components in your stories',
          url: 'https://picsum.photos/80/80',
          actor: {
            id: '2',
            name: 'Alec'
          }
        },
        createdAt: '29-01-2020',
        type: 'Comment',
        verb: 'create'
      };
    };
    return (
      <ActivityPreviewContext.Provider value={activityPreviewContext}>
        <ActivityPreview activityId={'1'} />
      </ActivityPreviewContext.Provider>
    );
  });
