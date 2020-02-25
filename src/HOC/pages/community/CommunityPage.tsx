import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { CollectionPreviewHOC } from 'HOC/modules/CollectionPreview/CollectionPreviewHOC';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunity } from 'HOC/modules/HeroCommunity/HeroCommuity';
import React, { SFC, useMemo } from 'react';
import CommunityPageUI, { Props as CommunityProps } from 'ui/pages/community';
import {
  CommunityPageActivityBaseFragment,
  CommunityPageBaseFragment,
  CommunityPageCollectionBaseFragment,
  CommunityPageThreadFragment
} from './CommunityPage.generated';
import { ThreadActivityMock } from './ThreadActivityMock';
import Maybe from 'graphql/tsutils/Maybe';

export enum CommunityPageTab {
  Activities,
  Collections,
  Discussions
}
export interface CommunityPage {
  communityId: Community['id'];
  createThread(content: string): Promise<unknown>;
  tab: CommunityPageTab;
  community: Maybe<CommunityPageBaseFragment>;
  threads: CommunityPageThreadFragment[];
  collections: CommunityPageCollectionBaseFragment[];
  activities: CommunityPageActivityBaseFragment[];
  basePath: string;
}

export const CommunityPage: SFC<CommunityPage> = ({
  communityId,
  community,
  createThread,
  threads,
  collections,
  activities,
  basePath
}) => {
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
          <CollectionPreviewHOC id={collection.id} key={collection.id} />
        ))}
      </>
    );

    const ThreadsBox = (
      <>
        {threads.map(thread => (
          <ThreadActivityMock thread={thread} key={thread.id} />
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
