import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose, withState, withHandlers } from 'recompose';
import Main from '../../components/chrome/Main/Main';
import CollectionCard from '../../components/elements/Collection/Collection';
import Loader from '../../components/elements/Loader/Loader';
import CollectionsLoadMore from '../../components/elements/Loadmore/collections';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';
import CollectionType from '../../types/Collection';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';

const { getCollectionsQuery } = require('../../graphql/getCollections.graphql');

interface Data extends GraphqlQueryControls {
  collections: {
    nodes: CollectionType[];
    pageInfo: {
      startCursor: number;
      endCursor: number;
    };
  };
}

interface Props {
  data: Data;
  handleCollection: any;
}

class CommunitiesYours extends React.Component<Props> {
  render() {
    return (
      <Main>
        <WrapperCont>
          <Wrapper>
            <Tabs>
              <SuperTabList>
                <SuperTab>
                  <h5>
                    <Trans>All collections</Trans>
                  </h5>
                </SuperTab>
              </SuperTabList>
              <TabPanel>
                <div>
                  {this.props.data.error ? (
                    <span>
                      <Trans>Error loading collections</Trans>
                    </span>
                  ) : this.props.data.loading ? (
                    <Loader />
                  ) : (
                    <>
                      <Helmet>
                        <title>{APP_NAME} > All collections</title>
                      </Helmet>
                      <List>
                        {this.props.data.collections.nodes.map((coll, i) => (
                          <CollectionCard
                            key={i}
                            collection={coll}
                            openModal={this.props.handleCollection}
                            communityId={coll.community.localId}
                          />
                        ))}
                      </List>
                      <CollectionsLoadMore
                        fetchMore={this.props.data.fetchMore}
                        collections={this.props.data.collections}
                      />
                    </>
                  )}
                </div>
              </TabPanel>
            </Tabs>
          </Wrapper>
        </WrapperCont>
      </Main>
    );
  }
}

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 0;
`;

const withGetCommunities = graphql<
  {},
  {
    data: {
      communities: CollectionType[];
    };
  }
>(getCollectionsQuery, {
  options: (props: Props) => ({
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withGetCommunities,
  withState('isOpenCollection', 'onOpenCollection', false),
  withHandlers({
    handleCollection: props => () =>
      props.onOpenCollection(!props.isOpenCollection)
  })
)(CommunitiesYours);
