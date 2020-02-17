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
  Props,
  Status
} from 'ui/modules/HeroUser';
import * as GQL from './HeroUser.generated';

export interface HeroUserCtx {
  user: GQL.HeroUserUserDataFragment | null;
  me: GQL.HeroUserMeDataFragment | null;
  toggleFollow(): Promise<unknown>;
}
export const HeroUserCtx = createContext(
  alertUnimplementedCtx<HeroUserCtx>('HeroUserCtx')
);

export const HeroUserHOC: SFC = ({}) => {
  const { user, me, toggleFollow } = useContext(HeroUserCtx);
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const toggleJoinFormik = useFormik({
    initialValues: {},
    onSubmit: toggleFollow
  });
  const userHeroProps = useMemo<Props | null>(
    () => {
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
        const loadedOtherProps: Omit<LoadedOther, keyof Loaded> = {
          following: !!user.myFollow,
          isOpenDropdown,
          setOpenDropdown,
          toggleJoin: toggleJoinFormik
        };
        const props: Props = {
          me: isMe,
          ...loadedProps,
          ...loadedOtherProps
        };
        return props;
      }
    },
    [me, user, toggleJoinFormik]
  );
  return userHeroProps && <HeroUser {...userHeroProps} />;
};
