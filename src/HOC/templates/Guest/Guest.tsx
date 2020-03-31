import React, { FC } from 'react';
import { Guest, Props } from 'ui/templates/guest';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';

export interface GuestTemplate {}
export const GuestTemplate: FC<GuestTemplate> = ({ children }) => {
  const headerProps: MainHeaderProps = {
    Search: <SearchBox />,
    user: null
  };
  const props: Props = {
    HeaderBox: <MainHeader {...headerProps} />
  };
  return <Guest {...props}>{children}</Guest>;
};
