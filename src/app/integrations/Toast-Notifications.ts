import { i18nMark } from '@lingui/react';
import { CreateCollectionMutationMutationOperation } from '../../common/graphql/generated/createCollection.generated';
import { CreateCommunityMutationMutationOperation } from '../../common/graphql/generated/createCommunity.generated';
import { CreateReplyMutationMutationOperation } from '../../common/graphql/generated/createReply.generated';
import { CreateUserMutationMutationOperation } from '../../common/graphql/generated/createUser.generated';
import { DeleteMutationMutationOperation } from '../../common/graphql/generated/delete.generated';
import { FollowMutationMutationOperation } from '../../common/graphql/generated/follow.generated';
import { LikeMutationMutationOperation } from '../../common/graphql/generated/like.generated';
import { LoginMutationMutationOperation } from '../../common/graphql/generated/login.generated';
import { ShowPayload, showToastMessage } from '../redux/toastMsgs';
import { DynamicLinkSrv } from '../util/apollo/dynamicLink';

export const integrateToastNotifications = (
  dynamicLinkSrv: DynamicLinkSrv,
  dispatch: (msg: any) => unknown
) => {
  const showMessage = (payload: ShowPayload) =>
    dispatch(showToastMessage.create(payload));
  dynamicLinkSrv.addLinkOpResult<LoginMutationMutationOperation>(
    'loginMutation',
    resp => {
      showMessage(
        resp.errors
          ? { content: i18nMark(`Could not login`), options: { type: 'error' } }
          : { content: i18nMark(`Logged in!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<LikeMutationMutationOperation>(
    'likeMutation',
    resp => {
      const ctxTypeName: string =
        (resp.data &&
          resp.data.createLike &&
          resp.data.createLike.context.__typename) ||
        '';
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not perform like ${ctxTypeName}`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Logged in!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<DeleteMutationMutationOperation>(
    'deleteMutation',
    resp => {
      const ctxTypeName: string =
        (resp.data && resp.data.delete && resp.data.delete.__typename) || '';
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not delete ${ctxTypeName}`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`${ctxTypeName} deleted!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<CreateUserMutationMutationOperation>(
    'createUserMutation',
    resp => {
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not send registration request`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Registration request sent!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<CreateReplyMutationMutationOperation>(
    'createReplyMutation',
    resp => {
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not perform reply`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Reply sent!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<CreateCommunityMutationMutationOperation>(
    'createCommunityMutation',
    resp => {
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not create Community`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Community successfully created!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<CreateCollectionMutationMutationOperation>(
    'createCollectionMutation',
    resp => {
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not create Collection`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Collection successfully created!`) }
      );
    }
  );

  dynamicLinkSrv.addLinkOpResult<FollowMutationMutationOperation>(
    'followMutation',
    resp => {
      const ctx: string =
        (resp.data &&
          resp.data.createFollow &&
          resp.data.createFollow.__typename) ||
        '';
      showMessage(
        resp.errors
          ? {
              content: i18nMark(`Could not perform follow ${ctx}`),
              options: { type: 'error' }
            }
          : { content: i18nMark(`Following ${ctx}!`) }
      );
    }
  );
};
