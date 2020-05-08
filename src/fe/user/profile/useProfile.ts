import { mnCtx } from 'fe/lib/graphql/ctx';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { UpdateProfileInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useMyProfileQuery,
  useUpdateMyProfileMutation
} from './useProfile.generated';
import { MoodleLMSParams } from 'fe/lib/moodleLMS/moodleLMSintegration';
import {
  withEncodedExtraInfo,
  WithExtraInfo
} from 'fe/lib/extraInfo/extraInfo';

type UserProfileExtraInfo = {
  LMS?: MoodleLMSParams;
};

export type UpdateProfileInputWithEI = WithExtraInfo<
  UpdateProfileInput,
  UserProfileExtraInfo
>;

export interface UpdateProfile {
  profile: UpdateProfileInputWithEI;
  icon?: Maybe<File | string>;
  image?: Maybe<File | string>;
}
export const useProfile = () => {
  const profileQ = useMyProfileQuery();
  const [updateProfileMutation] = useUpdateMyProfileMutation();

  const updateProfile = useCallback(
    ({ icon, image, profile }: UpdateProfile) =>
      updateProfileMutation({
        variables: {
          profile: withEncodedExtraInfo(profile, profileQ.data?.me?.user),
          icon: getMaybeUploadInput(icon, profileQ.data?.me?.user.icon?.url),
          image: getMaybeUploadInput(image, profileQ.data?.me?.user.image?.url)
        },
        context: mnCtx({ ctx: 'Profile update' })
      }),
    [updateProfileMutation, profileQ]
  );
  return useMemo(() => {
    const user = profileQ.data?.me?.user;
    const profile = user as Maybe<
      WithExtraInfo<typeof user, UserProfileExtraInfo>
    >;
    const loading = profileQ.loading;

    return {
      loading,
      profile,
      updateProfile
    };
  }, [updateProfile, profileQ]);
};
