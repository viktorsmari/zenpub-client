import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { compose } from 'recompose';
import { ApolloConsumer, graphql, OperationOption } from 'react-apollo';
import { getGlob } from '../../../_context/global/GLOB';
import { login } from '../../../_redux/session';
import * as Yup from 'yup';
import { i18n } from '../../../containers/App/App';
import Alert from '../../elements/Alert';
import { Input } from '@rebass/forms';
import { Heading } from 'rebass';
import Button from '../Button/Button';
import Modal from '../Modal';
import { Row, Container, Actions, ContainerForm, Header } from '../Modal/modal';
import { LOCAL_STORAGE_USER_ACCESS_TOKEN } from '../../../constants';
const { createUserMutation } = require('../../../graphql/createUser.graphql');
const checkUsername = require('../../../graphql/checkUsername.graphql');

let tt = {
  login: i18nMark('Sign in'),
  placeholders: {
    email: i18nMark('eg. mary@moodlers.org'),
    name: i18nMark('eg. Moodler Mary'),
    password: i18nMark('Choose your password'),
    passwordConfirm: i18nMark('Confirm your password')
  }
};

interface Props {
  toggleModal?: any;
  modalIsOpen?: boolean;
  errors: any;
  touched: any;
  isSubmitting: boolean;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  username: string;
  passwordConfirm: string;
}

interface MyFormProps {
  createUser: any;
  toggleModal: any;
}

async function validateUsername(value, client) {
  // TODO use the same function in signup & edit profile
  let error;
  const format = /[^0-9a-zA-Z]/;
  if (value.length < 3) {
    error = 'Choose a username longer than 3 characters';
    return error;
  }
  if (value.length > 16) {
    error = 'Choose a username shorter than 16 characters';
    return error;
  }
  if (format.test(value)) {
    error = 'Only letters and numbers are allowed in a username';
    return error;
  } else {
    const { data } = await client.query({
      query: checkUsername,
      variables: { username: value }
    });
    if (!data.usernameAvailable) {
      error = 'That username has already been taken';
      return error;
    }
  }
}

const withCreateUser = graphql<{}>(createUserMutation, {
  name: 'createUser'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

const CreateCommunityModal = (props: Props & FormikProps<FormValues>) => {
  const { toggleModal, modalIsOpen, errors, touched, isSubmitting } = props;
  return (
    <ApolloConsumer>
      {client => (
        <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
          <Container>
            <Header>
              <Heading m={2}>
                <Trans>Create a new account</Trans>
              </Heading>
            </Header>
            <Form>
              <Row>
                <label>
                  <Trans>Email</Trans>
                </label>
                <ContainerForm>
                  <Field
                    name="email"
                    render={({ field }) => (
                      <Input
                        placeholder={i18n._(tt.placeholders.email)}
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  {errors.email &&
                    touched.email && <Alert>{errors.email}</Alert>}
                </ContainerForm>
              </Row>
              <Row>
                <label>
                  <Trans>Display Name</Trans>
                </label>
                <ContainerForm>
                  <Field
                    name="name"
                    render={({ field }) => (
                      <Input
                        placeholder={i18n._(tt.placeholders.name)}
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  {errors.name && touched.name && <Alert>{errors.name}</Alert>}
                </ContainerForm>
              </Row>
              <Row>
                <label>
                  <Trans>Preferred username</Trans>
                </label>
                <ContainerForm>
                  <Field
                    name="username"
                    validate={val => validateUsername(val, client)}
                    render={({ field }) => (
                      <>
                        <Input
                          // placeholder="The name of the community..."
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </>
                    )}
                  />
                  {/* {errors.username &&
            touched.username && <Alert>{errors.username}</Alert>} */}
                  {errors.username && <Alert>{errors.username}</Alert>}
                </ContainerForm>
              </Row>
              <Row>
                <label>
                  <Trans>Password</Trans>
                </label>
                <ContainerForm>
                  <Field
                    name="password"
                    render={({ field }) => (
                      <Input
                        placeholder={i18n._(tt.placeholders.password)}
                        type="password"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  {errors.password &&
                    touched.password && <Alert>{errors.password}</Alert>}
                </ContainerForm>
              </Row>
              <Row>
                <label>
                  <Trans>Confirm password</Trans>
                </label>
                <ContainerForm>
                  <Field
                    name="passwordConfirm"
                    render={({ field }) => (
                      <Input
                        placeholder={i18n._(tt.placeholders.passwordConfirm)}
                        type="password"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  {errors.passwordConfirm &&
                    touched.passwordConfirm && (
                      <Alert>{errors.passwordConfirm}</Alert>
                    )}
                </ContainerForm>
              </Row>
              <Actions>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  style={{ marginLeft: '10px' }}
                >
                  <Trans>Sign Up</Trans>
                </Button>
                <Button onClick={toggleModal} secondary>
                  <Trans>Cancel</Trans>
                </Button>
              </Actions>
            </Form>
          </Container>
        </Modal>
      )}
    </ApolloConsumer>
  );
};

const ModalWithFormik = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: '',
    email: '',
    username: '',
    password: '',
    passwordConfirm: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter your name or nickname'),
    email: Yup.string()
      .email()
      .required('Please enter your email'),
    password: Yup.string()
      .min(6)
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required')
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const variables = {
      user: {
        email: values.email,
        name: values.name,
        password: values.password,
        preferredUsername: values.username
      }
    };
    return props
      .createUser({
        variables: variables
      })
      .then(res => {
        getGlob().action.dispatch(login.create(res.data.createUser));
        localStorage.setItem(
          LOCAL_STORAGE_USER_ACCESS_TOKEN,
          res.data.createUser.token
        );
        setSubmitting(false);
        window.location.reload();
      })
      .catch(err => {
        setSubmitting(false);
        alert(err);
        console.log(err);
      });
  }
})(CreateCommunityModal);

export default compose(withCreateUser)(ModalWithFormik);
