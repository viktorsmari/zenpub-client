import * as React from 'react';
import styled from '../../themes/styled';
import { Flex, Text } from 'rebass';
import { Trans } from '@lingui/macro';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useHistory } from 'react-router';
import { LocaleContext } from '../../containers/App/App';

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.styles.colors.lightgray};
  height: 50px;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;

const HeaderWrapper = ({ id }) => {
  const history = useHistory();
  return (
    <LocaleContext.Consumer>
      {value =>
        value.contentDirection == 'ltr' ? (
          <Header onClick={() => history.goBack()}>
            <ChevronLeft size="24" />
            <Text>
              <Trans>Back</Trans>
            </Text>
          </Header>
        ) : (
          <Header onClick={() => history.goBack()}>
            <ChevronRight size="24" />
            <Text>
              <Trans>Back</Trans>
            </Text>
          </Header>
        )
      }
    </LocaleContext.Consumer>
  );
};

export default HeaderWrapper;
