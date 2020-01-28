import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import { compose } from 'recompose';
// import CollectionCard from '../../components/elements/Collection/Collection';
import Loader from '../../components/elements/Loader/Loader';
// import CollectionsLoadMore from '../../components/elements/Loadmore/collections';
import styled from '../../themes/styled';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { WrapperPanel } from '../../sections/panel';
import { BasicCollectionFragment } from '../../graphql/fragments/basicCollection.generated';
import { Collection } from '../../graphql/types.generated';
import { Text } from 'rebass/styled-components';
import { CollectionPreview } from 'ui/modules/CollectionPreview';
const { getCollectionsQuery } = require('../../graphql/getCollections.graphql');

interface Data extends QueryControls {
  collections: {
    nodes: BasicCollectionFragment[];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
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
      <MainContainer>
        <HomeBox>
          <WrapperCont>
            <Wrapper>
              <Text
                mb={3}
                sx={{ borderBottom: '1px solid #dadada' }}
                p={3}
                variant="suptitle"
              >
                <Trans>All collections</Trans>
              </Text>
              <div>
                {this.props.data.error ? (
                  <span>
                    <Trans>Error loading collections</Trans>
                  </span>
                ) : this.props.data.loading ? (
                  <Loader />
                ) : (
                  <>
                    {/* <Helmet>
                        <title>{APP_NAME} > All collections</title>
                      </Helmet> */}
                    <List>
                      {this.props.data.collections.nodes.map((coll, i) => (
                        <div key={i}>
                          <CollectionPreview
                            icon={coll.icon!}
                            name={coll.name}
                            summary={coll.summary!}
                            link={{
                              url: 'collections/' + coll.id,
                              external: false
                            }}
                            totalResources={coll.resources!.totalCount}
                          />
                        </div>
                        // <CollectionCard key={i} collection={coll} />
                      ))}
                    </List>
                    {/* <CollectionsLoadMore
                          fetchMore={this.props.data.fetchMore}
                          collections={this.props.data.collections}
                        /> */}
                  </>
                )}
              </div>
            </Wrapper>
          </WrapperCont>
        </HomeBox>
        <WrapperPanel />
      </MainContainer>
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
      communities: Collection[];
    };
  }
>(getCollectionsQuery, {
  options: (props: Props) => ({
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(withGetCommunities)(CommunitiesYours);
