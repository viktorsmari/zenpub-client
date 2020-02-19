import { useUser } from 'fe/user/useUser';
import { useFormik } from 'formik';
import { User } from 'graphql/types.generated';
import React, { SFC, useMemo, useState } from 'react';
import {
  HeroUser as HeroUserUI,
  Loaded,
  LoadedMe,
  LoadedOther,
  Loading,
  Props,
  Status
} from 'ui/modules/HeroUser';

export interface HeroUser {
  userId: User['id'];
}
export const HeroUser: SFC<HeroUser> = ({ userId }) => {
  const { user, isAdmin, isMe, toggleFollow } = useUser(userId);
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: toggleFollow
  });
  const userHeroPropsNoFormik = useMemo<
    Loading | LoadedMe | Omit<LoadedOther, 'toggleFollowFormik'>
  >(() => {
    if (!user) {
      return {
        status: Status.Loading
      };
    }
    const loadedProps: Omit<Loaded, 'me'> = {
      status: Status.Loaded,
      displayUsername: user.displayUsername,
      icon: user.icon || '',
      image: user.image || '',
      location: user.location || '',
      name: user.name || '',
      summary: user.summary || ''
    };
    if (isMe) {
      const loadedMeProps: Omit<LoadedMe, keyof Loaded> = {
        isAdmin: isAdmin
      };
      const props: Props = {
        me: isMe,
        ...loadedProps,
        ...loadedMeProps
      };
      return props;
    } else {
      const loadedOtherProps: Omit<
        LoadedOther,
        keyof Loaded | 'toggleFollowFormik'
      > = {
        following: !!user.myFollow,
        isOpenDropdown,
        setOpenDropdown
      };
      const props: Omit<LoadedOther, 'toggleFollowFormik'> = {
        me: isMe,
        ...loadedProps,
        ...loadedOtherProps
      };
      return props;
    }
  }, [isMe, user]);

  const userHeroProps: Props =
    userHeroPropsNoFormik.status === Status.Loaded && !userHeroPropsNoFormik.me
      ? {
          ...userHeroPropsNoFormik,
          toggleFollowFormik
        }
      : userHeroPropsNoFormik;

  return <HeroUserUI {...userHeroProps} />;
};
