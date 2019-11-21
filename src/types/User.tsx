import Community from './Community';
import Comment from './Comment';
import Collection from './Collection';

export default interface User {
  name: string;
  summary: string;
  preferredUsername: string;
  icon?: string;
  location: string;
  primaryLanguage: string;
  // inbox: {
  //   edges: any;
  //   pageInfo?: {
  //     startCursor: string;
  //     endCursor: string;
  //   };
  //   totalCount: number;
  // };
  comments: {
    edges: [
      {
        cursor: number;
        node: Comment;
      }
    ];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    totalCount: number;
  };
  followedCollections: {
    edges: [
      {
        cursor: number;
        node: Collection;
      }
    ];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    totalCount: number;
  };
  joinedCommunities: {
    edges: [
      {
        cursor: number;
        node: Community;
      }
    ];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    totalCount: number;
  };
}
