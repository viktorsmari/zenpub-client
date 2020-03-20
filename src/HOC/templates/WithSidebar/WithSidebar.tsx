import { useMe } from 'fe/session/me';
import { Sidebar } from 'HOC/modules/Sidebar/Sidebar';
import React, { FC, useMemo } from 'react';
import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import { SidebarProps, WithSidebar } from 'ui/templates/withSidebar';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';
import { SearchBox } from 'react-instantsearch-dom';

export interface WithSidebarTemplate {}
export const WithSidebarTemplate: FC<WithSidebarTemplate> = ({ children }) => {
  const meQ = useMe();
  const withSidebarProps = useMemo<null | SidebarProps>(() => {
    const user = meQ.me?.user;
    if (!user) {
      return null;
    }
    const sidebarHocProps: Sidebar = {
      user
    };
    const headerProps: MainHeaderProps = {
      Search: <SearchBox />,
      user: {
        logout: meQ.logout,
        icon: user.icon || '',
        link: `user/${user.id}`,
        name: user.displayUsername
      }
    };
    const props: SidebarProps = {
      SidebarBox: <Sidebar {...sidebarHocProps} />,
      HeaderBox: <MainHeader {...headerProps} />
    };
    return props;
  }, [meQ]);
  return withSidebarProps ? (
    <WithSidebar {...withSidebarProps}>{children}</WithSidebar>
  ) : (
    <WithoutSidebarTemplate>{children}</WithoutSidebarTemplate>
  );
};
