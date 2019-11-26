import * as React from 'react';
import { ContainerForm, Row } from '../../components/elements/Modal/modal';
import LanguageSelect from '../../components/inputs/LanguageSelect/LanguageSelect';
import { Trans } from '@lingui/macro';
import { Box, Flex, Heading } from 'rebass/styled-components';
import { ArrowLeft, ArrowRight } from 'react-feather';
import media from 'styled-media-query';
import styled from '../../themes/styled';
import { LocaleContext } from '../../containers/App/App';

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  svg {
    cursor: pointer;
  }
  ${media.greaterThan('1005px')`
display: none;
`};
`;

const Preferences = props => (
  <LocaleContext.Consumer>
    {value => (
      <Box>
        <Header p={3} alignItems="center">
          {value.contentDirection == 'ltr' ? (
            <ArrowLeft
              size={32}
              color="#f98012"
              onClick={() => props.onSwitch('sidebar')}
            />
          ) : (
            <ArrowRight
              size={32}
              color="#f98012"
              onClick={() => props.onSwitch('sidebar')}
            />
          )}
          {value.contentDirection == 'ltr' ? (
            <Heading ml={2}>
              <Trans>Preferences</Trans>
            </Heading>
          ) : (
            <Heading mr={2}>
              <Trans>Preferences</Trans>
            </Heading>
          )}
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
    )}
  </LocaleContext.Consumer>
);

export default Preferences;
