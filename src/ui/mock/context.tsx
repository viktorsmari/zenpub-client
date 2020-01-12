import React from 'react';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';
import { Props as ActivityPreviewProps } from 'ui/modules/ActivityPreview';
import { Props as CollectionPreviewProps } from 'ui/modules/CollectionPreview';
import {
  EditCollectionFormValues,
  Props as EditCollectionPanelProps
} from 'ui/modules/EditCollectionPanel';
import {
  EditCommunityFormValues,
  Props as EditCommunityProps
} from 'ui/modules/EditCommunityPanel';
import { Props as HeroCollectionProps } from 'ui/modules/HeroCollection';
import { Props as HeroCommunityProps } from 'ui/modules/HeroCommunity';

export const getEditCommunityProps = (): EditCommunityProps => {
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
  return { formik, cancel: action('cancel') };
};

export const getEditCollectionProps = (): EditCollectionPanelProps => {
  const formik = useFormik<EditCollectionFormValues>({
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
  return { formik, cancel: action('cancel') };
};

export const getHeroCommunityProps = (): HeroCommunityProps => {
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
      },
      EditCommunityPanel: ({ done: cancel }) => (
        <img
          onClick={cancel}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      )
    }
  };
};

export const getHeroCollectionProps = (): HeroCollectionProps => {
  return {
    collection: {
      isMine: true,
      myFollow: true,
      icon: 'https://picsum.photos/800/300',
      title: 'Favourite books',
      preferredUsername: 'favbooks',
      summary:
        'Cooperation combined with network effects is more effective than capitalist competition',
      toggleJoin: {
        toggle: action('submit'),
        isSubmitting: false
      },
      EditCollectionPanel: ({ done }) => (
        <img
          onClick={done}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      )
    }
  };
};

export const getCollectionPreviewProps = (): CollectionPreviewProps => {
  return {
    id: '1',
    icon: 'https://picsum.photos/id/200/200/200',
    name: 'awesome collection',
    summary:
      'More simply put, the difference is in the standards and documentation that accompanies the assets. With a guide on why and how to use them, design components because easier to use and clearer to discern.',
    totalResources: 12
  };
};
export const getActivityPreviewProps = (): ActivityPreviewProps => {
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
