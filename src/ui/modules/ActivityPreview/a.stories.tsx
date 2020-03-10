import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { useFormik } from 'formik';
import React from 'react';
import { Box } from 'rebass/styled-components';
import { Community } from 'ui/modules/Previews/Community';
import { ActivityPreview, Props, Status } from '.';
import { Comment } from 'ui/modules/Previews/Comment';
import { Collection } from '../Previews/Collection';
import { Resource } from '../Previews/Resource';
import { User } from '../Previews/User';
import FlagModal from '../FlagModal';
import { MainComment } from '../Previews/MainComment';
import { LikedComment } from '../Previews/LikedComment';

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
  .add('Created a collection', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Created a collection',
      preview: (
        <Collection
          link={{ url: '/', external: true }}
          isFollowing={true}
          displayUsername={'@mantarai@app.moodle.net'}
          icon={
            'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
          }
          name={'mantarai'}
          summary={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
          totalResources={12}
          toggleFollowFormik={useFormik({
            initialValues: {},
            onSubmit: action('toggle follow')
          })}
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
  .add('Created a community', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Created a community',
      preview: (
        <Community
          icon={
            'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
          }
          name={'mantarai'}
          summary={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
          followersCount={12}
          collectionsCount={6}
          joined={true}
          toggleJoinFormik={useFormik<{}>({
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
          threadsCount={3}
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
  .add('Shared a link', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Shared a link',
      preview: (
        <Resource
          icon={
            'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
          }
          isLocal={false}
          license={null}
          acceptedLicenses={['license 1', 'license 2', 'license 3']}
          name={'mantarai'}
          like={{
            toggleLikeFormik: useFormik({
              initialValues: {},
              onSubmit: action('toggle like')
            }),
            iLikeIt: true,
            totalLikes: 5
          }}
          summary={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
          link={'https://www.pinterest.it/topics/anime/'}
          type={'image'}
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
  .add('Uploaded a resource', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Uploaded a resource',
      preview: (
        <Resource
          icon={
            'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
          }
          isLocal={true}
          license={'license 1'}
          acceptedLicenses={['license 1', 'license 2', 'license 3']}
          name={'mantarai'}
          like={{
            toggleLikeFormik: useFormik({
              initialValues: {},
              onSubmit: action('toggle like')
            }),
            iLikeIt: true,
            totalLikes: 5
          }}
          summary={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
          link={'anime.pdf'}
          type={'pdf'}
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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

  .add('Follow a user', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Followed a user',
      preview: (
        <User
          {...{
            image: 'https://picsum.photos/800/300',
            bio: `I'm a cool user`,
            username: '@favbooks@abc.com',
            name: 'favbooks',
            isFollowing: true,
            toggleFollowFormik: useFormik({
              initialValues: {},
              onSubmit: action('toggle follow')
            })
          }}
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
  .add('Create a comment', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Created a comment',
      preview: (
        <Comment
          {...getActions()}
          url="/"
          content={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
  .add('Like a comment', () => {
    const activityPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Like a comment',
      preview: (
        <LikedComment
          {...getActions()}
          actor={{
            icon: 'https://picsum.photos/80/80',
            link: '1',
            name: 'Ivan'
          }}
          createdAt="2018-11-11"
          communityName="test"
          communityLink="1"
          content={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
  .add('Display the main comment on a thread page', () => {
    const MainCommentPreviewProps: Props = {
      communityLink: 'communityLink',
      communityName: 'communityName',
      event: 'Created a comment',
      preview: (
        <MainComment
          {...getActions()}
          content={
            'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
          }
        />
      ),
      status: Status.Loaded,
      actor: getActor(),
      createdAt: '2018-11-11',
      link: 'https://picsum.photos/80/80'
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
        <ActivityPreview {...MainCommentPreviewProps} />
      </Box>
    );
  });
