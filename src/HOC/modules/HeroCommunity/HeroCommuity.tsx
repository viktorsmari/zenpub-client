import { useCommunity } from 'fe/community/useCommunity';
import { useMe } from 'fe/session/me';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import HeroCommunityUI, {
  Props as HeroProps,
  Status
} from 'ui/modules/HeroCommunity';
import { EditCommunityPanelHOC } from 'HOC/modules/EditCommunityPanel/editCommunityPanelHOC';
import { FeatureModalHOC } from 'HOC/modules/FeatureModal/FeatureModal';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';

export interface HeroCommunity {
  communityId: Community['id'];
}

export const HeroCommunity: FC<HeroCommunity> = ({ communityId }) => {
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
        flagId: (community.myFlag && community.myFlag!.id) || '',
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
            flagId={(community.myFlag && community.myFlag!.id) || ''}
          />
        ),
        FeaturedModal: ({ done }: { done(): unknown }) => (
          <FeatureModalHOC done={done} ctx={community} featureId={null} />
        )
      }
    };
    return props;
  }, [isAdmin, community, canModify, toggleJoinFormik]);

  return <HeroCommunityUI {...heroProps} />;
};
