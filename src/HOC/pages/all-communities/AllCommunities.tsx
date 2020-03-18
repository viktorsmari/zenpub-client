import { useAllCommunities } from 'fe/community/all/useAllCommunities';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import React, { FC, useMemo } from 'react';
import {
  AllCommunities as AllCommunitiesUI,
  Props as AllCommunitiesUIProps
} from 'ui/pages/allCommunities';

export interface AllCommunitiesPage {}
export const AllCommunitiesPage: FC<AllCommunitiesPage> = () => {
  const allCommunities = useAllCommunities();
  const allCommunitiesUIProps = useMemo<AllCommunitiesUIProps>(() => {
    const CommunitiesBoxes = (
      <>
        {allCommunities.list.map(communityPreview => (
          <CommunityPreviewHOC communityId={communityPreview.id} />
        ))}
      </>
    );
    const props: AllCommunitiesUIProps = {
      CommunitiesBoxes
    };

    return props;
  }, [allCommunities]);

  return <AllCommunitiesUI {...allCommunitiesUIProps} />;
};
