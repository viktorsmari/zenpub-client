import { useCommunity } from 'fe/community/useCommunity';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunity } from 'HOC/modules/HeroCommunity/HeroCommuity';
import React, { SFC, useMemo } from 'react';
import CommunityPageUI, { Props as CommunityProps } from 'ui/pages/community';
import { CommunityPageActivities } from './CommunityPageActivities';
import { CommunityPageCollections } from './CommunityPageCollections';
import { CommunityPageThreads } from './CommunityPageThreads';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPage: SFC<Props> = ({ communityId }) => {
  const { community, createThread } = useCommunity(communityId);

  const newThreadFormik = useFormik<{ text: string }>({
    initialValues: { text: '' },
    onSubmit: ({ text }) => createThread(text)
  });

  const communityPageProps = useMemo<CommunityProps | null>(() => {
    const ActivitiesBox = <CommunityPageActivities communityId={communityId} />;

    const CollectionsBox = (
      <CommunityPageCollections communityId={communityId} />
    );

    const ThreadsBox = <CommunityPageThreads communityId={communityId} />;

    const HeroCommunityBox = <HeroCommunity communityId={communityId} />;

    const CreateCollectionPanel: CommunityProps['CreateCollectionPanel'] = ({
      done
    }) => <CreateCollectionPanelHOC done={done} communityId={communityId} />;

    const myFollow = community?.myFollow;

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

  return communityPageProps && <CommunityPageUI {...communityPageProps} />;
};
