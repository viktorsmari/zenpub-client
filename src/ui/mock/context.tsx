import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';
import React from 'react';
import {
  ActivityLoaded,
  ActivityPreview,
  Status as ActivityStatus
} from 'ui/modules/ActivityPreview';
import {
  CreateCommunityFormValues,
  Props as CreateCommunityProps
} from 'ui/modules/CreateCommunityPanel';
import {
  EditCollectionFormValues,
  Props as EditCollectionPanelProps
} from 'ui/modules/EditCollectionPanel';
import {
  EditCommunityFormValues,
  Props as EditCommunityProps
} from 'ui/modules/EditCommunityPanel';
import { FeaturedCollectionsData as FeaturedCollectionsProps } from 'ui/modules/FeaturedCollections';
import { FeaturedCommunitiesData as FeaturedCommunitiesProps } from 'ui/modules/FeaturedCommunities';
import { Props as FeaturedModalProps } from 'ui/modules/FeaturedModal';
import {
  BasicCreateFlagFormValues,
  Props as FlagModalProps
} from 'ui/modules/FlagModal';
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
import { Props as LoadMoreProps } from 'ui/modules/Loadmore';
import { Collection } from 'ui/modules/Previews/Collection';
import { Comment } from 'ui/modules/Previews/Comment';
import { FlaggedItem } from 'ui/modules/Previews/FlaggedItem';
import { Resource } from 'ui/modules/Previews/Resource';
import { Props as ResourcePreviewProps } from 'ui/modules/ResourcePreview';
import {
  NewPasswordFormValues,
  Props as NewPasswordProps
} from 'ui/pages/createNewPassword';
import { LoginFormValues, Props as LoginProps } from 'ui/pages/login';
import {
  Props as ResetPasswordProps,
  ResetPasswordFormValues
} from 'ui/pages/resetPassword';
import { EditProfile, Props as EditProfileProps } from 'ui/pages/settings';
import Flags from 'ui/pages/settings/flags';
import Instance from 'ui/pages/settings/instance';
import Emails from 'ui/pages/settings/invites';
import Preferences from 'ui/pages/settings/preferences';
import { Props as SignUpProps, SignUpFormValues } from 'ui/pages/signUp';
import { Props as ConfirmationModalProps } from '../modules/ConfirmationModal';
import { FeaturedModal } from '../modules/FeaturedModal';

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
      summary: ''
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
      basePath: '/',
      status: HeroCommunityStatus.Loaded,
      canModify: true,
      following: false,
      isFlagged: false,
      icon: 'https://picsum.photos/800/300',
      name: 'Creative Commons licensing',
      fullName: 'creative_commons_licensing@home.moodle.net',
      summary:
        'This community aims to help those new to openly licensing their resources with choosing the correct Creative Commons license.',
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
      basePath: '/community/1',
      status: HeroCommunityStatus.Loaded,
      isAdmin: true,
      // isFeatured: true,
      canModify: true,
      following: true,
      isFlagged: false,
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
        '24 Grana appeared on the Italian underground scene in the mid 90s, in a period of a great social, political and cultural ferment. The band is named after a coin used at the times of Kind Ferdinand of Aragona.',
      website: 'https://moodle.net'
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return {
    formik,
    basePath: '/',
    displayUsername: '@tata@app.moodle.net',
    isAdmin: false,
    Preferences: <Preferences />
  };
};

