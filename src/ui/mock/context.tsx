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
  CreateCommunityFormValues,
  Props as CreateCommunityProps
} from 'ui/modules/CreateCommunityPanel';
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
import {
  BasicCreateFlagFormValues,
  Props as FlagModalProps
} from 'ui/modules/FlagModal';
import { Props as FeaturedModalProps } from 'ui/modules/FeaturedModal';

import { FeaturedModal } from '../modules/FeaturedModal';
import { Props as EditProfileProps, EditProfile } from 'ui/pages/settings';
import { FeaturedCommunitiesData as FeaturedCommunitiesProps } from 'ui/modules/FeaturedCommunities';
import { FeaturedCollectionsData as FeaturedCollectionsProps } from 'ui/modules/FeaturedCollections';

export const getEditCommunityProps = (): EditCommunityProps => {
  const formik = useFormik<EditCommunityFormValues>({
    initialValues: {
      icon:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MPaPKKyEuv4RMPDu3T_ppgHaE7%26pid%3DApi&f=1',
      name: '24grana best songs',
      summary:
        '24 Grana appeared on the Italian underground scene in the mid 90s, in a period of a great social, political and cultural ferment. The band is named after a coin used at the times of Kind Ferdinand of Aragona.'
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

export const getCreateCommunityProps = (): CreateCommunityProps => {
  const formik = useFormik<CreateCommunityFormValues>({
    initialValues: {
      icon: '',
      name: '',
      summary: '',
      files: []
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
      icon:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MPaPKKyEuv4RMPDu3T_ppgHaE7%26pid%3DApi&f=1',
      name: '24grana best songs',
      summary:
        '24 Grana appeared on the Italian underground scene in the mid 90s, in a period of a great social, political and cultural ferment. The band is named after a coin used at the times of Kind Ferdinand of Aragona.'
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
      isAdmin: false,
      // isFeatured: false,
      status: HeroCommunityStatus.Loaded,
      canModify: true,
      following: false,
      flagged: false,
      icon: 'https://picsum.photos/800/300',
      name: 'Community nino',
      fullName: 'ninos@abc.com',
      summary:
        'Cooperation combined with network effects is more effective than capitalist competition',
      totalMembers: 193,
      toggleJoinFormik: useFormik<{}>({
        initialValues: {},
        onSubmit: action('toggle join')
      }),
      EditCommunityPanel: ({ done }) => (
        <img
          onClick={done}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      ),
      FlagModal: ({ done }) => {
        return <></>;
      },
      FeaturedModal: () => {
        return <></>;
      }
    }
  };
};

export const getHeroCommunityPropsAdmin = (): HeroCommunityProps => {
  return {
    community: {
      status: HeroCommunityStatus.Loaded,
      isAdmin: true,
      // isFeatured: true,
      canModify: true,
      following: true,
      flagged: false,
      icon: 'https://picsum.photos/800/300',
      name: 'Community nino',
      fullName: 'ninos@abc.com',
      summary:
        'Cooperation combined with network effects is more effective than capitalist competition',
      totalMembers: 193,
      toggleJoinFormik: useFormik<{}>({
        initialValues: {},
        onSubmit: action('toggle join')
      }),
      EditCommunityPanel: ({ done }) => (
        <img
          onClick={done}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      ),
      FlagModal: ({ done }) => {
        return <></>;
      },
      FeaturedModal: ({ done }) => {
        const formik = useFormik<{}>({
          initialValues: { makeFeatured: true },
          onSubmit: () => {
            action('submit')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        });
        const getFeaturedModalProps = {
          formik,
          isFeatured: false,
          itemType: 'community',
          itemName: 'Community nino',
          cancel: action('cancel')
        };
        return <FeaturedModal {...getFeaturedModalProps} />;
      }
    }
  };
};

export const getEditProfileProps = (): EditProfileProps => {
  const formik = useFormik<EditProfile>({
    initialValues: {
      image: '',
      location: '',
      icon:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MPaPKKyEuv4RMPDu3T_ppgHaE7%26pid%3DApi&f=1',
      name: '24grana best songs',
      summary:
        '24 Grana appeared on the Italian underground scene in the mid 90s, in a period of a great social, political and cultural ferment. The band is named after a coin used at the times of Kind Ferdinand of Aragona.'
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, basePath: '/', displayUsername: '@tata@app.moodle.net' };
};

export const getHeroCollectionProps = (): HeroCollectionProps => {
  return {
    collection: {
      status: HeroCollectionStatus.Loaded,
      isAdmin: false,
      canModify: true,
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
      followerCount: 10,
      contributorCount: 2,
      toggleJoinFormik: useFormik<{}>({
        initialValues: {},
        onSubmit: () => {
          action('toggle join')();
          return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
          });
        }
      }),
      EditCollectionPanel: ({ done }) => (
        <img
          onClick={done}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      ),
      FlagModal: ({ done }) => {
        return <></>;
      },
      FeaturedModal: () => {
        return <></>;
      }
    }
  };
};

export const getHeroCollectionPropsAdmin = (): HeroCollectionProps => {
  return {
    collection: {
      status: HeroCollectionStatus.Loaded,
      isAdmin: true,
      canModify: true,
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
      followerCount: 10,
      contributorCount: 2,
      toggleJoinFormik: useFormik<{}>({
        initialValues: {},
        onSubmit: action('toggle join')
      }),
      EditCollectionPanel: ({ done }) => (
        <img
          onClick={done}
          src="https://via.placeholder.com/400x200.png?text=An editing panel"
        />
      ),
      FlagModal: ({ done }) => {
        return <></>;
      },
      FeaturedModal: () => {
        const formik = useFormik<{}>({
          initialValues: { makeFeatured: true },
          onSubmit: () => {
            action('submit')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        });
        const getFeaturedModalProps = {
          formik,
          isFeatured: false,
          itemType: 'collection',
          itemName: 'Favourite books',
          cancel: action('cancel')
        };
        return <FeaturedModal {...getFeaturedModalProps} />;
      }
    }
  };
};
export const getHeroUserProps = (): HeroUserProps => {
  return {
    status: HeroUserStatus.Loaded,
    me: false,
    following: true,
    isOpenDropdown: false,
    setOpenDropdown: action('open dropdown'),
    image: 'https://pbs.twimg.com/profile_banners/764365/1574452341/1500x500',
    displayUsername: 'dajbelshaw@team.moodle.net',
    location: 'Morpeth, UK',
    icon:
      'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
    name: '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
    summary:
      'Open Educational Thinkerer. Product Manager @MoodleNet & Co-op founder @WeAreOpenCoop. Aspiring Mountain Leader. Previously: @Mozilla @Jisc teacher',
    toggleFollowFormik: useFormik<{}>({
      initialValues: {},
      onSubmit: () => {
        action('submit')();
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 3000);
        });
      }
    }),
    FlagModal: ({ done }) => {
      return <></>;
    }
  };
};

export const getHeroUserProps2 = (): HeroUserProps => {
  return {
    status: HeroUserStatus.Loaded,
    me: true,
    isAdmin: true,
    image: 'https://pbs.twimg.com/profile_banners/764365/1574452341/1500x500',
    displayUsername: 'dajbelshaw@team.moodle.net',
    location: 'Morpeth, UK',
    icon:
      'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
    name: '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
    summary:
      'Open Educational Thinkerer. Product Manager @MoodleNet & Co-op founder @WeAreOpenCoop. Aspiring Mountain Leader. Previously: @Mozilla @Jisc teacher',
    FlagModal: ({ done }) => {
      return <></>;
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

export const getFlagModalProps = (): FlagModalProps => {
  const formik = useFormik<BasicCreateFlagFormValues>({
    initialValues: {
      reason: ''
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, flagged: false, cancel: action('cancel') };
};

export const getFeaturedModalProps = (): FeaturedModalProps => {
  const formik = useFormik({
    initialValues: { makeFeatured: true },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return {
    formik,
    isFeatured: false,
    itemName: 'Type Theory',
    itemType: 'community',
    cancel: action('cancel')
  };
};

export const getFeaturedCommunitiesProps = (): FeaturedCommunitiesProps => {
  return {
    isAdmin: false,
    featuredCommunities: [
      {
        id: '1',
        name: 'Instructional Design in HE',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '2',
        name: 'The Lounge',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '3',
        name: 'OER Lounge',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '4',
        name: 'Favourite books',
        icon: 'https://picsum.photos/id/200/200/200'
      }
    ]
  };
};

export const getFeaturedCommunitiesPropsAdmin = (): FeaturedCommunitiesProps => {
  return {
    isAdmin: true,
    featuredCommunities: [
      {
        id: '1',
        name: 'Instructional Design in HE',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '2',
        name: 'The Lounge',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '3',
        name: 'OER Lounge',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '4',
        name: 'Favourite books',
        icon: 'https://picsum.photos/id/200/200/200'
      }
    ],
    FeaturedModal: ({ done }) => {
      const formik = useFormik<{}>({
        initialValues: { makeFeatured: true },
        onSubmit: () => {
          action('submit')();
          return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
          });
        }
      });
      const getFeaturedModalProps = {
        formik,
        isFeatured: true,
        itemType: 'community',
        itemName: 'Community nino',
        cancel: action('cancel')
      };
      return <FeaturedModal {...getFeaturedModalProps} />;
    }
  };
};

export const getFeaturedCollectionsProps = (): FeaturedCollectionsProps => {
  return {
    isAdmin: false,
    FeaturedModal: () => <div>FeaturedModal</div>,
    featuredCollections: [
      {
        id: '1',
        name: 'Global OER Projects',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '2',
        name: 'Great education-related books',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '3',
        name: 'Spaced Repetition',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '4',
        name: 'Community OER',
        icon: 'https://picsum.photos/id/200/200/200'
      }
    ]
  };
};

export const getFeaturedCollectionsPropsAdmin = (): FeaturedCollectionsProps => {
  return {
    isAdmin: true,
    featuredCollections: [
      {
        id: '1',
        name: 'Global OER Projects',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '2',
        name: 'Great education-related books',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '3',
        name: 'Spaced Repetition',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '4',
        name: 'Community OER',
        icon: 'https://picsum.photos/id/200/200/200'
      }
    ],
    FeaturedModal: ({ done }) => {
      const formik = useFormik<{}>({
        initialValues: { makeFeatured: true },
        onSubmit: () => {
          action('submit')();
          return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
          });
        }
      });
      const getFeaturedModalProps = {
        formik,
        isFeatured: true,
        itemType: 'community',
        itemName: 'Community nino',
        cancel: action('cancel')
      };
      return <FeaturedModal {...getFeaturedModalProps} />;
    }
  };
};
