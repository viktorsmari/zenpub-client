import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import {
  EditCollectionFormValues,
  editCollectionFormValuesSchema,
  getCollectionInputFromFormValues,
  useEditCollectionFormValuesFromQueryResult
} from 'common/forms/collection/edit';
import { useFormik } from 'formik';
import { useGetCollectionQuery } from 'graphql/getCollection.generated';
import { useUpdateCollectionMutationMutation } from 'graphql/updateCollection.generated';
import { Collection } from 'graphql/types.generated';
import * as React from 'react';
import { Button, Heading } from 'rebass/styled-components';
import Alert from 'ui/elements/Alert';
import Modal, {
  Actions,
  AlertWrapper,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from 'ui/modules/Modal';

const tt = {
  placeholders: {
    name: i18nMark('Edit the name of the collection'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    icon: i18nMark('Enter the URL of an icon to represent the collection')
  }
};

interface Props {
  collectionId: Collection['id'];
  closeModal: () => void;
}

const EditCollectionModal: React.FC<Props> = ({ closeModal, collectionId }) => {
  const collection = useGetCollectionQuery({ variables: { id: collectionId } });
  const [update /* , result */] = useUpdateCollectionMutationMutation();
  const formik = useFormik<EditCollectionFormValues>({
    enableReinitialize: true,
    onSubmit: vals =>
      update({
        variables: {
          collection: getCollectionInputFromFormValues(vals),
          collectionId
        }
      }),
    validationSchema: editCollectionFormValuesSchema,
    initialValues: useEditCollectionFormValuesFromQueryResult(collection)
  });
  const handleCloseModal = React.useCallback(() => closeModal(), [closeModal]);
  return (
    <Modal closeModal={handleCloseModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Edit the collection details</Trans>
          </Heading>
        </Header>
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
              <AlertWrapper>
                <Alert variant="bad">{formik.errors.name}</Alert>
              </AlertWrapper>
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
              <AlertWrapper>
                <Alert variant="bad">{formik.errors.summary}</Alert>
              </AlertWrapper>
            )}
          </ContainerForm>
        </Row>
        <Row>
          <label>
            <Trans>Icon</Trans>
          </label>
          <ContainerForm>
            <Input
              placeholder={tt.placeholders.icon}
              disabled={formik.isSubmitting}
              name="icon"
              value={formik.values.icon}
              onChange={formik.handleChange}
            />
            {formik.errors.icon && (
              <AlertWrapper>
                <Alert variant="bad">{formik.errors.icon}</Alert>
              </AlertWrapper>
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

export default EditCollectionModal;
