import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Box } from 'rebass/styled-components';
import media from 'styled-media-query';
import SocialText from 'ui/modules/SocialText';

import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from 'ui/elements/Panel';
import styled from 'ui/themes/styled';

interface Collection {
  id: any;
}
type CollectionBox = React.ComponentType<{ collection: Collection }>;

interface Activity {
  id: any;
}
type ActivityBox = React.ComponentType<{ activity: Activity }>;

interface Props {
  activities: Activity[];
  threads: Thread[];
  ThreadBox: ThreadBox;
  ActivityBox: ActivityBox;
  collections: Collection[];
  CollectionBox: CollectionBox;
  HeroCommunityBox: React.ComponentType;
  isFollowing: boolean;
}

export const Community: React.FC<Props> = ({
  activities,
  ActivityBox,
  HeroCommunityBox,
  collections,
  CollectionBox,
  isFollowing,
  threads,
  ThreadBox
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <HeroCommunityBox />
            <Menu />
            <Switch>
              <Route exact path="/">
                <RecentActivities
                  activities={activities}
                  ActivityBox={ActivityBox}
                />
              </Route>
              <Route path="/collections">
                <Collections
                  collections={collections}
                  CollectionBox={CollectionBox}
                />
              </Route>
              <Route path="/discussions">
                <Discussions
                  threads={threads}
                  isFollowing={isFollowing}
                  submit={() => console.log('test')}
                  ThreadBox={ThreadBox}
                />
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Popular hashtags
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={1}>
              #pedagogy
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              #transition
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              #english
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              #template
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              #assessment
            </NavItem>
          </Nav>
        </Panel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Popular categories
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={1}>
              Humanities
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              Behavioural science
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              English
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              Romana
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              Postgraduate
            </NavItem>
          </Nav>
        </Panel>
      </WrapperPanel>
    </MainContainer>
  );
};

export interface RecentActivitiesProps {
  activities: Activity[];
  ActivityBox: ActivityBox;
}
const RecentActivities: React.SFC<RecentActivitiesProps> = ({
  activities,
  ActivityBox
}) => {
  return (
    <>
      {activities.map(activity => (
        <ActivityBox activity={activity} key={activity.id} />
      ))}
    </>
  );
};

type Thread = {
  id: string;
};

type ThreadBox = React.ComponentType<{ thread: Thread }>;

export interface DiscussionsProps {
  isFollowing: boolean;
  submit(): void;
  threads: Thread[];
  ThreadBox: ThreadBox;
}

const Discussions: React.SFC<DiscussionsProps> = ({
  isFollowing,
  submit,
  threads,
  ThreadBox
}) => (
  <>
    <WrapSocialText mt={3} px={3} pb={3} mb={2}>
      {isFollowing && (
        <SocialText placeholder="Start a new thread..." submit={submit} />
      )}
    </WrapSocialText>
    {threads.map(t => (
      <ThreadBox thread={t} key={t.id} />
    ))}
  </>
);

export interface CollectionsProps {
  collections: Collection[];
  CollectionBox: CollectionBox;
}
const Collections: React.SFC<CollectionsProps> = ({
  collections,
  CollectionBox
}) => {
  return (
    <>
      {collections.map(collection => (
        <CollectionBox collection={collection} key={collection.id} />
      ))}
    </>
  );
};

const Menu = () => (
  <MenuWrapper px={3} py={2}>
    <NavLink exact to={'/'}>
      Recent activities
    </NavLink>
    <NavLink to={'/collections'}>Collections</NavLink>
    <NavLink to={'/discussions'}>Discussions</NavLink>
  </MenuWrapper>
);

const WrapSocialText = styled(Box)`
  border-bottom: 3px solid ${props => props.theme.colors.lightgray};
`;

const MenuWrapper = styled(Flex)`
  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: 8px;
    color: ${props => props.theme.colors.gray};
    letterspacing: '1px';
    font-size: 14px;
    padding: 4px 8px;
    &.active {
      color: #ffffff;
      background: ${props => props.theme.colors.orange};
      border-radius: 8px;
    }
  }
`;
export const HomeBox = styled(Flex)`
      max-width: 600px;
        width: 100%;
        align-items: flex-start;
        flex-shrink: 1;
        flex-grow: 1;
        flex-basis: auto;
        flex-direction: column;
        margin: 0px;
        min-height: 0px;
        min-width: 0px;
        padding: 0px;
        position: relative;
        z-index: 0;
  ${media.lessThan('1005px')`
  max-width: 100%;
  `};
  // ${media.lessThan('1280px')`
  // top: 60px;
  // `};
          `;

export const MainContainer = styled(Flex)`
  align-items: stretch;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
`;

export const WrapperCont = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  background: white;
  border-radius: 4px;
  z-index: 0;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  & ul {
    display: block;

    & li {
      display: inline-block;

      & h5 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  & h4 {
    margin: 0;
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #151b26;
    line-height: 40px;
  }
`;

export default Community;
