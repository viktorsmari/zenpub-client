import { Trans } from '@lingui/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/localInstance';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem/index2';
import FeaturedCollections from '../../components/featuredCollections';
import FeaturedCommunities from '../../components/featuredCommunities';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Flex } from 'rebass/styled-components';
import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from '../../sections/panel';
import styled from '../../themes/styled';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { useLocalActivitiesQuery } from '../../graphql/generated/localActivities.generated';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';
import Empty from '../../components/elements/Empty';

interface Props {}

const Home: React.FC<Props> = props => {
  const { error, loading, refetch, data, fetchMore } = useLocalActivitiesQuery({
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
          <WrapperFeatured>
            <FeaturedCollections />
          </WrapperFeatured>
          <WrapperFeatured mt={2}>
            <FeaturedCommunities />
          </WrapperFeatured>
          <Wrapper>
            <Tabs>
              <SuperTabList>
                <SuperTab>
                  <h5>
                    <Trans>Instance timeline</Trans>
                    {/* <Helmet>
                      <title>Instance timeline</title>
                    </Helmet> */}
                  </h5>
                </SuperTab>
              </SuperTabList>
              <TabPanel>
                {error ? (
                  <Empty>
                    <Trans>{error}</Trans>
                  </Empty>
                ) : loading ? (
                  <Loader />
                ) : (
                  <div>
                    {data!.instance!.outbox!.edges!.map(activity => (
                      <TimelineItem
                        verb={activity!.node.verb}
                        context={activity!.node.context}
                        user={activity!.node!.user!}
                        key={activity!.node!.id!}
                        createdAt={activity!.node.createdAt}
                      />
                    ))}
                    <LoadMoreTimeline
                      fetchMore={fetchMore}
                      outbox={data!.instance!.outbox!}
                    />
                  </div>
                )}
              </TabPanel>
            </Tabs>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>Browse Home instance</Trans>
          </PanelTitle>
          <Nav>
            <NavItem mb={4} fontSize={1} fontWeight={'bold'}>
              <NavLink to="/communities">
                <Trans>All communities</Trans>
              </NavLink>
            </NavItem>
            <NavItem fontSize={1} fontWeight={'bold'}>
              <NavLink to="/collections">
                <Trans>All collections</Trans>
              </NavLink>
            </NavItem>
          </Nav>
        </Panel>

        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>Popular hashtags: network</Trans>
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={1}>
              <Trans>#learningdesign</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#MPI</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#Youtube</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#models</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#ADDIE</Trans>
            </NavItem>
          </Nav>
        </Panel>

        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>Popular hashtags: local instance</Trans>
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={1}>
              <Trans>#learningdesign</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#MPI</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#Youtube</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#models</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#ADDIE</Trans>
            </NavItem>
          </Nav>
        </Panel>
      </WrapperPanel>
    </MainContainer>
  );
};

const WrapperFeatured = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Home;
