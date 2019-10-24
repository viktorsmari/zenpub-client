import * as React from 'react';
import styled from '../../themes/styled';
import { Flex, Text } from 'rebass';
import { Trans } from '@lingui/macro';
import { ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router';

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

const HeaderWrapper = () => {
  const history = useHistory();
  return (
    <Header onClick={() => history.goBack()}>
      <ChevronLeft size="24" />
      <Text>
        <Trans>Back</Trans>
      </Text>
    </Header>
  );
};

export default HeaderWrapper;
