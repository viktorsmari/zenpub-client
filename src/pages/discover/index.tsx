import { Trans } from '@lingui/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { Flex } from 'rebass/styled-components';
import Empty from '../../components/elements/Empty';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/localInstance';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem/index2';
import FeaturedCollections from '../../components/featuredCollections';
import FeaturedCommunities from '../../components/featuredCommunities';
import { CreateReplyMutationMutationOperation } from '../../graphql/createReply.generated';
import { DeleteMutationMutationOperation } from '../../graphql/delete.generated';
import { LikeMutationMutationOperation } from '../../graphql/like.generated';
import { useLocalActivitiesQuery } from '../../graphql/localActivities.generated';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from '../../sections/panel';
import styled from '../../themes/styled';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';

interface Props {}

const Home: React.FC<Props> = props => {
  const { error, loading, refetch, data, fetchMore } = useLocalActivitiesQuery({
    variables: {
      limit: 15
    }
  });
  useDynamicLinkOpResult<CreateReplyMutationMutationOperation>(
    'createReplyMutation',
    () => {
      refetch();
    },
    [refetch]
  );
  useDynamicLinkOpResult<LikeMutationMutationOperation>(
    'likeMutation',
    () => {
      refetch();
    },
    [refetch]
  );
  useDynamicLinkOpResult<DeleteMutationMutationOperation>(
    'deleteMutation',
    () => {
      refetch();
    },
    [refetch]
  );
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
                    <Trans>{/* error */}</Trans>
                  </Empty>
                ) : loading ? (
                  <Loader />
                ) : (
                  data &&
                  data.instance && (
                    <div>
                      {data.instance.outbox.edges.map(
                        activity =>
                          activity && (
                            <TimelineItem
                              verb={activity.node.verb}
                              context={activity.node.context}
                              user={activity.node.user}
                              key={activity.node.id}
                              createdAt={activity.node.createdAt}
                            />
                          )
                      )}
                      <LoadMoreTimeline
                        fetchMore={fetchMore}
                        outbox={data.instance.outbox}
                      />
                    </div>
                  )
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
              <Trans>#pedagogy</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#transition</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#english</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#template</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#assessment</Trans>
            </NavItem>
          </Nav>
        </Panel>

        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>Popular hashtags: local instance</Trans>
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={1}>
              <Trans>#pedagogy</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#transition</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#english</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#template</Trans>
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              <Trans>#assessment</Trans>
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
