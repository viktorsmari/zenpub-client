import { InterceptorSrv } from '../apollo/client';
import { Store } from 'redux';
import { showToastMessage, ShowPayload } from '../redux/toastMsgs';

export const integrateToastNotifications = (
  intercSrv: InterceptorSrv,
  store: Store
) => {
  //@ts-ignore
  intercSrv.add({
    operation: 'createLike',
    request: () => _ => {
      debugger;

      const ctx: string = (_.data && _.data.context.__typename) || '';
      showMessage(
        _.error
          ? {
              content: `Could not perform like ${ctx}`,
              options: { type: 'error' }
            }
          : { content: `${ctx} like sent!` }
      );
    }
  });

  //@ts-ignore
  intercSrv.add({
    operation: 'delete',
    request: () => _ => {
      showMessage(
        _.error
          ? {
              content: `Could not delete`,
              options: { type: 'error' }
            }
          : { content: `delete performed!` }
      );
    }
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
              content: `Could not perform reply`,
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
    operation: 'createFollow',
    request: () => _ => {
      const ctx: string = (_.data && _.data.context.__typename) || '';

      showMessage(
        _.error
          ? {
              content: `Could not perform follow ${ctx}`,
              options: { type: 'error' }
            }
          : { content: `Following ${ctx}!` }
      );
    }
  });

  const showMessage = (payload: ShowPayload) =>
    store.dispatch(showToastMessage.create(payload));
};
