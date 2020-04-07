import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import React, { FC, useMemo } from 'react';
import {
  CommunityPreview,
  Props as PropsUI,
  Sidebar as SidebarUI,
  Status as StatusUI
} from 'ui/modules/Sidebar/index';
import {
  /* SidebarMeUserFragment, */ SidebarFollowedCommunityFragment
} from './Sidebar.generated';

export interface Sidebar {
  //FIXME: delete commented out stuff
  // user: SidebarMeUserFragment;
}
export const Sidebar: FC<Sidebar> = (/* { user } */) => {
  const { myFollowedCommunitiesPage } = useMyFollowedCommunities();
  const communities = useMemo(
    () =>
      myFollowedCommunitiesPage.edges
        .map(follow => follow.context)
        .filter(
          (context): context is SidebarFollowedCommunityFragment =>
            context.__typename === 'Community'
        )
        .map<CommunityPreview>(community => {
          return {
            icon: community.icon?.url || '',
            link: {
              url: `/communities/${community.id}`,
              external: !community.isLocal
            },
            name: community.name
          };
        }),
    [myFollowedCommunitiesPage]
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
