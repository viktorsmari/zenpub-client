import * as React from 'react';
// import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Box, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
// import SocialText from 'ui/modules/SocialText';
// import { Trans } from '@lingui/react';
// import Button from 'ui/elements/Button';

import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';

// interface Collection {
//   id: any;
// }
// type CollectionBox = React.ComponentType<{ collection: Collection }>;

// interface Activity {
//   id: any;
// }
// type ActivityBox = React.ComponentType<{ activity: Activity }>;

export interface Props {
  ActivityBoxes: JSX.Element[];
  CollectionBoxes: JSX.Element[];
  HeroCommunityBox: JSX.Element;
  ThreadBoxes: JSX.Element[];
  basePath: string;
  newThreadFormik: null | FormikHook<{ text: string }>;
  CreateCollectionPanel: React.ComponentType<{ done(): any }>;
}

export const Settings: React.FC<Props> = ({
  //   ActivityBoxes,
  //   HeroCommunityBox,
  //   CollectionBoxes,
  //   basePath,
  //   newThreadFormik,
  //   ThreadBoxes,
  CreateCollectionPanel
}) => {
  const [isOpenCreateCollection, setOpenCreateCollection] = React.useState(
    false
  );

  return (
    <MainContainer>
      {isOpenCreateCollection && (
        <Modal closeModal={() => setOpenCreateCollection(false)}>
          <CreateCollectionPanel done={() => setOpenCreateCollection(false)} />
        </Modal>
      )}

      <WrapperPanel ml={0} mr={2}>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Back to MoodleNet
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={1}>
              General informations
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              Preferences
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              Accounts
            </NavItem>
            <NavItem mb={3} fontSize={1}>
              Notifications
            </NavItem>
          </Nav>
        </Panel>
      </WrapperPanel>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Box>test</Box>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

export const WrapperPanel = styled(Flex)`
  margin-right: 8px;
  width: 350px;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  font-family: ${props => props.theme.fontFamily};
  &.extra {
    width: 100%;
  }
  ${media.lessThan('1095px')`
  width: 290px;
`};
  ${media.lessThan('1005px')`
   display: none;
  `};
`;

export const Panel = styled(Box)`
  background: #fff;
  border-radius: 4px;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  margin-bottom: 8px !important;
`;

export const PanelTitle = styled(Text)`
  text-transform: uppercase;
  border-bottom: 4px solid ${props => props.theme.colors.lighter};
  padding: 16px;
`;

export const Nav = styled(Box)`
  padding: 16px;
`;

export const NavItem = styled(Text)`
color: ${props => props.theme.colors.darkgray}
a {
  color: ${props => props.theme.colors.darkgray}
  text-decoration: none;
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
