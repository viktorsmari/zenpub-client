import { useFormik } from 'formik';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import HeroCommunity, {
  Props as HeroProps,
  Status,
  CommunityLoaded,
  CommunityLoading
} from 'ui/modules/HeroCommunity';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';
import { EditCommunityPanelHOC } from '../EditCommunityPanel/editCommunityPanelHOC';
import { FlagModalHOC } from '../FlagModal/flagModalHOC';
import * as GQL from './getHeroCommunity.generated';

export interface Props {}

export interface HeroCommunityCtx {
  community: GQL.HeroCommunityDataFragment | null;
  me: GQL.HeroCommunityMeDataFragment | null;
  toggleJoin(): Promise<unknown> | void;
}
export const HeroCommunityCtx = createContext(
  alertUnimplementedCtx<HeroCommunityCtx>('HeroCommunityCtx')
);

export const HeroCommunityHOC: SFC<Props> = () => {
  const { community, me, toggleJoin } = useContext(HeroCommunityCtx);

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
    const canModify =
      !!me && !!community.creator && me.user.id === community.creator.id;

    const _communityProps: Omit<CommunityLoaded, 'toggleJoinFormik'> = {
      status: Status.Loaded,
      canModify,
      following: !!community.myFollow,
      flagged: !!community.myFlag,
      icon: community.icon || '',
      name: community.name,
      fullName: community.displayUsername,
      totalMembers:
        (community.followers && community.followers.totalCount) || NaN,
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
  }, [community, me]);

  const heroProps = useMemo<HeroProps>(
    () => ({
      community: {
        ...communityProps,
        toggleJoinFormik
      }
    }),
    [communityProps, toggleJoinFormik]
  );

  return <HeroCommunity {...heroProps} />;
};
