import * as React from 'react';
import Sidebar from './';
import { useGetSidebarQueryQuery } from '../../graphql/generated/getSidebar.generated';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';

interface Props {
  isOpen: boolean;
}

export const SidebarWrapper: React.FC<Props> = ({ isOpen }) => {
  const resp = useGetSidebarQueryQuery();
  const _handle = React.useCallback(
    () => () => {
      resp.refetch();
    },
    [resp.refetch]
  );
  useInterceptor({ operation: 'delete', request: _handle });
  useInterceptor({ operation: 'createCommunity', request: _handle });
  useInterceptor({ operation: 'follow', request: _handle });
  useInterceptor({ operation: 'delete', request: _handle });
  return <Sidebar resp={resp} isOpen={isOpen} />;
};

export default SidebarWrapper;
