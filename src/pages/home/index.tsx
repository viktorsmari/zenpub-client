import { Trans } from '@lingui/macro';
import {
  ActivityPreviewHOC
  /* ActivityPreviewCtx */
} from 'HOC/modules/previews/activity/ActivityPreview';
import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Empty from '../../components/elements/Empty';
import Loader from '../../components/elements/Loader/Loader';
import { SidePanel } from 'ui/modules/SidePanel';

import { CreateReplyMutationMutationOperation } from '../../graphql/createReply.generated';
import { DeleteMutationMutationOperation } from '../../graphql/delete.generated';
import {
  useGetMeInboxQuery
  /* GetMeInboxDocument */
} from '../../graphql/getMeInbox.generated';
import { LikeMutationMutationOperation } from '../../graphql/like.generated';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
// import {
//   Nav,
//   NavItem,
//   Panel,
//   PanelTitle,
//   WrapperPanel
// } from 'ui/elements/Panel';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { useMe } from 'fe/session/me';
import styled from 'ui/themes/styled';
import { Flex } from 'rebass/styled-components';

interface Props {}

const Home: React.FC<Props> = () => {
  const {
    data,
    loading,
    error,
    /* fetchMore, */ refetch
    /* variables */
  } = useGetMeInboxQuery({
    variables: {
      limit: 15
    }
  });
  useEffect(() => {
    refetch();
  }, []);
  useDynamicLinkOpResult<CreateReplyMutationMutationOperation>(
    'createReplyMutation',
    () => {
      refetch();
    },
    [refetch]
  );
  useDynamicLinkOpResult<LikeMutationMutationOperation>(
    'likeMutation',
    () => {
      refetch();
    },
    [refetch]
  );
  useDynamicLinkOpResult<DeleteMutationMutationOperation>(
    'deleteMutation',
    () => {
      refetch();
    },
    [refetch]
  );
  const { me } = useMe();

  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Switch>
              <Route path="/">
                {/* FIX ME  */}
                <Menu basePath="/" />
                {error ? (
                  <Empty>
                    <Trans>Error loading moodlenet timeline</Trans>
                  </Empty>
                ) : loading ? (
                  <Loader />
                ) : data?.me?.user.inbox?.edges ? (
                  <div>
                    {/* FIXME https://gitlab.com/moodlenet/meta/issues/185 */
                    data.me.user.inbox!.edges!.map(
                      userActivityEdge =>
                        userActivityEdge && (
                          <ActivityPreviewHOC
                            activityId={userActivityEdge.id}
                            key={userActivityEdge.id}
                          />
                        )
                    )}
                  </div>
                ) : null}
              </Route>
              {me ? (
                <>
                  <Route path={`/user/${me.user.id}/communities`}>
                    {/* FIX ME add joined communities content*/}
                  </Route>
                  <Route path={`/user/${me.user.id}/collections`}>
                    {/* FIX ME add followed collections content*/}
                  </Route>
                </>
              ) : null}
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      {/* <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>My MoodleNet</Trans>
          </PanelTitle>
          <Nav>
            {me ? (
              <>
                <NavItem mb={4} fontSize={1} fontWeight={'bold'}>
                  <NavLink to={`/user/${me.user.id}/communities`}>
                    <Trans>Joined communities</Trans>
                  </NavLink>
                </NavItem>
                <NavItem fontSize={1} fontWeight={'bold'}>
                  <NavLink to={`/user/${me.user.id}/collections`}>
                    <Trans>Followed collections</Trans>
                  </NavLink>
                </NavItem>
              </>
            ) : null}
          </Nav>
        </Panel>
      </WrapperPanel> */}
      <SidePanel />
    </MainContainer>
  );
};

export default Home;

const Menu = ({ basePath }: { basePath: string }) => {
  const { me } = useMe();
  return (
    <MenuWrapper>
      <NavLink exact to={'/'}>
        <Trans>My Timeline</Trans>
      </NavLink>
      {me ? (
        <>
          <NavLink to={`/user/${me.user.id}/communities`}>
            <Trans>Joined communities</Trans>
          </NavLink>
          <NavLink to={`/user/${me.user.id}/collections`}>
            <Trans>Followed collections</Trans>
          </NavLink>
        </>
      ) : null}
    </MenuWrapper>
  );
};

const MenuWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  padding: 12px 8px;
  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: 8px;
    color: ${props => props.theme.colors.gray};
    letterspacing: 1px;
    font-size: 14px;
    padding: 4px 8px;
    // white-space: nowrap;
    &.active {
      color: #ffffff;
      background: ${props => props.theme.colors.orange};
      border-radius: 4px;
    }
  }
`;
