import { PageInfo } from 'graphql/types.generated';
import { useMemo, useState, useEffect } from 'react';
import Maybe from 'graphql/tsutils/Maybe';

//FIXME: remove when fixed nullable pageInfo & maybe edges & maybe edges items
interface PageMaybeInfoMaybeEdgesItem<EdgeType> {
  edges: Maybe<Maybe<EdgeType>[]>;
  pageInfo: Maybe<PageInfo>;
  totalCount: number;
}
//FIXME: remove when fixed nullable pageInfo & maybe edges & maybe edges items
const _surely_page_info = <EdgeType>(
  pi: Maybe<PageMaybeInfoMaybeEdgesItem<EdgeType>>
): Maybe<Page<EdgeType>> => {
  if (!pi) {
    return pi;
  }
  pi.edges = (pi.edges || []).filter(_ => !!_);
  pi.pageInfo = pi.pageInfo!;
  return pi as Maybe<Page<EdgeType>>;
};

interface Page<EdgeType> {
  edges: EdgeType[];
  pageInfo: PageInfo;
  totalCount: number;
}

interface UsePage<EdgeType> extends Page<EdgeType> {
  nextPage(page: Page<EdgeType>): void; //Page<EdgeType>;
  previousPage(page: Page<EdgeType>): void; //Page<EdgeType>;
}
export const usePage = <EdgeType>(
  _initialPage: Maybe<PageMaybeInfoMaybeEdgesItem<EdgeType>>
): UsePage<EdgeType> => {
  //FIXME: remove when fixed nullable pageInfo & maybe edges & maybe edges items
  const initialPage = _surely_page_info(_initialPage);
  const [page, setPage] = useState<Maybe<Page<EdgeType>>>();
  useEffect(() => {
    initialPage !== page && setPage(initialPage);
  }, [initialPage]);
  return useMemo<UsePage<EdgeType>>(() => {
    if (!page) {
      return {
        edges: [],
        nextPage: () => {},
        previousPage: () => {},
        pageInfo: {},
        totalCount: NaN
      };
    }
    const nextPage: UsePage<EdgeType>['nextPage'] = (
      _nextPage: PageMaybeInfoMaybeEdgesItem<EdgeType>
    ) => {
      //FIXME: remove when fixed nullable pageInfo & maybe edges & maybe edges items
      const nextPage = _surely_page_info(_nextPage)!;

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

    const previousPage: UsePage<EdgeType>['previousPage'] = (
      _previousPage: PageMaybeInfoMaybeEdgesItem<EdgeType>
    ) => {
      //FIXME: remove when fixed nullable pageInfo & maybe edges & maybe edges items
      const previousPage = _surely_page_info(_previousPage)!;

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
      previousPage
    };
  }, [page]);
};
