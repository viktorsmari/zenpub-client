import React, { FC, useMemo } from 'react';
import { useMe } from 'fe/session/useMe';

import { WithoutSidebar, Props } from 'ui/templates/withoutSidebar';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';
import { GuestTemplate } from '../Guest/Guest';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({
  children
}) => {
  const meQ = useMe();
  const withoutSidebarProps = useMemo<null | Props>(() => {
    const user = meQ.me?.user;
    if (!user) {
      return null;
    }
    const headerProps: MainHeaderProps = {
      Search: <SearchBox />,
      user: {
        logout: meQ.logout,
        icon: user.icon || '',
        link: `/user/${user.id}`,
        name: user.name || ''
      }
    };
    const props: Props = {
      HeaderBox: <MainHeader {...headerProps} />
    };
    return props;
  }, [meQ]);

  return withoutSidebarProps ? (
    <WithoutSidebar {...withoutSidebarProps}>{children}</WithoutSidebar>
  ) : (
    <GuestTemplate>{children}</GuestTemplate>
  );
};
