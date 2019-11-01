import * as React from 'react';
import Comment from '../../components/elements/Comment/Comment';
import Loader from '../../components/elements/Loader/Loader';
import Thread from '../../components/elements/thread';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import Header from './header';
import { GetThreadQueryHookResult } from '../../graphql/generated/getThread.generated';

export interface Props {
  threadQuery: GetThreadQueryHookResult;
}
const Component: React.FC<Props> = ({ threadQuery: thread }) => {
  if (thread.loading) {
    return <Loader />;
  } else if (thread.error || !thread.data) {
    return <>error...</>;
  }
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Header />
            <Thread comment={thread.data.comment!} />
            {thread.data.comment!.replies!.edges!.reverse().map(edge => {
              const { node: comment } = edge!;
              return <Comment key={comment!.localId!} comment={comment!} />;
            })}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};
export default Component;
