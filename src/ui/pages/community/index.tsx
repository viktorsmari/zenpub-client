import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Box } from 'rebass/styled-components';
import media from 'styled-media-query';
import SocialText from 'ui/modules/SocialText';
import { Trans } from '@lingui/react';
import Button from 'ui/elements/Button';
import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from 'ui/elements/Panel';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';

export interface Props {
  isJoined: boolean;
  ActivitiesBox: JSX.Element;
  CollectionsBox: JSX.Element;
  HeroCommunityBox: JSX.Element;
  ThreadsBox: JSX.Element;
  basePath: string;
  newThreadFormik: null | FormikHook<{ text: string }>;
  CreateCollectionPanel: React.ComponentType<{ done(): any }>;
}

export const Community: React.FC<Props> = ({
  ActivitiesBox,
  HeroCommunityBox,
  CollectionsBox,
  basePath,
  newThreadFormik,
  isJoined,
  ThreadsBox,
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
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Box sx={{ background: 'white' }}>
              {HeroCommunityBox}
              <Menu basePath={basePath} />
            </Box>
            <Switch>
              <Route exact path={`${basePath}`}>
                <Box mt={2}>{ActivitiesBox}</Box>
              </Route>
              <Route path={`${basePath}/collections`}>
                <>
                  {isJoined && (
                    <WrapButton p={2} mb={2}>
                      <Button
                        variant="outline"
                        onClick={() => setOpenCreateCollection(true)}
                      >
                        <Trans>Create a new collection</Trans>
                      </Button>
                    </WrapButton>
                  )}
                  {CollectionsBox}
                </>
              </Route>
              <Route path={`${basePath}/discussions`}>
                <WrapSocialText mt={3} px={3} pb={3} mb={2}>
                  {newThreadFormik && (
                    <SocialText
                      placeholder="Start a new thread..."
                      submit={text => {
                        newThreadFormik.values.text = text;
                        newThreadFormik.submitForm();
                      }}
                    />
                  )}
                </WrapSocialText>
                {ThreadsBox}
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

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuWrapper p={3} pt={0}>
    <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink>
    <NavLink to={`${basePath}/collections`}>Collections</NavLink>
    <NavLink to={`${basePath}/discussions`}>Discussions</NavLink>
  </MenuWrapper>
);

const WrapButton = styled(Flex)`
  background: white;
  button {
    width: 100%;
    height: 50px;
  }
`;

const WrapSocialText = styled(Box)``;

const MenuWrapper = styled(Flex)`
  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: 8px;
    color: ${props => props.theme.colors.gray};
    letterspacing: 1px;
    font-size: 13px;
    padding: 4px 8px;
    &.active {
      color: #ffffff;
      background: ${props => props.theme.colors.orange};
      border-radius: 4px;
    }
  }
`;
export const HomeBox = styled(Flex)`
        width: 600px;
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
  background: white;
  min-width: 0px;
  padding: 0px;
  position: relative;
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
