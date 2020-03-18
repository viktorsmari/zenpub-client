import {
  Collection,
  Community,
  Resource,
  Thread,
  User
} from 'graphql/types.generated';
type ActorType = User | Collection | Community | Thread | Resource;

type Actor = Pick<ActorType, 'canonicalUrl' | 'isLocal'>;
// type Typename = Exclude<ActorType['__typename'], null | undefined>
// type Id = ActorType['id']

export const getLinkObj = (
  { isLocal, canonicalUrl }: Actor,
  localUrl: string
) => {
  return {
    url: isLocal ? localUrl : canonicalUrl || '',
    external: !isLocal
  };
};
