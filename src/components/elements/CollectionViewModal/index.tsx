// create a new collection

import { Trans } from '@lingui/macro';
import * as React from 'react';
import H5 from '../../typography/H5/H5';
import Modal from '../Modal';
import { Container, Header } from '../Modal/modal';

interface Props {
  toggleModal?: any;
  modalIsOpen?: boolean;
}

const CollectionViewModal = (props: Props) => {
  const { toggleModal, modalIsOpen } = props;
  return (
    <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
      <Container>
        <Header>
          <H5>
            <Trans>Sample collection view</Trans>
          </H5>
        </Header>
      </Container>
    </Modal>
  );
};

export default CollectionViewModal;
