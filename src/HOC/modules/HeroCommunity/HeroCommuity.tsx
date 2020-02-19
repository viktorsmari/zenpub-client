import { useCommunity } from 'fe/community/useCommunity';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import React, { SFC, useMemo } from 'react';
import HeroCommunityUI, {
  CommunityLoaded,
  CommunityLoading,
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

  const communityProps = useMemo<
    Omit<CommunityLoaded, 'toggleJoinFormik'> | CommunityLoading
  >(() => {
    if (!community) {
      return {
        status: Status.Loading
      };
    }

    const _communityProps: Omit<CommunityLoaded, 'toggleJoinFormik'> = {
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
      )
    };
    return _communityProps;
  }, [toggleJoin, community, canModify]);

  const heroProps = useMemo<HeroProps>(
    () => ({
      community: {
        ...communityProps,
        toggleJoinFormik
      }
    }),
    [communityProps, toggleJoinFormik]
  );

  return <HeroCommunityUI {...heroProps} />;
};
