import * as React from 'react';
import { Button } from 'rebass/styled-components';
import styled from '../../../themes/styled';

import Loader from '../Loader/Loader';

const Btn = styled(Button)`
  background: ${props => props.theme.colors.orange} !important;
  cursor: pointer;
`;
interface ButtonProps extends React.ButtonHTMLAttributes<object> {
  secondary?: boolean;
  // non-HTML attrs. copied from:
  // https://garden.zendesk.com/react-components/buttons/#button
  active?: boolean;
  basic?: boolean;
  buttonRef?: Function;
  danger?: boolean;
  focused?: boolean;
  hovered?: boolean;
  type?: 'button' | 'reset' | 'submit' | undefined;
  link?: boolean;
  muted?: boolean;
  pill?: boolean;
  primary?: boolean;
  selected?: boolean;
  size?: 'small' | 'large';
  stretched?: boolean;
}

export const LoaderButton = ({ text, loading, type = 'submit', ...props }) => (
  <Btn disabled={loading} {...props}>
    {loading ? <Loader /> : text}
  </Btn>
);

/**
 * Button component.
 * @param children {JSX.Element} children of button
 * @param secondary {Boolean} whether button should be styled as secondary button
 * @param className {String} additional class names of the button
 * @param props {Object} button props
 * @constructor
 */
export default function ButtonC({
  children,
  secondary = false,
  className = '',
  ...props
}: ButtonProps) {
  if (secondary) {
    className += ' secondary';
  }
  return <Btn className={className}>{children}</Btn>;
}
