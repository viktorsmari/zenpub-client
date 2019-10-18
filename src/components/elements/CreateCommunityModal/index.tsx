import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { compose, graphql, OperationOption } from 'react-apollo';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import { i18n } from '../../../containers/App/App';
import Alert from '../../elements/Alert';
import { Input, Textarea } from '@rebass/forms';
import { Heading } from 'rebass';
import Button from '../Button/Button';
import Modal from '../Modal';
import {
  Actions,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from '../Modal/modal';
const {
  createCommunityMutation
} = require('../../../graphql/createCommunity.graphql');

const tt = {
  placeholders: {
    name: i18nMark('Choose a name for the community'),
    summary: i18nMark(
      'Please describe who might be interested in this community and what kind of collections it is likely to contain...'
    ),
    image: i18nMark('Enter the URL of an image to represent the community')
  }
};

interface Props {
  toggleModal?: any;
  modalIsOpen?: boolean;
  errors: any;
  touched: any;
  isSubmitting: boolean;
  setSubmitting(boolean): boolean;
  history: any;
}

interface FormValues {
  name: string;
  summary: string;
  image: string;
}

interface MyFormProps {
  createCommunity: any;
  toggleModal: any;
  setSubmitting(boolean): boolean;
  history: any;
}

const withCreateCommunity = graphql<{}>(createCommunityMutation, {
  name: 'createCommunity'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

const CreateCommunityModal = (props: Props & FormikProps<FormValues>) => {
  const { toggleModal, modalIsOpen, errors, touched, isSubmitting } = props;
  return (
    <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Create a new community</Trans>
          </Heading>
        </Header>
        <Form>
          <Row>
            <label>Name</label>
            <ContainerForm>
              <Field
                name="name"
                render={({ field }) => (
                  <>
                    <Input
                      placeholder={i18n._(tt.placeholders.name)}
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <CounterChars>{60 - field.value.length}</CounterChars>
                  </>
                )}
              />
              {errors.name && touched.name && <Alert>{errors.name}</Alert>}
            </ContainerForm>
          </Row>
          <Row big>
            <label>
              <Trans>Description</Trans>
            </label>
            <ContainerForm>
              <Field
                name="summary"
                render={({ field }) => (
                  <>
                    <Textarea
                      placeholder={i18n._(tt.placeholders.summary)}
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <CounterChars>{500 - field.value.length}</CounterChars>
                  </>
                )}
              />
            </ContainerForm>
          </Row>
          <Row>
            <label>
              <Trans>Image</Trans>
            </label>
            <ContainerForm>
              <Field
                name="image"
                render={({ field }) => (
                  <Input
                    placeholder={i18n._(tt.placeholders.image)}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.image && touched.image && <Alert>{errors.image}</Alert>}
            </ContainerForm>
          </Row>
          <Actions>
            <Button
              disabled={isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
            >
              <Trans>Create</Trans>
            </Button>
            <Button onClick={toggleModal} secondary>
              <Trans>Cancel</Trans>
            </Button>
          </Actions>
        </Form>
      </Container>
    </Modal>
  );
};

const ModalWithFormik = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: '',
    summary: '',
    image: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(60)
      .required(),
    summary: Yup.string().max(500),
    image: Yup.string().url()
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const variables = {
      community: {
        name: values.name,
        summary: values.summary,
        icon: values.image,
        content: values.summary,
        preferredUsername: values.name.split(' ').join('_')
      }
    };
    return props
      .createCommunity({
        variables: variables
      })
      .then(res => {
        setSubmitting(false);
        props.toggleModal();
        props.history.push(`/communities/${res.data.createCommunity.localId}`);
      })
      .catch(err => console.log(err));
  }
})(CreateCommunityModal);

export default compose(
  withCreateCommunity,
  withRouter
)(ModalWithFormik);
