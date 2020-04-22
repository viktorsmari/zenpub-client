import { useMe } from 'fe/session/useMe';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import React, { FC, useMemo } from 'react';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';

export interface MainHeaderHOC {
  toggleSideBar(): unknown;
}
export const MainHeaderHOC: FC<MainHeaderHOC> = ({ toggleSideBar }) => {
  const meQ = useMe();
  const user = meQ.me?.user;
  const headerProps = useMemo<MainHeaderProps>(() => {
    const props: MainHeaderProps = {
      Search: <SearchBox />,
      user: user
        ? {
            logout: meQ.logout,
            icon: user.icon?.url || '',
            link: `/user/${user.id}`,
            name: user.name || ''
          }
        : null,
      toggleSideBar
    };
    return props;
  }, [user, toggleSideBar]);
  return <MainHeader {...headerProps} />;
};
