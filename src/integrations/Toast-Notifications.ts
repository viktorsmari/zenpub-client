import { InterceptorSrv } from '../apollo/client';
import { Store } from 'redux';
import { showToastMessage, ShowPayload } from '../redux/toastMsgs';

export const integrateToastNotifications = (
  intercSrv: InterceptorSrv,
  store: Store
) => {
  intercSrv.add({
    operation: 'likeComment',
    request: () => _ =>
      showMessage(
        _.error
          ? { content: `Could not like comment`, options: { type: 'error' } }
          : { content: `Comment like sent!` }
      )
  });

  intercSrv.add({
    operation: 'undoLikeComment',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not undo like comment`,
              options: { type: 'error' }
            }
          : { content: `Undo like comment sent!` }
      )
  });

  intercSrv.add({
    operation: 'createUser',
    request: () => _ =>
      showMessage(
        _.error
          ? { content: `Could not create user`, options: { type: 'error' } }
          : { content: `User created!` }
      )
  });

  intercSrv.add({
    operation: 'createSession',
    request: () => _ =>
      showMessage(
        _.error
          ? { content: `Could not login`, options: { type: 'error' } }
          : { content: `Logged in!` }
      )
  });

  intercSrv.add({
    operation: 'createReply',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not reply to comment`,
              options: { type: 'error' }
            }
          : { content: `Reply sent!` }
      )
  });

  intercSrv.add({
    operation: 'createCommunity',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not create Community`,
              options: { type: 'error' }
            }
          : { content: `Community created!` }
      )
  });

  intercSrv.add({
    operation: 'createCollection',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not create Collection`,
              options: { type: 'error' }
            }
          : { content: `Collection created!` }
      )
  });

  intercSrv.add({
    operation: 'joinCommunity',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not join Community`,
              options: { type: 'error' }
            }
          : { content: `Community joined!` }
      )
  });

  intercSrv.add({
    operation: 'undoJoinCommunity',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not unjoin Community`,
              options: { type: 'error' }
            }
          : { content: `Community unjoined!` }
      )
  });

  intercSrv.add({
    operation: 'followCollection',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not follow Collection`,
              options: { type: 'error' }
            }
          : { content: `Following Collection!` }
      )
  });

  intercSrv.add({
    operation: 'undoFollowCollection',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: `Could not unfollow Collection`,
              options: { type: 'error' }
            }
          : { content: `Unfollowing Collection!` }
      )
  });

  const showMessage = (payload: ShowPayload) =>
    store.dispatch(showToastMessage.create(payload));
};
