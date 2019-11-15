import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import { string } from 'yup';
import { i18n } from '../../../containers/App/App';
import CommentCmp from '../Comment/Comment';
import styled from '../../../themes/styled';
import { SessionContext } from '../../../context/global/sessionCtx';
import Alert from '../../elements/Alert';
import Modal from '../Modal';
import SocialText from '../SocialText';
import { Comment } from '../../../graphql/types';
import { useCreateReplyMutationMutation } from '../../../graphql/generated/createReply.generated';

export const TextWrapper = styled(Flex)`
  padding: 16px;
  align-items: center;
`;

// const Publish = styled(Button)`
//   height: 40px;
//   padding: 0 40px;
//   color: white !important;
//   font-size: 15px;
//   border-radius: 20px;
//   letter-spacing: 0.5px;
//   cursor: pointer;
//   &:hover {
//     background: #ec7c16 !important;
//     color: white !important;
//   }
// `;

export const Avatar = styled(Box)`
  min-width: 48px !important;
  height: 48px;
  border-radius: 48px;
  background: ${props => props.theme.colors.orange};
  background-repeat: no-repeat;
  background-size: cover;
`;

const tt = {
  placeholders: {
    name: i18nMark('Post a reply'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    image: i18nMark('Enter the URL of an image to represent the collection')
  }
};

interface Props {
  toggleModal(_: boolean): unknown;
  modalIsOpen: boolean;
  comment: Comment;
}

export const TalkModal: React.FC<Props> = ({
  comment,
  modalIsOpen,
  toggleModal
}) => {
  const [reply /* ,replyResult */] = useCreateReplyMutationMutation();
  const session = React.useContext(SessionContext);
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const oninput = React.useCallback(
    async (_: React.SyntheticEvent<HTMLTextAreaElement>) => {
      const _text = _.currentTarget.value;
      setText(_text);
      setTouched(true);
      setError('');
      string()
        .required()
        .validate(_text)
        .catch(err => setError(err.message));
    },
    []
  );
  const submit = React.useCallback(
    () => {
      if (error) {
        return;
      }
      reply({
        variables: {
          inReplyToId: comment.id!,
          threadId: comment.thread!.id!,
          comment: { content: text }
        }
      });
      toggleModal(false);
    },
    [error, text]
  );
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      {/* <Container> */}
      {/* <Form> */}
      <CommentCmp comment={comment} noLink noAction />
      <TextWrapper>
        <Avatar
          style={{
            backgroundImage: `url(${session.auth!.me.user!.icon!})`
          }}
          mr={2}
        />
        <SocialText
          placeholder={i18n._(tt.placeholders.name)}
          name={'text'}
          defaultValue={text}
          submit={submit}
          onChange={oninput}
        />
      </TextWrapper>
      {error && touched && <Alert>{error}</Alert>}
    </Modal>
  );
};

export default TalkModal; // compose(withCreateCollection)(ModalWithFormik);
