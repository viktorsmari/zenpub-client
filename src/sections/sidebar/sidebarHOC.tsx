import * as React from 'react';
import Sidebar from './';
import { useGetSidebarQueryQuery } from '../../graphql/generated/getSidebar.generated';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';

export const SidebarWrapper: React.FC = () => {
  const resp = useGetSidebarQueryQuery();
  const _handle = React.useCallback(
    () => () => {
      resp.refetch();
    },
    [resp.refetch]
  );
  useInterceptor({ operation: 'deleteCommunity', request: _handle });
  useInterceptor({ operation: 'createCommunity', request: _handle });
  useInterceptor({ operation: 'joinCommunity', request: _handle });
  useInterceptor({ operation: 'undoJoinCommunity', request: _handle });
  return <Sidebar resp={resp} />;
};

export default SidebarWrapper;
