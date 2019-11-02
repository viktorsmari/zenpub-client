import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import { Flex, Box, Button } from 'rebass';
import compose from 'recompose/compose';
import media from 'styled-media-query';
import CommunityCard from '../../components/elements/Community/Community';
import Loader from '../../components/elements/Loader/Loader';
import CommunitiesLoadMore from '../../components/elements/Loadmore/joinedCommunities';
// import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';

const {
  getJoinedCommunitiesQuery
} = require('../../graphql/getJoinedCommunities.graphql');

interface Data extends QueryControls {
  me: {
    user: {
      joinedCommunities: {
        edges: any[];
        pageInfo: {
          startCursor: number;
          endCursor: number;
        };
      };
    };
  };
}

interface Props {
  data: Data;
  handleNewCommunity(): void;
}

class CommunitiesJoined extends React.Component<Props> {
  render() {
    return this.props.data.error ? (
      <span>
        <Trans>Error loading communities</Trans>
      </span>
    ) : this.props.data.loading ? (
      <Loader />
    ) : (
      <>
        {/* <Helmet>
          <title>{APP_NAME} > Joined communities</title>
        </Helmet> */}
        <Box>
          <ButtonWrapper>
            <CreateCollection
              p={3}
              onClick={() => this.props.handleNewCommunity()}
              m={3}
            >
              <Trans>Create a new community</Trans>
            </CreateCollection>
          </ButtonWrapper>
          <List p={2}>
            {this.props.data.me.user.joinedCommunities.edges.map(
              (community, i) => (
                <CommunityCard
                  key={i}
                  summary={community.node.summary}
                  title={community.node.name}
                  collectionsCount={community.node.collections.totalCount}
                  icon={community.node.icon || ''}
                  followed={community.node.followed}
                  id={community.node.localId}
                  externalId={community.node.id}
                  followersCount={community.node.members.totalCount}
                  threadsCount={community.node.threads.totalCount}
                />
              )
            )}
          </List>
          <CommunitiesLoadMore
            me
            fetchMore={this.props.data.fetchMore}
            communities={this.props.data.me.user.joinedCommunities}
          />
        </Box>
      </>
    );
  }
}

const ButtonWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;

const CreateCollection = styled(Button)`
  flex: 1;
  background: none;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  border: 1px solid ${props => props.theme.colors.lightgray} !important;
  background: none;
  font-weight: 600;
  color: ${props => props.theme.colors.darkgray} !important;
  cursor: pointer;
  height: 50px;
  text-transform: uppercase;
  font-size: 14px !important;
  &:hover {
    background: ${props => props.theme.colors.lightgray};
  }
`;

const List = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  `};
`;

const withGetCommunities = graphql<
  {},
  {
    data: {
      me: any;
    };
  }
>(getJoinedCommunitiesQuery, {
  options: (props: Props) => ({
    fetchPolicy: 'cache-first',
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(withGetCommunities)(CommunitiesJoined);
