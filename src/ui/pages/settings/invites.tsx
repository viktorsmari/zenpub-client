import React, { ComponentType } from 'react';
import { Box, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { i18nMark, Trans } from '@lingui/react';
import { Actions, Row, ContainerForm } from 'ui/modules/Modal';
import { Label, Input } from '@rebass/forms';
import Button from 'ui/elements/Button';
import { RotateCw } from 'react-feather';
// import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';

const tt = {
  placeholders: {
    email: i18nMark(
      'Add email addresses (comma-separated) to invite to instance'
    )
  }
};
export interface Props {
  // formik: FormikHook<AddEmail>;
  emailsList?: string[];
  ConfirmResendInvitationModal?: ComponentType<{ email: string; done(): any }>;
}

export interface AddEmail {
  email: string[];
}

const Emails: React.FC<Props> = ({
  // formik,
  emailsList,
  ConfirmResendInvitationModal
}) => {
  const [selectedEmailForModal, setselectedEmailForModal] = React.useState<
    null | string
  >(null);
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
            // disabled={formik.isSubmitting}
            name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
          />
          <Actions>
            <Button
              variant="primary"
              // disabled={formik.isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
              // onClick={formik.submitForm}
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
        {emailsList &&
          emailsList.map((email, i) => (
            <ListRow key={i}>
              <EmailText>{email}</EmailText>
              <Resend onClick={() => setselectedEmailForModal(email)}>
                <RotateCw size={16} />
              </Resend>
              {/* <Button variant="danger"><Trans>Delete</Trans></Button> */}
            </ListRow>
          ))}
      </Box>
      {selectedEmailForModal && ConfirmResendInvitationModal != null && (
        <Modal closeModal={() => setselectedEmailForModal(null)}>
          <ConfirmResendInvitationModal
            email={selectedEmailForModal}
            done={() => setselectedEmailForModal(null)}
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
