import * as React from 'react';
import { Box, Text, Flex } from 'rebass/styled-components';
import { Switch } from '@rebass/forms';
import { Trans } from '@lingui/react';

const Emails = props => (
  <Box p={3}>
    <Text variant="heading">Manage your instance registration</Text>
    <Flex>
      <Switch value={true} onChange={() => console.log(true)} />
      <Text ml={2}>
        <Trans>This instance is invite only</Trans>
      </Text>
    </Flex>
  </Box>
);

export default Emails;
