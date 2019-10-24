import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { Box, Flex } from 'rebass';
import { string } from 'yup';
import { i18n } from '../../../containers/App/App';
import { gqlRequest } from '../../../gql/actions';
import {
  Comment as CommentData,
  CreateReplyMutationMutationVariables
} from '../../../gql/sdk';
import styled from '../../../themes/styled';
import { ActionContext } from '../../../_context/global/actionCtx';
import Alert from '../../elements/Alert';
// import {Button} from 'rebass';
import Comment from '../Comment/Comment';
import Modal from '../Modal';
// import { Actions, Container } from '../Modal/modal';
import SocialText from '../SocialText';
import { SessionContext } from '../../../_context/global/sessionCtx';
// import { Send } from 'react-feather';

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
  toggleModal: (_: boolean) => unknown;
  modalIsOpen: boolean;
  communityId?: string;
  communityExternalId?: string;
  id: string;
  author: Author;
  comment: CommentData;
  replyTo: any;
}

interface Author {
  image: string;
  name: string;
  username: string;
  localId: string;
}

const CreateCommunityModal = (
  props: Props /*  & FormikProps<FormValues> */
) => {
  const { dispatch } = React.useContext(ActionContext);
  const { /* comment ,*/ modalIsOpen, toggleModal } = props;
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  // const [isSubmitting /* setSubmitting */] = React.useState(false);
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
      const vars: CreateReplyMutationMutationVariables = {
        id: props.comment.localId!,
        comment: { content: text }
      };
      dispatch(
        gqlRequest.create({
          op: { createReplyMutation: [vars] },
          replyTo: props.replyTo
        })
      );
    },
    [error, text]
  );
  const session = React.useContext(SessionContext);
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      {/* <Container> */}
      {/* <Form> */}
      <Comment user={props.author} comment={props.comment} noAction replyTo />
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