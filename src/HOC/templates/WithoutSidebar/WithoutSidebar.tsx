import React, { FC } from 'react';
import { WithoutSidebar, Props } from 'ui/templates/withoutSidebar';
import { SearchBox } from 'react-instantsearch-dom';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({
  children
}) => {
  const props: Props = {
    HeaderBox: <SearchBox />
  };
  return <WithoutSidebar {...props}>{children}</WithoutSidebar>;
};
