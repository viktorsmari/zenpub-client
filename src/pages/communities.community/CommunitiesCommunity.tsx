// View a Community (with list of collections)

import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { Trans } from '@lingui/macro';
import { RouteComponentProps } from 'react-router';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import styled from '../../themes/styled';
import Loader from '../../components/elements/Loader/Loader';
import '../../containers/App/basic.css';
import CollectionCard from '../../components/elements/Collection/Collection';

import Hero from './hero';
import EditCommunityModal from '../../components/elements/EditCommunityModal';
import UsersModal from '../../components/elements/UsersModal';
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
import { Box } from 'rebass/styled-components';
import { Community } from '../../graphql/types';
const { getCommunityQuery } = require('../../graphql/getCommunity.graphql');
enum TabsEnum {
  // Overview = 'Overview',
  Collections = 'Collections',
  Discussion = 'Discussion'
}
interface Data extends QueryControls {
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
  editCommunity(): boolean;
  isEditCommunityOpen: boolean;
  showUsers(boolean): boolean;
  isUsersOpen: boolean;
}

class CommunitiesFeatured extends React.Component<Props, State> {
  state = {
    tab: TabsEnum.Collections
  };

  render() {
    let collections;
    if (this.props.data.error) {
      collections = (
        <span>
          <Trans>Error loading collections</Trans>
        </span>
      );
    } else if (this.props.data.loading) {
      collections = <Loader />;
    } else if (this.props.data.community) {
      if (this.props.data.community.collections.totalCount) {
        collections = (
          <Box m={2}>
            {this.props.data.community.collections.edges.map((e, i) => (
              <CollectionCard key={i} collection={e!.node} />
            ))}
          </Box>
        );
      } else {
        collections = (
          <OverviewCollection>
            <Trans>This community has no collections.</Trans>
          </OverviewCollection>
        );
      }
    }

    if (!this.props.data.community) {
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
                community={this.props.data.community}
                showUsers={this.props.showUsers}
                editCommunity={this.props.editCommunity}
              />
              <Switch>
                <Route
                  path={this.props.match.url}
                  exact
                  render={props => (
                    <CommunityPage
                      {...props}
                      collections={collections}
                      community={this.props.data.community}
                      id={this.props.data.community.id}
                      followed={
                        this.props.data.community.myFollow!.id ? true : false
                      }
                      fetchMore={this.props.data.fetchMore}
                      refetch={() => this.props.data.refetch()}
                    />
                  )}
                />
                {/* <Route
                  path={`/communities/${
                    community.localId
                  }/collection/:collection`}
                  component={CollectionModal}
                /> */}
              </Switch>
            </Wrapper>
          </WrapperCont>
          <EditCommunityModal
            toggleModal={this.props.editCommunity}
            modalIsOpen={this.props.isEditCommunityOpen}
            communityId={this.props.data.community.id}
            communityExternalId={this.props.data.community.id}
            community={this.props.data.community}
          />
          <UsersModal
            toggleModal={this.props.showUsers}
            modalIsOpen={this.props.isUsersOpen}
            members={this.props.data.community.followers.edges}
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

const OverviewCollection = styled.div`
  padding: 24px;
  text-align: center;
  font-weight: 600;
  color: #000000b5;
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
      communityId: props.match.params.community
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withGetCollections,
  withState('isEditCommunityOpen', 'onEditCommunityOpen', false),
  withState('isUsersOpen', 'showUsers', false),
  withHandlers({
    editCommunity: props => () =>
      props.onEditCommunityOpen(!props.isEditCommunityOpen)
  })
)(CommunitiesFeatured);
