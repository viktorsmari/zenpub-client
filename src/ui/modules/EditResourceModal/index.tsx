import * as React from 'react';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { Button, Heading } from 'rebass/styled-components';
import { useEditResourceForm } from 'common/hooks/service/resource/edit';
import Alert from 'ui/elements/Alert';
import Modal, {
  Actions,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from 'ui/modules/Modal';

const tt = {
  placeholders: {
    url: i18nMark('The url of the resource'),
    name: i18nMark('Choose a name for the community'),
    summary: i18nMark(
      'Please describe who might be interested in this resource...'
    ),
    image: i18nMark('Enter the URL of an image to represent the resource')
  }
};

interface Props {
  closeModal: () => void;
}

const EditResourceModal: React.FC<Props> = ({ closeModal }) => {
  const handleCloseModal = React.useCallback(() => closeModal(), [closeModal]);
  const formik = useEditResourceForm();
  return (
    <Modal closeModal={handleCloseModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Edit the resource details</Trans>
          </Heading>
        </Header>
        <Row>
          <label>Url</label>
          <ContainerForm>
            <Input
              placeholder={tt.placeholders.url}
              disabled={formik.isSubmitting}
              name="url"
              value={formik.values.url}
              onChange={formik.handleChange}
            />
            {formik.errors.url && (
              <Alert variant="bad">{formik.errors.url}</Alert>
            )}
          </ContainerForm>
        </Row>
        <Row>
          <label>Name</label>
          <ContainerForm>
            <Input
              placeholder={tt.placeholders.name}
              disabled={formik.isSubmitting}
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
              disabled={formik.isSubmitting}
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
              disabled={formik.isSubmitting}
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
            disabled={formik.isSubmitting}
            type="submit"
            style={{ marginLeft: '10px' }}
            onClick={formik.submitForm}
          >
            <Trans>Create</Trans>
          </Button>
          <Button variant="outline" onClick={handleCloseModal}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default EditResourceModal;
