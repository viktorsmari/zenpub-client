import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import { compose } from 'recompose';
import * as Yup from 'yup';
import { i18n } from '../../../containers/App/App';
import Alert from '../../elements/Alert';
import Textarea from '../../inputs/TextArea/Textarea';
import Button from '../Button/Button';
import Modal from '../Modal';
import { Box, Flex } from 'rebass';
import { Actions, Container } from '../Modal/modal';
import styled from '../../../themes/styled';
import Comment from '../Comment/Comment';

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

const {
  createCollectionMutation
} = require('../../../graphql/createCollection.graphql');

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
  toggleModal?: any;
  modalIsOpen?: boolean;
  communityId?: string;
  communityExternalId?: string;
  errors: any;
  touched: any;
  isSubmitting: boolean;
}

interface FormValues {
  text: string;
}

interface MyFormProps {
  communityId: string;
  communityExternalId: string;
  createCollection: any;
  toggleModal: any;
}

const withCreateCollection = graphql<{}>(createCollectionMutation, {
  name: 'createCollection'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

let author = {
  icon:
    'https://home.next.moodle.net/media/ZVnBBCYKbG42IonFQKi_n56Hyrc/aHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjE5NjYxMzEtMjQ3YjgxMTFlOTdlP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTI4NSZxPTgw/photo-1561966131-247b8111e97e',
  name: 'Bernini',
  localId: '35',
  preferredUsername: 'bernini'
};

let comment = {
  id: '35',
  content: 'This is a sample message',
  published: '',
  inReplyTo: null,
  localId: '35'
};

const CreateCommunityModal = (props: Props & FormikProps<FormValues>) => {
  const { toggleModal, modalIsOpen, errors, touched, isSubmitting } = props;
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      <Container>
        <Form>
          <Comment user={author} comment={comment} noAction />
          <TextWrapper>
            <Avatar />
            <Field
              name="text"
              render={({ field }) => (
                <TalkEditor
                  placeholder={i18n._(tt.placeholders.name)}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.text && touched.text && <Alert>{errors.text}</Alert>}
          </TextWrapper>
          <Actions>
            <Publish
              disabled={isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
            >
              <Trans>Create</Trans>
            </Publish>
          </Actions>
        </Form>
      </Container>
    </Modal>
  );
};

const ModalWithFormik = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    text: ''
  }),
  validationSchema: Yup.object().shape({
    text: Yup.string().required()
  }),
  handleSubmit: (values, { props, setSubmitting }) => {}
})(CreateCommunityModal);

export default compose(withCreateCollection)(ModalWithFormik);
