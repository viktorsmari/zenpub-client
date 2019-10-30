import * as React from 'react';
import { useGetSidebarQueryQuery } from '../../generated/graphqlapollo';
import Sidebar from './';

export const SidebarWrapper: React.FC = () => {
  const resp = useGetSidebarQueryQuery();

  return <Sidebar resp={resp} />;
};

export default SidebarWrapper;
