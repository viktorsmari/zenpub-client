import * as thread from './thread';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  thread: thread.reducer
});
