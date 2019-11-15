// View a Community (with list of collections)

import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { Trans } from '@lingui/macro';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import Loader from '../../components/elements/Loader/Loader';
import { Tabs, TabPanel } from 'react-tabs';
import CollectionCard from '../../components/elements/Collection/Collection';
import CommunityCard from '../../components/elements/Community/Community';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
const getUserQuery = require('../../graphql/getAgent.graphql');
import FollowingCollectionsLoadMore from '../../components/elements/Loadmore/followingCollections';
import JoinedCommunitiesLoadMore from '../../components/elements/Loadmore/joinedCommunities';
import HeroComp from '../Profile/Hero';
import { WrapperTab, OverlayTab } from '../communities.community/Community';
import { List, ListCollections } from '../Profile';
// import TimelineItem from '../../components/elements/TimelineItem';
// import LoadMoreTimeline from '../../components/elements/Loadmore/timelineoutbox';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { WrapperPanel, Panel, PanelTitle, Nav } from '../../sections/panel';
import { Button } from 'rebass/styled-components';
import styled from '../../themes/styled';

const Follow = styled(Button)`
  color: ${props => props.theme.colors.orange};
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.lighter};
  border: 2px solid ${props => props.theme.colors.orange};
  cursor: pointer;
`;

enum TabsEnum {
  Overview = 'Overview',
  Communities = 'Joined communities',
  Collections = 'Followed collections'
}

interface Data extends QueryControls {
  user: {
    name;
    icon;
    summary;
    id;
    location;
    image;
    preferredUsername;
    localId;
    outbox: {
      edges: any[];
      totalCount: number;
      pageInfo: {
        startCursor: number;
        endCursor: number;
      };
    };
    joinedCommunities: {
      edges: any[];
      totalCount: number;
      pageInfo: {
        startCursor: number;
        endCursor: number;
      };
    };
    followingCollections: {
      edges: any[];
      totalCount: number;
      pageInfo: {
        startCursor: number;
        endCursor: number;
      };
    };
  };
}

interface Props {
  data: Data;
  match: any;
  handleCollection: any;
}

type State = {
  tab: TabsEnum;
};

class CommunitiesFeatured extends React.Component<Props, State> {
  state = {
    tab: TabsEnum.Collections
  };
  render() {
    console.log(this.props.data);
    return (
      <MainContainer>
        <HomeBox>
          {this.props.data.error ? (
            <span>
              <Trans>Error loading user</Trans>
            </span>
          ) : this.props.data.loading ? (
            <Loader />
          ) : (
            <>
              <WrapperCont>
                <Wrapper>
                  <HeroComp user={this.props.data.user} />

                  <WrapperTab>
                    <OverlayTab>
                      <Tabs>
                        <SuperTabList>
                          <SuperTab>
                            <h5>
                              <Trans>Recent activities</Trans>
                            </h5>
                          </SuperTab>
                          <SuperTab>
                            <h5>
                              <Trans>Followed Collections</Trans>
                            </h5>
                          </SuperTab>
                          <SuperTab>
                            <h5>
                              <Trans>Joined Communities</Trans>
                            </h5>
                          </SuperTab>
                        </SuperTabList>
                        <TabPanel>
                          <div>
                            {/* {this.props.data.user.outbox.edges.map((t, i) => (
                              <TimelineItem
                                node={t.node}
                                user={t.node.user}
                                key={i}
                              />
                            ))}
                            <LoadMoreTimeline
                              fetchMore={this.props.data.fetchMore}
                              community={this.props.data.user}
                            /> */}
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <>
                            <ListCollections>
                              {this.props.data.user.followingCollections.edges.map(
                                (comm, i) => (
                                  <CollectionCard
                                    key={i}
                                    collection={comm.node}
                                    openModal={this.props.handleCollection}
                                    communityId={comm.node.community.localId}
                                  />
                                )
                              )}
                            </ListCollections>
                            <FollowingCollectionsLoadMore
                              collections={
                                this.props.data.user.followingCollections
                              }
                              fetchMore={this.props.data.fetchMore}
                            />
                          </>
                        </TabPanel>
                        <TabPanel
                          label={`${TabsEnum.Communities}`}
                          key={TabsEnum.Communities}
                          style={{ height: '100%' }}
                        >
                          <>
                            <List>
                              {this.props.data.user.joinedCommunities.edges.map(
                                (community, i) => (
                                  <CommunityCard
                                    key={i}
                                    summary={community.node.summary}
                                    title={community.node.name}
                                    collectionsCount={
                                      community.node.collectionsCount
                                    }
                                    threadsCount={
                                      community.node.threads.totalCount
                                    }
                                    icon={community.node.icon || ''}
                                    followed={community.node.followed}
                                    id={community.node.localId}
                                    externalId={community.node.id}
                                    followersCount={
                                      community.node.followersCount
                                    }
                                  />
                                )
                              )}
                            </List>
                            <JoinedCommunitiesLoadMore
                              communities={
                                this.props.data.user.joinedCommunities
                              }
                              fetchMore={this.props.data.fetchMore}
                            />
                          </>
                        </TabPanel>
                      </Tabs>
                    </OverlayTab>
                  </WrapperTab>
                </Wrapper>
              </WrapperCont>
            </>
          )}
        </HomeBox>
        <WrapperPanel>
          <Panel>
            <Follow variant={'outline'}>Follow</Follow>
          </Panel>
          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              <Trans>Links</Trans>
            </PanelTitle>
            <Nav />
          </Panel>
        </WrapperPanel>
      </MainContainer>
    );
  }
}

const withGetCollections = graphql<
  {},
  {
    data: {
      user: any;
    };
  }
>(getUserQuery, {
  options: (props: Props) => ({
    fetchPolicy: 'no-cache',
    variables: {
      id: Number(props.match.params.id),
      limitComm: 15,
      limitColl: 15,
      limitTimeline: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withGetCollections,
  withState('isOpenCollection', 'onOpenCollection', false),
  withHandlers({
    handleCollection: props => () =>
      props.onOpenCollection(!props.isOpenCollection)
  })
)(CommunitiesFeatured);
