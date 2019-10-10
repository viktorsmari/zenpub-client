import { GetThreadQuery } from 'src/generated/sdk';

interface DataLoading {
  loading: true;
}
interface DataError {
  loading: false;
  comment: void;
  error: string;
}
interface DataOk {
  error: void;
  loading: false;
  comment: GetThreadQuery;
}
type Data = DataLoading | DataError | DataOk;

export interface Props {
  data: Data;
  selectThread(number): unknown;
}
