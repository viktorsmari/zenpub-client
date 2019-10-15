import * as React from 'react';
import { Helmet } from 'react-helmet';
import Comment from '../../components/elements/Comment/Comment';
import Loader from '../../components/elements/Loader/Loader';
import { APP_NAME } from '../../constants';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { Props } from './types';
import Thread from '../../components/elements/thread';
import Header from './header';

const Component: React.FC<Props> = ({ thread }) => {
  if (thread.loading) {
    return <Loader />;
  } else if (thread.error) {
    return <>error...</>;
  }
  let comment = thread.data!.comment!;
  let author = {
    localId: comment.author ? `${comment.author.localId! || ''}` : '',
    name: comment.author ? comment.author.name || '' : 'Deleted User',
    image: comment.author ? comment.author.icon || '' : '',
    username: comment.author ? comment.author.preferredUsername || '' : ''
  };

  let message = {
    body: comment.content || '',
    date: comment.published || '',
    id: comment.localId || ''
  };
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Helmet>
              <title>{APP_NAME} > Discussion Thread</title>
            </Helmet>
            <Header history={history} id={comment.context!.localId} />
            <Thread
              content={message.body}
              user={author}
              inReplyTo={comment.inReplyTo}
              date={message.date}
              replies={comment.replies!.totalCount}
              likes={0}
              retweets={0}
            />
            {comment.replies!.edges!.reverse().map((c, i) => {
              let author = {
                localId: c!.node!.author ? c!.node!.author!.localId : null,
                name: c!.node!.author ? c!.node!.author!.name : 'Deleted User',
                icon: c!.node!.author ? c!.node!.author!.icon : ''
              };
              return (
                <Comment
                  key={i}
                  user={author}
                  totalReplies={c!.node!.replies!.totalCount}
                  comment={c!.node}
                />
              );
            })}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

export default Component;
