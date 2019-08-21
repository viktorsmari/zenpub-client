import { Trans } from '@lingui/macro';
import React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose } from 'recompose';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineUser';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
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
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Tabs>
              <SuperTabList>
                <SuperTab>
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
      </HomeBox>
      <WrapperPanel>
        <PanelInner>
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
