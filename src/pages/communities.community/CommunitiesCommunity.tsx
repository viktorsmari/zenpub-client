// View a Community (with list of collections)

import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import media from 'styled-media-query';
import { Trans } from '@lingui/macro';
import { RouteComponentProps } from 'react-router';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import styled from '../../themes/styled';
import Community from '../../types/Community';
import Loader from '../../components/elements/Loader/Loader';
import '../../containers/App/basic.css';
import { clearFix } from 'polished';
import CollectionCard from '../../components/elements/Collection/Collection';
import P from '../../components/typography/P/P';
import Hero from './hero';
import CommunityModal from '../../components/elements/CommunityModal';
import EditCommunityModal from '../../components/elements/EditCommunityModal';
import UsersModal from '../../components/elements/UsersModal';
import CollectionModal from '../../components/elements/CollectionViewModal';
import CommunityPage from './Community';
import { Switch, Route } from 'react-router-dom';

import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import {
  WrapperPanel,
  Panel,
  PanelTitle,
  Nav,
  NavItem
} from '../../sections/panel';
import { Box } from 'rebass';
const { getCommunityQuery } = require('../../graphql/getCommunity.graphql');
enum TabsEnum {
  // Overview = 'Overview',
  Collections = 'Collections',
  Discussion = 'Discussion'
}
import Thread from '../thread';

interface Data extends GraphqlQueryControls {
  community: Community;
}

type State = {
  tab: TabsEnum;
};

interface Props
  extends RouteComponentProps<{
      community: string;
    }> {
  data: Data;
  handleNewCollection: any;
  handleCollection: any;
  isOpenCollection: boolean;
  isOpen: boolean;
  editCommunity(): boolean;
  isEditCommunityOpen: boolean;
  showUsers(boolean): boolean;
  isUsersOpen: boolean;
  document: any;
  stacked: boolean;
  onStacked(boolean): boolean;
}

class CommunitiesFeatured extends React.Component<Props, State> {
  state = {
    tab: TabsEnum.Collections
  };

  render() {
    let collections;
    let community;
    if (this.props.data.error) {
      collections = (
        <span>
          <Trans>Error loading collections</Trans>
        </span>
      );
    } else if (this.props.data.loading) {
      collections = <Loader />;
    } else if (this.props.data.community) {
      community = this.props.data.community;

      if (this.props.data.community.collections.totalCount) {
        collections = (
          /* {community.followed ? (
              <Header>
                <Actions>
                  <Create onClick={this.props.handleNewCollection}>
                    <WrapperAction>
                      <span>
                        <Collection
                          width={40}
                          height={40}
                          strokeWidth={1}
                          color={'#f98012'}
                        />
                      </span>
                      <Trans>Create a collection</Trans>
                    </WrapperAction>
                  </Create>
                </Actions>
              </Header>
            ) : (
              <Footer>
                <Trans>Join the community to create a collection</Trans>
              </Footer>
            )} */

          <Box m={2}>
            {this.props.data.community.collections.edges.map((e, i) => (
              <CollectionCard
                key={i}
                collection={e.node}
                openModal={this.props.handleCollection}
                communityId={this.props.data.community.localId}
              />
            ))}
          </Box>
        );
      } else {
        collections = (
          <OverviewCollection>
            <P>
              <Trans>This community has no collections.</Trans>
            </P>
            {/* {community.followed ? (
              <Header style={{ marginBottom: '8px' }}>
                <Actions>
                  <Create onClick={this.props.handleNewCollection}>
                    <WrapperAction>
                      <span>
                        <Collection
                          width={40}
                          height={40}
                          strokeWidth={1}
                          color={'#282828'}
                        />
                      </span>
                      <Trans>Create a collection</Trans>
                    </WrapperAction>
                  </Create>
                </Actions>
              </Header>
            ) : (
              <Footer>
                <Trans>Join the community to create a collection</Trans>
              </Footer>
            )} */}
          </OverviewCollection>
        );
      }
    }

    if (!community) {
      if (this.props.data.loading) {
        return (
          <WrapperCont>
            <Wrapper>
              <Loader />
            </Wrapper>
          </WrapperCont>
        );
      } else {
        // TODO better handling of no community
        return (
          <WrapperCont>
            <Wrapper>
              <span>
                <Trans>{this.props.data.error}</Trans>
              </span>
            </Wrapper>
          </WrapperCont>
        );
      }
    }

    return (
      <MainContainer>
        <HomeBox>
          <WrapperCont>
            <Wrapper>
              <Hero
                community={community}
                showUsers={this.props.showUsers}
                editCommunity={this.props.editCommunity}
              />
              <Switch>
                {/* <Route
                  path={`/communities/${community.localId}/thread/:id`}
                  component={Thread}
                /> */}
                <Route
                  path={this.props.match.url}
                  exact
                  render={props => (
                    <CommunityPage
                      {...props}
                      collections={collections}
                      community={community}
                      fetchMore={this.props.data.fetchMore}
                      type={'community'}
                    />
                  )}
                />
                <Route
                  path={`/communities/${
                    community.localId
                  }/collection/:collection`}
                  component={CollectionModal}
                />
                <Route
                  path={`/communities/${community.localId}/thread/:threadId`}
                  component={Thread}
                />
              </Switch>
            </Wrapper>
          </WrapperCont>
          <CommunityModal
            toggleModal={this.props.handleNewCollection}
            modalIsOpen={this.props.isOpen}
            communityId={community.localId}
            communityExternalId={community.id}
          />
          <EditCommunityModal
            toggleModal={this.props.editCommunity}
            modalIsOpen={this.props.isEditCommunityOpen}
            communityId={community.localId}
            communityExternalId={community.id}
            community={community}
          />
          <UsersModal
            toggleModal={this.props.showUsers}
            modalIsOpen={this.props.isUsersOpen}
            members={community.members.edges}
          />
        </HomeBox>
        <WrapperPanel>
          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              <Trans>Popular hashtags</Trans>
            </PanelTitle>
            <Nav>
              <NavItem mb={3} fontSize={1}>
                <Trans>#learningdesign</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>#MPI</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>#Youtube</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>#models</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>#ADDIE</Trans>
              </NavItem>
            </Nav>
          </Panel>

          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              <Trans>Popular categories</Trans>
            </PanelTitle>
            <Nav>
              <NavItem mb={3} fontSize={1}>
                <Trans>Humanities</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>Behavioural science</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>English</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>Romana</Trans>
              </NavItem>
              <NavItem mb={3} fontSize={1}>
                <Trans>Postgraduate</Trans>
              </NavItem>
            </Nav>
          </Panel>
        </WrapperPanel>
      </MainContainer>
    );
  }
}

