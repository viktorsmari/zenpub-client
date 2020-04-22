import React, { useState, useCallback, ComponentType } from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'ui/themes/styled';

export interface Props {
  HeaderBox?: ComponentType<{ toggleSideBar(): unknown }>;
}
export const Guest: React.FC<Props> = ({ children, HeaderBox }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSideBar = useCallback(() => setSidebarOpen(!isSidebarOpen), [
    isSidebarOpen
  ]);

  return (
    <CenteredWrapper>
      {HeaderBox && <HeaderBox toggleSideBar={toggleSideBar} />}
      <Flex ml={2}>{children}</Flex>
    </CenteredWrapper>
  );
};

const CenteredWrapper = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-top: 60px;
`;
