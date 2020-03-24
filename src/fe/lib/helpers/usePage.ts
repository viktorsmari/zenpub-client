import { PageInfo } from 'graphql/types.generated';
import { useMemo, useState, useEffect } from 'react';
import Maybe from 'graphql/tsutils/Maybe';

interface Page<EdgeType> {
  edges: EdgeType[];
  pageInfo: PageInfo;
  totalCount: number;
}

interface MngPage<EdgeType> extends Page<EdgeType> {
  nextPage(page: Page<EdgeType>): void; //Page<EdgeType>;
  previousPage(page: Page<EdgeType>): void; //Page<EdgeType>;
  ready: boolean;
}
export const usePage = <EdgeType>(
  initialPage: Maybe<Page<EdgeType>>
): MngPage<EdgeType> => {
  const [page, setPage] = useState<Maybe<Page<EdgeType>>>();

  useEffect(() => {
    initialPage !== page && setPage(initialPage);
  }, [initialPage]);

  return useMemo<MngPage<EdgeType>>(() => {
    if (!page) {
      return {
        edges: [],
        nextPage: () => {},
        previousPage: () => {},
        pageInfo: {
          endCursor: [],
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: [],
          __typename: 'PageInfo'
        },
        totalCount: 0,
        ready: false
      };
    }

    const nextPage: MngPage<EdgeType>['nextPage'] = (
      nextPage: Page<EdgeType>
    ) => {
      const {
        edges,
        pageInfo: { endCursor, hasNextPage },
        totalCount
      } = nextPage;
      setPage({
        edges: page.edges.concat(edges),
        totalCount,
        pageInfo: {
          ...page.pageInfo,
          endCursor,
          hasNextPage
        }
      });
    };

    const previousPage: MngPage<EdgeType>['previousPage'] = (
      previousPage: Page<EdgeType>
    ) => {
      const {
        edges,
        pageInfo: { startCursor, hasPreviousPage },
        totalCount
      } = previousPage;
      setPage({
        edges: edges.concat(page.edges),
        totalCount,
        pageInfo: {
          ...page.pageInfo,
          startCursor,
          hasPreviousPage
        }
      });
    };

    return {
      ...page,
      nextPage,
      previousPage,
      ready: true
    };
  }, [page]);
};
