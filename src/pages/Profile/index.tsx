// View a Profile
import * as React from 'react';
import { compose } from 'recompose';
import { Trans } from '@lingui/macro';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
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
import TimelineItem from '../../components/elements/TimelineItem';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineoutbox';
import { Flex, Box, Text } from 'rebass';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';

enum TabsEnum {
  Overview = 'Overview',
  Communities = 'Joined communities',
  Collections = 'Followed collections'
}

interface Data extends GraphqlQueryControls {
  me: {
    user: {
      name: string;
      icon: string;
      image: string;
      location: string;
      summary: string;
      preferredUsername: string;
      id: string;
      localId: string;
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
  };
}

interface Props {
  data: Data;
}

type State = {
  tab: TabsEnum;
};

class CommunitiesFeatured extends React.Component<Props, State> {
  state = {
    tab: TabsEnum.Collections
  };
  render() {
    return (
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
                        <div>
                          {this.props.data.me.user.outbox.edges.map((t, i) => (
                            <TimelineItem
                              node={t.node}
                              user={t.node.user}
                              key={i}
                            />
                          ))}
                          <div style={{ padding: '8px' }}>
                            <LoadMoreTimeline
                              me
                              fetchMore={this.props.data.fetchMore}
                              community={this.props.data.me.user}
                            />
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <ListCollections>
                          {this.props.data.me.user.followingCollections.edges.map(
                            (comm, i) => (
                              <CollectionCard key={i} collection={comm.node} />
                            )
                          )}
                        </ListCollections>
                        <div style={{ padding: '8px' }}>
                          <FollowingCollectionsLoadMore
                            collections={
                              this.props.data.me.user.followingCollections
                            }
                            fetchMore={this.props.data.fetchMore}
                            me
                          />
                        </div>
                      </TabPanel>
                      <TabPanel
                        label={`${TabsEnum.Communities}`}
                        key={TabsEnum.Communities}
                        style={{ height: '100%' }}
                      >
                        <>
                          <List>
                            {this.props.data.me.user.joinedCommunities.edges.map(
                              (community, i) => (
                                <CommunityCard
                                  key={i}
                                  summary={community.node.summary}
                                  title={community.node.name}
                                  collectionsCount={
                                    community.node.collectionsCount
                                  }
                                  icon={community.node.icon || ''}
                                  followed={community.node.followed}
                                  id={community.node.localId}
                                  externalId={community.node.id}
                                  followersCount={community.node.followersCount}
                                  threadsCount={
                                    community.node.threads.totalCount
                                  }
                                />
                              )
                            )}
                          </List>
                          <div style={{ padding: '8px' }}>
                            <JoinedCommunitiesLoadMore
                              me
                              communities={
                                this.props.data.me.user.joinedCommunities
                              }
                              fetchMore={this.props.data.fetchMore}
                            />
                          </div>
                        </>
                      </TabPanel>
                    </Tabs>
                  </OverlayTab>
                </WrapperTab>
              </Wrapper>
            </WrapperCont>
            <WrapperPanel>
              <Panel>
                <PanelTitle fontSize={0} fontWeight={'bold'}>
                  <Trans>Links</Trans>
                </PanelTitle>
                <Nav />
              </Panel>
            </WrapperPanel>
          </>
        )}
      </HomeBox>
    );
  }
}

export const HomeBox = styled(Flex)`
  overflow-y: overlay;
`;
export const WrapperPanel = styled(Box)`
  margin-top: 16px;
  margin-left: 16px;
  width: 300px;
`;

export const Panel = styled(Box)`
  background: white;
  border-radius: 4px;
  max-width: 300px;
  margin-bottom: 16px;
`;

export const PanelTitle = styled(Text)`
  text-transform: uppercase;
  border-bottom: 4px solid ${props => props.theme.styles.colors.lighter};
  padding: 16px;
`;

export const Nav = styled(Box)`
  padding: 16px;
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
