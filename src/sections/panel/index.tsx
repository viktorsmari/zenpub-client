import styled from '../../themes/styled';
import { Box, Text } from 'rebass';

export const WrapperPanel = styled(Box)`
  margin-top: 16px;
  margin-left: 16px;
  width: 300px;
`;

export const Panel = styled(Box)`
  background: white;
  border-radius: 4px;
  max-width: 300px;
  margin-bottom: 16px;
`;

export const PanelTitle = styled(Text)`
  text-transform: uppercase;
  border-bottom: 4px solid ${props => props.theme.styles.colors.lighter};
  padding: 16px;
`;

export const Nav = styled(Box)`
  padding: 16px;
`;

export const NavItem = styled(Text)``;
