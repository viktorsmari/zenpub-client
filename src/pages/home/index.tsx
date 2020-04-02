import { Trans } from '@lingui/macro';
import {
  ActivityPreviewHOC
  /* ActivityPreviewCtx */
} from 'HOC/modules/previews/activity/ActivityPreview';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Empty from '../../components/elements/Empty';
import Loader from '../../components/elements/Loader/Loader';
import { my_timeline } from '../../mn-constants';

import { CreateReplyMutationMutationOperation } from '../../graphql/createReply.generated';
import { DeleteMutationMutationOperation } from '../../graphql/delete.generated';
import {
  useGetMeInboxQuery
  /* GetMeInboxDocument */
} from '../../graphql/getMeInbox.generated';
import { LikeMutationMutationOperation } from '../../graphql/like.generated';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from 'ui/elements/Panel';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { Header } from 'ui/modules/Header';
import { useMe } from 'fe/session/me';

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
            <Header name="Timeline" />

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
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <Trans>{my_timeline}</Trans>
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
      </WrapperPanel>
    </MainContainer>
  );
};

export default Home;
