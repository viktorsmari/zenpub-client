import { GetThreadQuery } from '../../gql/sdk';

interface DataLoading {
  loading: true;
}
interface DataError {
  loading: false;
  error: true;
  msg: string;
  data?: undefined;
}
interface DataOk {
  loading: false;
  error: false;
  msg?: undefined;
  data: GetThreadQuery;
}
export type Data = DataLoading | DataError | DataOk;

export interface Props {
  thread: Data;
  selectThread(number): unknown;
}

export const GET_THREAD_REPLY = `pages.thread.getThread`;
