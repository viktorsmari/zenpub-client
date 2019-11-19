import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import { Flex, Box, Button } from 'rebass/styled-components';
import compose from 'recompose/compose';
import media from 'styled-media-query';
import CommunityCard from '../../components/elements/Community/Community';
import Loader from '../../components/elements/Loader/Loader';
import CommunitiesLoadMore from '../../components/elements/Loadmore/joinedCommunities';
// import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';
import { Me } from '../../graphql/types';

const {
  getFollowedCommunitiesQuery
} = require('../../graphql/getFollowedCommunities.graphql');

interface Data extends QueryControls {
  me: Me;
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
            {this.props.data.me.user.followedCommunities.edges.map(
              (community, i) => (
                <CommunityCard
                  key={i}
                  summary={community!.node.community.summary!}
                  title={community!.node.community.name}
                  collectionsCount={
                    community!.node.community.collections.totalCount
                  }
                  icon={
                    community!.node.community.icon ||
                    community!.node.community.image ||
                    ''
                  }
                  followed={
                    community!.node.community.myFollow!.id ? true : false
                  }
                  id={community!.node.community.id}
                  externalId={community!.node.community.canonicalUrl!}
                  followersCount={
                    community!.node.community.followers.totalCount
                  }
                  threadsCount={community!.node.community.threads.totalCount}
                />
              )
            )}
          </List>
          <CommunitiesLoadMore
            me
            fetchMore={this.props.data.fetchMore}
            communities={this.props.data.me.user.followedCommunities}
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
>(getFollowedCommunitiesQuery, {
  options: (props: Props) => ({
    fetchPolicy: 'cache-first',
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(withGetCommunities)(CommunitiesJoined);
