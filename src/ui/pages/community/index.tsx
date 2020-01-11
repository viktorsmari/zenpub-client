import * as React from 'react';
import { Flex, Text } from 'rebass/styled-components';
import { HeroCommunity } from 'ui/modules/HeroCommunity';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { throwUnimplementedFn } from 'common/util/ctx-mock/throwUnimplementedFn';
import { ActivityPreview } from 'ui/modules/ActivityPreview';
import {
  WrapperPanel,
  PanelTitle,
  Panel,
  Nav,
  NavItem
} from 'ui/elements/Panel';
interface Props {
  communityId: string;
}

export const Community: React.FC<Props> = ({ communityId }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <HeroCommunity communityId={communityId} />

            <RecentActivities communityId={communityId} />
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

export interface RecentActivitiesContextData {
  activities: Array<{ activityId: string }>;
}

export type RecentActivitiesContext = (
  cfg: { communityId: string }
) => RecentActivitiesContextData;

export const RecentActivitiesContext = React.createContext<
  RecentActivitiesContext
>(throwUnimplementedFn<RecentActivitiesContext>('RecentActivities'));

const RecentActivities = ({ communityId }) => {
  const { activities } = React.useContext(RecentActivitiesContext)({
    communityId
  });
  return !activities ? (
    <Text>Loading</Text>
  ) : (
    <>
      {activities.map((a, i) => (
        <ActivityPreview activityId={a.activityId} key={i} />
      ))}
    </>
  );
};

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
  justify-content: space-between;
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
