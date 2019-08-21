import * as React from 'react';
import { Button } from 'rebass';

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
