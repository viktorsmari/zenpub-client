import * as React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';
import Comment from '../../components/elements/Comment/Comment';
import Loader from '../../components/elements/Loader/Loader';
import { APP_NAME } from '../../constants';
import CommentType from '../../types/Comment';
const getThread = require('../../graphql/getThread.graphql');
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';

import Thread from '../../components/elements/thread';
import Header from './header';

interface Data extends GraphqlQueryControls {
  comment: CommentType;
}
interface Props {
  data: Data;
  id: string;
  match: any;
  history: any;
  type: string;
}

const withGetThread = graphql<
  {},
  {
    data: {
      comment: CommentType;
    };
  }
>(getThread, {
  options: (props: Props) => ({
    variables: {
      id: Number(props.match.params.id)
    }
  })
}) as OperationOption<{}, {}>;

const Component = ({ data, history }) => {
  if (data.error) {
    return 'error...';
  } else if (data.loading) {
    return <Loader />;
  }
  let author = {
    localId: data.comment.author ? data.comment.author.localId : null,
    name: data.comment.author ? data.comment.author.name : 'Deleted User',
    image: data.comment.author ? data.comment.author.icon : '',
    username: data.comment.author ? data.comment.author.preferredUsername : null
  };

  let message = {
    body: data.comment.content,
    date: data.comment.published,
    id: data.comment.localId
  };
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Helmet>
              <title>{APP_NAME} > Discussion Thread</title>
            </Helmet>
            <Header history={history} id={data.comment.context.localId} />
            <Thread
              content={message.body}
              user={author}
              inReplyTo={data.comment.inReplyTo}
              date={message.date}
              replies={data.comment.replies.totalCount}
              likes={0}
              retweets={0}
            />
            {data.comment.replies.edges.reverse().map((comment, i) => {
              let author = {
                localId: comment.node.author
                  ? comment.node.author.localId
                  : null,
                name: comment.node.author
                  ? comment.node.author.name
                  : 'Deleted User',
                icon: comment.node.author ? comment.node.author.icon : ''
              };
              return (
                <Comment
                  key={i}
                  user={author}
                  totalReplies={comment.node.replies.totalCount}
                  comment={comment.node}
                />
              );
            })}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

export default compose(withGetThread)(Component);
