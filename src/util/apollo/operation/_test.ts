import { FetchResult, Operation } from 'apollo-link';
import { GetFeaturedCollectionsQueryOperation } from '../../../graphql/generated/getFeaturedCollections.generated';
import { LikeMutationMutationOperation } from '../../../graphql/generated/like.generated';
import { ApolloLinkOp, isOp } from '.';

export const link = new ApolloLinkOp<LikeMutationMutationOperation>(
  'likeMutation',
  (op, next) => {
    op.variables.contextId;
    return next(op).map(_ => {
      const ctx = _.data!.createLike!.context;
      if (ctx.__typename === 'Collection') {
        ctx.__typename;
        const res: FetchResult<LikeMutationMutationOperation['result']> = {
          data: { createLike: { id: '', context: {} } }
        };
        return res;
      }
      return _;
    });
  }
);

const op = {} as Operation;
op.variables.one;
if (isOp<GetFeaturedCollectionsQueryOperation>('getFeaturedCollections', op)) {
  op.variables.one;
}
