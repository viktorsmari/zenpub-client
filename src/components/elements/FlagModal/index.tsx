import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { Textarea } from '@rebass/forms';
import { Heading, Flex } from 'rebass';
import { string } from 'yup';
import { i18n } from '../../../containers/App/App';
// import {
//   Flag,
//   useCreateFlagMutation
// } from '../../../generated/graphqlapollo';
import styled from '../../../themes/styled';
import Alert from '../../elements/Alert';
import Button from '../Button/Button';
import Modal from '../Modal';
import { Actions, Container, Header } from '../Modal/modal';

const TextWrapper = styled(Flex)`
  padding: 16px;
  align-items: center;
`;

// const Publish = styled(Button)`
//   height: 40px;
//   padding: 0 40px;
//   color: white !important;
//   font-size: 15px;
//   border-radius: 20px;
//   letter-spacing: 0.5px;
//   cursor: pointer;
//   &:hover {
//     background: #ec7c16 !important;
//     color: white !important;
//   }
// `;

// const Avatar = styled(Box)`
//   min-width: 48px !important;
//   height: 48px;
//   border-radius: 48px;
//   background: ${props => props.theme.colors.orange};
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

const tt = {
  placeholders: {
    name: i18nMark('Flag'),
    flag: i18nMark('Please describe the reason for the flag')
  }
};

interface Props {
  toggleModal(_: boolean): unknown;
  modalIsOpen: boolean;
  // flag: string;
}

const FlagModal: React.FC<Props> = ({
  // flag,
  modalIsOpen,
  toggleModal
}) => {
  //   const [report] = useCreateFlagMutation();
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const oninput = React.useCallback(
    async (_: React.SyntheticEvent<HTMLTextAreaElement>) => {
      const _text = _.currentTarget.value;
      setText(_text);
      setTouched(true);
      setError('');
      string()
        .required()
        .validate(_text)
        .catch(err => setError(err.message));
    },
    []
  );
  const submit = React.useCallback(
    () => {
      if (error) {
        return;
      }
      //   report({
      //     variables: {
      //       id: flag.localId!,
      //       flag: { content: text }
      //     }
      //   });
      toggleModal(false);
    },
    [error, text]
  );
  return (
    <Modal isOpen={modalIsOpen} toggleModal={() => toggleModal(false)}>
      {/* <Container> */}
      {/* <Form> */}
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Flag the comment</Trans>
          </Heading>
        </Header>
        <TextWrapper>
          {/* <Avatar
                style={{
                    backgroundImage: `url(${session.session.user!.me!.user!.icon!})`
                }}
                mr={2}
                /> */}
          <Textarea
            placeholder={i18n._(tt.placeholders.flag)}
            name={'text'}
            onChange={oninput}
          />
          {error && touched && <Alert>{error}</Alert>}
        </TextWrapper>
        <Actions>
          <Button onClick={submit} style={{ marginLeft: '10px' }}>
            <Trans>Send</Trans>
          </Button>
          <Button onClick={() => toggleModal(false)} secondary>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default FlagModal; // compose(withCreateCollection)(ModalWithFormik);
