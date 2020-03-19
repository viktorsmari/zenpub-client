import React, { FC } from 'react';
import { WithoutSidebar } from 'ui/templates/withoutSidebar';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({
  children
}) => {
  return <WithoutSidebar>{children}</WithoutSidebar>;
};