export const getEditProfilePropsAdmin = (): EditProfileProps => {
  const getActor = () => ({
    icon: 'https://picsum.photos/80/80',
    link: '1',
    name: 'Ivan'
  });
  const getActions = () => ({
    FlagModal: ({ done }) => {
      return <></>;
    },
    like: {
      totalLikes: 3,
      toggleLikeFormik: useFormik<{}>({
        initialValues: {},
        onSubmit: vals => {
          action('submitting...')();
          return new Promise(resolve =>
            setTimeout(() => {
              action('submitted...')();
              resolve();
            }, 2000)
          );
        }
      }),
      iLikeIt: true
    },
    reply: {
      replyFormik: useFormik<{ replyMessage: string }>({
        initialValues: { replyMessage: '' },
        onSubmit: vals => {
          action(`submitting: ${vals.replyMessage}`)();
          return new Promise(resolve =>
            setTimeout(() => {
              action(`submitted: ${vals.replyMessage}`)();
              resolve();
            }, 2000)
          );
        }
      })
    }
  });
  const activityPreviewProps: ActivityLoaded = {
    communityLink: 'communityLink',
    communityName: 'communityName',
    event: 'Flagged a comment',
    preview: (
      <FlaggedItem
        FlaggedItemContextElement={
          <Comment
            {...getActions()}
            url="/"
            content={
              'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
            }
            isFlagged={false}
            hideActions={true}
          />
        }
        ignoreFlagFormik={useFormik({
          initialValues: {},
          onSubmit: () => {
            action('ignoreFlagFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        deleteContentFormik={useFormik<{}>({
          initialValues: {},
          onSubmit: () => {
            action('deleteContentFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        blockUserFormik={useFormik<{}>({
          initialValues: {},
          onSubmit: () => {
            action('blockUserFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        type="Comment"
        reason="Abusive speech"
      />
    ),
    status: ActivityStatus.Loaded,
    actor: getActor(),
    createdAt: '2018-11-11',
    link: 'https://picsum.photos/80/80'
  };

  const activityCollectionPreviewProps: ActivityLoaded = {
    communityLink: 'communityLink',
    communityName: 'communityName',
    event: 'Flagged a collection',
    preview: (
      <FlaggedItem
        FlaggedItemContextElement={
          <Collection
            hideActions={true}
            link={{ url: '/', external: true }}
            displayUsername={'@tata@app.moodle.net'}
            icon={
              'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
            }
            name={'mantarai'}
            summary={
              'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
            }
            totalResources={12}
            isFollowing={true}
            toggleFollowFormik={useFormik<{}>({
              initialValues: {},
              onSubmit: vals => {
                action('submitting...')();
                return new Promise(resolve =>
                  setTimeout(() => {
                    action('submitted...')();
                    resolve();
                  }, 2000)
                );
              }
            })}
          />
        }
        ignoreFlagFormik={useFormik({
          initialValues: {},
          onSubmit: () => {
            action('ignoreFlagFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        deleteContentFormik={useFormik<{}>({
          initialValues: {},
          onSubmit: () => {
            action('deleteContentFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        blockUserFormik={useFormik<{}>({
          initialValues: {},
          onSubmit: () => {
            action('blockUserFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        type="Collection"
        reason="Inappropriate Content"
      />
    ),
    status: ActivityStatus.Loaded,
    actor: getActor(),
    createdAt: '2018-11-11',
    link: 'https://picsum.photos/80/80'
  };

  const activityResourcePreviewProps: ActivityLoaded = {
    communityLink: 'communityLink',
    communityName: 'communityName',
    event: 'Flagged a resource',
    preview: (
      <FlaggedItem
        FlaggedItemContextElement={
          <Resource
            hideActions={true}
            like={{
              totalLikes: 3,
              toggleLikeFormik: useFormik<{}>({
                initialValues: {},
                onSubmit: vals => {
                  action('submitting...')();
                  return new Promise(resolve =>
                    setTimeout(() => {
                      action('submitted...')();
                      resolve();
                    }, 2000)
                  );
                }
              }),
              iLikeIt: true
            }}
            isFlagged={true}
            icon={
              'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
            }
            name={'mantarai'}
            summary={
              'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
            }
            link={'anime.pdf'}
            license={'CC-BY-4.0'}
            acceptedLicenses={['CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0']}
            isLocal={true}
            type={'pdf'}
            FlagModal={({ done }) => {
              return <></>;
            }}
          />
        }
        ignoreFlagFormik={useFormik({
          initialValues: {},
          onSubmit: () => {
            action('ignoreFlagFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        deleteContentFormik={useFormik<{}>({
          initialValues: {},
          onSubmit: () => {
            action('deleteContentFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        blockUserFormik={useFormik<{}>({
          initialValues: {},
          onSubmit: () => {
            action('blockUserFormik')();
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            });
          }
        })}
        type="Resource"
        reason="Inappropriate content"
      />
    ),
    status: ActivityStatus.Loaded,
    actor: getActor(),
    createdAt: '2018-11-11',
    link: 'https://picsum.photos/80/80'
  };

  const ActivitiesBox = (
    <React.Fragment>
      <ActivityPreview {...activityPreviewProps} />
      <ActivityPreview {...activityCollectionPreviewProps} />
      <ActivityPreview {...activityResourcePreviewProps} />
    </React.Fragment>
  );

  const formik = useFormik<EditProfile>({
    initialValues: {
      image: '',
      location: '',
      icon:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MPaPKKyEuv4RMPDu3T_ppgHaE7%26pid%3DApi&f=1',
      name: '24grana best songs',
      summary:
        '24 Grana appeared on the Italian underground scene in the mid 90s, in a period of a great social, political and cultural ferment. The band is named after a coin used at the times of Kind Ferdinand of Aragona.',
      website: 'https://moodle.net'
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const formikAddDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    onSubmit: ({ domain }) => {
      action(`formikAddDomain ${domain}`)();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const formikRemoveDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    onSubmit: ({ domain }) => {
      action(`formikRemoveDomain ${domain}`)();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const formikAddEmail = useFormik<{ email: string }>({
    initialValues: { email: '' },
    onSubmit: ({ email }) => {
      action(`formikAddEmail ${email}`)();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const formikRemoveEmail = useFormik<{ email: string }>({
    initialValues: { email: '' },
    onSubmit: ({ email }) => {
      action(`formikRemoveEmail ${email}`)();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const formikSendInvite = useFormik<{ email: string }>({
    initialValues: { email: '' },
    onSubmit: ({ email }) => {
      action(`formikSendInvite ${email}`)();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });

  return {
    formik,
    basePath: '/',
    displayUsername: '@tata@app.moodle.net',
    Preferences: <Preferences />,
    Invites: (
      <Emails
        emailsList={[
          'about@moodle.com',
          'infomn@moodle.com',
          'test1@moodle.com',
          'test@moodle.com'
        ]}
        formikAddEmail={formikAddEmail}
        formikRemoveEmail={formikRemoveEmail}
        formikSendInvite={formikSendInvite}
      />
    ),
    Flags: <Flags ActivitiesBox={ActivitiesBox} />,
    Instance: (
      <Instance
        formikAddDomain={formikAddDomain}
        formikRemoveDomain={formikRemoveDomain}
        domainsList={['moodle.com']}
      />
    ),
    isAdmin: true
  };
};

export const getLoadMoreProps = (): LoadMoreProps => {
  return {
    LoadMoreFormik: useFormik<{}>({
      initialValues: {},
      onSubmit: () => {
        action('load more')();
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 3000);
        });
      }
    })
  };
};

export const getHeroCollectionProps = (): HeroCollectionProps => {
  return {
    collection: {
      status: HeroCollectionStatus.Loaded,
      isAdmin: false,
      canModify: true,
      following: true,
      basePath: '/',
      isFlagged: false,
      icon: 'https://picsum.photos/800/300',
      name: 'Favourite books',
      fullName: 'favbooks@abc.com',
      communityIcon: 'https://picsum.photos/800/300',
      communityId: '2',
      communityName: 'Super community',
      summary:
        'Cooperation combined with network effects is more effective than capitalist competition',
      followerCount: 10,
      // contributorCount: 2,
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
      basePath: '/collection/1',
      status: HeroCollectionStatus.Loaded,
      isAdmin: true,
      canModify: true,
      following: true,
      isFlagged: false,
      icon: 'https://picsum.photos/800/300',
      name: 'Favourite books',
      fullName: 'favbooks@abc.com',
      communityIcon: 'https://picsum.photos/800/300',
      communityId: '2',
      communityName: 'Super community',
      summary:
        'Cooperation combined with network effects is more effective than capitalist competition',
      followerCount: 10,
      // contributorCount: 2,
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
    isFlagged: false,
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
    isFlagged: false,
    FlagModal: ({ done }) => {
      return <></>;
    }
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
  const flagFormik = useFormik<BasicCreateFlagFormValues>({
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
  const unflagFormik = useFormik({
    initialValues: {},
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return {
    flagFormik,
    unflagFormik,
    isFlagged: false,
    cancel: action('cancel')
  };
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

export const getConfirmationModalProps = (): ConfirmationModalProps => {
  const formik = useFormik<{}>({
    initialValues: [],
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });

  return {
    cancel: action('cancel'),
    modalTitle: 'Remove email from whitelist',
    modalDescription: `Are you sure you want to remove test@moodle.net from the whitelisted emails`,
    modalAction: 'Delete',
    formik
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

export const getSignUpProps = (): SignUpProps => {
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      email: 'mary@moodlers.org',
      username: 'moodlerMary',
      name: 'Moodler Mary',
      password: '',
      passwordConfirm: ''
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

export const getLoginProps = (): LoginProps => {
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
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

export const getResetPasswordProps = (): ResetPasswordProps => {
  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: {
      email: ''
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

export const getNewPasswordProps = (): NewPasswordProps => {
  const formik = useFormik<NewPasswordFormValues>({
    initialValues: {
      password: '',
      passwordConfirm: ''
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
