import React, { SFC, useMemo } from 'react';
import { Community } from 'graphql/types.generated';
import CommunityPage, { Props as CommunityProps } from 'ui/pages/community';
import { useCommunityPageQuery } from './CommunityPage.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { CollectionPreviewHOC } from 'HOC/modules/CollectionPreview/CollectionPreviewHOC';
import { HeroCommunityHOC } from 'HOC/modules/HeroCommunity/heroCommuityHOC';

export interface Props {
  id: Community['id'];
}
export const CommunityPageHOC: SFC<Props> = ({ id }) => {
  const communityQ = useCommunityPageQuery({ variables: { id } });
  const communityPageProps = useMemo<CommunityProps | null>(
    () => {
      if (
        communityQ.error ||
        communityQ.loading ||
        !communityQ.data ||
        !communityQ.data.community ||
        !communityQ.data.community.outbox ||
        !communityQ.data.community.outbox.edges ||
        !communityQ.data.community.collections ||
        !communityQ.data.community.collections.edges
      ) {
        return null;
      }
      const outboxEdges = communityQ.data.community.outbox.edges;
      const collectionEdges = communityQ.data.community.collections.edges;
      const ActivityBoxes = outboxEdges
        .map(edge => {
          if (!edge) {
            return null;
          }
          return <ActivityPreviewHOC activityId={edge.node.id} />;
        })
        .filter((_): _ is JSX.Element => !!_);
      const CollectionBoxes = collectionEdges
        .map(edge => {
          if (!edge) {
            return null;
          }
          return <CollectionPreviewHOC id={edge.node.id} />;
        })
        .filter((_): _ is JSX.Element => !!_);
      const HeroCommunityBox = <HeroCommunityHOC communityId={id} />;
      const props: CommunityProps = {
        ActivityBoxes,
        CollectionBoxes,
        HeroCommunityBox
      };
      return props;
    },
    [communityQ]
  );
  return communityPageProps && <CommunityPage {...communityPageProps} />;
};
