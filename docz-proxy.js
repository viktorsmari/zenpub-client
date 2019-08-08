import { doczState } from '@docz';
import { useContext } from 'react';
import _get from 'lodash/fp/get';

export * from '@docz';
export const useCurrentDoc = () => {
    const state = useContext(doczState.context);
    return window ? _get('currentEntry.value', state) : {};
};