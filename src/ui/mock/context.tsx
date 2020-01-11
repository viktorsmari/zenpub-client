import {
  RecentActivitiesContext,
  CollectionsContext
} from 'ui/pages/community';
import {
  EditCommunityContext,
  EditCommunityFormValues
} from 'ui/modules/EditCommunityModal';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import { HeroCommunityContext } from 'ui/modules/HeroCommunity';
import { ActivityPreviewContext } from 'ui/modules/ActivityPreview';
import { CollectionPreviewContext } from 'ui/modules/CollectionPreview';

export const recentActivitiesContext: RecentActivitiesContext = () => {
  return {
    activities: [{ activityId: '1' }, { activityId: '2' }, { activityId: '3' }]
  };
};

export const collectionsContext: CollectionsContext = () => {
  return {
    collections: [
      { collectionId: '1' },
      { collectionId: '2' },
      { collectionId: '3' }
    ]
  };
};

export const editProvider: EditCommunityContext = () => {
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
export const heroContext: HeroCommunityContext = () => {
  return {
    community: {
      canModify: true,
      following: true,
      icon: 'https://picsum.photos/800/300',
      name: 'Community nino',
      preferredUsername: 'ninos',
      summary:
        'Cooperation combined with network effects is more effective than capitalist competition',
      totalMembers: 193,
      toggleJoin: {
        toggle: action('submit'),
        isSubmitting: false
      }
    }
  };
};
export const collectionPreviewContext: CollectionPreviewContext = () => {
  return {
    id: '1',
    icon: 'https://picsum.photos/id/200/200/200',
    name: 'awesome collection',
    summary:
      'More simply put, the difference is in the standards and documentation that accompanies the assets. With a guide on why and how to use them, design components because easier to use and clearer to discern.',
    totalResources: 12
  };
};
export const activityPreviewContext: ActivityPreviewContext = () => {
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
