// View a Profile
import * as React from 'react';
import { compose } from 'recompose';
import { Trans } from '@lingui/macro';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import styled from '../../themes/styled';
import Loader from '../../components/elements/Loader/Loader';
import CollectionCard from '../../components/elements/Collection/Collection';
import CommunityCard from '../../components/elements/Community/Community';
import media from 'styled-media-query';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import { Tabs, TabPanel } from 'react-tabs';
const getUserQuery = require('../../graphql/getUser.graphql');
import FollowingCollectionsLoadMore from '../../components/elements/Loadmore/followingCollections';
import JoinedCommunitiesLoadMore from '../../components/elements/Loadmore/joinedCommunities';
import HeroComp from './Hero';
import { WrapperTab, OverlayTab } from '../communities.community/Community';
import TimelineItem from '../../components/elements/TimelineItem/index2';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineoutbox';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { WrapperPanel, Panel, PanelTitle, Nav } from '../../sections/panel';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { NavLink } from 'react-router-dom';
import { Me } from '../../graphql/types';

interface Data extends QueryControls {
  me: Me;
}

interface Props {
  data: Data;
  handleCollection: any;
}

class CommunitiesFeatured extends React.Component<Props> {
  render() {
    return (
      <MainContainer>
        <HomeBox>
          {this.props.data.error ? (
            <WrapperCont>
              <Wrapper>
                <span>
                  <Trans>Error loading user</Trans>
                </span>
              </Wrapper>
            </WrapperCont>
          ) : this.props.data.loading ? (
            <WrapperCont>
              <Wrapper>
                <Loader />
              </Wrapper>
            </WrapperCont>
          ) : (
            <>
              <WrapperCont>
                <Wrapper>
                  <HeroComp user={this.props.data.me.user} />
                  <WrapperTab>
                    <OverlayTab>
                      <Tabs>
                        <SuperTabList>
                          <SuperTab>
                            <h5>
                              <Trans>Timeline</Trans>
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
                          <>
                            {this.props.data.me.user.outbox.edges.map(
                              (t, i) => (
                                <TimelineItem
                                  context={t!.node.context}
                                  user={t!.node.user}
                                  verb={t!.node.verb}
                                  createdAt={t!.node.createdAt}
                                  key={i}
                                />
                              )
                            )}
                            <LoadMoreTimeline
                              me
                              fetchMore={this.props.data.fetchMore}
                              community={this.props.data.me.user}
                            />
                          </>
                        </TabPanel>
                        <TabPanel>
                          <ListCollections>
                            {this.props.data.me.user.followedCollections.edges.map(
                              (collection, i) => (
                                <CollectionCard
                                  key={i}
                                  collection={collection!.node.collection}
                                />
                              )
                            )}
                          </ListCollections>
                          <FollowingCollectionsLoadMore
                            collections={
                              this.props.data.me.user.followedCollections
                            }
                            fetchMore={this.props.data.fetchMore}
                            me
                          />
                        </TabPanel>
                        <TabPanel style={{ height: '100%' }}>
                          <>
                            <List>
                              {this.props.data.me.user.followedCommunities.edges.map(
                                (community, i) => (
                                  <CommunityCard
                                    key={i}
                                    summary={community!.node.community.summary!}
                                    title={community!.node.community.name}
                                    collectionsCount={
                                      community!.node.community.collections
                                        .totalCount
                                    }
                                    icon={community!.node.community.icon || ''}
                                    followed={
                                      community!.node.community.myFollow!.id
                                        ? true
                                        : false
                                    }
                                    id={community!.node.community.id}
                                    externalId={
                                      community!.node.community.canonicalUrl!
                                    }
                                    followersCount={
                                      community!.node.community.followers
                                        .totalCount
                                    }
                                    threadsCount={
                                      community!.node.community.threads
                                        .totalCount
                                    }
                                  />
                                )
                              )}
                            </List>
                            <JoinedCommunitiesLoadMore
                              me
                              communities={
                                this.props.data.me.user.followedCommunities
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
            <Settings to="/settings">Settings</Settings>
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

const Settings = styled(NavLink)`
  color: ${props => props.theme.colors.orange};
  display: block;
  width: 100%;
  background: #fbfbf9;
  border: 2px solid ${props => props.theme.colors.orange};
  cursor: pointer;
  height: 40px;
  text-align: center;
  line-height: 36px;
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
  border-radius: 2px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px;
  padding-top: 8px;
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  grid-column-gap: 0px;
`};
`;

export const ListCollections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

const withGetCollections = graphql<
  {},
  {
    data: {
      me: any;
    };
  }
>(getUserQuery, {
  options: (props: Props) => ({
    fetchPolicy: 'no-cache',
    variables: {
      limitComm: 15,
      limitColl: 15,
      limitTimeline: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(withGetCollections)(CommunitiesFeatured);
