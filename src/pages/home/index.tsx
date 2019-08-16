import { Trans } from '@lingui/macro';
import React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose } from 'recompose';
import { User } from '../../components/elements/Icons';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineUser';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import styled from '../../themes/styled';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { Box, Text, Flex } from 'rebass';
const getMeInboxQuery = require('../../graphql/getMeInbox.graphql');

interface Data extends GraphqlQueryControls {
  me: {
    user: {
      name: string;
      icon: string;
      summary: string;
      id: string;
      localId: string;
      inbox: any;
    };
  };
}

interface Props {
  data: Data;
}

const Home: React.FC<Props> = props => {
  return (
    <HomeBox>
      <WrapperCont>
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
                  <Trans>My MoodleNet timeline</Trans>
                  <Helmet>
                    <title>My MoodleNet timeline</title>
                  </Helmet>
                </h5>
              </SuperTab>
            </SuperTabList>
            <TabPanel>
              {props.data.error ? (
                <span>
                  <Trans>Error loading moodlenet timeline</Trans>
                </span>
              ) : props.data.loading ? (
                <Loader />
              ) : (
                <div>
                  {props.data.me.user.inbox.edges.map((t, i) => (
                    <TimelineItem node={t.node} user={t.node.user} key={i} />
                  ))}
                  <div style={{ padding: '8px' }}>
                    <LoadMoreTimeline
                      fetchMore={props.data.fetchMore}
                      community={props.data.me.user}
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
              <Trans>My communities</Trans>
            </NavItem>
            <NavItem fontSize={2} fontWeight={'bold'}>
              <Trans>My collections</Trans>
            </NavItem>
          </Nav>
        </Panel>
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

const withGetInbox = graphql<
  {},
  {
    data: {
      me: any;
    };
  }
>(getMeInboxQuery, {
  options: (props: Props) => ({
    variables: {
      limit: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(withGetInbox)(Home);
