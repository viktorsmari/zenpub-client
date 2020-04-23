import { i18nMark, Trans } from '@lingui/react';
import { Input, Label } from '@rebass/forms';
import React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import ConfirmationModal from 'ui/modules/ConfirmationModal';
// import { FormikHook } from 'ui/@types/types';
import Modal, { Actions, ContainerForm, Row } from 'ui/modules/Modal';
import styled from 'ui/themes/styled';
import { RotateCw } from 'react-feather';
import { LocaleContext } from 'context/global/localizationCtx';

const tt = {
  placeholders: {
    email: i18nMark(
      'Add email addresses (comma-separated) to invite to instance'
    )
  }
};
export interface Props {
  formikRemoveEmail: FormikHook<WithEmail>;
  formikSendInvite: FormikHook<WithEmail>;
  formikAddEmail: FormikHook<WithEmail>;
  emailsList: string[];
}

export interface WithEmail {
  email: string;
}

const Emails: React.FC<Props> = ({
  emailsList,
  formikAddEmail,
  formikSendInvite,
  formikRemoveEmail
}) => {
  const { i18n } = React.useContext(LocaleContext);

  return (
    <Box>
      <Text variant="heading" px={3} mt={2}>
        Manage your instance registration
      </Text>
      <EmailWrapper>
        <Label pt={3}>
          <Trans>Email</Trans>
        </Label>
        <EmailContainerForm>
          <EmailInput
            placeholder={tt.placeholders.email}
            disabled={formikAddEmail.isSubmitting}
            name="email"
            value={formikAddEmail.values.email}
            onChange={formikAddEmail.handleChange}
          />
          <Actions>
            <Button
              variant="primary"
              disabled={formikAddEmail.isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
              onClick={formikAddEmail.submitForm}
            >
              <Trans>Add</Trans>
            </Button>
          </Actions>
        </EmailContainerForm>
      </EmailWrapper>
      <Box p={3}>
        <Text p={3} variant="suptitle">
          <Trans>Sent invitations</Trans>
        </Text>
        {emailsList.map((email, i) => (
          <ListRow key={`${i}-${email}`}>
            <EmailText>{email}</EmailText>
            <Resend
              onClick={() => {
                formikSendInvite.setValues({ email });
                formikSendInvite.submitForm();
              }}
            >
              <RotateCw size={16} />
            </Resend>
            <Button
              variant="danger"
              onClick={() => formikRemoveEmail.setValues({ email })}
            >
              <Trans>Delete</Trans>
            </Button>
          </ListRow>
        ))}
      </Box>
      {formikRemoveEmail.values.email && (
        <Modal closeModal={() => formikRemoveEmail.setValues({ email: '' })}>
          <ConfirmationModal
            cancel={() => formikRemoveEmail.setValues({ email: '' })}
            formik={formikRemoveEmail}
            modalAction={i18n._(`Remove email from whitelist`)}
            modalDescription={i18n._(
              `Are you sure you want to remove ${formikRemoveEmail.values.email} from the whitelisted emails?`
            )}
            modalTitle={i18n._(`Delete`)}
          />
        </Modal>
      )}
    </Box>
  );
};

export default Emails;

const EmailText = styled(Text)`
  flex:1;
  // color: ${props => props.theme.colors.gray};
`;

const EmailInput = styled(Input)`
  && {
    flex: 1;
    color: ${props => props.theme.colors.darkgray};
  }
`;
const ListRow = styled(Row)`
  align-items: center;
`;

const Resend = styled(Box)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    stroke: ${props => props.theme.colors.gray};
  }

  &:hover {    
    // background: ${props => props.theme.colors.lighter};   
    svg {
      stroke: ${props => props.theme.colors.primary};
    }   
  }  
}
`;

const EmailContainerForm = styled(ContainerForm)`
  display: flex;
  align-items: center;
`;

const EmailWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.lighter};
`;