// const WrapperAction = styled.div`
//   text-align: center;
//   flex: 1;
// `;
export const Actions = styled.div`
  ${clearFix()};
  display: flex;
`;

export const Create = styled.div`
  display: flex;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  background: ${props => props.theme.styles.colour.newcommunityBg};
  border-radius: 6px;
  margin-bottom: 8px;
  flex: 1;
  margin: 8px;
  height: 120px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  color: #f98012;
  border: 2px dashed #f98012;
  & span {
    display: inherit;
    margin-bottom: 8px;
    margin: 0 16px;
  }
  ${media.lessThan('medium')`display: block;`} & a {
    display: flex;
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
  &:hover {
    background: ${props => props.theme.styles.colour.newcommunityBgHover};
  }
`;

// const Header = styled.div`
//   ${clearFix()};
// `;

// const Footer = styled.div`
//   height: 30px;
//   line-height: 30px;
//   font-weight: 600;
//   text-align: center;
//   background: #ffefd9;
//   font-size: 13px;
//   border-bottom: 1px solid ${props => props.theme.styles.colour.divider};
//   color: #544f46;
// `;

const OverviewCollection = styled.div`
  padding-top: 8px;
  margin-bottom: -8px;
  flex: 1;
  & button {
    margin-left: 8px
    margin-bottom: 16px;
  }
  & p {
    margin-top: 0 !important;
    padding: 8px;
  }
`;

const withGetCollections = graphql<
  {},
  {
    data: {
      community: Community;
    };
  }
>(getCommunityQuery, {
  options: (props: Props) => ({
    variables: {
      limit: 15,
      context: Number(props.match.params.community)
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withGetCollections,
  withState('isOpen', 'onOpen', false),
  withState('isOpenCollection', 'onOpenCollection', false),
  withState('isEditCommunityOpen', 'onEditCommunityOpen', false),
  withState('isUsersOpen', 'showUsers', false),
  withState('stacked', 'onStacked', false),
  withHandlers({
    handleCollection: props => () =>
      props.onOpenCollection(!props.isOpenCollection),
    handleNewCollection: props => coll => {
      props.history.push(
        '/communities/' + props.match.params.community + '/collections/' + coll
      );
    },
    editCommunity: props => () =>
      props.onEditCommunityOpen(!props.isEditCommunityOpen)
  })
)(CommunitiesFeatured);
