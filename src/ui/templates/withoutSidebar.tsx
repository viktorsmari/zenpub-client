import React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'ui/themes/styled';

export const WithoutSidebar: React.FC<{ HeaderBox: JSX.Element }> = ({
  children,
  HeaderBox
}) => (
  <CenteredWrapper>
    {HeaderBox}
    <Flex ml={2}>{children}</Flex>
  </CenteredWrapper>
);

const CenteredWrapper = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
