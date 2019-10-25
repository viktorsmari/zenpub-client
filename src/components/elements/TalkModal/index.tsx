import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { Box, Flex } from 'rebass';
import { string } from 'yup';
import { i18n } from '../../../containers/App/App';
import CommentCmp from '../Comment/Comment';
import { Comment } from '../../../generated/graphqlapollo';
import styled from '../../../themes/styled';
import { CommentCtx } from '../../../context/commentCtx';
import { SessionContext } from '../../../context/global/sessionCtx';
import Alert from '../../elements/Alert';
import Modal from '../Modal';
import SocialText from '../SocialText';

const TextWrapper = styled(Flex)`
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

const Avatar = styled(Box)`
  min-width: 48px !important;
  height: 48px;
  border-radius: 48px;
  background: ${props => props.theme.styles.colors.orange};
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

const CreateCommunityModal: React.FC<Props> = ({
  comment,
  modalIsOpen,
  toggleModal
}) => {
  const session = React.useContext(SessionContext);
  const commentCtx = React.useContext(CommentCtx);
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
      commentCtx.replyComment({
        id: comment.localId!,
        comment: { content: text }
      });
      toggleModal(false);
    },
    [error, text]
  );
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      {/* <Container> */}
      {/* <Form> */}
      <CommentCmp comment={comment} noAction />
      <TextWrapper>
        <Avatar
          style={{
            backgroundImage: `url(${session.session.user!.me!.user!.icon!})`
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
        {error && touched && <Alert>{error}</Alert>}
      </TextWrapper>
    </Modal>
  );
};

export default CreateCommunityModal; // compose(withCreateCollection)(ModalWithFormik);
