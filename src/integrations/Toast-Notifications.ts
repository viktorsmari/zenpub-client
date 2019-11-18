import { InterceptorSrv } from '../apollo/client';
import { Store } from 'redux';
import { showToastMessage, ShowPayload } from '../redux/toastMsgs';
import { i18nMark } from '@lingui/react';

export const integrateToastNotifications = (
  intercSrv: InterceptorSrv,
  store: Store
) => {
  //@ts-ignore
  intercSrv.add({
    operation: 'createLike',
    request: () => _ => {
      const ctx: string = (_.data && _.data.context.__typename) || '';
      showMessage(
        _.error
          ? {
              content: i18nMark(`Could not perform like ${ctx}`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`${ctx} like sent!`) }
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
              content: i18nMark(`Could not delete`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`delete performed!`) }
      );
    }
  });

  intercSrv.add({
    operation: 'createUser',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: i18nMark(`Could not create user`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`User created!`) }
      )
  });

  intercSrv.add({
    operation: 'createSession',
    request: () => _ =>
      showMessage(
        _.error
          ? { content: i18nMark(`Could not login`), options: { type: 'error' } }
          : { content: i18nMark(`Logged in!`) }
      )
  });

  intercSrv.add({
    operation: 'createReply',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: i18nMark(`Could not perform reply`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Reply sent!`) }
      )
  });

  intercSrv.add({
    operation: 'createCommunity',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: i18nMark(`Could not create Community`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Community created!`) }
      )
  });

  intercSrv.add({
    operation: 'createCollection',
    request: () => _ =>
      showMessage(
        _.error
          ? {
              content: i18nMark(`Could not create Collection`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Collection created!`) }
      )
  });

  intercSrv.add({
    operation: 'createFollow',
    request: () => _ => {
      const ctx: string = (_.data && _.data.context.__typename) || '';

      showMessage(
        _.error
          ? {
              content: i18nMark(`Could not perform follow ${ctx}`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Following ${ctx}!`) }
      );
    }
  });

  const showMessage = (payload: ShowPayload) =>
    store.dispatch(showToastMessage.create(payload));
};
