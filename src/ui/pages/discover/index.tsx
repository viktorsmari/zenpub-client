import { Trans } from '@lingui/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';
import media from 'styled-media-query';

import { Flex, Text } from 'rebass/styled-components';
import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from 'ui/elements/Panel';
import styled from 'ui/themes/styled';

export interface Props {
  FeaturedCommunitiesBox: JSX.Element;
  FeaturedCollectionsBox: JSX.Element;
  ActivitiesBox: JSX.Element;
}
export const Discover: React.FC<Props> = ({
  ActivitiesBox,
  FeaturedCommunitiesBox,
  FeaturedCollectionsBox
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <WrapperFeatured>{FeaturedCollectionsBox}</WrapperFeatured>
          <WrapperFeatured mt={2}>{FeaturedCommunitiesBox}</WrapperFeatured>
          <Wrapper>
            <Text
              mb={3}
              sx={{ borderBottom: '1px solid #dadada' }}
              p={3}
              variant="suptitle"
            >
              <Trans>Instance timeline</Trans>
            </Text>
            {ActivitiesBox}
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
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.1);
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
  z-index: 0;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.1);
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

export default Discover;
