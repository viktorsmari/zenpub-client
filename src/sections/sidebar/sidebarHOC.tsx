import { CreateCommunityPanelCreateMutationOperation } from 'HOC/modules/CreateCommunityPanel/createCommunityPanel.generated';
import {
  HeroCommunityFollowMutationOperation,
  HeroCommunityUnfollowMutationOperation
} from 'HOC/modules/HeroCommunity/getHeroCommunity.generated';
import * as React from 'react';
import { useGetSidebarQueryQuery } from '../../graphql/getSidebar.generated';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import Sidebar from '../sidebar';

interface Props {
  isOpen: boolean;
}

export const SidebarWrapper: React.FC<Props> = ({ isOpen }) => {
  const resp = useGetSidebarQueryQuery();
  useDynamicLinkOpResult<HeroCommunityUnfollowMutationOperation>(
    'heroCommunityUnfollow',
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
  useDynamicLinkOpResult<HeroCommunityFollowMutationOperation>(
    'heroCommunityFollow',
    () => {
      resp.refetch();
    },
    [resp.refetch]
  );
  return <Sidebar resp={resp} isOpen={isOpen} />;
};

export default SidebarWrapper;
