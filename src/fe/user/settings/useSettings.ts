import { useCallback, useMemo } from 'react';
import {
  UpdateMyProfileMutationVariables,
  useMyProfileQuery,
  useUpdateMyProfileMutation
} from './useSettings.generated';

export const useProfile = () => {
  const profileQ = useMyProfileQuery();
  const [
    updateProfileMutation /* , updateProfileMutationStatus */
  ] = useUpdateMyProfileMutation();
  const updateProfile = useCallback(
    (profile: UpdateMyProfileMutationVariables['profile']) =>
      updateProfileMutation({ variables: { profile } }),
    [updateProfileMutation]
  );

  return useMemo(() => {
    const profile = profileQ.data?.me?.user;
    return {
      profile,
      updateProfile
    };
  }, [updateProfile, profileQ]);
};
