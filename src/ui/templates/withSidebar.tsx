import React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
export interface SidebarProps {
  SidebarBox: JSX.Element;
}

export const WithSidebar: React.FC<SidebarProps> = ({
  SidebarBox,
  children
}) => (
  <CenteredWrapper>
    {SidebarBox}
    <Flex ml={2}>{children}</Flex>
  </CenteredWrapper>
);

const CenteredWrapper = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
