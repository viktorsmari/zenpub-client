// import {PageInfo} from 'graphql/types.generated'
import Maybe from 'graphql/tsutils/Maybe';

interface Edge<T> {
  // cursor:string,
  node: T;
}

interface WithMaybeEdges<Node> {
  edges: Maybe<Maybe<Edge<Node>>[]>;
  // pageInfo:Maybe<PageInfo>,
  // totalCount:number
}

interface WithEdges<Node> {
  edges: Edge<Node>[];
  // pageInfo:Maybe<PageInfo>,
  // totalCount:number
}

interface EdgesManaged<Node> {
  withEdges: Maybe<WithEdges<Node>>;
  nodes: Node[];
}

export const manageEdges = <Node>(
  withEdges: Maybe<WithMaybeEdges<Node>>
): EdgesManaged<Node> => {
  const edges = (withEdges?.edges || []).filter(
    (maybeEdge): maybeEdge is Edge<Node> => !!maybeEdge
  );

  const nodes = edges.map(edge => edge.node);

  return {
    withEdges: {
      ...withEdges,
      edges
    },
    nodes
  };
};
