import { Trans } from '@lingui/macro';
// import { i18nMark } from '@lingui/react';
import { Form } from 'formik';
import * as React from 'react';
// import { ApolloConsumer } from 'react-apollo';
// import * as Yup from 'yup';
// import { i18n } from '../../../containers/App/App';
// import Alert from '../../elements/Alert';
// import { Input } from '@rebass/forms';
import { Heading, Button } from 'rebass/styled-components';
import Modal from '../Modal';
import { Container, Actions, Header } from '../Modal/modal';
import SignupModal from '../SignupModal';
import Markdown from 'markdown-to-jsx';

import user_agreement_md from '!!raw-loader!./user_agreement.md';
import mothership_consent_md from '!!raw-loader!./mothership_consent.md';
// console.log(agreement_md)

interface Props {
  toggleModal?: any;
  modalIsOpen?: boolean;
  handleNext?(): boolean;
  nextModalIsOpen?: boolean;
}

const TermsUserModal = (props: Props) => {
  const { toggleModal, modalIsOpen, handleNext, nextModalIsOpen } = props;
  return (
    <>
      <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
        <Container>
          <Header>
            <Heading m={2}>
              <Trans>Please read our user agreement</Trans>
            </Heading>
          </Header>
          <Form>
            <Markdown>{user_agreement_md}</Markdown>

            <Markdown>{mothership_consent_md}</Markdown>

            <Actions>
              <Button onClick={props.handleNext} style={{ marginLeft: '10px' }}>
                <Trans>Agree and continue</Trans>
              </Button>
              <Button onClick={toggleModal} variant="outline">
                <Trans>Cancel</Trans>
              </Button>
            </Actions>
          </Form>
        </Container>
      </Modal>
      <SignupModal toggleModal={handleNext} modalIsOpen={nextModalIsOpen} />
    </>
  );
};

export default TermsUserModal;
