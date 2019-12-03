import { FetchResult, Observable, Operation } from 'apollo-link';
export type Variables = Record<string, any>;

export type OpType = 'mutation' | 'query' | 'subscription';
export interface OperationDef<
  Name extends string = string,
  T extends OpType = OpType,
  Vars extends Variables = Variables,
  Res = any
> {
  operationName: Name;
  variables: Vars;
  result: Res;
  type: T;
}

export type Result<D extends OperationDef> = D['result'];
export type Vars<D extends OperationDef> = D['variables'];
export type Type<D extends OperationDef> = D['type'];
export type Name<D extends OperationDef> = D['operationName'];

export interface VarsOperation<D extends OperationDef> extends Operation {
  operationName: Name<D>;
  variables: Vars<D>;
}

export type ResultNextLink<R> = (
  operation: Operation
) => Observable<FetchResult<R>>;
export type OpRequestHandler<D extends OperationDef> = (
  operation: VarsOperation<D>,
  forward: ResultNextLink<Result<D>>
) => Observable<FetchResult<Result<D>>> | null;
