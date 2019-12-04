import { ApolloLink } from 'apollo-link';
import { createContext, useContext, useEffect } from 'react';
import {
  Name,
  OperationDef,
  OpResultWatcher,
  apolloLinkOpResult,
  OpRequestHandler,
  apolloLinkOp
} from '../operation';
export interface DynamicLinkSrv {
  addLink: (link: ApolloLink) => () => void;
  addLinkOpResult: <D extends OperationDef>(
    operationName: Name<D>,
    resWatcher: OpResultWatcher<D>
  ) => () => void;
  addLinkOp: <D extends OperationDef>(
    operationName: D['operationName'],
    reqHandl: OpRequestHandler<D>
  ) => () => void;
}

export const ApolloDynamicLinkContext = createContext<DynamicLinkSrv>(
  {} as DynamicLinkSrv
);
export const useDynamicLink = (link: ApolloLink) => {
  const dynLinkCtx = useContext(ApolloDynamicLinkContext);
  useEffect(
    () => {
      return dynLinkCtx.addLink(link);
    },
    [dynLinkCtx, link]
  );
};

export const useDynamicLinkOpResult = (link: ApolloLink) => {
  const dynLinkCtx = useContext(ApolloDynamicLinkContext);
  useEffect(
    () => {
      return dynLinkCtx.addLink(link);
    },
    [dynLinkCtx, link]
  );
};

export const createDynamicLinkEnv = () => {
  const dynamicLinksSet = new Set<ApolloLink>();

  const link = new ApolloLink((operation, nextLink) =>
    ApolloLink.from(Array.from(dynamicLinksSet)).request(operation, nextLink)
  );

  const addLink = (link: ApolloLink) => {
    dynamicLinksSet.add(link);
    return () => {
      dynamicLinksSet.delete(link);
    };
  };

  const addLinkOpResult = <D extends OperationDef>(
    operationName: Name<D>,
    resWatcher: OpResultWatcher<D>
  ) => addLink(apolloLinkOpResult<D>(operationName, resWatcher));

  const addLinkOp = <D extends OperationDef>(
    operationName: Name<D>,
    reqHandl: OpRequestHandler<D>
  ) => addLink(apolloLinkOp<D>(operationName, reqHandl));

  const srv: DynamicLinkSrv = {
    addLink,
    addLinkOpResult,
    addLinkOp
  };

  return {
    srv,
    link
  };
};
