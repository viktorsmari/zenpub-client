import { Catalogs } from '@lingui/core';

export type Locale = string;

export interface State {
  locale: Locale;
  catalogs: Catalogs;
}
