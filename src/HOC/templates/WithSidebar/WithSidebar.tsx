import { useMe } from 'fe/session/me';
import { Sidebar } from 'HOC/modules/Sidebar/Sidebar';
import React, { FC, useMemo } from 'react';
import { WithoutSidebar } from 'ui/templates/withoutSidebar';
import { SidebarProps, WithSidebar } from 'ui/templates/withSidebar';

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
    const props: SidebarProps = {
      SidebarBox: <Sidebar {...sidebarHocProps} />
    };
    return props;
  }, [meQ]);
  return withSidebarProps ? (
    <WithSidebar {...withSidebarProps}>{children}</WithSidebar>
  ) : (
    <WithoutSidebar>{children}</WithoutSidebar>
  );
};
