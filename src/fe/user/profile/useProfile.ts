import { mnCtx } from 'fe/lib/graphql/ctx';
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
          icon: getMaybeUploadInput(icon, profileQ.data?.me?.user.icon?.url),
          image: getMaybeUploadInput(image, profileQ.data?.me?.user.image?.url)
        },
        context: mnCtx({ ctx: 'Profile update' })
      }),
    [updateProfileMutation, profileQ]
  );
  return useMemo(() => {
    const profile = profileQ.data?.me?.user;
    return {
      profile,
      updateProfile
    };
  }, [updateProfile, profileQ]);
};
