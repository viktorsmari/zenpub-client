import { Trans } from '@lingui/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineUser';
import { StickyTabList, SuperTab } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem/index2';
import Empty from '../../components/elements/Empty';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import {
  Nav,
  NavItem,
  Panel,
  PanelInner,
  PanelTitle,
  WrapperPanel
} from '../../sections/panel';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { useGetMeInboxQuery } from '../../graphql/generated/getMeInbox.generated';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';

interface Props {}

const Home: React.FC<Props> = () => {
  const { data, loading, error, fetchMore, refetch } = useGetMeInboxQuery({
    variables: {
      limit: 15
    }
  });
  useInterceptor({ operation: 'createReply', request: () => () => refetch() });
  useInterceptor({ operation: 'like', request: () => () => refetch() });
  useInterceptor({
    operation: 'delete',
    request: () => () => refetch()
  });

  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Tabs>
              <StickyTabList>
                <SuperTab>
                  <h5>
                    <Trans>My MoodleNet timeline</Trans>
                  </h5>
                </SuperTab>
              </StickyTabList>
              <TabPanel>
                {error ? (
                  <Empty>
                    <Trans>Error loading moodlenet timeline</Trans>
                  </Empty>
                ) : loading ? (
                  <Loader />
                ) : (
                  <div>
                    {data!.me!.user!.inbox!.edges!.map(userActivityEdge => (
                      <TimelineItem
                        context={userActivityEdge!.node!.context}
                        verb={userActivityEdge!.node!.verb}
                        createdAt={userActivityEdge!.node!.createdAt}
                        user={userActivityEdge!.node!.user!}
                        key={userActivityEdge!.node!.id!}
                      />
                    ))}
                    <LoadMoreTimeline
                      fetchMore={fetchMore}
                      community={data!.me!.user!}
                    />
                  </div>
                )}
              </TabPanel>
            </Tabs>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        <PanelInner>
          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              <Trans>Browse Home instance</Trans>
            </PanelTitle>
            <Nav>
              <NavItem mb={4} fontSize={1} fontWeight={'bold'}>
                <NavLink to="/mycommunities">
                  <Trans>My communities</Trans>
                </NavLink>
              </NavItem>
              <NavItem fontSize={1} fontWeight={'bold'}>
                <NavLink to="/mycollections">
                  <Trans>My collections</Trans>
                </NavLink>
              </NavItem>
            </Nav>
          </Panel>
        </PanelInner>
      </WrapperPanel>
    </MainContainer>
  );
};

export default Home;
