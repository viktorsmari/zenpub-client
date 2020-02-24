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
  ComunityPageThreadFragment
} from './CommunityPage.generated';
import { ThreadActivity } from './ThreadActivity';
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
  threads: ComunityPageThreadFragment[];
  collections: CommunityPageCollectionBaseFragment[];
  activities: CommunityPageActivityBaseFragment[];
}

export const CommunityPage: SFC<CommunityPage> = ({
  communityId,
  community,
  createThread,
  threads,
  collections,
  activities
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
          <ThreadActivity thread={thread} key={thread.id} />
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
      basePath: `/communities/${communityId}`,
      newThreadFormik: myFollow ? newThreadFormik : null
    };
    return props;
  }, [community, newThreadFormik]);

  return communityPageProps && <CommunityPageUI {...communityPageProps} />;
};
