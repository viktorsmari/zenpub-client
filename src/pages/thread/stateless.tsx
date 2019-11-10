import * as React from 'react';
import Comment from '../../components/elements/Comment/Comment';
import Loader from '../../components/elements/Loader/Loader';
import Thread from '../../components/elements/thread';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import Header from './header';
import { GetThreadQueryHookResult } from '../../graphql/generated/getThread.generated';
import Empty from '../../components/elements/Empty';
import { Trans } from '@lingui/macro';
import { Box } from 'rebass/styled-components';

export interface Props {
  threadQuery: GetThreadQueryHookResult;
}
const Component: React.FC<Props> = ({ threadQuery: thread }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {thread.loading ? (
              <Empty alignItems="center" mt={3}>
                <Loader />
              </Empty>
            ) : thread.error || !thread.data ? (
              <Empty>
                <Trans>Is it not possible to show the thread</Trans>
              </Empty>
            ) : (
              <>
                <Header context={thread.data.comment!.context} />
                {thread.data.comment!.inReplyTo ? (
                  <Box variant="inReplyTo">
                    <Comment
                      noAction
                      key={thread.data.comment!.inReplyTo!.localId!}
                      comment={thread.data.comment!.inReplyTo!}
                    />
                  </Box>
                ) : null}
                <Thread comment={thread.data.comment!} />

                {thread.data.comment!.replies!.edges!.reverse().map(edge => {
                  const { node: comment } = edge!;
                  return <Comment key={comment!.localId!} comment={comment!} />;
                })}
              </>
            )}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};
export default Component;
