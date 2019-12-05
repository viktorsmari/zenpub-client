import * as React from 'react';
import styled from '../../themes/styled';
import { Box } from 'rebass/styled-components';

const Wrapper = styled(Box)`
  border-radius: 4px;
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
`;
const Alert: React.FC<{ color?: string }> = ({ color, children }) => (
  <Wrapper variant="bad">{children}</Wrapper>
);

export default Alert;
