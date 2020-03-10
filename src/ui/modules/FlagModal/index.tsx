import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { Textarea } from '@rebass/forms';
import { Button, Heading } from 'rebass/styled-components';
import styled from '../../../themes/styled';
import Alert from '../../elements/Alert';
import { FormikHook } from 'ui/@types/types';
import {
  Actions,
  AlertWrapper,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from 'ui/modules/Modal';

// const TextWrapper = styled(Flex)`
//   padding: 16px;
//   align-items: center;
// `;

const tt = {
  placeholders: {
    name: i18nMark('Flag'),
    flag: i18nMark('Please describe the reason for flagging the item')
  }
};

export interface Props {
  cancel(): any;
  flagId: string;
  formik?: FormikHook<BasicCreateFlagFormValues>;
  unflagItem?: any;
}

export interface BasicCreateFlagFormValues {
  reason: string;
}

export const FlagModal: React.FC<Props> = ({
  cancel,
  flagId,
  formik,
  unflagItem
}) => {
  const { i18n } = React.useContext(LocaleContext);

  return flagId == null && formik ? (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>Flag</Trans>
        </Heading>
      </Header>
      <Row big>
        <ContainerForm>
          <Textarea
            placeholder={i18n._(tt.placeholders.flag)}
            name="reason"
            value={formik.values.reason}
            onChange={formik.handleChange}
          />
          <CounterChars>{200 - formik.values.reason.length}</CounterChars>
          {formik.errors.reason && (
            <AlertWrapper>
              <Alert variant="bad">{formik.errors.reason}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          disabled={formik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={formik.submitForm}
        >
          <Trans>Send</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  ) : (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>Flagged</Trans>
        </Heading>
      </Header>
      <Row>
        <ContainerForm>
          <Trans>You have already flagged this item.</Trans>
        </ContainerForm>
      </Row>
      <Actions>
        <Button
          variant="primary"
          onClick={unflagItem}
          style={{ marginLeft: '10px' }}
        >
          <Trans>Unflag</Trans>
        </Button>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
        {/* <Button onClick={cancel}>
          <Trans>OK</Trans>
        </Button> */}
      </Actions>
    </Container>
  );
};

export default FlagModal;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
