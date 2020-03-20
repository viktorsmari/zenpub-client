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
  const { communities: communitiesGQL } = useMyFollowedCommunities();
  const communities = useMemo(
    () =>
      communitiesGQL.map<CommunityPreview>(commGql => {
        return {
          icon: commGql.icon || '',
          link: {
            url: `/communities/${commGql.id}`,
            external: !commGql.isLocal
          },
          name: commGql.name
        };
      }),
    [communitiesGQL]
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
