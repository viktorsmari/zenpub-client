import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/react';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';
import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from 'ui/elements/Panel';
import Button from 'ui/elements/Button';
import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import {
  Wrapper,
  WrapperCont,
  List,
  MainContainer,
  HomeBox,
  MenuList,
  ObjectsList
} from 'ui/elements/Layout';

export interface Props {
  ActivitiesBox: JSX.Element;
  ResourcesBox: JSX.Element;
  HeroCollectionBox: JSX.Element;
  FollowersBoxes: JSX.Element;
  ShareLinkModalPanel: React.ComponentType<{ done(): any }>;
  EditCollectionPanel: React.ComponentType<{ done(): any }>;
  UploadResourcePanel: React.ComponentType<{ done(): any }>;
  basePath: string;
  collectionName: string;
  loadMoreActivities: FormikHook;
  loadMoreResources: FormikHook;
  loadMoreFollowers: FormikHook;
}

export const Collection: React.FC<Props> = ({
  HeroCollectionBox,
  ShareLinkModalPanel,
  EditCollectionPanel,
  UploadResourcePanel,
  ActivitiesBox,
  FollowersBoxes,
  ResourcesBox,
  basePath,
  collectionName,
  loadMoreActivities,
  loadMoreResources,
  loadMoreFollowers
}) => {
  const [isOpenEditCollection, setOpenEditCollection] = React.useState(false);
  const [isShareLinkOpen, setOpenShareLink] = React.useState(false);
  const [isUploadOpen, setUploadOpen] = React.useState(false);
  return (
    <MainContainer>
      {isOpenEditCollection && (
        <Modal closeModal={() => setOpenShareLink(false)}>
          <EditCollectionPanel done={() => setOpenEditCollection(false)} />
        </Modal>
      )}
      {isShareLinkOpen && (
        <Modal closeModal={() => setOpenShareLink(false)}>
          <ShareLinkModalPanel done={() => setOpenShareLink(false)} />
        </Modal>
      )}
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Header name={collectionName} />
            <Switch>
              <Route path={`${basePath}/followers`}>
                <FollowersMenu basePath={`${basePath}/followers`} />
                <ObjectsList>{FollowersBoxes}</ObjectsList>
                {loadMoreFollowers && (
                  <LoadMore LoadMoreFormik={loadMoreFollowers} />
                )}
              </Route>
              <Route exact path={`${basePath}/resources`}>
                <>
                  {HeroCollectionBox}
                  <Menu basePath={basePath} />
                  <WrapButton p={3}>
                    <Button
                      mr={2}
                      onClick={() => setOpenShareLink(true)}
                      variant="outline"
                    >
                      <Trans>Share link</Trans>
                    </Button>
                    <Button
                      onClick={() => setUploadOpen(true)}
                      variant="outline"
                    >
                      <Trans>Add new resource</Trans>
                    </Button>
                  </WrapButton>
                  {isUploadOpen && (
                    <UploadResourcePanel done={() => setUploadOpen(false)} />
                  )}
                  <ObjectsList>{ResourcesBox}</ObjectsList>
                  {loadMoreResources && (
                    <LoadMore LoadMoreFormik={loadMoreResources} />
                  )}
                </>
              </Route>
              <Route exact path={`${basePath}/`}>
                <>
                  {HeroCollectionBox}
                  <Menu basePath={basePath} />
                  <List>{ActivitiesBox}</List>
                  {loadMoreActivities && (
                    <LoadMore LoadMoreFormik={loadMoreActivities} />
                  )}
                </>
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
export default Collection;

const FollowersMenu = ({ basePath }: { basePath: string }) => (
  <MenuList m={2} p={2} pt={0}>
    <NavLink exact to={`${basePath}`}>
      Followers
    </NavLink>
  </MenuList>
);

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuList p={3} pt={3}>
    <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink>
    <NavLink exact to={`${basePath}/resources`}>
      <Trans>Resources</Trans>
    </NavLink>
  </MenuList>
);

const WrapButton = styled(Flex)`
  background: ${props => props.theme.colors.appInverse};
  button {
    width: 100%;
    height: 50px;
  }
`;
