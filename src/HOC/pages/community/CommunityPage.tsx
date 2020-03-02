import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityOutboxActivities';
import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { useCommunity } from 'fe/community/useCommunity';
import { useCommunityThreads } from 'fe/thread/community/useCommunityThreads';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunity } from 'HOC/modules/HeroCommunity/HeroCommuity';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { ThreadPreviewHOC } from 'HOC/modules/previews/thread/ThreadPreview';
import React, { FC, useMemo } from 'react';
import CommunityPageUI, { Props as CommunityProps } from 'ui/pages/community';
import { Box } from 'rebass/styled-components';

export enum CommunityPageTab {
  Activities,
  Collections,
  Discussions
}
export interface CommunityPage {
  communityId: Community['id'];
  tab: CommunityPageTab;
  basePath: string;
}

export const CommunityPage: FC<CommunityPage> = ({ communityId, basePath }) => {
  const { community, createThread } = useCommunity(communityId);
  const { threads } = useCommunityThreads(communityId);
  const { collections } = useCommunityCollections(communityId);
  const { activities } = useCommunityOutboxActivities(communityId);

  const newThreadFormik = useFormik<{ text: string }>({
    initialValues: { text: '' },
    onSubmit: ({ text }) => createThread(text)
  });

  const communityPageProps = useMemo<CommunityProps | null>(() => {
    const ActivitiesBox = (
      <>
        {activities.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );

    const CollectionsBox = (
      <>
        {collections.map(collection => (
          <Box mb={2}>
            <CollectionPreviewHOC
              collectionId={collection.id}
              key={collection.id}
            />
          </Box>
        ))}
      </>
    );

    const ThreadsBox = (
      <>
        {threads.map(thread => (
          <ThreadPreviewHOC threadId={thread.id} key={thread.id} />
        ))}
      </>
    );

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
      basePath,
      newThreadFormik: myFollow ? newThreadFormik : null
    };
    return props;
  }, [community, newThreadFormik, basePath]);

  return communityPageProps && <CommunityPageUI {...communityPageProps} />;
};
