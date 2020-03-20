// import {PageInfo} from 'graphql/types.generated'
import Maybe from 'graphql/tsutils/Maybe';

interface WithEdgesOfMaybes<Type> {
  edges: Maybe<Maybe<Type>[]>;
  // pageInfo:Maybe<PageInfo>,
  // totalCount:number
}

interface WithEdges<Type> {
  edges: Type[];
  // pageInfo:Maybe<PageInfo>,
  // totalCount:number
}

interface EdgesManaged<Type> {
  withEdges: Maybe<WithEdges<Type>>;
  edges: Type[];
}

export const manageEdges = <Type>(
  withEdges: Maybe<WithEdgesOfMaybes<Type>>
): EdgesManaged<Type> => {
  const edges = (withEdges?.edges || []).filter(
    (maybeEdge): maybeEdge is Type => !!maybeEdge
  );

  return {
    withEdges: {
      ...withEdges,
      edges
    },
    edges
  };
};
