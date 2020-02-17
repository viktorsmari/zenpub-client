import React, {
  SFC,
  useContext,
  createContext,
  useMemo,
  useState
} from 'react';
import { User } from 'graphql/types.generated';
import {
  HeroUser,
  Props,
  Status,
  Loaded,
  LoadedMe,
  LoadedOther
} from 'ui/modules/HeroUser';
import * as GQL from './HeroUser.generated';
import { useFormik } from 'formik';

export interface HeroUserCtx {
  useHeroUserFollowMutation: typeof GQL.useHeroUserFollowMutation;
  useHeroUserMeQuery: typeof GQL.useHeroUserMeQuery;
  useHeroUserDataQuery: typeof GQL.useHeroUserDataQuery;
  useHeroUserUnfollowMutation: typeof GQL.useHeroUserUnfollowMutation;
}
export const HeroUserCtx = createContext<HeroUserCtx>({
  useHeroUserFollowMutation: GQL.useHeroUserFollowMutation,
  useHeroUserDataQuery: GQL.useHeroUserDataQuery,
  useHeroUserMeQuery: GQL.useHeroUserMeQuery,
  useHeroUserUnfollowMutation: GQL.useHeroUserUnfollowMutation
});

export interface HeroUserHOC {
  userId: User['id'];
}

export const HeroUserHOC: SFC<HeroUserHOC> = ({ userId }) => {
  const {
    useHeroUserFollowMutation,
    useHeroUserUnfollowMutation,
    useHeroUserMeQuery,
    useHeroUserDataQuery
  } = useContext(HeroUserCtx);
  const [follow, followResult] = useHeroUserFollowMutation();
  const [unfollow, unfollowResult] = useHeroUserUnfollowMutation();

  const meQ = useHeroUserMeQuery();
  const userQ = useHeroUserDataQuery({ variables: { userId } });
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const toggleJoinFormik = useFormik({
    initialValues: {},
    onSubmit: () => {
      if (
        !userQ.data ||
        !userQ.data.user ||
        followResult.loading ||
        unfollowResult.loading
      ) {
        return;
      }
      const user = userQ.data.user;
      if (user.myFollow) {
        return unfollow({ variables: { userId: user.myFollow.id } });
      } else {
        return follow({ variables: { userId: user.id } });
      }
    }
  });
  const userHeroProps = useMemo<Props | null>(
    () => {
      if (!meQ.data || !userQ.data || !userQ.data.user) {
        return {
          status: Status.Loading
        };
      }
      const { user } = userQ.data;
      const me = meQ.data && meQ.data.me;
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
    [meQ, userQ, toggleJoinFormik]
  );
  return userHeroProps && <HeroUser {...userHeroProps} />;
};
