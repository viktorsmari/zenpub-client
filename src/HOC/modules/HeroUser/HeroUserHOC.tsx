import { useFormik } from 'formik';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';
import React, {
  SFC,
  useMemo,
  useState,
  createContext,
  useContext
} from 'react';
import {
  HeroUser,
  Loaded,
  LoadedMe,
  LoadedOther,
  Loading,
  Props,
  Status
} from 'ui/modules/HeroUser';
import * as GQL from './HeroUser.generated';
import Maybe from 'graphql/tsutils/Maybe';

export interface HeroUserCtx {
  user: Maybe<GQL.HeroUserUserDataFragment>;
  me: Maybe<GQL.HeroUserMeDataFragment>;
  toggleFollow(): Promise<unknown> | void;
}
export const HeroUserCtx = createContext(
  alertUnimplementedCtx<HeroUserCtx>('HeroUserCtx')
);

export const HeroUserHOC: SFC = ({}) => {
  const { user, me, toggleFollow } = useContext(HeroUserCtx);
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: () => toggleFollow()
  });
  const userHeroPropsNoFormik = useMemo<
    Loading | LoadedMe | Omit<LoadedOther, 'toggleFollowFormik'>
  >(() => {
    if (!user) {
      return {
        status: Status.Loading
      };
    }
    const isMeAdmin = !!me && me.isInstanceAdmin;
    const isMe = !!me && me.user.id === user.id;
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
        isAdmin: isMeAdmin
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
  }, [me, user]);

  const userHeroProps: Props =
    userHeroPropsNoFormik.status === Status.Loaded && !userHeroPropsNoFormik.me
      ? {
          ...userHeroPropsNoFormik,
          toggleFollowFormik
        }
      : userHeroPropsNoFormik;

  return <HeroUser {...userHeroProps} />;
};
