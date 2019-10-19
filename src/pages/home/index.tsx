import { Trans } from '@lingui/macro';
import React from 'react';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose } from 'recompose';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineUser';
import { StickyTabList, SuperTab } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
const getMeInboxQuery = require('../../graphql/getMeInbox.graphql');
import {
  WrapperPanel,
  Panel,
  PanelInner,
  PanelTitle,
  Nav,
  NavItem
} from '../../sections/panel';
import { NavLink } from 'react-router-dom';

interface Data extends QueryControls {
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
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Tabs>
              <StickyTabList>
                <SuperTab>
                  <h5>
                    <Trans>My MoodleNet timeline</Trans>
                    <Helmet>
                      <title>My MoodleNet timeline</title>
                    </Helmet>
                  </h5>
                </SuperTab>
              </StickyTabList>
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
