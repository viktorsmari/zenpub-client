import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  link: {
    external: boolean;
    url: string;
  };
}
export const SimpleLink: FC<Props> = ({ link, children }) => {
  return link.external ? (
    <a href={link.url} target="_blank">
      {children}
    </a>
  ) : (
    <Link to={link.url}>{children}</Link>
  );
};
