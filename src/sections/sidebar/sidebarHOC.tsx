import { CreateCommunityPanelCreateMutationOperation } from 'HOC/modules/CreateCommunityPanel/createCommunityPanel.generated';
import {
  HeroCommunityJoinMutationOperation,
  HeroCommunityUnjoinMutationOperation
} from 'context/hocs/modules/HeroCommunity/HeroCommunityCtx.generated';
import * as React from 'react';
import { useGetSidebarQueryQuery } from '../../graphql/getSidebar.generated';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import Sidebar from '../sidebar';

interface Props {
  isOpen: boolean;
}

export const SidebarWrapper: React.FC<Props> = ({ isOpen }) => {
  const resp = useGetSidebarQueryQuery();
  useDynamicLinkOpResult<HeroCommunityUnjoinMutationOperation>(
    'heroCommunityUnjoin',
    () => {
      resp.refetch();
    },
    [resp.refetch]
  );
  useDynamicLinkOpResult<CreateCommunityPanelCreateMutationOperation>(
    'createCommunityPanelCreate',
    () => {
      resp.refetch();
    },
    [resp.refetch]
  );
  useDynamicLinkOpResult<HeroCommunityJoinMutationOperation>(
    'heroCommunityJoin',
    () => {
      resp.refetch();
    },
    [resp.refetch]
  );
  return <Sidebar resp={resp} isOpen={isOpen} />;
};

export default SidebarWrapper;
