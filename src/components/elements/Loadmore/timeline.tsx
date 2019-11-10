import * as React from 'react';
import { SFC } from 'react';
import styled from '../../../themes/styled';
import { Trans } from '@lingui/macro';
import { Text } from 'rebass/styled-components';
interface Props {
  community: any;
  fetchMore: any;
}

const TimelineLoadMore: SFC<Props> = ({ fetchMore, community }) =>
  (community.inbox.pageInfo.startCursor === null &&
    community.inbox.pageInfo.endCursor === null) ||
  (community.inbox.pageInfo.startCursor &&
    community.inbox.pageInfo.endCursor === null) ? null : (
    <LoadMore
      onClick={() =>
        fetchMore({
          fetchPolicy: 'cache-first',
          variables: {
            end: community.inbox.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newNodes = fetchMoreResult.community.inbox.edges;
            const pageInfo = fetchMoreResult.community.inbox.pageInfo;
            return newNodes.length
              ? {
                  // Put the new comments at the end of the list and update `pageInfo`
                  // so we have the new `endCursor` and `hasNextPage` values
                  community: {
                    ...previousResult.community,
                    __typename: previousResult.community.__typename,
                    inbox: {
                      ...previousResult.community.inbox,
                      edges: [
                        ...previousResult.community.inbox.edges,
                        ...newNodes
                      ]
                    },
                    pageInfo
                  }
                }
              : {
                  community: {
                    ...previousResult.community,
                    __typename: previousResult.community.__typename,
                    inbox: {
                      ...previousResult.community.inbox,
                      edges: [...previousResult.community.inbox.edges]
                    },
                    pageInfo
                  }
                };
          }
        })
      }
    >
      <Trans>Load more</Trans>
    </LoadMore>
  );

export default TimelineLoadMore;

export const LoadMore = styled(Text)`
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 14px
  &:hover {
    background: ${props => props.theme.colors.lighter};
  }
`;
