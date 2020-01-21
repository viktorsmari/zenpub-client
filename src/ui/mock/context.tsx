import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';
import React from 'react';
import { Props as CollectionPreviewProps } from 'ui/modules/CollectionPreview';
import {
  EditCollectionFormValues,
  Props as EditCollectionPanelProps
} from 'ui/modules/EditCollectionPanel';
import {
  EditCommunityFormValues,
  Props as EditCommunityProps
} from 'ui/modules/EditCommunityPanel';
import {
  Props as HeroCollectionProps,
  Status as HeroCollectionStatus
} from 'ui/modules/HeroCollection';
import {
  Props as HeroCommunityProps,
  Status as HeroCommunityStatus
} from 'ui/modules/HeroCommunity';
import { Props as ResourcePreviewProps } from 'ui/modules/ResourcePreview';

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
      status: HeroCommunityStatus.Loaded,
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
      EditCommunityPanel: ({ done }) => (
        <img
          onClick={done}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      )
    }
  };
};

export const getHeroCollectionProps = (): HeroCollectionProps => {
  return {
    collection: {
      status: HeroCollectionStatus.Loaded,
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

export const getResourcePreviewProps = (): ResourcePreviewProps => {
  return {
    id: '1',
    icon: 'https://picsum.photos/id/200/200/200',
    name: 'awesome collection',
    link:
      'https://medium.com/giveth/introducing-the-commons-stack-scalable-infrastructure-for-community-collaboration-6886eb97413e',
    summary:
      'More simply put, the difference is in the standards and documentation that accompanies the assets. With a guide on why and how to use them, design components because easier to use and clearer to discern.'
  };
};
