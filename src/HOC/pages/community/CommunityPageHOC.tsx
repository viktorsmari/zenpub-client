import { useFormik } from 'formik';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunityDataFragment } from 'HOC/modules/HeroCommunity/getHeroCommunity.generated';
import { HeroCommunityHOC } from 'HOC/modules/HeroCommunity/heroCommuityHOC';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import CommunityPage, { Props as CommunityProps } from 'ui/pages/community';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';
import { CommunityPageActivities } from './CommunityPageActivities';
import { CommunityPageCollections } from './CommunityPageCollections';
import { CommunityPageThreads } from './CommunityPageThreads';
import Maybe from 'graphql/tsutils/Maybe';

export interface Props {}

export interface CommunityPageCtx {
  community: Maybe<HeroCommunityDataFragment>;
  createThread(_: { text: string }): Promise<unknown> | void;
}
export const CommunityPageCtx = createContext(
  alertUnimplementedCtx<CommunityPageCtx>('CommunityPageCtx')
);

export const CommunityPageHOC: SFC<Props> = () => {
  const { community, createThread } = useContext(CommunityPageCtx);
  const newThreadFormik = useFormik<{ text: string }>({
    initialValues: { text: '' },
    onSubmit: createThread
  });

  const communityPageProps = useMemo<CommunityProps | null>(() => {
    if (!community) {
      return null;
    }
    const communityId = community.id;
    const ActivitiesBox = <CommunityPageActivities />;

    const CollectionsBox = <CommunityPageCollections />;

    const ThreadsBox = <CommunityPageThreads />;

    const HeroCommunityBox = <HeroCommunityHOC />;
    const CreateCollectionPanel: CommunityProps['CreateCollectionPanel'] = ({
      done
    }) => (
      // <CreateCollectionPanelCtx.Provider value={{ refetchQueries }}>
      <CreateCollectionPanelHOC done={done} communityId={communityId} />
      // </CreateCollectionPanelCtx.Provider>
    );
    const myFollow = community.myFollow;
    const props: CommunityProps = {
      CreateCollectionPanel,
      ActivitiesBox,
      CollectionsBox,
      HeroCommunityBox,
      ThreadsBox,
      basePath: `/communities/${communityId}`,
      newThreadFormik: myFollow ? newThreadFormik : null
    };
    return props;
  }, [community, newThreadFormik]);
  return communityPageProps && <CommunityPage {...communityPageProps} />;
};
