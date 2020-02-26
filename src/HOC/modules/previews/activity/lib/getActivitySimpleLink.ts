export const linkPathMap = {
  User: 'user',
  Community: 'communities',
  // Resource: 'resource',
  Thread: 'thread',
  Collection: 'collections'
};

export const getActivitySimpleLink = (
  ctx:
    | {
        __typename: keyof typeof linkPathMap;
        // isLocal: boolean;
        id: string;
        // canonicalUrl?: string | null | undefined;
      }
    | null
    | undefined
) => {
  if (!ctx) {
    return '';
  }
  const { __typename, id } = ctx;
  return `/${linkPathMap[__typename]}/${id}`;
};
