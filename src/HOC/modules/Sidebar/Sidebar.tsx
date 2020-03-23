import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import React, { FC, useMemo } from 'react';
import {
  CommunityPreview,
  Props as PropsUI,
  Sidebar as SidebarUI,
  Status as StatusUI
} from 'ui/modules/Sidebar/index';
import { SidebarMeUserFragment } from './Sidebar.generated';

export interface Sidebar {
  user: SidebarMeUserFragment;
}
export const Sidebar: FC<Sidebar> = ({ user }) => {
  const { communitiesPage } = useMyFollowedCommunities();
  const communities = useMemo(
    () =>
      communitiesPage.edges.map<CommunityPreview>(commFollow => {
        const { community } = commFollow;
        return {
          icon: community.icon || '',
          link: {
            url: `/communities/${community.id}`,
            external: !community.isLocal
          },
          name: community.name
        };
      }),
    [communitiesPage]
  );

  const propsUI = useMemo<PropsUI>(() => {
    const props: PropsUI = {
      status: StatusUI.Loaded,
      communities
    };
    return props;
  }, [communities]);
  return <SidebarUI {...propsUI} />;
};
