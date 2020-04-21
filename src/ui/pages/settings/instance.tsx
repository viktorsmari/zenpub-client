import { i18nMark, Trans } from '@lingui/react';
import { /* Textarea,*/ Checkbox, Input, Label } from '@rebass/forms';
import React from 'react';
import { XCircle } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import ConfirmationModal from 'ui/modules/ConfirmationModal';
import Modal, { Actions, ContainerForm, Row } from 'ui/modules/Modal';
// import DropzoneArea from '../../../components/elements/DropzoneModal';
import styled from 'ui/themes/styled';

const tt = {
  placeholders: {
    domain: i18nMark('Enter domain (e.g. moodle.com)')
  }
};

export interface Props {
  formikAddDomain: FormikHook<AddDomain>;
  formikRemoveDomain: FormikHook<AddDomain>;
  domainsList: string[];
}

export interface AddDomain {
  domain: string;
}

// export const Instance = props => (
const Instance: React.FC<Props> = ({
  formikAddDomain,
  formikRemoveDomain,
  domainsList
}) => {
  return (
    <Box>
      <Text px={3} mt={2} variant="heading">
        <span style={{ marginRight: '8px' }}>🎨</span>Customize your instance
      </Text>
      {/* <Row>
      <ContainerForm>
        <label>
          <Trans>Name</Trans>
        </label>
        <Input />
      </ContainerForm>
    </Row>
    <Row>
      <ContainerForm>
        <label>
          <Trans>Description</Trans>
        </label>
        <Textarea />
      </ContainerForm>
    </Row>
    <Row>
      <ContainerForm>
        <label>
          <Trans>Instance background</Trans>
        </label>
        <Bg>
          <DropzoneArea
            initialUrl={''}
            // formikForm={}
          />
        </Bg>
      </ContainerForm>
    </Row> */}
      <Row>
        <ContainerForm>
          <Invite>
            <Label>
              <Checkbox id="inviteOnly" name="inviteOnly" />
              This instance is invite only
            </Label>
          </Invite>
        </ContainerForm>
      </Row>
      <DomainWrapper>
        <Label pt={3}>
          <Trans>Add Domain to allowlist</Trans>
        </Label>
        <DomainContainerForm>
          <DomainInput
            placeholder={tt.placeholders.domain}
            disabled={formikAddDomain.isSubmitting}
            name="domain"
            value={formikAddDomain.values.domain}
            onChange={formikAddDomain.handleChange}
          />
          <Actions>
            <Button
              variant="primary"
              disabled={formikAddDomain.isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
              onClick={formikAddDomain.submitForm}
            >
              <Trans>Add</Trans>
            </Button>
          </Actions>
        </DomainContainerForm>
      </DomainWrapper>
      <Box p={3}>
        <Text p={3} variant="suptitle">
          <Trans>Allowed Domains</Trans>
        </Text>
        {domainsList &&
          domainsList.map((domain, i) => (
            <ListRow key={i}>
              <DomainText>{domain}</DomainText>
              <Delete onClick={() => formikRemoveDomain.setValues({ domain })}>
                <XCircle size={21} />
              </Delete>
            </ListRow>
          ))}
      </Box>
      {formikRemoveDomain.values.domain && (
        <Modal closeModal={() => formikRemoveDomain.setValues({ domain: '' })}>
          <ConfirmationModal
            cancel={() => formikRemoveDomain.setValues({ domain: '' })}
            formik={formikRemoveDomain}
            modalAction="**modalAction**"
            modalDescription="**modalDescription**"
            modalTitle="**modalTitle**"
          />
        </Modal>
      )}

      <Text variant="suptitle" p={3}>
        <Trans>More options will be available soon</Trans>
      </Text>
    </Box>
  );
};

const Invite = styled(Flex)`
  align-items: center;
  label {
    width: 100%;
    line-height: auto;
    align-items: center;
  }
`;

const DomainText = styled(Text)`
  flex:1;
  // color: ${props => props.theme.colors.gray};
`;

const DomainContainerForm = styled(ContainerForm)`
  display: flex;
  align-items: center;
`;

const DomainWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.lighter};
`;

const DomainInput = styled(Input)`
  && {
    flex: 1;
    color: ${props => props.theme.colors.darkgray};
  }
`;

const ListRow = styled(Row)`
  align-items: center;
`;

const Delete = styled(Box)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg{
    stroke: ${props => props.theme.colors.gray};
  }
  &:hover {
    // background: ${props => props.theme.colors.lighter};
    svg{
      stroke: ${props => props.theme.colors.primary};
    }
  }
`;

export default Instance;
// const Bg = styled(Box)``;
