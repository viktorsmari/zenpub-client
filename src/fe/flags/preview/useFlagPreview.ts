import { Flag } from 'graphql/types.generated';
import { useMemo, useCallback } from 'react';
import {
  useFlagPreviewDataQuery,
  useDeleteFlagContextMutation,
  useDeleteFlagMutation,
  useDeactivateFlaggedUserMutation
} from './useFlagPreview.generated';

export const useFlagPreview = (flagId: Flag['id']) => {
  const flagQ = useFlagPreviewDataQuery({ variables: { flagId } });
  const [
    deleteFlagContextMut,
    deleteFlagContextStatus
  ] = useDeleteFlagContextMutation();
  const [deleteFlagMut, deleteFlagStatus] = useDeleteFlagMutation();
  const [
    deactivateFlaggedUserMut,
    deactivateFlaggedUserStatus
  ] = useDeactivateFlaggedUserMutation();

  const flag = flagQ.data?.flag;
  const deactivateFlaggedUser = useCallback(() => {
    if (
      !flag ||
      flag.context.__typename !== 'User' ||
      deactivateFlaggedUserStatus.loading
    ) {
      return;
    }

    return deactivateFlaggedUserMut({
      variables: { userId: flag.context.userId }
    });
  }, [flag]);

  const deleteFlagContext = useCallback(() => {
    if (
      !flag ||
      flag.context.__typename === 'User' ||
      deleteFlagStatus.loading ||
      deleteFlagContextStatus.loading
    ) {
      return;
    }

    return Promise.all([
      deleteFlagMut({ variables: { flagId: flag.id } }),
      deleteFlagContextMut({ variables: { contextId: flag.context.id } })
    ]);
  }, [flag]);

  const ignoreFlag = useCallback(() => {
    if (!flag || deleteFlagStatus.loading) {
      return;
    }

    return deleteFlagMut({ variables: { flagId: flag.id } });
  }, [flag]);

  return useMemo(() => {
    return {
      flag,
      deactivateFlaggedUser,
      deleteFlagContext,
      ignoreFlag
    };
  }, [flag, deactivateFlaggedUser, deleteFlagContext, ignoreFlag]);
};
