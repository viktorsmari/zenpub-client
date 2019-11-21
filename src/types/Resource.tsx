import Collection from './Collection';

export default interface Resource {
  collection: Collection;
  icon: string | null;
  id: string;
  name: string;
  preferredUsername: string;
  summary: string;
  url: string;
}
