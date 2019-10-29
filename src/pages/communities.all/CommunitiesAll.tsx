import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
// import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose, withHandlers, withState } from 'recompose';
import media from 'styled-media-query';
import CommunityCard from '../../components/elements/Community/Community';
import NewCommunityModal from '../../components/elements/CreateCommunityModal';
import Loader from '../../components/elements/Loader/Loader';
import CommunitiesLoadMore from '../../components/elements/Loadmore/community';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
// import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';
import CommunityType from '../../types/Community';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { WrapperPanel, Panel, Nav, NavItem } from '../../sections/panel';
const { getCommunitiesQuery } = require('../../graphql/getCommunities.graphql');

interface Data extends QueryControls {
  communities: {
    nodes: CommunityType[];
    pageInfo: {
      startCursor: number;
      endCursor: number;
    };
  };
}

interface Props {
  data: Data;
  handleNewCommunity(): boolean;
  isOpenCommunity: boolean;
}

class CommunitiesYours extends React.Component<Props> {
  render() {
    return (
      <MainContainer>
        <HomeBox>
          <WrapperCont>
            <Wrapper>
              <Tabs>
                <SuperTabList>
                  <SuperTab>
                    <h5>
                      <Trans>All communities</Trans>
                    </h5>
                  </SuperTab>
                </SuperTabList>
                <TabPanel>
                  {this.props.data.error ? (
                    <span>
                      <Trans>Error loading communities</Trans>
                    </span>
                  ) : this.props.data.loading ? (
                    <Loader />
                  ) : (
                    <>
                      {/* <Helmet>
                        <title>{APP_NAME} > All communities</title>
                      </Helmet> */}
                      <List>
                        {this.props.data.communities.nodes.map(
                          (community, i) => {
                            return (
                              <CommunityCard
                                key={i}
                                summary={community.summary}
                                title={community.name}
                                icon={community.icon || ''}
                                id={community.localId}
                                followed={community.followed}
                                followersCount={community.members.totalCount}
                                collectionsCount={
                                  community.collections.totalCount
                                }
                                externalId={community.id}
                                threadsCount={community.threads.totalCount}
                              />
                            );
                          }
                        )}
                      </List>
                      <div style={{ padding: '8px' }}>
                        <CommunitiesLoadMore
                          fetchMore={this.props.data.fetchMore}
                          communities={this.props.data.communities}
                        />
                      </div>
                    </>
                  )}
                </TabPanel>
              </Tabs>
            </Wrapper>
          </WrapperCont>
        </HomeBox>
        <WrapperPanel>
          <Panel>
            <Nav>
              <NavItem
                onClick={this.props.handleNewCommunity}
                fontSize={1}
                fontWeight={'bold'}
              >
                <Trans>Create a new community</Trans>
              </NavItem>
            </Nav>
          </Panel>
        </WrapperPanel>
        <NewCommunityModal
          toggleModal={this.props.handleNewCommunity}
          modalIsOpen={this.props.isOpenCommunity}
        />
      </MainContainer>
    );
  }
}

export const WrapperCont = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  border-right: 1px solid ${props => props.theme.styles.colors.lightgray};
  background: white;
  z-index: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & ul {
    display: block !important;

    & li {
      display: inline-block;

      & h5 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  & h4 {
    margin: 0;
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #151b26;
    line-height: 40px;
  }
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding-top: 0;
  padding: 16px;
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  `};
`;

const withGetCommunities = graphql<
  {},
  {
    data: {
      communities: CommunityType[];
    };
  }
>(getCommunitiesQuery, {
  options: (props: Props) => ({
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withGetCommunities,
  withState('isOpenCommunity', 'onOpenCommunity', false),
  withHandlers({
    handleNewCommunity: props => () =>
      props.onOpenCommunity(!props.isOpenCommunity)
  })
)(CommunitiesYours);
