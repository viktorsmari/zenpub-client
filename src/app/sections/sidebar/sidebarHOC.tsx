import * as React from 'react';
import Sidebar from '.';
import { useGetSidebarQueryQuery } from '../../../common/graphql/generated/getSidebar.generated';
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

  useInterceptor(
    React.useMemo(() => ({ operation: 'delete', request: _handle }), [_handle])
  );
  useInterceptor(
    React.useMemo(() => ({ operation: 'createCommunity', request: _handle }), [
      _handle
    ])
  );
  useInterceptor(
    React.useMemo(() => ({ operation: 'follow', request: _handle }), [_handle])
  );
  useInterceptor(
    React.useMemo(() => ({ operation: 'delete', request: _handle }), [_handle])
  );
  return <Sidebar resp={resp} isOpen={isOpen} />;
};

export default SidebarWrapper;
