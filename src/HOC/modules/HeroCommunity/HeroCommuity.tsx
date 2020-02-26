import { useCommunity } from 'fe/community/useCommunity';
import { useMe } from 'fe/session/me';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import React, { SFC, useMemo } from 'react';
import HeroCommunityUI, {
  Props as HeroProps,
  Status
} from 'ui/modules/HeroCommunity';
import { EditCommunityPanelHOC } from '../EditCommunityPanel/editCommunityPanelHOC';
import { FeatureModalHOC } from '../FeatureModal/FeatureModal';
import { FlagModalHOC } from '../FlagModal/flagModalHOC';

export interface HeroCommunity {
  communityId: Community['id'];
}

export const HeroCommunity: SFC<HeroCommunity> = ({ communityId }) => {
  const { isAdmin } = useMe();
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
        isAdmin,
        following: !!community.myFollow,
        flagged: !!community.myFlag,
        icon: community.icon || '',
        name: community.name,
        fullName: community.displayUsername,
        totalMembers: community.followerCount || 0,
        summary: community.summary || '',
        toggleJoinFormik,
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
        FeaturedModal: ({ done }: { done(): unknown }) => (
          <FeatureModalHOC done={done} ctx={community} isFeatured={false} />
        )
      }
    };
    return props;
  }, [isAdmin, community, canModify, toggleJoinFormik]);

  return <HeroCommunityUI {...heroProps} />;
};
