import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, QueryControls } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { compose, withHandlers, withState } from 'recompose';
import CollectionCard from '../../components/elements/Collection/Collection';
import Loader from '../../components/elements/Loader/Loader';
import CollectionsLoadMore from '../../components/elements/Loadmore/followingCollections';
import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';

const {
  getFollowedCollections
} = require('../../graphql/getFollowedCollections.graphql');

interface Data extends QueryControls {
  me: {
    user: {
      followingCollections: {
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
  handleCollection: any;
}

class FollowingCollectionsComponent extends React.Component<Props> {
  render() {
    return this.props.data.error ? (
      <span>
        <Trans>Error loading collections</Trans>
      </span>
    ) : this.props.data.loading ? (
      <Loader />
    ) : (
      <>
        <Helmet>
          <title>{APP_NAME} > Followed collections</title>
        </Helmet>
        <ListWrapper>
          <List>
            {this.props.data.me.user.followingCollections.edges.map(
              (comm, i) => (
                <CollectionCard
                  key={i}
                  collection={comm.node}
                  openModal={this.props.handleCollection}
                  communityId={comm.node.community.localId}
                />
              )
            )}
          </List>
          <CollectionsLoadMore
            fetchMore={this.props.data.fetchMore}
            collections={this.props.data.me.user.followingCollections}
            me
          />
        </ListWrapper>
      </>
    );
  }
}

const ListWrapper = styled.div``;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 0;
`;

const withGetFollowingCollections = graphql(getFollowedCollections, {
  options: (props: Props) => ({
    fetchPolicy: 'cache-first',
    variables: {
      limit: 15
    }
  })
});

export default compose(
  withGetFollowingCollections,
  withState('isOpenCollection', 'onOpenCollection', false),
  withHandlers({
    handleCollection: props => () =>
      props.onOpenCollection(!props.isOpenCollection)
  })
)(FollowingCollectionsComponent);
