import * as React from 'react';
import { Box, Text, Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/react';
import { Row, ContainerForm } from 'ui/modules/Modal';
import { Input, Textarea, Checkbox, Label } from '@rebass/forms';
import DropzoneArea from '../../../components/elements/DropzoneModal';
import styled from 'ui/themes/styled';

export const Instance = props => (
  <Box>
    <Text px={3} mt={2} variant="heading">
      <span style={{ marginRight: '8px' }}>🎨</span>Customize your instance
    </Text>
    <Row>
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
    </Row>
    <Row>
      <ContainerForm>
        <Invite>
          <Label>
            <Checkbox id="remember" name="remember" />
            This instance is invite only
          </Label>
        </Invite>
      </ContainerForm>
    </Row>
  </Box>
);

const Invite = styled(Flex)`
  align-items: center;
  label {
    width: 100%;
    line-height: auto;
    align-items: center;
  }
`;

const Bg = styled(Box)``;
