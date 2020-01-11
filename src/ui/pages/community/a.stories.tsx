import { storiesOf } from '@storybook/react';
import React from 'react';
import { Community, RecentActivitiesContext } from '.';
import {
  EditCommunityContext,
  EditCommunityFormValues
} from 'ui/modules/EditCommunityModal';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import { HeroCommunityContext } from 'ui/modules/HeroCommunity';
import { ActivityPreviewContext } from 'ui/modules/ActivityPreview';
storiesOf('Pages/Community', module).add('Standard', () => {
  const recentActivitiesContext: RecentActivitiesContext = () => {
    return {
      activities: [
        { activityId: '1' },
        { activityId: '2' },
        { activityId: '3' }
      ]
    };
  };
  const editProvider: EditCommunityContext = () => {
    const formik = useFormik<EditCommunityFormValues>({
      initialValues: {
        image: '',
        name: 'name',
        summary: 'summary'
      },
      onSubmit: () => {
        action('submit')();
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 3000);
        });
      }
    });
    return { formik };
  };
  const heroContext: HeroCommunityContext = () => {
    return {
      community: {
        canModify: true,
        following: true,
        icon: 'https://picsum.photos/800/300',
        name: 'Community nino',
        preferredUsername: 'ninos',
        summary: '',
        totalMembers: 193,
        toggleJoin: {
          toggle: action('submit'),
          isSubmitting: false
        }
      }
    };
  };
  const activityPreviewContext: ActivityPreviewContext = () => {
    return {
      activity: {
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
        verb: 'InReplyTo'
      }
    };
  };
  return (
    <HeroCommunityContext.Provider value={heroContext}>
      <EditCommunityContext.Provider value={editProvider}>
        <RecentActivitiesContext.Provider value={recentActivitiesContext}>
          <ActivityPreviewContext.Provider value={activityPreviewContext}>
            <Community communityId={'1'} />
          </ActivityPreviewContext.Provider>
        </RecentActivitiesContext.Provider>
      </EditCommunityContext.Provider>
    </HeroCommunityContext.Provider>
  );
});
