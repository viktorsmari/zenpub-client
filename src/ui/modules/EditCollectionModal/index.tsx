import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
// import {
//   EditCollectionFormValues,
//   editCollectionFormValuesSchema,
//   getCollectionInputFromFormValues,
//   useEditCollectionFormValuesFromQueryResult
// } from 'ui-context-impl/collection/edit';
// import { useFormik } from 'formik';
// import { useGetCollectionQuery } from 'graphql/getCollection.generated';
// import { useUpdateCollectionMutationMutation } from 'graphql/updateCollection.generated';
import { FormikHook } from 'common/types';
import { throwUnimplementedFn } from 'common/util/ctx-mock/throwUnimplementedFn';
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
  collectionId: string;
  closeModal: () => void;
}

export interface EditCollectionFormValues {
  name: string;
  summary: string;
  image: string;
}

export interface EditCollectionContextCfg {
  collectionId: string;
}

export type EditCollectionContext = (
  cfg: EditCollectionContextCfg
) => {
  formik: FormikHook<EditCollectionFormValues>;
};
export const EditCollectionContext = React.createContext<EditCollectionContext>(
  throwUnimplementedFn<EditCollectionContext>('EditCollectionFormContext')
);

export const EditCollectionModal: React.FC<Props> = ({
  closeModal,
  collectionId
}) => {
  const servizioContext = React.useContext(EditCollectionContext);
  const { formik } = servizioContext({ collectionId });
  return (
    <Modal closeModal={closeModal}>
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
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
            />
            {formik.errors.image && (
              <AlertWrapper>
                <Alert variant="bad">{formik.errors.image}</Alert>
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
          <Button variant="outline" onClick={closeModal}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};
