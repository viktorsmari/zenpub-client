import * as React from 'react';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { useFormik } from 'formik';
import { Button, Heading } from 'rebass/styled-components';
import Alert from '../../elements/Alert';
import Modal, {
  Actions,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from '../Modal';
import {
  defaultValues,
  FormValues,
  schema,
  ValidationSchema
} from './formValues';

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
  toggleModal: () => void;
  onSubmit: (formValues: FormValues) => void;
  isSubmitting?: boolean;
  initialValues?: FormValues;
  validationSchema?: ValidationSchema;
}

const CreateCommunityModal: React.FC<Props> = ({
  onSubmit,
  toggleModal,
  isSubmitting = false,
  validationSchema = schema,
  initialValues = defaultValues
}) => {
  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit,
    validationSchema
  });

  React.useEffect(() => formik.setSubmitting(isSubmitting), [isSubmitting]);

  return (
    <Modal closeModal={toggleModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Create a new community</Trans>
          </Heading>
        </Header>
        <Row>
          <label>Name</label>
          <ContainerForm>
            <Input
              placeholder={tt.placeholders.name}
              disabled={isSubmitting}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <CounterChars>{60 - formik.values.name.length}</CounterChars>
            {formik.errors.name && (
              <Alert variant="bad">{formik.errors.name}</Alert>
            )}
          </ContainerForm>
        </Row>
        <Row big>
          <label>
            <Trans>Description</Trans>
          </label>
          <ContainerForm>
            <Textarea
              placeholder={tt.placeholders.summary}
              disabled={isSubmitting}
              name="summary"
              value={formik.values.summary}
              onChange={formik.handleChange}
            />
            <CounterChars>{500 - formik.values.summary.length}</CounterChars>
            {formik.errors.summary && (
              <Alert variant="bad">{formik.errors.summary}</Alert>
            )}
          </ContainerForm>
        </Row>
        <Row>
          <label>
            <Trans>Image</Trans>
          </label>
          <ContainerForm>
            <Input
              placeholder={tt.placeholders.image}
              disabled={isSubmitting}
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
            />
            {formik.errors.image && (
              <Alert variant="bad">{formik.errors.image}</Alert>
            )}
          </ContainerForm>
        </Row>
        <Actions>
          <Button
            disabled={isSubmitting}
            type="submit"
            style={{ marginLeft: '10px' }}
            onClick={formik.submitForm}
          >
            <Trans>Create</Trans>
          </Button>
          <Button variant="outline" onClick={toggleModal}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default CreateCommunityModal;
