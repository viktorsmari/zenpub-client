import { PageInfo } from 'graphql/types.generated';
import { useMemo, useState, useEffect } from 'react';
import Maybe from 'graphql/tsutils/Maybe';

interface Page<EdgeType> {
  edges: EdgeType[];
  pageInfo: PageInfo;
  totalCount: number;
}
interface NextPageCursor {
  after: PageInfo['endCursor'];
  before: undefined;
}
interface PreviousPageCursor {
  before: PageInfo['startCursor'];
  after: undefined;
}
type Execute<EdgeType, Cursor extends FellowPageCursor> = (
  cursors: Cursor,
  update: (page: Page<EdgeType>) => Page<EdgeType>
) => unknown;
type FellowPageCursor = NextPageCursor | PreviousPageCursor;
type BaseMngPage<Ready extends boolean> = {
  ready: Ready;
};
interface MngPageInitialized<EdgeType>
  extends Page<EdgeType>,
    BaseMngPage<true> {
  next(): void;
  previous(): void;
}
interface MngPageUninitialized<EdgeType> extends BaseMngPage<false> {
  edges: EdgeType[];
}

interface Options<EdgeType> {
  next?: Execute<EdgeType, NextPageCursor>;
  previous?: Execute<EdgeType, PreviousPageCursor>;
}

type MngPage<EdgeType> =
  | MngPageUninitialized<EdgeType>
  | MngPageInitialized<EdgeType>;
export const usePage = <EdgeType>(
  initialPage: Maybe<Page<EdgeType>>,
  opts: Options<EdgeType> = {}
): MngPage<EdgeType> => {
  const [page, setPage] = useState<Maybe<Page<EdgeType>>>();
  //TODO da vedere
  //FIXME da vedere
  useEffect(() => {
    !page && initialPage && setPage(initialPage);
  }, [initialPage]);

  return useMemo<MngPage<EdgeType>>(() => {
    if (!page) {
      return {
        ready: false,
        edges: [],
        next: () => {},
        previous: () => {}
      };
    }
    const next: MngPageInitialized<EdgeType>['next'] = () => {
      opts.next &&
        opts.next(
          {
            after: page.pageInfo.endCursor,
            before: undefined
          },
          nextPage => {
            const {
              edges,
              pageInfo: { endCursor, hasNextPage },
              totalCount
            } = nextPage;
            return {
              edges: page.edges.concat(edges),
              totalCount,
              pageInfo: {
                ...page.pageInfo,
                endCursor,
                hasNextPage
              }
            };
          }
        );
    };

    const previous: MngPageInitialized<EdgeType>['previous'] = () => {
      opts.previous &&
        opts.previous(
          {
            before: page.pageInfo.startCursor,
            after: undefined
          },
          previousPage => {
            const {
              edges,
              pageInfo: { startCursor, hasPreviousPage },
              totalCount
            } = previousPage;
            return {
              edges: edges.concat(page.edges),
              totalCount,
              pageInfo: {
                ...page.pageInfo,
                startCursor,
                hasPreviousPage
              }
            };
          }
        );
    };
    const pageMng: MngPage<EdgeType> = {
      ...page,
      next,
      previous,
      ready: !!page
    };
    return pageMng;
  }, [page]);
};
