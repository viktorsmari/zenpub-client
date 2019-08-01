import * as React from 'react';
import { SFC } from 'react';
import { Trans } from '@lingui/macro';
import { LoadMore } from './timeline';

interface Props {
  localInstance: any;
  fetchMore: any;
}

const TimelineLoadMore: SFC<Props> = ({ fetchMore, localInstance }) =>
  (localInstance.pageInfo.startCursor === null &&
    localInstance.pageInfo.endCursor === null) ||
  (localInstance.pageInfo.startCursor &&
    localInstance.pageInfo.endCursor === null) ? null : (
    <LoadMore
      onClick={() =>
        fetchMore({
          fetchPolicy: 'cache-first',
          variables: {
            end: localInstance.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newNodes = fetchMoreResult.localInstance.nodes;
            const pageInfo = fetchMoreResult.localInstance.pageInfo;
            return newNodes.length
              ? {
                  // Put the new comments at the end of the list and update `pageInfo`
                  // so we have the new `endCursor` and `hasNextPage` values
                  localInstance: {
                    ...previousResult.localInstance,
                    __typename: previousResult.localInstance.__typename,
                    nodes: [
                        ...previousResult.localInstance.nodes,
                        ...newNodes
                      ],
                    pageInfo
                  }
                }
              : {
                  localInstance: {
                    ...previousResult.localInstance,
                    __typename: previousResult.localInstance.__typename,
                    nodes: [...previousResult.community.inbox.edges]
                    },
                    pageInfo
                  }
          }
        })
      }
    >
      <Trans>Load more</Trans>
    </LoadMore>
  );

export default TimelineLoadMore;
