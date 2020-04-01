import React, { FC } from 'react';
import { SearchBox as ISDSearchBox } from 'react-instantsearch-dom';
import { searchDisabled } from 'mn-constants';

export const SearchBox: FC = () => {
  return searchDisabled ? null : <ISDSearchBox />;
};
