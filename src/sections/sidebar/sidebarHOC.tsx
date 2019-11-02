import * as React from 'react';
import Sidebar from './';
import { useGetSidebarQueryQuery } from '../../graphql/generated/getSidebar.generated';

export const SidebarWrapper: React.FC = () => {
  const resp = useGetSidebarQueryQuery();

  return <Sidebar resp={resp} />;
};

export default SidebarWrapper;
