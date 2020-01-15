import { storiesOf } from '@storybook/react';
import React from 'react';
import { ActivityPreview, Props } from '.';
import { ActivityPreviewVerb, ContextType, Status } from './types';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';

storiesOf('Modules/ActivityPreview', module)
  .add('Comment', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        totalLikes: 3,
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
        }),
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
        iLikeIt: true,
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        msgContent:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        contextType: ContextType.Comment,
        verb: ActivityPreviewVerb.Created
      }
    };
    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Follow', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Follow,
        verb: ActivityPreviewVerb.Created,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        concrete: true
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Like', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Like,
        verb: ActivityPreviewVerb.Created,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        concrete: true
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Flag', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Flag,
        verb: ActivityPreviewVerb.Created,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        concrete: true
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Create a community', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        concrete: true,
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        iLikeIt: true,
        totalLikes: 10,
        toggleLikeFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Community,
        verb: ActivityPreviewVerb.Created
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Create a collection', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        concrete: true,
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        iLikeIt: true,
        totalLikes: 10,
        toggleLikeFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Collection,
        verb: ActivityPreviewVerb.Created
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Update a resource', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        concrete: true,
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        iLikeIt: true,
        totalLikes: 10,
        toggleLikeFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Resource,
        verb: ActivityPreviewVerb.Updated
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Updated a collection', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        concrete: true,
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        iLikeIt: true,
        totalLikes: 10,
        toggleLikeFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Collection,
        verb: ActivityPreviewVerb.Updated
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Updated a community', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        concrete: true,
        actor: {
          icon: 'https://picsum.photos/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        iLikeIt: true,
        totalLikes: 10,
        toggleLikeFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Community,
        verb: ActivityPreviewVerb.Updated
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Reply to a community', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      context: {
        actor: {
          icon: 'https://picsum.photos/id/393/80/80',
          link: {
            url: '1',
            external: true
          },
          name: 'Ivan',
          preferredUsername: 'tata'
        },
        msgContent:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        replyFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        iLikeIt: true,
        totalLikes: 10,
        toggleLikeFormik: useFormik<{ replyMessage: '' }>({
          initialValues: { replyMessage: '' },
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
        createdAt: '29-01-2020',
        link: {
          url: 'https://picsum.photos/80/80',
          external: true
        },
        contextType: ContextType.Comment,
        verb: ActivityPreviewVerb.InReplyTo
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  });
