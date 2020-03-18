import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Button, Heading, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import {
  Actions,
  Container,
  ContainerForm,
  Header,
  Row
} from 'ui/modules/Modal';

export interface Props {
  cancel(): any;
  deleteTitle: string;
  deleteDescription: string;
  formik: FormikHook;
}

export const ConfirmDeleteModal: React.FC<Props> = ({
  cancel,
  deleteTitle,
  deleteDescription,
  formik
}) => {
  // const { i18n } = React.useContext(LocaleContext);
  return (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>{deleteTitle}</Trans>
        </Heading>
      </Header>
      <Row>
        <ContainerForm>
          <Text>{deleteDescription}</Text>
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          disabled={formik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={formik.submitForm}
        >
          <Trans>Delete</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

export default ConfirmDeleteModal;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
