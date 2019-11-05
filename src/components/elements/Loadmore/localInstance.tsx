import * as React from 'react';
import { SFC } from 'react';
import { Trans } from '@lingui/macro';
import { LoadMore } from './timeline';

interface Props {
  localActivities: any;
  fetchMore: any;
}

const TimelineLoadMore: SFC<Props> = ({
  fetchMore,
  localActivities: localActivities
}) =>
  (localActivities.pageInfo.startCursor === null &&
    localActivities.pageInfo.endCursor === null) ||
  (localActivities.pageInfo.startCursor &&
    localActivities.pageInfo.endCursor === null) ? null : (
    <LoadMore
      onClick={() =>
        fetchMore({
          fetchPolicy: 'cache-first',
          variables: {
            end: localActivities.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newNodes = fetchMoreResult.localActivities.nodes;
            const pageInfo = fetchMoreResult.localActivities.pageInfo;
            return newNodes.length
              ? {
                  // Put the new comments at the end of the list and update `pageInfo`
                  // so we have the new `endCursor` and `hasNextPage` values
                  localActivities: {
                    ...previousResult.localActivities,
                    __typename: previousResult.localActivities.__typename,
                    nodes: [
                      ...previousResult.localActivities.nodes,
                      ...newNodes
                    ],
                    pageInfo
                  }
                }
              : {
                  localActivities: {
                    ...previousResult.localActivities,
                    __typename: previousResult.localActivities.__typename,
                    nodes: [...previousResult.community.inbox.edges]
                  },
                  pageInfo
                };
          }
        })
      }
    >
      <Trans>Load more</Trans>
    </LoadMore>
  );

export default TimelineLoadMore;
