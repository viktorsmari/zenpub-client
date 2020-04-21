import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { UpdateProfileInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useMyProfileQuery,
  useUpdateMyProfileMutation
} from './useProfile.generated';

export interface UpdateProfile {
  profile: UpdateProfileInput;
  icon: Maybe<File | string>;
  image: Maybe<File | string>;
}

export const useProfile = () => {
  const profileQ = useMyProfileQuery();
  const [updateProfileMutation] = useUpdateMyProfileMutation();

  const updateProfile = useCallback(
    ({ icon, image, profile }: UpdateProfile) =>
      updateProfileMutation({
        variables: {
          profile,
          icon: getMaybeUploadInput(icon),
          image: getMaybeUploadInput(image)
        }
      }),
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
