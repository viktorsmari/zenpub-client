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
import {
  Props as HeroUserProps,
  Status as HeroUserStatus
} from 'ui/modules/HeroUser';
import { Props as ResourcePreviewProps } from 'ui/modules/ResourcePreview';

export const getEditCommunityProps = (): EditCommunityProps => {
  const formik = useFormik<EditCommunityFormValues>({
    initialValues: {
      icon: '',
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
      icon: '',
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
      fullName: 'ninos@abc.com',
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
      following: true,
      flagged: false,
      icon: 'https://picsum.photos/800/300',
      name: 'Favourite books',
      fullName: 'favbooks@abc.com',
      communityIcon: 'https://picsum.photos/800/300',
      communityId: '2',
      communityName: 'Super community',
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
      ),
      FlagModal: ({ done }) => {
        return <></>;
      }
    }
  };
};

export const getHeroUserProps = (): HeroUserProps => {
  return {
    status: HeroUserStatus.Loaded,
    me: false,
    user: {
      isAdmin: true,
      following: true,
      image: 'https://pbs.twimg.com/profile_banners/764365/1574452341/1500x500',
      displayUsername: 'dajbelshaw@team.moodle.net',
      location: 'Morpeth, UK',
      icon:
        'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
      name: '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
      summary:
        'Open Educational Thinkerer. Product Manager @MoodleNet & Co-op founder @WeAreOpenCoop. Aspiring Mountain Leader. Previously: @Mozilla @Jisc teacher',
      toggleJoin: {
        toggle: action('Unjoin !'),
        isSubmitting: false
      }
    }
  };
};

export const getCollectionPreviewProps = (): CollectionPreviewProps => {
  return {
    link: {
      url: '#',
      external: false
    },
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
