// create a new collection

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
import { MentionsInput, Mention } from 'react-mentions';
import { Box } from 'rebass';
// import emojiExampleStyle from './emoji';
import { Actions, Container, ContainerForm, Header, Row } from '../Modal/modal';
import styled from '../../../themes/styled';

const TextWrapper = styled(ContainerForm)`
  display: flex;
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
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: red;
  margin-right: 8px;
`;

const {
  createCollectionMutation
} = require('../../../graphql/createCollection.graphql');
// const { getCommunityQuery } = require('../../../graphql/getCommunity.graphql');

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

const CreateCommunityModal = (props: Props & FormikProps<FormValues>) => {
  const {
    toggleModal,
    onChange,
    values,
    modalIsOpen,
    errors,
    touched,
    isSubmitting
  } = props;
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      <Container>
        <Header>
          {/* <H5>
            <Trans>Create a new collection</Trans>
          </H5> */}
        </Header>
        <Form>
          <Row>
            <TextWrapper>
              <Avatar />
              <MentionsInput
                value={value}
                onChange={onChange}
                style={defaultStyle}
                placeholder="Mention any Github user by typing `@` followed by at least one char"
              >
                <Mention
                  displayTransform={login => `@${login}`}
                  trigger="@"
                  data={fetchUsers}
                  style={defaultMentionStyle}
                />
              </MentionsInput>
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
          </Row>
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
  handleSubmit: (values, { props, setSubmitting }) => {
    // const variables = {
    //   communityId: Number(props.communityId),
    //   collection: {
    //     text: values.text,
    //     summary: values.summary,
    //     icon: values.image,
    //     content: values.summary,
    //     preferredUsername: values.name.split(' ').join('_')
    //   }
    // };
    // return props
    //   .createCollection({
    //     variables: variables,
    //     update: (store, { data }) => {
    //       const community = store.readQuery({
    //         query: getCommunityQuery,
    //         variables: {
    //           context: props.communityId,
    //           limit: 15
    //         }
    //       });
    //       const newCollection = {
    //         node: {
    //           __typename: 'Collection',
    //           id: data.createCollection.id,
    //           localId: data.createCollection.localId,
    //           name: data.createCollection.name,
    //           summary: data.createCollection.summary,
    //           preferredUsername: data.createCollection.preferredUsername,
    //           icon: data.createCollection.icon,
    //           followed: data.createCollection.followed,
    //           followers: {
    //             totalCount: 1,
    //             __typename: 'CollectionFollowersConnection'
    //           },
    //           inbox: {
    //             totalCount: 0,
    //             edges: {
    //               node: {
    //                 id: 1011,
    //                 __typename: 'Activity'
    //               },
    //               __typename: 'CollectionActivitiesEdge'
    //             },
    //             __typename: 'CollectionInboxConnection'
    //           },
    //           resources: {
    //             totalCount: 0,
    //             edges: {
    //               node: {
    //                 id: 1010,
    //                 __typename: 'Resource'
    //               },
    //               __typename: 'CollectionResourcesEdge'
    //             },
    //             __typename: 'CollectionResourcesConnection'
    //           },
    //           threads: {
    //             totalCount: 0,
    //             __typename: 'CollectionThreadsConnection'
    //           }
    //         },
    //         __typename: 'CommunityCollectionsEdge'
    //       };
    //       community.community.collections.edges.unshift(newCollection);
    //       community.community.collections.totalCount++;
    //       store.writeQuery({
    //         query: getCommunityQuery,
    //         variables: {
    //           context: props.communityId
    //         },
    //         data: community
    //       });
    //     }
    //   })
    //   .then(res => {
    //     props.toggleModal();
    //     setSubmitting(false);
    //   })
    //   .catch(err => console.log(err));
  }
})(CreateCommunityModal);

export default compose(withCreateCollection)(ModalWithFormik);
