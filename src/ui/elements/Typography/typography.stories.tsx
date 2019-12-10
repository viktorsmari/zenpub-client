import React from 'react';
import { storiesOf } from '@storybook/react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { Box, Text } from 'rebass/styled-components';
storiesOf('Elements/Typography', module)
  .addDecorator(themeDeco())
  .add('Standard', () => (
    <div>
      <Box m={2}>
        <Text variant="subhead">Subhead</Text>
      </Box>
      <Box m={2}>
        <Text variant="suptitle">Suptitle</Text>
      </Box>
      <Box m={2}>
        <Text variant="link">link</Text>
      </Box>
      <Box m={2}>
        <Text variant="text">
          L'attacco intorno alle 7 locali. La polizia twitta gli aggiornamenti
          in tempo reale, fino a pubblicare (e dopo il suicidio rimuovere) la
          foto del presunto sospetto. L'attentatore, un operaio di nome Ctirad
          V., "si era messo in testa di essere gravemente malato e che nessuno
          volesse curarlo
        </Text>
      </Box>
      <Box m={2}>
        <Text variant="heading">Heading</Text>
      </Box>
    </div>
  ));
