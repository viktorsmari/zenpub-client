import { Trans } from '@lingui/macro';
import React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose } from 'recompose';
import { User } from '../../components/elements/Icons';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/localInstance';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import FeaturedCollections from '../../components/featuredCollections';
import FeaturedCommunities from '../../components/featuredCommunities';
import styled from '../../themes/styled';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { Box, Text, Flex } from 'rebass';
const localActivities = require('../../graphql/localActivities.graphql');

interface Data extends GraphqlQueryControls {
  // localActivities: {
  //   user: {
  //     name: string;
  //     icon: string;
  //     summary: string;
  //     id: string;
  //     localId: string;
  //     inbox: any;
  //   };
  // };
  localActivities: any;
}

interface Props {
  data: Data;
}

const Home: React.FC<Props> = props => {
  return (
    <HomeBox>
      <WrapperCont>
        <WrapperFeatured>
          <FeaturedCollections />
        </WrapperFeatured>
        <WrapperFeatured>
          <FeaturedCommunities />
        </WrapperFeatured>
        <Wrapper>
          <Tabs>
            <SuperTabList>
              <SuperTab>
                <span>
                  <User
                    width={20}
                    height={20}
                    strokeWidth={2}
                    color={'#a0a2a5'}
                  />
                </span>
                <h5>
                  <Trans>Instance timeline</Trans>
                  <Helmet>
                    <title>Instance timeline</title>
                  </Helmet>
                </h5>
              </SuperTab>
            </SuperTabList>
            <TabPanel>
              {props.data.error ? (
                <span>
                  <Trans>Error loading instance timeline</Trans>
                </span>
              ) : props.data.loading ? (
                <Loader />
              ) : (
                <div>
                  {props.data.localActivities.nodes.map((t, i) => (
                    <TimelineItem node={t} user={t.user} key={i} />
                  ))}
                  <div style={{ padding: '8px' }}>
                    <LoadMoreTimeline
                      fetchMore={props.data.fetchMore}
                      localInstance={props.data.localActivities}
                    />
                  </div>
                </div>
              )}
            </TabPanel>
          </Tabs>
        </Wrapper>
      </WrapperCont>
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>Browse Home instance</Trans>
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={2} fontWeight={'bold'}>
              <Trans>All communities</Trans>
            </NavItem>
            <NavItem fontSize={2} fontWeight={'bold'}>
              <Trans>All collections</Trans>
            </NavItem>
          </Nav>
        </Panel>

        {/* <Panel>
        <PanelTitle fontSize={0} fontWeight={"bold"}><Trans>Popular hashtags: Whole network</Trans></PanelTitle>
        <Nav>
          <NavItem><Trans>All communities</Trans></NavItem>
          <NavItem><Trans>All collections</Trans></NavItem>
        </Nav>
      </Panel>

      <Panel>
        <PanelTitle fontSize={0} fontWeight={"bold"}><Trans>Popular hashtags: Home instance</Trans></PanelTitle>
        <Nav>
          <NavItem><Trans>All communities</Trans></NavItem>
          <NavItem><Trans>All collections</Trans></NavItem>
        </Nav>
      </Panel> */}
      </WrapperPanel>
    </HomeBox>
  );
};

const HomeBox = styled(Flex)`
  overflow-y: overlay;
`;

const WrapperPanel = styled(Box)`
  margin-top: 16px;
  margin-left: 16px;
  width: 300px;
`;

const Panel = styled(Box)`
  background: white;
  border-radius: 4px;
  max-width: 300px;
  margin-bottom: 16px;
`;

const PanelTitle = styled(Text)`
  text-transform: uppercase;
  border-bottom: 4px solid ${props => props.theme.styles.colors.lighter};
  padding: 16px;
`;

const Nav = styled(Box)`
  padding: 16px;
`;

const NavItem = styled(Text)``;

const WrapperFeatured = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 24px;
  background: ${props => props.theme.styles.colour.secondaryBg};
  border-radius: 6px;
  margin-top: 16px;
`;

const withGetInbox = graphql<
  {},
  {
    data: {
      localActivities: any;
    };
  }
>(localActivities, {
  options: (props: Props) => ({
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(withGetInbox)(Home);
