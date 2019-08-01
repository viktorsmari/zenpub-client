import * as React from 'react';
import { Button } from 'rebass';
// import styled from '../../themes/styled';
// import { darken } from 'polished';

// const Primary = styled(Button)`
//   background: ${props => props.theme.styles.buttons.primary.backgroundColor};
//   color: ${props => props.theme.styles.buttons.primary.color};
//   cursor: pointer;
//   &:hover {
//     background: ${darken(0.1, '#f98012')};
//   }
// `;

// const Outline = styled(Button)`
//   background: ${props => props.theme.styles.buttons.outline.backgroundColor};
//   color: ${props => props.theme.styles.buttons.outline.color};
//   border: 2px solid;
//   cursor: pointer;
//   border-color: ${props => props.theme.styles.buttons.outline.borderColor};
//   &:hover {
//     background: ${darken(0.1, '#fff')};
//   }
// `;

interface Props extends React.ButtonHTMLAttributes<object> {
  children: any;
  rest?: any;
}

export const PrimaryBtn: React.SFC<Props> = ({ children, rest }) => (
  <Button {...rest}>{children}</Button>
);

export const OutlineBtn: React.SFC<Props> = ({ children, rest }) => (
  <Button {...rest} variant="outline">
    {children}
  </Button>
);
