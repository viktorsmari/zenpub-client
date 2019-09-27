import { Trans } from '@lingui/macro';
import * as React from 'react';
import { graphql, GraphqlQueryControls, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';
import Comment from '../../components/elements/Comment/Comment';
import Link from '../../components/elements/Link/Link';
import Loader from '../../components/elements/Loader/Loader';
import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';
import { Flex, Text } from 'rebass';
import CommentType from '../../types/Comment';
const getThread = require('../../graphql/getThread.graphql');
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { ChevronLeft } from 'react-feather';

import Thread from '../../components/elements/thread';
// import CommentEditor from '../../components/elements/Comment';
interface Data extends GraphqlQueryControls {
  comment: CommentType;
}
interface Props {
  data: Data;
  id: string;
  match: any;
  history: any;
  type: string;
  selectThread(number): number;
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

const Component = ({ data, id, selectThread, match, type, history }) => {
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
            <Header>
              <Link
                to={
                  data.comment.context.__typename === 'Community'
                    ? `/communities/${data.comment.context.localId}`
                    : `/collections/${data.comment.context.localId}`
                }
              >
                {/* <LeftArr> */}
                <ChevronLeft size="24" />
                {/* </LeftArr> */}
                <Text>
                  <Trans>Back</Trans>
                </Text>
              </Link>
            </Header>
            {data.comment.inReplyTo ? (
              <InReplyTo
                onClick={() => selectThread(data.comment.inReplyTo.localId)}
              >
                <Trans>Back to top-level thread</Trans>
              </InReplyTo>
            ) : null}
            <Thread
              content={message.body}
              user={author}
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
              // let message = {
              //   body: comment.node.content,
              //   date: comment.node.published,
              //   id: comment.node.localId
              // };
              return (
                <Comment
                  key={i}
                  user={author}
                  totalReplies={comment.node.replies.totalCount}
                  comment={comment.node}
                  selectThread={selectThread}
                />
              );
            })}
            {/* <WrapperTalk>
              <CommentEditor />
            </WrapperTalk> */}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.styles.colors.lightgray};
  height: 50px;
  align-items: center;
  padding: 0 8px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;

// const LeftArr = styled.span`

// `;

// const WrapperTalk = styled.div``;

const InReplyTo = styled.div`
  display: block;
  padding: 10px;
  text-align: center;
  background: #daecd6;
  color: #759053;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    rgb(205, 222, 201);
  }
`;

export default compose(
  withGetThread
  // withHandlers({
  //   selectThread: props => link =>
  //     props.history.push(
  //       props.data.comment.context.__typename === 'Community'
  //         ? `/communities/${props.data.comment.context.localId}/thread/${link}`
  //         : `/collections/${props.data.comment.context.localId}/${link}`
  //     )
  // })
)(Component);
