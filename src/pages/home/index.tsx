import { Trans } from '@lingui/macro';
import React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { TabPanel, Tabs } from 'react-tabs';
import { compose } from 'recompose';
import Main from '../../components/chrome/Main/Main';
import { User } from '../../components/elements/Icons';
import Loader from '../../components/elements/Loader/Loader';
import LoadMoreTimeline from '../../components/elements/Loadmore/timelineUser';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import FeaturedCollections from '../../components/featuredCollections';
import FeaturedCommunities from '../../components/featuredCommunities';
import styled from '../../themes/styled';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
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
    <Main>
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
                  <Trans>My feed</Trans>
                  <Helmet>
                    <title>My MoodleNet feed</title>
                  </Helmet>
                </h5>
              </SuperTab>
            </SuperTabList>
            <TabPanel>
              {props.data.error ? (
                <span>
                  <Trans>Error loading user timeline</Trans>
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
    </Main>
  );
};

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
