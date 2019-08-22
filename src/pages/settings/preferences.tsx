import * as React from 'react';
import { ContainerForm, Row } from '../../components/elements/Modal/modal';
import LanguageSelect from '../../components/inputs/LanguageSelect/LanguageSelect';
import { Trans } from '@lingui/macro';
import { Box, Flex, Heading } from 'rebass';
import { ArrowLeft } from 'react-feather';
import media from 'styled-media-query';
import styled from '../../themes/styled';

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.styles.colors.lightgray};
  svg {
    cursor: pointer;
  }
  ${media.greaterThan('1005px')`
display: none;
`};
`;

const Preferences = props => (
  <Box>
    <Header p={3} alignItems="center">
      <ArrowLeft
        size={32}
        color="#f98012"
        onClick={() => props.onSwitch('sidebar')}
      />
      <Heading ml={2}>
        <Trans>Preferences</Trans>
      </Heading>
    </Header>
    <Row>
      <ContainerForm>
        <label>
          <Trans>Select language</Trans>
        </label>
        <LanguageSelect />
      </ContainerForm>
    </Row>
  </Box>
);

export default Preferences;
