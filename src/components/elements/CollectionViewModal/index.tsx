// create a new collection

import * as React from 'react';
import Modal from '../Modal';
import { Container } from '../Modal/modal';
import Collection from '../../../pages/collections.collection/CollectionsCollection';

interface Props {
  toggleModal?: any;
  modalIsOpen?: boolean;
  history: any;
  match: any;
}

const CollectionViewModal = (props: Props) => {
  console.log(props);
  return (
    <Modal isOpen={true} toggleModal={() => props.history.goBack()}>
      <Container>
        <Collection match={props.match} />
      </Container>
    </Modal>
  );
};

export default CollectionViewModal;
