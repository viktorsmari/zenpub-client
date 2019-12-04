// create a new collection

import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { Field, Form, Formik, FormikConfig } from 'formik';
import * as React from 'react';
import { Button, Heading } from 'rebass/styled-components';
import * as Yup from 'yup';
import { i18n } from '../../../containers/App/App';
import {
  CreateCollectionMutationMutationVariables,
  useCreateCollectionMutationMutation
} from '../../../graphql/generated/createCollection.generated';
import Alert from '../Alert';
import Modal from '../Modal';
import {
  Actions,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from '../Modal/modal';
import { useHistory } from 'react-router';
import styled from '../../../themes/styled';

const tt = {
  placeholders: {
    name: i18nMark('Choose a name for the collection'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    image: i18nMark('Enter the URL of an image to represent the collection')
  }
};

interface FormValues {
  name: string;
  summary: string;
  image: string;
}

interface Props {
  // communityExternalId: string;
  // createCollection: any;
  communityId: string;
  toggleModal: any;
  modalIsOpen: boolean;
}

const CreateCollectionModal: React.FC<Props> = ({
  toggleModal,
  modalIsOpen,
  communityId
}) => {
  const history = useHistory();
  const [createCollection] = useCreateCollectionMutationMutation();
  const handleSubmit = React.useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values, { setSubmitting }) => {
      const variables: CreateCollectionMutationMutationVariables = {
        communityId: communityId,
        collection: {
          name: values.name,
          summary: values.summary,
          icon: values.image || undefined,
          preferredUsername: values.name.split(' ').join('_')
        }
      };
      return createCollection({ variables })
        .then(res => {
          setSubmitting(false);
          res.data &&
            res.data.createCollection &&
            history.push(`/collections/${res.data.createCollection.id}`);
        })
        .catch(err => {
          setSubmitting(false);
          console.log(err);
        });
    },
    [communityId]
  );
  return (
    <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Create a new collection</Trans>
          </Heading>
        </Header>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          render={({ errors, touched, isSubmitting }) => {
            return (
              <Form>
                <Row>
                  <label>
                    <Trans>Name</Trans>
                  </label>
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
                          <CounterChars>{80 - field.value.length}</CounterChars>
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
                  <label>Image</label>
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
                    {errors.image &&
                      touched.image && <Alert>{errors.image}</Alert>}
                  </ContainerForm>
                </Row>
                <Actions>
                  <SubmitButton disabled={isSubmitting} type="submit">
                    <Trans>Create</Trans>
                  </SubmitButton>
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

const initialValues: FormValues = {
  name: '',
  summary: '',
  image: ''
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(80)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export default CreateCollectionModal;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;

// const ModalWithFormik = withFormik<MyFormProps, FormValues>({
//   handleSubmit: (values, { props, setSubmitting }) => {
//     const variables = {
//       communityId: Number(props.communityId),
//       collection: {
//         name: values.name,
//         summary: values.summary,
//         icon: values.image,
//         content: values.summary,
//         preferredUsername: values.name.split(' ').join('_')
//       }
//     };
//     return props
//       .createCollection({
//         variables: variables,
//         update: (store, { data }) => {
//           const community = store.readQuery({
//             query: getCommunityQuery,
//             variables: {
//               context: props.communityId,
//               limit: 15
//             }
//           });
//           const newCollection = {
//             node: {
//               __typename: 'Collection',
//               id: data.createCollection.id,
//               id: data.createCollection.id,
//               name: data.createCollection.name,
//               summary: data.createCollection.summary,
//               preferredUsername: data.createCollection.preferredUsername,
//               icon: data.createCollection.icon,
//               followed: data.createCollection.followed,
//               followers: {
//                 totalCount: 1,
//                 __typename: 'CollectionFollowersConnection'
//               },
//               inbox: {
//                 totalCount: 0,
//                 edges: {
//                   node: {
//                     id: 1011,
//                     __typename: 'Activity'
//                   },
//                   __typename: 'CollectionActivitiesEdge'
//                 },
//                 __typename: 'CollectionInboxConnection'
//               },
//               resources: {
//                 totalCount: 0,
//                 edges: {
//                   node: {
//                     id: 1010,
//                     __typename: 'Resource'
//                   },
//                   __typename: 'CollectionResourcesEdge'
//                 },
//                 __typename: 'CollectionResourcesConnection'
//               },
//               threads: {
//                 totalCount: 0,
//                 __typename: 'CollectionThreadsConnection'
//               }
//             },
//             __typename: 'CommunityCollectionsEdge'
//           };
//           community.community.collections.edges.unshift(newCollection);
//           community.community.collections.totalCount++;
//           store.writeQuery({
//             query: getCommunityQuery,
//             variables: {
//               context: props.communityId
//             },
//             data: community
//           });
//         }
//       })
//       .then(res => {
//         props.toggleModal();
//         setSubmitting(false);
//       })
//       .catch(err => console.log(err));
//   }
// })(CreateCollectionModal);
