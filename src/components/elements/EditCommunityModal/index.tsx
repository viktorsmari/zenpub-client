'use strict';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { Field, Form, Formik, FormikConfig } from 'formik';
import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { Heading } from 'rebass/styled-components';
import * as Yup from 'yup';
import { i18n } from '../../../containers/App/App';
import Alert from '../Alert';
import styled from '../../../themes/styled';
import { Button } from 'rebass/styled-components';
import Modal from '../Modal';
import DropzoneArea from '../DropzoneModal';
import { useUploadIconMutation } from '../../../graphql/generated/uploadIcon.generated';
// import { Community } from '../../../graphql/types.generated';

import {
  Actions,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from '../Modal/modal';
import {
  useUpdateCommunityMutationMutation,
  UpdateCommunityMutationMutationVariables
} from '../../../graphql/generated/updateCommunity.generated';

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
  toggleModal?: () => unknown;
  modalIsOpen?: boolean;
  communityId: string;
  community: any;
  communityUpdated: any;
}

interface FormValues {
  name: string;
  summary: string;
  icon: string;
  image: string;
  files: [];
  // content: string;
  // preferredUsername: string;
}
const IconImg = styled.img`
  display: block;
  max-width: 100%;
  margin-bottom: 10px;
`;

const EditCommunityModal = (props: Props /*  & FormikProps<FormValues> */) => {
  const {
    toggleModal,
    modalIsOpen,
    communityId,
    community,
    communityUpdated
  } = props;
  // const history = useHistory();
  const [update /* , response */] = useUpdateCommunityMutationMutation({});
  const [files, setFiles] = useState([] as any);
  const [mutateIcon] = useUploadIconMutation();
  const [iconUrl, onIcon] = useState(community.icon);

  const initialValues = React.useMemo<FormValues>(
    () => ({
      name: community.name || '',
      summary: community.summary || '',
      image: community.icon || '',
      icon: community.icon || '',
      files: []
      // content: '',
      // preferredUsername: ''
    }),
    []
  );

  useEffect(
    () => {
      console.log('FILES %O', files);
    },
    [files]
  );

  const afterDrop = files => {
    setFiles(files);
    // setFieldValue("files", values.files.concat(acceptedFiles));
    console.log('afterDrop %O', files);
  };

  const submit = React.useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values, { setSubmitting }) => {
      console.log('FILES Submit %O', files);
      const variables: UpdateCommunityMutationMutationVariables = {
        communityId: communityId,
        community: {
          name: values.name,
          summary: values.summary
          // image: values.image,
          // icon: values.image
        }
      };
      update({
        variables: variables
      })
        .then(res => {
          setSubmitting(false);
          toggleModal;
          communityUpdated;
          return mutateIcon({
            variables: { contextId: communityId, upload: files[0] }
          }).then(res => {
            onIcon(res.data!.uploadIcon!.url);
          });
        })
        .catch(err => console.log(err));
    },
    []
  );
  return (
    <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Edit the community details</Trans>
          </Heading>
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submit}
          render={({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue
          }) => {
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
                            placeholder={i18n._(tt.placeholders.name)}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                          <CounterChars>{60 - field.value.length}</CounterChars>
                        </>
                      )}
                    />
                    {errors.name &&
                      touched.name && <Alert>{errors.name}</Alert>}
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
                          <CounterChars>
                            {500 - field.value.length}
                          </CounterChars>
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
                    {community.icon && <IconImg src={iconUrl} />}
                    {/* <Field
                      name="image"
                      render={({ field }) => (
                        <Input
                          placeholder={i18n._(tt.placeholders.image)}
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    /> */}
                    <DropzoneArea onDropFile={afterDrop} />
                    {errors.image &&
                      touched.image && <Alert>{errors.image}</Alert>}
                  </ContainerForm>
                </Row>
                <Actions>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    style={{ marginLeft: '10px' }}
                  >
                    <Trans>Save</Trans>
                  </Button>
                  <Button variant="outline" onClick={toggleModal}>
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

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export default EditCommunityModal;
