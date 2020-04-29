import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { UpdateProfileInput } from 'graphql/types.generated';
import { useNotifyGqlResponse } from 'fe/lib/helpers/notify';
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
  const notifyGqlResponse = useNotifyGqlResponse();
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
      }).then(notifyGqlResponse({ ctx: 'Profile update' })),
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
