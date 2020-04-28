import { MainHeaderHOC } from 'HOC/modules/previews/Header/Header';
import React, { FC } from 'react';
import { Guest, Props } from 'ui/templates/guest';

export interface GuestTemplate {
  withoutHeader?: boolean;
}
export const GuestTemplate: FC<GuestTemplate> = ({
  children,
  withoutHeader = false
}) => {
  const props: Props = {
    HeaderBox: withoutHeader ? undefined : MainHeaderHOC
  };
  return <Guest {...props}>{children}</Guest>;
};
