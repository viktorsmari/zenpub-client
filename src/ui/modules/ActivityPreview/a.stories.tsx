import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { useFormik } from 'formik';
import React from 'react';
import { ActivityPreview, BigActivityPreview, Props, Status } from '.';
import { ContextType, ContextVerb } from './preview';
import { Box } from 'rebass';
import { FlagModal } from '../FlagModal';

const getActions = () => ({
  FlagModal: () => {
    const formik = useFormik<{ reason: '' }>({
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
    const getFlagModalProps = {
      formik,
      flagged: false,
      cancel: action('cancel')
    };
    return <FlagModal {...getFlagModalProps} />;
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
const getActor = () => ({
  icon: 'https://picsum.photos/80/80',
  link: '1',
  name: 'Ivan'
});
storiesOf('Modules/ActivityPreview', module)
  .add('Comment', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        content:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        type: ContextType.Comment,
        verb: ContextVerb.Created
      },
      inReplyToCtx: null
    };
    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Follow', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Community,
        verb: ContextVerb.Follow,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test'
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Like', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Community,
        verb: ContextVerb.Like,
        icon: 'https://picsum.photos/80/80',
        summary: 'test',
        title: 'Liceo Alberghiero Celletti'
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Flag', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Resource,
        verb: ContextVerb.Flag,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test'
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Create a community', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Community,
        verb: ContextVerb.Created,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test'
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })

  .add('Create a collection', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test',
        type: ContextType.Collection,
        verb: ContextVerb.Created
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Update a resource', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test',
        type: ContextType.Resource,
        verb: ContextVerb.Updated
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Updated a collection', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test',
        type: ContextType.Collection,
        verb: ContextVerb.Updated
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Updated a community', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        summary: 'test',
        type: ContextType.Community,
        verb: ContextVerb.Updated
      },
      inReplyToCtx: null
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <ActivityPreview {...activityPreviewProps} />
      </Box>
    );
  })
  .add('Reply to a message', () => {
    const activityPreviewProps: Props = {
      event: 'Liked',
      preview: <div>Preview</div>,
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '2018-11-11',
      context: {
        link: 'https://picsum.photos/80/80',
        verb: ContextVerb.Created,
        type: ContextType.Comment,
        content:
          'Sono chiamati alle urne cinque milioni e mezzo di elettori. Si vota dalle 7 alle 23. A nord il risultato si gioca in parte intorno al voto disgiunto fra centrodestra e centrosinistra. Anche a sud si vota con uno schema bipolare. I grillini sono fuori dai giochi. Attesa per gli effetti dei risultati sulla tenuta del governo. Salvini infrange il silenzio con un tweet su Bibbiano. Bonaccini: "Oggi vinciamo noi, oggi vince lEmilia-Romagna"'
      },
      inReplyToCtx: null
      /* ,
      inReplyToCtx: {
        link: 'https://picsum.photos/80/80',
        actor: getActor()
      } */
    };

    return (
      <Box
        sx={{
          borderRadius: '6px',
          background: '#fff',
          width: '600px',
          margin: '0 auto'
        }}
        p={2}
      >
        <BigActivityPreview {...activityPreviewProps} />;
      </Box>
    );
  });
