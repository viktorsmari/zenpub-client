import React, { FC } from 'react';
import { Guest, Props } from 'ui/templates/guest';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';

export interface GuestTemplate {
  withoutHeader?: boolean;
}
export const GuestTemplate: FC<GuestTemplate> = ({
  children,
  withoutHeader = false
}) => {
  const headerProps: MainHeaderProps | undefined = withoutHeader
    ? undefined
    : {
        Search: <SearchBox />,
        user: null
      };
  const props: Props = {
    HeaderBox: headerProps && <MainHeader {...headerProps} />
  };
  return <Guest {...props}>{children}</Guest>;
};
