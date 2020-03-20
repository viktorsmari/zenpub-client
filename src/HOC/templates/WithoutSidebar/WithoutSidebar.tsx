import React, { FC } from 'react';
import { WithoutSidebar, Props } from 'ui/templates/withoutSidebar';
import { SearchBox } from 'react-instantsearch-dom';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({
  children
}) => {
  const headerProps: MainHeaderProps = {
    Search: <SearchBox />,
    user: null
  };
  const props: Props = {
    HeaderBox: <MainHeader {...headerProps} />
  };
  return <WithoutSidebar {...props}>{children}</WithoutSidebar>;
};
