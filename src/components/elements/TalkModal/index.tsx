import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { Box, Flex } from 'rebass';
import {
  Comment as CommentData,
  CreateReplyMutationMutationVariables
} from 'src/gql/sdk';
import { string } from 'yup';
import { i18n } from '../../../containers/App/App';
import { gqlRequest } from '../../../gql/actions';
import styled from '../../../themes/styled';
import { ActionContext } from '../../../_context/actionCtx';
import Alert from '../../elements/Alert';
import Textarea from '../../inputs/TextArea/Textarea';
import Button from '../Button/Button';
import Comment from '../Comment/Comment';
import Modal from '../Modal';
import { Actions, Container } from '../Modal/modal';
// import { SdkData } from 'src/gql/actions';
// import { getGlob } from 'src/_context/GLOB';
// import { /* gqlRequest,  */SdkData } from 'src/gql/actions';

const TextWrapper = styled(Flex)`
  padding: 16px;
`;

const TalkEditor = styled(Textarea)`
  flex: 1;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  &::placeholder {
    font-size: 18px;
  }
`;

const Publish = styled(Button)`
  height: 40px;
  padding: 0 40px;
  color: white !important;
  font-size: 15px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    background: #ec7c16 !important;
    color: white !important;
  }
`;

const Avatar = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background: red;
  margin-right: 8px;
`;

// const {
//   createCollectionMutation
// } = require('../../../graphql/createCollection.graphql');

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
}

// interface FormValues {
//   text: string;
// }

// interface MyFormProps {
//   communityId: string;
//   communityExternalId: string;
//   createCollection: any;
//   toggleModal: any;
// }

// const withCreateCollection = graphql<{}>(createCollectionMutation, {
//   name: 'createCollection'
//   // TODO enforce proper types for OperationOption
// } as OperationOption<{}, {}>);

interface Author {
  image: string;
  name: string;
  username: string;
  localId: string;
}

// interface _Comment  {
//   id: string;
//   content: string;
//   published: string;
//   inReplyTo: any;
//   localId: string;
//   replies: any;
// }

// let author = {
//   icon:
//     'https://home.next.moodle.net/media/ZVnBBCYKbG42IonFQKi_n56Hyrc/aHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjE5NjYxMzEtMjQ3YjgxMTFlOTdlP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTI4NSZxPTgw/photo-1561966131-247b8111e97e',
//   name: 'Bernini',
//   localId: '35',
//   preferredUsername: 'bernini'
// };

// let comment = {
//   id: '35',
//   content: 'This is a sample message',
//   published: '',
//   inReplyTo: null,
//   localId: '35'
// };

const CreateCommunityModal = (
  props: Props /*  & FormikProps<FormValues> */
) => {
  const { dispatch } = React.useContext(ActionContext);
  const { /* comment ,*/ modalIsOpen, toggleModal } = props;
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [isSubmitting /* setSubmitting */] = React.useState(false);
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
          replyTo: null
        })
      );
    },
    [error, text]
  );
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      <Container>
        {/* <Form> */}
        <Comment user={props.author} comment={props.comment} noAction />
        <TextWrapper>
          <Avatar />
          <TalkEditor
            placeholder={i18n._(tt.placeholders.name)}
            name={'text'}
            defaultValue={text}
            onChange={oninput}
          />
          {error && touched && <Alert>{error}</Alert>}
        </TextWrapper>
        <Actions>
          <Publish
            onClick={submit}
            disabled={isSubmitting}
            type="submit"
            style={{ marginLeft: '10px' }}
          >
            <Trans>Create</Trans>
          </Publish>
        </Actions>
        {/* </Form> */}
      </Container>
    </Modal>
  );
};

// const ModalWithFormik = withFormik<Props & MyFormProps, FormValues>({
//   mapPropsToValues: props => ({
//     ...props,
//     text: ''
//   }),
//   validationSchema: Yup.object().shape({
//     text: Yup.string().required()
//   }),
//   handleSubmit: (values, { props, setSubmitting } ) => {
//     // getGlob().action.dispatch(gqlRequest.create({op:{createReplyMutation:[{comment:values.text,id:values.}]}}))
//     console.log(values, props)
//   }
// })(CreateCommunityModal);

export default CreateCommunityModal; // compose(withCreateCollection)(ModalWithFormik);
