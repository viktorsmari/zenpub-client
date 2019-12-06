'use strict';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { Heading } from 'rebass/styled-components';
// import { i18n } from '../../../containers/App/App';
import Alert from '../../elements/Alert';
import { Button } from 'rebass/styled-components';
import Modal from '../Modal';
import {
  Actions,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from '../Modal';

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
  toggleModal: () => unknown;
  modalIsOpen?: boolean;
  validationSchema: any;
  submit: () => unknown;
}

interface FormValues {
  name: string;
  summary: string;
  icon: string;
  image: string;
  content: string;
  preferredUsername: string;
}
const CreateCommunityModal = (
  props: Props /*  & FormikProps<FormValues> */
) => {
  const initialValues = React.useMemo<FormValues>(
    () => ({
      name: '',
      summary: '',
      image: '',
      icon: '',
      content: '',
      preferredUsername: ''
    }),
    []
  );
  return (
    <Modal closeModal={props.toggleModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Create a new community</Trans>
          </Heading>
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={props.validationSchema}
          onSubmit={props.submit}
          render={({ errors, touched, isSubmitting }) => {
            return (
              <Form>
                <Row>
                  <label>Name</label>
                  <ContainerForm>
                    <Field
                      name="name"
                      render={({ field }) => (
                        <>
                          <Input
                            // placeholder={i18n._(tt.placeholders.name)}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                          <CounterChars>{60 - field.value.length}</CounterChars>
                        </>
                      )}
                    />
                    {errors.name &&
                      touched.name && (
                        <Alert variant="bad">{errors.name}</Alert>
                      )}
                  </ContainerForm>
                </Row>
                <Row big>
                  <label>
                    <Trans>Description</Trans>
                  </label>
                  <ContainerForm>
                    {
                      new Field({
                        name: 'summary',
                        render: ({ field }) => (
                          <>
                            <Textarea
                              //   placeholder={i18n._(tt.placeholders.summary)}
                              name={field.name}
                              value={field.value}
                              onChange={field.onChange}
                            />
                            <CounterChars>
                              {500 - field.value.length}
                            </CounterChars>
                          </>
                        )
                      })
                    }
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
                          //   placeholder={i18n._(tt.placeholders.image)}
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.image &&
                      touched.image && (
                        <Alert variant="bad">{errors.image}</Alert>
                      )}
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
                  <Button variant="outline" onClick={props.toggleModal}>
                    <Trans>Cancel</Trans>
                  </Button>
                </Actions>
              </Form>
            );
          }}
        />
      </Container>
    </Modal>
  );
};

export default CreateCommunityModal;
