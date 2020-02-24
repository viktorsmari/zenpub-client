import { useCommunity } from 'fe/community/useCommunity';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import React, { SFC, useMemo } from 'react';
import HeroCommunityUI, {
  Props as HeroProps,
  Status
} from 'ui/modules/HeroCommunity';
import { EditCommunityPanelHOC } from '../EditCommunityPanel/editCommunityPanelHOC';
import { FlagModalHOC } from '../FlagModal/flagModalHOC';

export interface HeroCommunity {
  communityId: Community['id'];
}

export const HeroCommunity: SFC<HeroCommunity> = ({ communityId }) => {
  const { toggleJoin, community, canModify } = useCommunity(communityId);

  const toggleJoinFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: toggleJoin
  });

  const heroProps = useMemo<HeroProps>(() => {
    if (!community) {
      const props: HeroProps = {
        community: {
          status: Status.Loading
        }
      };
      return props;
    }

    const props: HeroProps = {
      community: {
        status: Status.Loaded,
        canModify,
        following: !!community.myFollow,
        flagged: !!community.myFlag,
        icon: community.icon || '',
        name: community.name,
        fullName: community.displayUsername,
        totalMembers: community.followerCount || 0,
        summary: community.summary || '',
        EditCommunityPanel: ({ done }) => (
          <EditCommunityPanelHOC done={done} communityId={community.id} />
        ),
        FlagModal: ({ done }) => (
          <FlagModalHOC
            done={done}
            contextId={community.id}
            flagged={!!community.myFlag}
          />
        ),
        toggleJoinFormik
      }
    };
    return props;
  }, [toggleJoin, community, canModify, toggleJoinFormik]);

  return <HeroCommunityUI {...heroProps} />;
};
