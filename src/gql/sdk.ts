import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Json` scalar type represents arbitrary json string data, represented as UTF-8
   * character sequences. The Json type is most often used to represent a free-form
   * human-readable json string.
   **/
  Json: any;
};

export type Activity = {
  __typename?: 'Activity';
  activityType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  localId?: Maybe<Scalars['Int']>;
  object?: Maybe<ActivityObject>;
  published?: Maybe<Scalars['String']>;
  type: Array<Scalars['String']>;
  user?: Maybe<User>;
};

/** Activity object */
export type ActivityObject = Community | Collection | Resource | Comment;

export type AuthPayload = {
  __typename?: 'AuthPayload';
  me?: Maybe<Me>;
  token?: Maybe<Scalars['String']>;
};

export type Collection = {
  __typename?: 'Collection';
  community?: Maybe<Community>;
  content?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  flags?: Maybe<CollectionFlagsConnection>;
  followed: Scalars['Boolean'];
  followers?: Maybe<CollectionFollowersConnection>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inbox?: Maybe<CollectionInboxConnection>;
  likers?: Maybe<CollectionLikersConnection>;
  local?: Maybe<Scalars['Boolean']>;
  localId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  resources?: Maybe<CollectionResourcesConnection>;
  summary?: Maybe<Scalars['String']>;
  threads?: Maybe<CollectionThreadsConnection>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated?: Maybe<Scalars['String']>;
};

export type CollectionFlagsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionFollowersArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionInboxArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionLikersArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionResourcesArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionThreadsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionActivitiesEdge = {
  __typename?: 'CollectionActivitiesEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Activity>;
};

export type CollectionFlagsConnection = {
  __typename?: 'CollectionFlagsConnection';
  edges?: Maybe<Array<Maybe<CollectionFlagsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionFlagsEdge = {
  __typename?: 'CollectionFlagsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
  reason?: Maybe<Scalars['String']>;
};

export type CollectionFollowersConnection = {
  __typename?: 'CollectionFollowersConnection';
  edges?: Maybe<Array<Maybe<CollectionFollowersEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionFollowersEdge = {
  __typename?: 'CollectionFollowersEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type CollectionInboxConnection = {
  __typename?: 'CollectionInboxConnection';
  edges?: Maybe<Array<Maybe<CollectionActivitiesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionInput = {
  content: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preferredUsername: Scalars['String'];
  primaryLanguage?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
};

export type CollectionLikersConnection = {
  __typename?: 'CollectionLikersConnection';
  edges?: Maybe<Array<Maybe<CollectionLikersEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionLikersEdge = {
  __typename?: 'CollectionLikersEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type CollectionPage = {
  __typename?: 'CollectionPage';
  nodes?: Maybe<Array<Maybe<Collection>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionResourcesConnection = {
  __typename?: 'CollectionResourcesConnection';
  edges?: Maybe<Array<Maybe<CollectionResourcesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionResourcesEdge = {
  __typename?: 'CollectionResourcesEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Resource>;
};

export type CollectionThreadsConnection = {
  __typename?: 'CollectionThreadsConnection';
  edges?: Maybe<Array<Maybe<CollectionThreadsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionThreadsEdge = {
  __typename?: 'CollectionThreadsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Comment>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  context?: Maybe<CommentContext>;
  flags?: Maybe<CommentFlagsConnection>;
  id?: Maybe<Scalars['String']>;
  inReplyTo?: Maybe<Comment>;
  likers?: Maybe<CommentLikersConnection>;
  local?: Maybe<Scalars['Boolean']>;
  localId?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['String']>;
  replies?: Maybe<CommentRepliesConnection>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated?: Maybe<Scalars['String']>;
};

export type CommentFlagsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommentLikersArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommentRepliesArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** Where the comment resides */
export type CommentContext = Collection | Community;

export type CommentFlagsConnection = {
  __typename?: 'CommentFlagsConnection';
  edges?: Maybe<Array<Maybe<CommentFlagsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentFlagsEdge = {
  __typename?: 'CommentFlagsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type CommentInput = {
  content: Scalars['String'];
};

export type CommentLikersConnection = {
  __typename?: 'CommentLikersConnection';
  edges?: Maybe<Array<Maybe<CommentLikersEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentLikersEdge = {
  __typename?: 'CommentLikersEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type CommentRepliesConnection = {
  __typename?: 'CommentRepliesConnection';
  edges?: Maybe<Array<Maybe<CommentRepliesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentRepliesEdge = {
  __typename?: 'CommentRepliesEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Comment>;
};

export type Community = {
  __typename?: 'Community';
  collections?: Maybe<CommunityCollectionsConnection>;
  content?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  followed: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inbox?: Maybe<CommunityInboxConnection>;
  local?: Maybe<Scalars['Boolean']>;
  localId?: Maybe<Scalars['Int']>;
  members?: Maybe<CommunityMembersConnection>;
  name?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  threads?: Maybe<CommunityThreadsConnection>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated?: Maybe<Scalars['String']>;
};

export type CommunityCollectionsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityInboxArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityMembersArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityThreadsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityActivitiesEdge = {
  __typename?: 'CommunityActivitiesEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Activity>;
};

export type CommunityCollectionsConnection = {
  __typename?: 'CommunityCollectionsConnection';
  edges?: Maybe<Array<Maybe<CommunityCollectionsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommunityCollectionsEdge = {
  __typename?: 'CommunityCollectionsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Collection>;
};

export type CommunityInboxConnection = {
  __typename?: 'CommunityInboxConnection';
  edges?: Maybe<Array<Maybe<CommunityActivitiesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommunityInput = {
  content: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preferredUsername: Scalars['String'];
  primaryLanguage?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
};

export type CommunityMembersConnection = {
  __typename?: 'CommunityMembersConnection';
  edges?: Maybe<Array<Maybe<CommunityMembersEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommunityMembersEdge = {
  __typename?: 'CommunityMembersEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type CommunityPage = {
  __typename?: 'CommunityPage';
  nodes?: Maybe<Array<Maybe<Community>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommunityThreadsConnection = {
  __typename?: 'CommunityThreadsConnection';
  edges?: Maybe<Array<Maybe<CommunityThreadsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommunityThreadsEdge = {
  __typename?: 'CommunityThreadsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Comment>;
};

export type FetchedObject = {
  __typename?: 'FetchedObject';
  data?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  local?: Maybe<Scalars['Boolean']>;
  public?: Maybe<Scalars['Boolean']>;
};

export type GenericActivityPage = {
  __typename?: 'GenericActivityPage';
  nodes?: Maybe<Array<Maybe<Activity>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Me = {
  __typename?: 'Me';
  email?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  startCursor?: Maybe<Scalars['Int']>;
};

export type RegistrationInput = {
  email: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  preferredUsername: Scalars['String'];
  primaryLanguage?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Resource = {
  __typename?: 'Resource';
  collection?: Maybe<Collection>;
  content?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  educationalUse?: Maybe<Array<Scalars['String']>>;
  flags: ResourceFlagsConnection;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Array<Scalars['String']>>;
  isAccesibleForFree?: Maybe<Scalars['Boolean']>;
  learningResourceType?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  likers: ResourceLikersConnection;
  local?: Maybe<Scalars['Boolean']>;
  localId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  publicAccess?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['String']>;
  sameAs?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  timeRequired?: Maybe<Scalars['Int']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  typicalAgeRange?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ResourceFlagsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ResourceLikersArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ResourceFlagsConnection = {
  __typename?: 'ResourceFlagsConnection';
  edges?: Maybe<Array<Maybe<ResourceFlagsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceFlagsEdge = {
  __typename?: 'ResourceFlagsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type ResourceInput = {
  content?: Maybe<Scalars['String']>;
  educationalUse?: Maybe<Array<Scalars['String']>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Array<Scalars['String']>>;
  isAccesibleForFree?: Maybe<Scalars['Boolean']>;
  learningResourceType?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  local?: Maybe<Scalars['Boolean']>;
  localId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  publicAccess?: Maybe<Scalars['Boolean']>;
  sameAs?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  timeRequired?: Maybe<Scalars['Int']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  typicalAgeRange?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ResourceLikersConnection = {
  __typename?: 'ResourceLikersConnection';
  edges?: Maybe<Array<Maybe<ResourceLikersEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceLikersEdge = {
  __typename?: 'ResourceLikersEdge';
  cursor: Scalars['Int'];
  node?: Maybe<User>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Like a collection */
  likeCollection?: Maybe<Scalars['Boolean']>;
  /** Update a community */
  updateCommunity?: Maybe<Community>;
  /** Create a collection */
  createCollection?: Maybe<Collection>;
  /** Flag a collection */
  flagCollection?: Maybe<Scalars['Boolean']>;
  /** Flag a resource */
  flagResource?: Maybe<Scalars['Boolean']>;
  /** Delete a comment */
  deleteComment?: Maybe<Scalars['Boolean']>;
  /** Fetch an AS2 object from URL */
  fetchObject?: Maybe<FetchedObject>;
  /** Undo a previous like to a comment */
  undoLikeComment?: Maybe<Scalars['Boolean']>;
  /** Update a resource */
  updateResource?: Maybe<Resource>;
  /** Flag a community */
  flagCommunity?: Maybe<Scalars['Boolean']>;
  /** Delete a community */
  deleteCommunity?: Maybe<Scalars['Boolean']>;
  /** Like a comment */
  likeComment?: Maybe<Scalars['Boolean']>;
  /** Confirm email */
  confirmEmail?: Maybe<Scalars['Boolean']>;
  /** Login */
  createSession?: Maybe<AuthPayload>;
  /** Create a user */
  createUser?: Maybe<AuthPayload>;
  /** Undo a previous flag of a community */
  undoFlagCommunity?: Maybe<Scalars['Boolean']>;
  /** Undo join a community */
  undoJoinCommunity?: Maybe<Scalars['Boolean']>;
  /** Delete a resource */
  deleteResource?: Maybe<Scalars['Boolean']>;
  /** Undo follow a collection */
  undoFollowCollection?: Maybe<Scalars['Boolean']>;
  /** Create a resource */
  createResource?: Maybe<Resource>;
  /** Undo a previous flag of a collection */
  undoFlagCollection?: Maybe<Scalars['Boolean']>;
  /** Copy a resource */
  copyResource: Resource;
  /** Follow a collection */
  followCollection?: Maybe<Scalars['Boolean']>;
  /** Delete a user */
  deleteUser?: Maybe<Scalars['Boolean']>;
  /** Fetch metadata from webpage */
  fetchWebMetadata?: Maybe<WebMetadata>;
  /** Reset password */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Like a comment */
  flagComment?: Maybe<Scalars['Boolean']>;
  /** Like a resource */
  likeResource?: Maybe<Scalars['Boolean']>;
  /** Undo a previous like to a collection */
  undoLikeCollection?: Maybe<Scalars['Boolean']>;
  /** Reset password request */
  resetPasswordRequest?: Maybe<Scalars['Boolean']>;
  /** Undo a previous like to a resource */
  undoLikeResource?: Maybe<Scalars['Boolean']>;
  /** Create a reply */
  createReply?: Maybe<Comment>;
  /** Delete a collection */
  deleteCollection?: Maybe<Scalars['Boolean']>;
  /** Create a community */
  createCommunity?: Maybe<Community>;
  /** Update a profile */
  updateProfile?: Maybe<Me>;
  /** Undo a previous flag to a resource */
  undoFlagResource?: Maybe<Scalars['Boolean']>;
  /** Create a new thread */
  createThread?: Maybe<Comment>;
  /** Join a community */
  joinCommunity?: Maybe<Scalars['Boolean']>;
  /** Logout */
  deleteSession?: Maybe<Scalars['Boolean']>;
  /** Update a collection */
  updateCollection?: Maybe<Collection>;
  /** Undo a previous like to a comment */
  undoFlagComment?: Maybe<Scalars['Boolean']>;
};

export type RootMutationTypeLikeCollectionArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeUpdateCommunityArgs = {
  community: CommunityInput;
  communityLocalId: Scalars['Int'];
};

export type RootMutationTypeCreateCollectionArgs = {
  collection: CollectionInput;
  communityLocalId: Scalars['Int'];
};

export type RootMutationTypeFlagCollectionArgs = {
  localId: Scalars['Int'];
  reason: Scalars['String'];
};

export type RootMutationTypeFlagResourceArgs = {
  localId: Scalars['Int'];
  reason: Scalars['String'];
};

export type RootMutationTypeDeleteCommentArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeFetchObjectArgs = {
  url: Scalars['String'];
};

export type RootMutationTypeUndoLikeCommentArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeUpdateResourceArgs = {
  resource: ResourceInput;
  resourceLocalId: Scalars['Int'];
};

export type RootMutationTypeFlagCommunityArgs = {
  localId: Scalars['Int'];
  reason: Scalars['String'];
};

export type RootMutationTypeDeleteCommunityArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeLikeCommentArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String'];
};

export type RootMutationTypeCreateSessionArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RootMutationTypeCreateUserArgs = {
  user: RegistrationInput;
};

export type RootMutationTypeUndoFlagCommunityArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeUndoJoinCommunityArgs = {
  communityLocalId: Scalars['Int'];
};

export type RootMutationTypeDeleteResourceArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeUndoFollowCollectionArgs = {
  collectionLocalId: Scalars['Int'];
};

export type RootMutationTypeCreateResourceArgs = {
  collectionLocalId: Scalars['Int'];
  resource: ResourceInput;
};

export type RootMutationTypeUndoFlagCollectionArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeCopyResourceArgs = {
  collectionLocalId: Scalars['Int'];
  resourceLocalId: Scalars['Int'];
};

export type RootMutationTypeFollowCollectionArgs = {
  collectionLocalId: Scalars['Int'];
};

export type RootMutationTypeFetchWebMetadataArgs = {
  url: Scalars['String'];
};

export type RootMutationTypeResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type RootMutationTypeFlagCommentArgs = {
  localId: Scalars['Int'];
  reason: Scalars['String'];
};

export type RootMutationTypeLikeResourceArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeUndoLikeCollectionArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeResetPasswordRequestArgs = {
  email: Scalars['String'];
};

export type RootMutationTypeUndoLikeResourceArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeCreateReplyArgs = {
  comment: CommentInput;
  inReplyToLocalId: Scalars['Int'];
};

export type RootMutationTypeDeleteCollectionArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeCreateCommunityArgs = {
  community: CommunityInput;
};

export type RootMutationTypeUpdateProfileArgs = {
  profile: UpdateProfileInput;
};

export type RootMutationTypeUndoFlagResourceArgs = {
  localId: Scalars['Int'];
};

export type RootMutationTypeCreateThreadArgs = {
  comment: CommentInput;
  contextLocalId: Scalars['Int'];
};

export type RootMutationTypeJoinCommunityArgs = {
  communityLocalId: Scalars['Int'];
};

export type RootMutationTypeUpdateCollectionArgs = {
  collection: CollectionInput;
  collectionLocalId: Scalars['Int'];
};

export type RootMutationTypeUndoFlagCommentArgs = {
  localId: Scalars['Int'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get a collection */
  collection?: Maybe<Collection>;
  /** Get list of collections */
  collections?: Maybe<CollectionPage>;
  /** Get a comment */
  comment?: Maybe<Comment>;
  /** Get list of communities */
  communities?: Maybe<CommunityPage>;
  /** Get a community */
  community?: Maybe<Community>;
  /** Get local activity list */
  localActivities: GenericActivityPage;
  /** Get my user */
  me?: Maybe<Me>;
  /** Get a resource */
  resource?: Maybe<Resource>;
  /** Get an user */
  user?: Maybe<User>;
  /** Check if a user exists with a username */
  usernameAvailable?: Maybe<Scalars['Boolean']>;
};

export type RootQueryTypeCollectionArgs = {
  localId: Scalars['Int'];
};

export type RootQueryTypeCollectionsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeCommentArgs = {
  localId: Scalars['Int'];
};

export type RootQueryTypeCommunitiesArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeCommunityArgs = {
  localId: Scalars['Int'];
};

export type RootQueryTypeLocalActivitiesArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeResourceArgs = {
  localId: Scalars['Int'];
};

export type RootQueryTypeUserArgs = {
  localId: Scalars['Int'];
};

export type RootQueryTypeUsernameAvailableArgs = {
  username: Scalars['String'];
};

export type UpdateProfileInput = {
  icon?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<UserCreatedCommentsConnection>;
  followingCollections?: Maybe<UserFollowingCollectionsConnection>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  inbox?: Maybe<UserInboxConnection>;
  joinedCommunities?: Maybe<UserJoinedCommunitiesConnection>;
  local?: Maybe<Scalars['Boolean']>;
  localId?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outbox?: Maybe<UserOutboxConnection>;
  preferredUsername?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  website?: Maybe<Scalars['String']>;
};

export type UserCommentsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type UserFollowingCollectionsArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type UserInboxArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type UserJoinedCommunitiesArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type UserOutboxArgs = {
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type UserActivitiesEdge = {
  __typename?: 'UserActivitiesEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Activity>;
};

export type UserCreatedCommentsConnection = {
  __typename?: 'UserCreatedCommentsConnection';
  edges?: Maybe<Array<Maybe<UserCreatedCommentsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserCreatedCommentsEdge = {
  __typename?: 'UserCreatedCommentsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Comment>;
};

export type UserFollowingCollectionsConnection = {
  __typename?: 'UserFollowingCollectionsConnection';
  edges?: Maybe<Array<Maybe<UserFollowingCollectionsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFollowingCollectionsEdge = {
  __typename?: 'UserFollowingCollectionsEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Collection>;
};

export type UserInboxConnection = {
  __typename?: 'UserInboxConnection';
  edges?: Maybe<Array<Maybe<UserActivitiesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserJoinedCommunitiesConnection = {
  __typename?: 'UserJoinedCommunitiesConnection';
  edges?: Maybe<Array<Maybe<UserJoinedCommunitiesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserJoinedCommunitiesEdge = {
  __typename?: 'UserJoinedCommunitiesEdge';
  cursor: Scalars['Int'];
  node?: Maybe<Community>;
};

export type UserOutboxConnection = {
  __typename?: 'UserOutboxConnection';
  edges?: Maybe<Array<Maybe<UserActivitiesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type WebMetadata = {
  __typename?: 'WebMetadata';
  author?: Maybe<Scalars['String']>;
  embedCode?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UsernameAvailableQueryVariables = {
  username: Scalars['String'];
};

export type UsernameAvailableQuery = { __typename?: 'RootQueryType' } & Pick<
  RootQueryType,
  'usernameAvailable'
>;

export type CreateCollectionMutationMutationVariables = {
  communityId: Scalars['Int'];
  collection: CollectionInput;
};

export type CreateCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createCollection: Maybe<
    { __typename?: 'Collection' } & BasicCollectionFragment
  >;
};

export type CreateCommunityMutationMutationVariables = {
  community: CommunityInput;
};

export type CreateCommunityMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createCommunity: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
};

export type CreateReplyMutationMutationVariables = {
  id: Scalars['Int'];
  comment: CommentInput;
};

export type CreateReplyMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createReply: Maybe<
    { __typename?: 'Comment' } & Pick<
      Comment,
      'id' | 'localId' | 'published' | 'content'
    > & {
        replies: Maybe<
          { __typename?: 'CommentRepliesConnection' } & Pick<
            CommentRepliesConnection,
            'totalCount'
          > & {
              edges: Maybe<
                Array<
                  Maybe<
                    { __typename?: 'CommentRepliesEdge' } & {
                      node: Maybe<
                        { __typename?: 'Comment' } & Pick<Comment, 'id'>
                      >;
                    }
                  >
                >
              >;
            }
        >;
        author: Maybe<
          { __typename?: 'User' } & Pick<
            User,
            'icon' | 'localId' | 'id' | 'name'
          >
        >;
      }
  >;
};

export type CreateResourceMutationMutationVariables = {
  resourceId: Scalars['Int'];
  resource: ResourceInput;
};

export type CreateResourceMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createResource: Maybe<{ __typename?: 'Resource' } & BasicResourceFragment>;
};

export type CreateThreadMutationMutationVariables = {
  id: Scalars['Int'];
  comment: CommentInput;
};

export type CreateThreadMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createThread: Maybe<
    { __typename?: 'Comment' } & Pick<Comment, 'id' | 'localId' | 'content'> & {
        author: Maybe<{ __typename?: 'User' } & Pick<User, 'name' | 'icon'>>;
        replies: Maybe<
          { __typename?: 'CommentRepliesConnection' } & Pick<
            CommentRepliesConnection,
            'totalCount'
          >
        >;
      }
  >;
};

export type CreateUserMutationMutationVariables = {
  user: RegistrationInput;
};

export type CreateUserMutationMutation = { __typename?: 'RootMutationType' } & {
  createUser: Maybe<
    { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
        me: Maybe<
          { __typename?: 'Me' } & Pick<Me, 'email'> & {
              user: Maybe<
                { __typename?: 'User' } & Pick<
                  User,
                  'name' | 'summary' | 'preferredUsername' | 'location' | 'id'
                >
              >;
            }
        >;
      }
  >;
};

export type FetchResourceMutationVariables = {
  url: Scalars['String'];
};

export type FetchResourceMutation = { __typename?: 'RootMutationType' } & {
  fetchWebMetadata: Maybe<
    { __typename?: 'WebMetadata' } & Pick<
      WebMetadata,
      | 'image'
      | 'title'
      | 'author'
      | 'source'
      | 'resourceType'
      | 'summary'
      | 'embedCode'
      | 'language'
    >
  >;
};

export type BasicCollectionFragment = { __typename?: 'Collection' } & Pick<
  Collection,
  | 'id'
  | 'localId'
  | 'preferredUsername'
  | 'name'
  | 'summary'
  | 'icon'
  | 'followed'
> & {
    community: Maybe<
      { __typename?: 'Community' } & Pick<
        Community,
        'id' | 'localId' | 'name' | 'followed'
      >
    >;
    followers: Maybe<
      { __typename?: 'CollectionFollowersConnection' } & Pick<
        CollectionFollowersConnection,
        'totalCount'
      >
    >;
    resources: Maybe<
      { __typename?: 'CollectionResourcesConnection' } & Pick<
        CollectionResourcesConnection,
        'totalCount'
      >
    >;
    inbox: Maybe<
      { __typename?: 'CollectionInboxConnection' } & Pick<
        CollectionInboxConnection,
        'totalCount'
      >
    >;
  };

export type BasicCommentFragment = { __typename?: 'Comment' } & Pick<
  Comment,
  'localId' | 'content' | 'id' | 'published'
> & {
    author: Maybe<
      { __typename?: 'User' } & Pick<
        User,
        'name' | 'id' | 'icon' | 'preferredUsername' | 'localId'
      >
    >;
    replies: Maybe<
      { __typename?: 'CommentRepliesConnection' } & Pick<
        CommentRepliesConnection,
        'totalCount'
      >
    >;
    inReplyTo: Maybe<
      { __typename?: 'Comment' } & Pick<Comment, 'localId' | 'content'> & {
          author: Maybe<
            { __typename?: 'User' } & Pick<
              User,
              'id' | 'icon' | 'name' | 'localId' | 'preferredUsername'
            >
          >;
        }
    >;
    likers: Maybe<
      { __typename?: 'CommentLikersConnection' } & Pick<
        CommentLikersConnection,
        'totalCount'
      >
    >;
    context: Maybe<
      | ({ __typename?: 'Collection' } & Pick<
          Collection,
          'id' | 'name' | 'localId'
        >)
      | ({ __typename?: 'Community' } & Pick<
          Community,
          'id' | 'name' | 'localId'
        >)
    >;
  };

export type BasicCommunityFragment = { __typename?: 'Community' } & Pick<
  Community,
  | 'id'
  | 'name'
  | 'localId'
  | 'summary'
  | 'icon'
  | 'preferredUsername'
  | 'followed'
>;

export type BasicResourceFragment = { __typename?: 'Resource' } & Pick<
  Resource,
  'id' | 'name' | 'localId' | 'url' | 'summary' | 'icon'
> & {
    collection: Maybe<
      { __typename?: 'Collection' } & Pick<Collection, 'name' | 'localId'> & {
          community: Maybe<
            { __typename?: 'Community' } & Pick<Community, 'localId'>
          >;
        }
    >;
  };

export type BasicUserFragment = { __typename?: 'User' } & Pick<
  User,
  | 'name'
  | 'id'
  | 'preferredUsername'
  | 'localId'
  | 'icon'
  | 'location'
  | 'summary'
  | 'image'
>;

export type NodeCommunityFragment = { __typename?: 'Community' } & Pick<
  Community,
  | 'id'
  | 'name'
  | 'localId'
  | 'summary'
  | 'icon'
  | 'preferredUsername'
  | 'followed'
> & {
    collections: Maybe<
      { __typename?: 'CommunityCollectionsConnection' } & Pick<
        CommunityCollectionsConnection,
        'totalCount'
      >
    >;
    members: Maybe<
      { __typename?: 'CommunityMembersConnection' } & Pick<
        CommunityMembersConnection,
        'totalCount'
      >
    >;
    threads: Maybe<
      { __typename?: 'CommunityThreadsConnection' } & Pick<
        CommunityThreadsConnection,
        'totalCount'
      >
    >;
  };

export type GetAgentQueryQueryVariables = {
  id: Scalars['Int'];
  limitComm?: Maybe<Scalars['Int']>;
  endComm?: Maybe<Scalars['Int']>;
  limitColl?: Maybe<Scalars['Int']>;
  endColl?: Maybe<Scalars['Int']>;
  limitTimeline?: Maybe<Scalars['Int']>;
  endTimeline?: Maybe<Scalars['Int']>;
};

export type GetAgentQueryQuery = { __typename?: 'RootQueryType' } & {
  user: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'id'
      | 'localId'
      | 'name'
      | 'preferredUsername'
      | 'location'
      | 'summary'
      | 'icon'
      | 'image'
    > & {
        outbox: Maybe<
          { __typename?: 'UserOutboxConnection' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UserActivitiesEdge' } & {
                    node: Maybe<
                      { __typename?: 'Activity' } & Pick<
                        Activity,
                        'id' | 'activityType' | 'type' | 'published'
                      > & {
                          user: Maybe<
                            { __typename?: 'User' } & BasicUserFragment
                          >;
                          object: Maybe<
                            | ({
                                __typename?: 'Community';
                              } & BasicCommunityFragment)
                            | ({
                                __typename?: 'Collection';
                              } & BasicCollectionFragment)
                            | ({
                                __typename?: 'Resource';
                              } & BasicResourceFragment)
                            | ({
                                __typename?: 'Comment';
                              } & BasicCommentFragment)
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
        >;
        joinedCommunities: Maybe<
          { __typename?: 'UserJoinedCommunitiesConnection' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UserJoinedCommunitiesEdge' } & {
                    node: Maybe<
                      { __typename?: 'Community' } & Pick<
                        Community,
                        | 'id'
                        | 'name'
                        | 'localId'
                        | 'summary'
                        | 'icon'
                        | 'preferredUsername'
                        | 'followed'
                      > & {
                          collections: Maybe<
                            {
                              __typename?: 'CommunityCollectionsConnection';
                            } & Pick<
                              CommunityCollectionsConnection,
                              'totalCount'
                            >
                          >;
                          members: Maybe<
                            {
                              __typename?: 'CommunityMembersConnection';
                            } & Pick<CommunityMembersConnection, 'totalCount'>
                          >;
                          threads: Maybe<
                            {
                              __typename?: 'CommunityThreadsConnection';
                            } & Pick<CommunityThreadsConnection, 'totalCount'>
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
        >;
        followingCollections: Maybe<
          { __typename?: 'UserFollowingCollectionsConnection' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UserFollowingCollectionsEdge' } & {
                    node: Maybe<
                      { __typename?: 'Collection' } & Pick<
                        Collection,
                        | 'id'
                        | 'localId'
                        | 'preferredUsername'
                        | 'name'
                        | 'summary'
                        | 'icon'
                        | 'followed'
                      > & {
                          community: Maybe<
                            { __typename?: 'Community' } & Pick<
                              Community,
                              'localId' | 'id'
                            >
                          >;
                          followers: Maybe<
                            {
                              __typename?: 'CollectionFollowersConnection';
                            } & Pick<
                              CollectionFollowersConnection,
                              'totalCount'
                            >
                          >;
                          resources: Maybe<
                            {
                              __typename?: 'CollectionResourcesConnection';
                            } & Pick<
                              CollectionResourcesConnection,
                              'totalCount'
                            >
                          >;
                          threads: Maybe<
                            {
                              __typename?: 'CollectionThreadsConnection';
                            } & Pick<CollectionThreadsConnection, 'totalCount'>
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
        >;
      }
  >;
};

export type GetCollectionQueryVariables = {
  id: Scalars['Int'];
};

export type GetCollectionQuery = { __typename?: 'RootQueryType' } & {
  collection: Maybe<
    { __typename?: 'Collection' } & {
      resources: Maybe<
        { __typename?: 'CollectionResourcesConnection' } & Pick<
          CollectionResourcesConnection,
          'totalCount'
        > & {
            edges: Maybe<
              Array<
                Maybe<
                  { __typename?: 'CollectionResourcesEdge' } & {
                    node: Maybe<
                      { __typename?: 'Resource' } & Pick<
                        Resource,
                        'id' | 'localId' | 'name' | 'summary' | 'url' | 'icon'
                      >
                    >;
                  }
                >
              >
            >;
          }
      >;
    } & BasicCollectionFragment
  >;
};

export type GetCollectionsQueryQueryVariables = {
  limit?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type GetCollectionsQueryQuery = { __typename?: 'RootQueryType' } & {
  collections: Maybe<
    { __typename?: 'CollectionPage' } & {
      pageInfo: { __typename?: 'PageInfo' } & Pick<
        PageInfo,
        'startCursor' | 'endCursor'
      >;
      nodes: Maybe<
        Array<
          Maybe<
            { __typename?: 'Collection' } & Pick<
              Collection,
              | 'id'
              | 'localId'
              | 'preferredUsername'
              | 'name'
              | 'summary'
              | 'icon'
              | 'followed'
            > & {
                community: Maybe<
                  { __typename?: 'Community' } & Pick<
                    Community,
                    'id' | 'localId' | 'name' | 'followed'
                  >
                >;
                followers: Maybe<
                  { __typename?: 'CollectionFollowersConnection' } & Pick<
                    CollectionFollowersConnection,
                    'totalCount'
                  >
                >;
                resources: Maybe<
                  { __typename?: 'CollectionResourcesConnection' } & Pick<
                    CollectionResourcesConnection,
                    'totalCount'
                  >
                >;
                inbox: Maybe<
                  { __typename?: 'CollectionInboxConnection' } & Pick<
                    CollectionInboxConnection,
                    'totalCount'
                  >
                >;
              }
          >
        >
      >;
    }
  >;
};

export type GetCommunitiesQueryQueryVariables = {
  limit?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type GetCommunitiesQueryQuery = { __typename?: 'RootQueryType' } & {
  communities: Maybe<
    { __typename?: 'CommunityPage' } & {
      pageInfo: { __typename?: 'PageInfo' } & Pick<
        PageInfo,
        'startCursor' | 'endCursor'
      >;
      nodes: Maybe<
        Array<
          Maybe<
            { __typename?: 'Community' } & Pick<
              Community,
              | 'id'
              | 'localId'
              | 'preferredUsername'
              | 'name'
              | 'summary'
              | 'icon'
              | 'followed'
            > & {
                collections: Maybe<
                  { __typename?: 'CommunityCollectionsConnection' } & Pick<
                    CommunityCollectionsConnection,
                    'totalCount'
                  >
                >;
                members: Maybe<
                  { __typename?: 'CommunityMembersConnection' } & Pick<
                    CommunityMembersConnection,
                    'totalCount'
                  >
                >;
                threads: Maybe<
                  { __typename?: 'CommunityThreadsConnection' } & Pick<
                    CommunityThreadsConnection,
                    'totalCount'
                  >
                >;
              }
          >
        >
      >;
    }
  >;
};

export type GetCommunityQueryQueryVariables = {
  context: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type GetCommunityQueryQuery = { __typename?: 'RootQueryType' } & {
  community: Maybe<
    { __typename?: 'Community' } & Pick<
      Community,
      | 'id'
      | 'localId'
      | 'preferredUsername'
      | 'name'
      | 'summary'
      | 'icon'
      | 'followed'
    > & {
        inbox: Maybe<
          { __typename?: 'CommunityInboxConnection' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Maybe<
              Array<
                Maybe<
                  { __typename?: 'CommunityActivitiesEdge' } & {
                    node: Maybe<
                      { __typename?: 'Activity' } & Pick<
                        Activity,
                        'id' | 'activityType' | 'type' | 'published'
                      > & {
                          user: Maybe<
                            { __typename?: 'User' } & BasicUserFragment
                          >;
                          object: Maybe<
                            | ({
                                __typename?: 'Community';
                              } & BasicCommunityFragment)
                            | ({
                                __typename?: 'Collection';
                              } & BasicCollectionFragment)
                            | ({
                                __typename?: 'Resource';
                              } & BasicResourceFragment)
                            | ({
                                __typename?: 'Comment';
                              } & BasicCommentFragment)
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
        >;
        members: Maybe<
          { __typename?: 'CommunityMembersConnection' } & Pick<
            CommunityMembersConnection,
            'totalCount'
          > & {
              edges: Maybe<
                Array<
                  Maybe<
                    { __typename?: 'CommunityMembersEdge' } & {
                      node: Maybe<
                        { __typename?: 'User' } & Pick<
                          User,
                          'id' | 'localId' | 'name' | 'icon'
                        >
                      >;
                    }
                  >
                >
              >;
            }
        >;
        collections: Maybe<
          { __typename?: 'CommunityCollectionsConnection' } & Pick<
            CommunityCollectionsConnection,
            'totalCount'
          > & {
              edges: Maybe<
                Array<
                  Maybe<
                    { __typename?: 'CommunityCollectionsEdge' } & {
                      node: Maybe<
                        { __typename?: 'Collection' } & Pick<
                          Collection,
                          | 'id'
                          | 'localId'
                          | 'preferredUsername'
                          | 'name'
                          | 'summary'
                          | 'icon'
                          | 'followed'
                        > & {
                            followers: Maybe<
                              {
                                __typename?: 'CollectionFollowersConnection';
                              } & Pick<
                                CollectionFollowersConnection,
                                'totalCount'
                              >
                            >;
                            resources: Maybe<
                              {
                                __typename?: 'CollectionResourcesConnection';
                              } & Pick<
                                CollectionResourcesConnection,
                                'totalCount'
                              >
                            >;
                            threads: Maybe<
                              {
                                __typename?: 'CollectionThreadsConnection';
                              } & Pick<
                                CollectionThreadsConnection,
                                'totalCount'
                              >
                            >;
                            inbox: Maybe<
                              {
                                __typename?: 'CollectionInboxConnection';
                              } & Pick<CollectionInboxConnection, 'totalCount'>
                            >;
                          }
                      >;
                    }
                  >
                >
              >;
              pageInfo: { __typename?: 'PageInfo' } & Pick<
                PageInfo,
                'startCursor' | 'endCursor'
              >;
            }
        >;
      }
  >;
};

export type GetFeaturedCollectionsQueryVariables = {
  one: Scalars['Int'];
  two: Scalars['Int'];
  three: Scalars['Int'];
  four: Scalars['Int'];
  five: Scalars['Int'];
  six: Scalars['Int'];
  seven: Scalars['Int'];
};

export type GetFeaturedCollectionsQuery = { __typename?: 'RootQueryType' } & {
  one: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  two: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  three: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  four: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  five: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  six: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  seven: Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
};

export type GetFeaturedCommunitiesQueryVariables = {
  one: Scalars['Int'];
  two: Scalars['Int'];
  three: Scalars['Int'];
  four: Scalars['Int'];
  five: Scalars['Int'];
  six: Scalars['Int'];
  seven: Scalars['Int'];
};

export type GetFeaturedCommunitiesQuery = { __typename?: 'RootQueryType' } & {
  one: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  two: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  three: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  four: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  five: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  six: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  seven: Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
};

export type GetFollowedCollectionsQueryVariables = {
  limit?: Maybe<Scalars['Int']>;
  endColl?: Maybe<Scalars['Int']>;
};

export type GetFollowedCollectionsQuery = { __typename?: 'RootQueryType' } & {
  me: Maybe<
    { __typename?: 'Me' } & {
      user: Maybe<
        { __typename?: 'User' } & Pick<User, 'id'> & {
            followingCollections: Maybe<
              { __typename?: 'UserFollowingCollectionsConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserFollowingCollectionsEdge' } & {
                        node: Maybe<
                          { __typename?: 'Collection' } & Pick<
                            Collection,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              community: Maybe<
                                { __typename?: 'Community' } & Pick<
                                  Community,
                                  'localId' | 'id'
                                >
                              >;
                              followers: Maybe<
                                {
                                  __typename?: 'CollectionFollowersConnection';
                                } & Pick<
                                  CollectionFollowersConnection,
                                  'totalCount'
                                >
                              >;
                              resources: Maybe<
                                {
                                  __typename?: 'CollectionResourcesConnection';
                                } & Pick<
                                  CollectionResourcesConnection,
                                  'totalCount'
                                >
                              >;
                              threads: Maybe<
                                {
                                  __typename?: 'CollectionThreadsConnection';
                                } & Pick<
                                  CollectionThreadsConnection,
                                  'totalCount'
                                >
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export type GetJoinedCommunitiesQueryQueryVariables = {
  limit?: Maybe<Scalars['Int']>;
  endComm?: Maybe<Scalars['Int']>;
};

export type GetJoinedCommunitiesQueryQuery = {
  __typename?: 'RootQueryType';
} & {
  me: Maybe<
    { __typename?: 'Me' } & {
      user: Maybe<
        { __typename?: 'User' } & Pick<User, 'id'> & {
            joinedCommunities: Maybe<
              { __typename?: 'UserJoinedCommunitiesConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserJoinedCommunitiesEdge' } & {
                        node: Maybe<
                          { __typename?: 'Community' } & Pick<
                            Community,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              threads: Maybe<
                                {
                                  __typename?: 'CommunityThreadsConnection';
                                } & Pick<
                                  CommunityThreadsConnection,
                                  'totalCount'
                                >
                              >;
                              collections: Maybe<
                                {
                                  __typename?: 'CommunityCollectionsConnection';
                                } & Pick<
                                  CommunityCollectionsConnection,
                                  'totalCount'
                                >
                              >;
                              members: Maybe<
                                {
                                  __typename?: 'CommunityMembersConnection';
                                } & Pick<
                                  CommunityMembersConnection,
                                  'totalCount'
                                >
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export type GetMeInboxQueryVariables = {
  limit?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type GetMeInboxQuery = { __typename?: 'RootQueryType' } & {
  me: Maybe<
    { __typename?: 'Me' } & {
      user: Maybe<
        { __typename?: 'User' } & Pick<User, 'id'> & {
            inbox: Maybe<
              { __typename?: 'UserInboxConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserActivitiesEdge' } & {
                        node: Maybe<
                          { __typename?: 'Activity' } & Pick<
                            Activity,
                            'id' | 'activityType' | 'type' | 'published'
                          > & {
                              user: Maybe<
                                { __typename?: 'User' } & BasicUserFragment
                              >;
                              object: Maybe<
                                | ({
                                    __typename?: 'Community';
                                  } & BasicCommunityFragment)
                                | ({
                                    __typename?: 'Collection';
                                  } & BasicCollectionFragment)
                                | ({
                                    __typename?: 'Resource';
                                  } & BasicResourceFragment)
                                | ({
                                    __typename?: 'Comment';
                                  } & BasicCommentFragment)
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export type GetSidebarQueryQueryVariables = {
  limitComm?: Maybe<Scalars['Int']>;
  endComm?: Maybe<Scalars['Int']>;
};

export type GetSidebarQueryQuery = { __typename?: 'RootQueryType' } & {
  me: Maybe<
    { __typename?: 'Me' } & {
      user: Maybe<
        { __typename?: 'User' } & Pick<
          User,
          'id' | 'name' | 'preferredUsername' | 'icon'
        > & {
            joinedCommunities: Maybe<
              { __typename?: 'UserJoinedCommunitiesConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserJoinedCommunitiesEdge' } & {
                        node: Maybe<
                          { __typename?: 'Community' } & Pick<
                            Community,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              collections: Maybe<
                                {
                                  __typename?: 'CommunityCollectionsConnection';
                                } & Pick<
                                  CommunityCollectionsConnection,
                                  'totalCount'
                                >
                              >;
                              threads: Maybe<
                                {
                                  __typename?: 'CommunityThreadsConnection';
                                } & Pick<
                                  CommunityThreadsConnection,
                                  'totalCount'
                                >
                              >;
                              members: Maybe<
                                {
                                  __typename?: 'CommunityMembersConnection';
                                } & Pick<
                                  CommunityMembersConnection,
                                  'totalCount'
                                >
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export type GetThreadQueryVariables = {
  id: Scalars['Int'];
};

export type GetThreadQuery = { __typename?: 'RootQueryType' } & {
  comment: Maybe<
    { __typename?: 'Comment' } & {
      replies: Maybe<
        { __typename?: 'CommentRepliesConnection' } & Pick<
          CommentRepliesConnection,
          'totalCount'
        > & {
            edges: Maybe<
              Array<
                Maybe<
                  { __typename?: 'CommentRepliesEdge' } & {
                    node: Maybe<
                      { __typename?: 'Comment' } & Pick<
                        Comment,
                        'id' | 'localId' | 'content' | 'published'
                      > & {
                          inReplyTo: Maybe<
                            { __typename?: 'Comment' } & Pick<
                              Comment,
                              'localId'
                            > & {
                                author: Maybe<
                                  { __typename?: 'User' } & Pick<
                                    User,
                                    | 'id'
                                    | 'icon'
                                    | 'name'
                                    | 'localId'
                                    | 'preferredUsername'
                                  >
                                >;
                              }
                          >;
                          replies: Maybe<
                            { __typename?: 'CommentRepliesConnection' } & Pick<
                              CommentRepliesConnection,
                              'totalCount'
                            > & {
                                edges: Maybe<
                                  Array<
                                    Maybe<
                                      { __typename?: 'CommentRepliesEdge' } & {
                                        node: Maybe<
                                          { __typename?: 'Comment' } & Pick<
                                            Comment,
                                            'id'
                                          >
                                        >;
                                      }
                                    >
                                  >
                                >;
                              }
                          >;
                          likers: Maybe<
                            { __typename?: 'CommentLikersConnection' } & Pick<
                              CommentLikersConnection,
                              'totalCount'
                            >
                          >;
                          author: Maybe<
                            { __typename?: 'User' } & Pick<
                              User,
                              'id' | 'icon' | 'name' | 'localId'
                            >
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
      >;
    } & BasicCommentFragment
  >;
};

export type GetUserQueryVariables = {
  limitComm?: Maybe<Scalars['Int']>;
  endComm?: Maybe<Scalars['Int']>;
  limitColl?: Maybe<Scalars['Int']>;
  endColl?: Maybe<Scalars['Int']>;
  limitTimeline?: Maybe<Scalars['Int']>;
  endTimeline?: Maybe<Scalars['Int']>;
};

export type GetUserQuery = { __typename?: 'RootQueryType' } & {
  me: Maybe<
    { __typename?: 'Me' } & {
      user: Maybe<
        { __typename?: 'User' } & Pick<
          User,
          | 'id'
          | 'name'
          | 'preferredUsername'
          | 'location'
          | 'summary'
          | 'icon'
          | 'image'
        > & {
            joinedCommunities: Maybe<
              { __typename?: 'UserJoinedCommunitiesConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserJoinedCommunitiesEdge' } & {
                        node: Maybe<
                          { __typename?: 'Community' } & Pick<
                            Community,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              collections: Maybe<
                                {
                                  __typename?: 'CommunityCollectionsConnection';
                                } & Pick<
                                  CommunityCollectionsConnection,
                                  'totalCount'
                                >
                              >;
                              threads: Maybe<
                                {
                                  __typename?: 'CommunityThreadsConnection';
                                } & Pick<
                                  CommunityThreadsConnection,
                                  'totalCount'
                                >
                              >;
                              members: Maybe<
                                {
                                  __typename?: 'CommunityMembersConnection';
                                } & Pick<
                                  CommunityMembersConnection,
                                  'totalCount'
                                >
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
            outbox: Maybe<
              { __typename?: 'UserOutboxConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserActivitiesEdge' } & {
                        node: Maybe<
                          { __typename?: 'Activity' } & Pick<
                            Activity,
                            'id' | 'activityType' | 'type' | 'published'
                          > & {
                              user: Maybe<
                                { __typename?: 'User' } & BasicUserFragment
                              >;
                              object: Maybe<
                                | ({
                                    __typename?: 'Community';
                                  } & BasicCommunityFragment)
                                | ({
                                    __typename?: 'Collection';
                                  } & BasicCollectionFragment)
                                | ({
                                    __typename?: 'Resource';
                                  } & BasicResourceFragment)
                                | ({
                                    __typename?: 'Comment';
                                  } & BasicCommentFragment)
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
            followingCollections: Maybe<
              { __typename?: 'UserFollowingCollectionsConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'UserFollowingCollectionsEdge' } & {
                        node: Maybe<
                          { __typename?: 'Collection' } & Pick<
                            Collection,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              community: Maybe<
                                { __typename?: 'Community' } & Pick<
                                  Community,
                                  'localId' | 'id'
                                >
                              >;
                              followers: Maybe<
                                {
                                  __typename?: 'CollectionFollowersConnection';
                                } & Pick<
                                  CollectionFollowersConnection,
                                  'totalCount'
                                >
                              >;
                              resources: Maybe<
                                {
                                  __typename?: 'CollectionResourcesConnection';
                                } & Pick<
                                  CollectionResourcesConnection,
                                  'totalCount'
                                >
                              >;
                              threads: Maybe<
                                {
                                  __typename?: 'CollectionThreadsConnection';
                                } & Pick<
                                  CollectionThreadsConnection,
                                  'totalCount'
                                >
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export type GetUserBasicQueryVariables = {};

export type GetUserBasicQuery = { __typename?: 'RootQueryType' } & {
  me: Maybe<
    { __typename?: 'Me' } & Pick<Me, 'email'> & {
        user: Maybe<{ __typename?: 'User' } & BasicUserFragment>;
      }
  >;
};

export type JoinCollectionMutationMutationVariables = {
  collectionId: Scalars['Int'];
};

export type JoinCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'followCollection'>;

export type JoinCommunityMutationMutationVariables = {
  communityId: Scalars['Int'];
};

export type JoinCommunityMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'joinCommunity'>;

export type LikeCommentMutationMutationVariables = {
  localId: Scalars['Int'];
};

export type LikeCommentMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'likeComment'>;

export type LocalActivitiesQueryVariables = {
  limit?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type LocalActivitiesQuery = { __typename?: 'RootQueryType' } & {
  localActivities: { __typename?: 'GenericActivityPage' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'startCursor' | 'endCursor'
    >;
    nodes: Maybe<
      Array<
        Maybe<
          { __typename?: 'Activity' } & Pick<
            Activity,
            'id' | 'activityType' | 'published' | 'type'
          > & {
              user: Maybe<{ __typename?: 'User' } & BasicUserFragment>;
              object: Maybe<
                | ({ __typename?: 'Community' } & BasicCommunityFragment)
                | ({ __typename?: 'Collection' } & BasicCollectionFragment)
                | ({ __typename?: 'Resource' } & BasicResourceFragment)
                | ({ __typename?: 'Comment' } & BasicCommentFragment)
              >;
            }
        >
      >
    >;
  };
};

export type LoginMutationMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutationMutation = { __typename?: 'RootMutationType' } & {
  createSession: Maybe<
    { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
        me: Maybe<
          { __typename?: 'Me' } & Pick<Me, 'email'> & {
              user: Maybe<
                { __typename?: 'User' } & Pick<
                  User,
                  | 'name'
                  | 'id'
                  | 'summary'
                  | 'preferredUsername'
                  | 'location'
                  | 'icon'
                >
              >;
            }
        >;
      }
  >;
};

export type MeQueryQueryVariables = {};

export type MeQueryQuery = { __typename?: 'RootQueryType' } & {
  me: Maybe<
    { __typename?: 'Me' } & Pick<Me, 'email'> & {
        user: Maybe<
          { __typename?: 'User' } & Pick<
            User,
            | 'id'
            | 'name'
            | 'preferredUsername'
            | 'location'
            | 'icon'
            | 'image'
            | 'summary'
          >
        >;
      }
  >;
};

export type ResetPasswordMutationVariables = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ResetPasswordMutation = { __typename?: 'RootMutationType' } & Pick<
  RootMutationType,
  'resetPassword'
>;

export type ResetPasswordRequestMutationVariables = {
  email: Scalars['String'];
};

export type ResetPasswordRequestMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'resetPasswordRequest'>;

export type UndoJoinCollectionMutationMutationVariables = {
  collectionId: Scalars['Int'];
};

export type UndoJoinCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'undoFollowCollection'>;

export type UndoJoinCommunityMutationMutationVariables = {
  communityId: Scalars['Int'];
};

export type UndoJoinCommunityMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'undoJoinCommunity'>;

export type UndoLikeCommentMutationMutationVariables = {
  localId: Scalars['Int'];
};

export type UndoLikeCommentMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<RootMutationType, 'undoLikeComment'>;

export type UpdateCollectionMutationMutationVariables = {
  collectionId: Scalars['Int'];
  collection: CollectionInput;
};

export type UpdateCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateCollection: Maybe<
    { __typename?: 'Collection' } & Pick<
      Collection,
      | 'id'
      | 'localId'
      | 'name'
      | 'summary'
      | 'content'
      | 'preferredUsername'
      | 'primaryLanguage'
      | 'icon'
      | 'published'
      | 'updated'
    > & {
        resources: Maybe<
          { __typename?: 'CollectionResourcesConnection' } & Pick<
            CollectionResourcesConnection,
            'totalCount'
          >
        >;
      }
  >;
};

export type UpdateCommunityMutationMutationVariables = {
  community: CommunityInput;
  communityId: Scalars['Int'];
};

export type UpdateCommunityMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateCommunity: Maybe<
    { __typename?: 'Community' } & Pick<
      Community,
      | 'id'
      | 'localId'
      | 'name'
      | 'summary'
      | 'content'
      | 'preferredUsername'
      | 'primaryLanguage'
      | 'icon'
      | 'published'
      | 'updated'
    >
  >;
};

export type UpdateProfileMutationMutationVariables = {
  profile: UpdateProfileInput;
};

export type UpdateProfileMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateProfile: Maybe<
    { __typename?: 'Me' } & {
      user: Maybe<
        { __typename?: 'User' } & Pick<
          User,
          | 'id'
          | 'localId'
          | 'name'
          | 'summary'
          | 'preferredUsername'
          | 'primaryLanguage'
          | 'icon'
        >
      >;
    }
  >;
};

export type UpdateResourceMutationMutationVariables = {
  resourceId: Scalars['Int'];
  resource: ResourceInput;
};

export type UpdateResourceMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateResource: Maybe<
    { __typename?: 'Resource' } & Pick<
      Resource,
      | 'id'
      | 'localId'
      | 'name'
      | 'summary'
      | 'content'
      | 'url'
      | 'primaryLanguage'
      | 'icon'
      | 'published'
      | 'updated'
    >
  >;
};

export const BasicCollectionFragmentDoc = gql`
  fragment BasicCollection on Collection {
    id
    localId
    preferredUsername
    name
    summary
    icon
    followed
    community {
      id
      localId
      name
      followed
    }
    followers {
      totalCount
    }
    resources {
      totalCount
    }
    inbox {
      totalCount
    }
  }
`;
export const BasicCommentFragmentDoc = gql`
  fragment BasicComment on Comment {
    localId
    content
    id
    published
    author {
      name
      id
      icon
      preferredUsername
      localId
    }
    replies {
      totalCount
    }
    inReplyTo {
      localId
      content
      author {
        id
        icon
        name
        localId
        preferredUsername
      }
    }
    likers {
      totalCount
    }
    context {
      __typename
      ... on Community {
        id
        name
        localId
      }
      ... on Collection {
        id
        name
        localId
      }
    }
  }
`;
export const BasicCommunityFragmentDoc = gql`
  fragment BasicCommunity on Community {
    id
    name
    localId
    summary
    icon
    preferredUsername
    followed
  }
`;
export const BasicResourceFragmentDoc = gql`
  fragment BasicResource on Resource {
    id
    name
    localId
    url
    summary
    icon
    collection {
      name
      localId
      community {
        localId
      }
    }
  }
`;
export const BasicUserFragmentDoc = gql`
  fragment BasicUser on User {
    name
    id
    preferredUsername
    localId
    icon
    location
    summary
    image
  }
`;
export const NodeCommunityFragmentDoc = gql`
  fragment NodeCommunity on Community {
    id
    name
    localId
    summary
    icon
    preferredUsername
    followed
    collections {
      totalCount
    }
    members {
      totalCount
    }
    threads {
      totalCount
    }
  }
`;
export const UsernameAvailableDocument = gql`
  query usernameAvailable($username: String!) {
    usernameAvailable(username: $username)
  }
`;
export const CreateCollectionMutationDocument = gql`
  mutation createCollectionMutation(
    $communityId: Int!
    $collection: CollectionInput!
  ) {
    createCollection(communityLocalId: $communityId, collection: $collection) {
      ...BasicCollection
    }
  }
  ${BasicCollectionFragmentDoc}
`;
export const CreateCommunityMutationDocument = gql`
  mutation createCommunityMutation($community: CommunityInput!) {
    createCommunity(community: $community) {
      ...BasicCommunity
    }
  }
  ${BasicCommunityFragmentDoc}
`;
export const CreateReplyMutationDocument = gql`
  mutation createReplyMutation($id: Int!, $comment: CommentInput!) {
    createReply(inReplyToLocalId: $id, comment: $comment) {
      id
      localId
      replies {
        totalCount
        edges {
          node {
            id
          }
        }
      }
      published
      author {
        icon
        localId
        id
        name
      }
      content
    }
  }
`;
export const CreateResourceMutationDocument = gql`
  mutation createResourceMutation(
    $resourceId: Int!
    $resource: ResourceInput!
  ) {
    createResource(collectionLocalId: $resourceId, resource: $resource) {
      ...BasicResource
    }
  }
  ${BasicResourceFragmentDoc}
`;
export const CreateThreadMutationDocument = gql`
  mutation createThreadMutation($id: Int!, $comment: CommentInput!) {
    createThread(contextLocalId: $id, comment: $comment) {
      id
      author {
        name
        icon
      }
      localId
      content
      replies {
        totalCount
      }
    }
  }
`;
export const CreateUserMutationDocument = gql`
  mutation createUserMutation($user: RegistrationInput!) {
    createUser(user: $user) {
      token
      me {
        email
        user {
          name
          summary
          preferredUsername
          location
          id
        }
      }
    }
  }
`;
export const FetchResourceDocument = gql`
  mutation fetchResource($url: String!) {
    fetchWebMetadata(url: $url) {
      image
      title
      author
      source
      resourceType
      summary
      embedCode
      language
    }
  }
`;
export const GetAgentQueryDocument = gql`
  query getAgentQuery(
    $id: Int!
    $limitComm: Int
    $endComm: Int
    $limitColl: Int
    $endColl: Int
    $limitTimeline: Int
    $endTimeline: Int
  ) {
    user(localId: $id) {
      id
      localId
      name
      preferredUsername
      location
      summary
      icon
      image
      outbox(limit: $limitTimeline, after: $endTimeline) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            activityType
            type
            published
            user {
              ...BasicUser
            }
            object {
              __typename
              ... on Community {
                ...BasicCommunity
              }
              ... on Comment {
                ...BasicComment
              }
              ... on Collection {
                ...BasicCollection
              }
              ... on Resource {
                ...BasicResource
              }
            }
          }
        }
      }
      joinedCommunities(limit: $limitComm, after: $endComm) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            name
            localId
            summary
            icon
            preferredUsername
            followed
            collections {
              totalCount
            }
            members {
              totalCount
            }
            threads {
              totalCount
            }
          }
        }
      }
      followingCollections(limit: $limitColl, after: $endColl) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            localId
            preferredUsername
            name
            community {
              localId
              id
            }
            summary
            icon
            followed
            followers {
              totalCount
            }
            resources {
              totalCount
            }
            threads {
              totalCount
            }
          }
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export const GetCollectionDocument = gql`
  query getCollection($id: Int!) {
    collection(localId: $id) {
      ...BasicCollection
      resources {
        totalCount
        edges {
          node {
            id
            localId
            name
            summary
            url
            icon
          }
        }
      }
    }
  }
  ${BasicCollectionFragmentDoc}
`;
export const GetCollectionsQueryDocument = gql`
  query getCollectionsQuery($limit: Int, $end: Int) {
    collections(limit: $limit, after: $end) {
      pageInfo {
        startCursor
        endCursor
      }
      nodes {
        id
        localId
        preferredUsername
        name
        summary
        icon
        followed
        community {
          id
          localId
          name
          followed
        }
        followers {
          totalCount
        }
        resources {
          totalCount
        }
        inbox {
          totalCount
        }
      }
    }
  }
`;
export const GetCommunitiesQueryDocument = gql`
  query getCommunitiesQuery($limit: Int, $end: Int) {
    communities(limit: $limit, after: $end) {
      pageInfo {
        startCursor
        endCursor
      }
      nodes {
        id
        localId
        preferredUsername
        name
        summary
        icon
        collections {
          totalCount
        }
        members {
          totalCount
        }
        threads {
          totalCount
        }
        followed
      }
    }
  }
`;
export const GetCommunityQueryDocument = gql`
  query getCommunityQuery($context: Int!, $limit: Int, $end: Int) {
    community(localId: $context) {
      id
      localId
      preferredUsername
      name
      summary
      icon
      followed
      inbox(limit: $limit, after: $end) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            activityType
            type
            published
            user {
              ...BasicUser
            }
            object {
              __typename
              ... on Community {
                ...BasicCommunity
              }
              ... on Comment {
                ...BasicComment
              }
              ... on Collection {
                ...BasicCollection
              }
              ... on Resource {
                ...BasicResource
              }
            }
          }
        }
      }
      members {
        edges {
          node {
            id
            localId
            name
            icon
          }
        }
        totalCount
      }
      collections {
        totalCount
        edges {
          node {
            id
            localId
            preferredUsername
            name
            summary
            icon
            followed
            followers {
              totalCount
            }
            resources {
              totalCount
            }
            threads {
              totalCount
            }
            inbox {
              totalCount
            }
          }
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export const GetFeaturedCollectionsDocument = gql`
  query getFeaturedCollections(
    $one: Int!
    $two: Int!
    $three: Int!
    $four: Int!
    $five: Int!
    $six: Int!
    $seven: Int!
  ) {
    one: collection(localId: $one) {
      ...BasicCollection
    }
    two: collection(localId: $two) {
      ...BasicCollection
    }
    three: collection(localId: $three) {
      ...BasicCollection
    }
    four: collection(localId: $four) {
      ...BasicCollection
    }
    five: collection(localId: $five) {
      ...BasicCollection
    }
    six: collection(localId: $six) {
      ...BasicCollection
    }
    seven: collection(localId: $seven) {
      ...BasicCollection
    }
  }
  ${BasicCollectionFragmentDoc}
`;
export const GetFeaturedCommunitiesDocument = gql`
  query getFeaturedCommunities(
    $one: Int!
    $two: Int!
    $three: Int!
    $four: Int!
    $five: Int!
    $six: Int!
    $seven: Int!
  ) {
    one: community(localId: $one) {
      ...BasicCommunity
    }
    two: community(localId: $two) {
      ...BasicCommunity
    }
    three: community(localId: $three) {
      ...BasicCommunity
    }
    four: community(localId: $four) {
      ...BasicCommunity
    }
    five: community(localId: $five) {
      ...BasicCommunity
    }
    six: community(localId: $six) {
      ...BasicCommunity
    }
    seven: community(localId: $seven) {
      ...BasicCommunity
    }
  }
  ${BasicCommunityFragmentDoc}
`;
export const GetFollowedCollectionsDocument = gql`
  query getFollowedCollections($limit: Int, $endColl: Int) {
    me {
      user {
        id
        followingCollections(limit: $limit, after: $endColl) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              localId
              preferredUsername
              name
              summary
              icon
              community {
                localId
                id
              }
              followed
              followers {
                totalCount
              }
              resources {
                totalCount
              }
              threads {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
export const GetJoinedCommunitiesQueryDocument = gql`
  query getJoinedCommunitiesQuery($limit: Int, $endComm: Int) {
    me {
      user {
        id
        joinedCommunities(limit: $limit, after: $endComm) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              localId
              preferredUsername
              name
              summary
              threads {
                totalCount
              }
              icon
              collections {
                totalCount
              }
              members {
                totalCount
              }
              followed
            }
          }
        }
      }
    }
  }
`;
export const GetMeInboxDocument = gql`
  query getMeInbox($limit: Int, $end: Int) {
    me {
      user {
        id
        inbox(limit: $limit, after: $end) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              activityType
              type
              published
              user {
                ...BasicUser
              }
              object {
                __typename
                ... on Community {
                  ...BasicCommunity
                }
                ... on Comment {
                  ...BasicComment
                }
                ... on Collection {
                  ...BasicCollection
                }
                ... on Resource {
                  ...BasicResource
                }
              }
            }
          }
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export const GetSidebarQueryDocument = gql`
  query getSidebarQuery($limitComm: Int, $endComm: Int) {
    me {
      user {
        id
        name
        preferredUsername
        icon
        joinedCommunities(limit: $limitComm, after: $endComm) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              localId
              preferredUsername
              name
              summary
              icon
              collections {
                totalCount
              }
              threads {
                totalCount
              }
              members {
                totalCount
              }
              followed
            }
          }
        }
      }
    }
  }
`;
export const GetThreadDocument = gql`
  query getThread($id: Int!) {
    comment(localId: $id) {
      ...BasicComment
      replies {
        totalCount
        edges {
          node {
            id
            localId
            content
            published
            inReplyTo {
              localId
              author {
                id
                icon
                name
                localId
                preferredUsername
              }
            }
            replies {
              totalCount
              edges {
                node {
                  id
                }
              }
            }
            likers {
              totalCount
            }
            author {
              id
              icon
              name
              localId
            }
          }
        }
      }
    }
  }
  ${BasicCommentFragmentDoc}
`;
export const GetUserDocument = gql`
  query getUser(
    $limitComm: Int
    $endComm: Int
    $limitColl: Int
    $endColl: Int
    $limitTimeline: Int
    $endTimeline: Int
  ) {
    me {
      user {
        id
        name
        preferredUsername
        location
        summary
        icon
        image
        joinedCommunities(limit: $limitComm, after: $endComm) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              localId
              preferredUsername
              name
              summary
              icon
              collections {
                totalCount
              }
              threads {
                totalCount
              }
              members {
                totalCount
              }
              followed
            }
          }
        }
        outbox(limit: $limitTimeline, after: $endTimeline) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              activityType
              type
              published
              user {
                ...BasicUser
              }
              object {
                __typename
                ... on Community {
                  ...BasicCommunity
                }
                ... on Comment {
                  ...BasicComment
                }
                ... on Collection {
                  ...BasicCollection
                }
                ... on Resource {
                  ...BasicResource
                }
              }
            }
          }
        }
        followingCollections(limit: $limitColl, after: $endColl) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              localId
              preferredUsername
              name
              summary
              icon
              community {
                localId
                id
              }
              followed
              followers {
                totalCount
              }
              resources {
                totalCount
              }
              threads {
                totalCount
              }
            }
          }
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export const GetUserBasicDocument = gql`
  query getUserBasic {
    me {
      email
      user {
        ...BasicUser
      }
    }
  }
  ${BasicUserFragmentDoc}
`;
export const JoinCollectionMutationDocument = gql`
  mutation joinCollectionMutation($collectionId: Int!) {
    followCollection(collectionLocalId: $collectionId)
  }
`;
export const JoinCommunityMutationDocument = gql`
  mutation joinCommunityMutation($communityId: Int!) {
    joinCommunity(communityLocalId: $communityId)
  }
`;
export const LikeCommentMutationDocument = gql`
  mutation likeCommentMutation($localId: Int!) {
    likeComment(localId: $localId)
  }
`;
export const LocalActivitiesDocument = gql`
  query localActivities($limit: Int, $end: Int) {
    localActivities(limit: $limit, after: $end) {
      pageInfo {
        startCursor
        endCursor
      }
      nodes {
        id
        activityType
        published
        type
        user {
          ...BasicUser
        }
        object {
          __typename
          ... on Community {
            ...BasicCommunity
          }
          ... on Comment {
            ...BasicComment
          }
          ... on Collection {
            ...BasicCollection
          }
          ... on Resource {
            ...BasicResource
          }
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export const LoginMutationDocument = gql`
  mutation loginMutation($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      token
      me {
        email
        user {
          name
          id
          summary
          preferredUsername
          location
          icon
        }
      }
    }
  }
`;
export const MeQueryDocument = gql`
  query meQuery {
    me {
      email
      user {
        id
        name
        preferredUsername
        location
        icon
        image
        summary
      }
    }
  }
`;
export const ResetPasswordDocument = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token)
  }
`;
export const ResetPasswordRequestDocument = gql`
  mutation resetPasswordRequest($email: String!) {
    resetPasswordRequest(email: $email)
  }
`;
export const UndoJoinCollectionMutationDocument = gql`
  mutation undoJoinCollectionMutation($collectionId: Int!) {
    undoFollowCollection(collectionLocalId: $collectionId)
  }
`;
export const UndoJoinCommunityMutationDocument = gql`
  mutation undoJoinCommunityMutation($communityId: Int!) {
    undoJoinCommunity(communityLocalId: $communityId)
  }
`;
export const UndoLikeCommentMutationDocument = gql`
  mutation undoLikeCommentMutation($localId: Int!) {
    undoLikeComment(localId: $localId)
  }
`;
export const UpdateCollectionMutationDocument = gql`
  mutation updateCollectionMutation(
    $collectionId: Int!
    $collection: CollectionInput!
  ) {
    updateCollection(
      collectionLocalId: $collectionId
      collection: $collection
    ) {
      id
      localId
      name
      summary
      content
      preferredUsername
      primaryLanguage
      icon
      published
      updated
      resources {
        totalCount
      }
    }
  }
`;
export const UpdateCommunityMutationDocument = gql`
  mutation updateCommunityMutation(
    $community: CommunityInput!
    $communityId: Int!
  ) {
    updateCommunity(communityLocalId: $communityId, community: $community) {
      id
      localId
      name
      summary
      content
      preferredUsername
      primaryLanguage
      icon
      published
      updated
    }
  }
`;
export const UpdateProfileMutationDocument = gql`
  mutation updateProfileMutation($profile: UpdateProfileInput!) {
    updateProfile(profile: $profile) {
      user {
        id
        localId
        name
        summary
        preferredUsername
        primaryLanguage
        icon
      }
    }
  }
`;
export const UpdateResourceMutationDocument = gql`
  mutation updateResourceMutation(
    $resourceId: Int!
    $resource: ResourceInput!
  ) {
    updateResource(resourceLocalId: $resourceId, resource: $resource) {
      id
      localId
      name
      summary
      content
      url
      primaryLanguage
      icon
      published
      updated
    }
  }
`;
export function getSdk(client: GraphQLClient) {
  return {
    usernameAvailable(
      variables: UsernameAvailableQueryVariables
    ): Promise<UsernameAvailableQuery> {
      return client.request<UsernameAvailableQuery>(
        print(UsernameAvailableDocument),
        variables
      );
    },
    createCollectionMutation(
      variables: CreateCollectionMutationMutationVariables
    ): Promise<CreateCollectionMutationMutation> {
      return client.request<CreateCollectionMutationMutation>(
        print(CreateCollectionMutationDocument),
        variables
      );
    },
    createCommunityMutation(
      variables: CreateCommunityMutationMutationVariables
    ): Promise<CreateCommunityMutationMutation> {
      return client.request<CreateCommunityMutationMutation>(
        print(CreateCommunityMutationDocument),
        variables
      );
    },
    createReplyMutation(
      variables: CreateReplyMutationMutationVariables
    ): Promise<CreateReplyMutationMutation> {
      return client.request<CreateReplyMutationMutation>(
        print(CreateReplyMutationDocument),
        variables
      );
    },
    createResourceMutation(
      variables: CreateResourceMutationMutationVariables
    ): Promise<CreateResourceMutationMutation> {
      return client.request<CreateResourceMutationMutation>(
        print(CreateResourceMutationDocument),
        variables
      );
    },
    createThreadMutation(
      variables: CreateThreadMutationMutationVariables
    ): Promise<CreateThreadMutationMutation> {
      return client.request<CreateThreadMutationMutation>(
        print(CreateThreadMutationDocument),
        variables
      );
    },
    createUserMutation(
      variables: CreateUserMutationMutationVariables
    ): Promise<CreateUserMutationMutation> {
      return client.request<CreateUserMutationMutation>(
        print(CreateUserMutationDocument),
        variables
      );
    },
    fetchResource(
      variables: FetchResourceMutationVariables
    ): Promise<FetchResourceMutation> {
      return client.request<FetchResourceMutation>(
        print(FetchResourceDocument),
        variables
      );
    },
    getAgentQuery(
      variables: GetAgentQueryQueryVariables
    ): Promise<GetAgentQueryQuery> {
      return client.request<GetAgentQueryQuery>(
        print(GetAgentQueryDocument),
        variables
      );
    },
    getCollection(
      variables: GetCollectionQueryVariables
    ): Promise<GetCollectionQuery> {
      return client.request<GetCollectionQuery>(
        print(GetCollectionDocument),
        variables
      );
    },
    getCollectionsQuery(
      variables?: GetCollectionsQueryQueryVariables
    ): Promise<GetCollectionsQueryQuery> {
      return client.request<GetCollectionsQueryQuery>(
        print(GetCollectionsQueryDocument),
        variables
      );
    },
    getCommunitiesQuery(
      variables?: GetCommunitiesQueryQueryVariables
    ): Promise<GetCommunitiesQueryQuery> {
      return client.request<GetCommunitiesQueryQuery>(
        print(GetCommunitiesQueryDocument),
        variables
      );
    },
    getCommunityQuery(
      variables: GetCommunityQueryQueryVariables
    ): Promise<GetCommunityQueryQuery> {
      return client.request<GetCommunityQueryQuery>(
        print(GetCommunityQueryDocument),
        variables
      );
    },
    getFeaturedCollections(
      variables: GetFeaturedCollectionsQueryVariables
    ): Promise<GetFeaturedCollectionsQuery> {
      return client.request<GetFeaturedCollectionsQuery>(
        print(GetFeaturedCollectionsDocument),
        variables
      );
    },
    getFeaturedCommunities(
      variables: GetFeaturedCommunitiesQueryVariables
    ): Promise<GetFeaturedCommunitiesQuery> {
      return client.request<GetFeaturedCommunitiesQuery>(
        print(GetFeaturedCommunitiesDocument),
        variables
      );
    },
    getFollowedCollections(
      variables?: GetFollowedCollectionsQueryVariables
    ): Promise<GetFollowedCollectionsQuery> {
      return client.request<GetFollowedCollectionsQuery>(
        print(GetFollowedCollectionsDocument),
        variables
      );
    },
    getJoinedCommunitiesQuery(
      variables?: GetJoinedCommunitiesQueryQueryVariables
    ): Promise<GetJoinedCommunitiesQueryQuery> {
      return client.request<GetJoinedCommunitiesQueryQuery>(
        print(GetJoinedCommunitiesQueryDocument),
        variables
      );
    },
    getMeInbox(variables?: GetMeInboxQueryVariables): Promise<GetMeInboxQuery> {
      return client.request<GetMeInboxQuery>(
        print(GetMeInboxDocument),
        variables
      );
    },
    getSidebarQuery(
      variables?: GetSidebarQueryQueryVariables
    ): Promise<GetSidebarQueryQuery> {
      return client.request<GetSidebarQueryQuery>(
        print(GetSidebarQueryDocument),
        variables
      );
    },
    getThread(variables: GetThreadQueryVariables): Promise<GetThreadQuery> {
      return client.request<GetThreadQuery>(
        print(GetThreadDocument),
        variables
      );
    },
    getUser(variables?: GetUserQueryVariables): Promise<GetUserQuery> {
      return client.request<GetUserQuery>(print(GetUserDocument), variables);
    },
    getUserBasic(
      variables?: GetUserBasicQueryVariables
    ): Promise<GetUserBasicQuery> {
      return client.request<GetUserBasicQuery>(
        print(GetUserBasicDocument),
        variables
      );
    },
    joinCollectionMutation(
      variables: JoinCollectionMutationMutationVariables
    ): Promise<JoinCollectionMutationMutation> {
      return client.request<JoinCollectionMutationMutation>(
        print(JoinCollectionMutationDocument),
        variables
      );
    },
    joinCommunityMutation(
      variables: JoinCommunityMutationMutationVariables
    ): Promise<JoinCommunityMutationMutation> {
      return client.request<JoinCommunityMutationMutation>(
        print(JoinCommunityMutationDocument),
        variables
      );
    },
    likeCommentMutation(
      variables: LikeCommentMutationMutationVariables
    ): Promise<LikeCommentMutationMutation> {
      return client.request<LikeCommentMutationMutation>(
        print(LikeCommentMutationDocument),
        variables
      );
    },
    localActivities(
      variables?: LocalActivitiesQueryVariables
    ): Promise<LocalActivitiesQuery> {
      return client.request<LocalActivitiesQuery>(
        print(LocalActivitiesDocument),
        variables
      );
    },
    loginMutation(
      variables: LoginMutationMutationVariables
    ): Promise<LoginMutationMutation> {
      return client.request<LoginMutationMutation>(
        print(LoginMutationDocument),
        variables
      );
    },
    meQuery(variables?: MeQueryQueryVariables): Promise<MeQueryQuery> {
      return client.request<MeQueryQuery>(print(MeQueryDocument), variables);
    },
    resetPassword(
      variables: ResetPasswordMutationVariables
    ): Promise<ResetPasswordMutation> {
      return client.request<ResetPasswordMutation>(
        print(ResetPasswordDocument),
        variables
      );
    },
    resetPasswordRequest(
      variables: ResetPasswordRequestMutationVariables
    ): Promise<ResetPasswordRequestMutation> {
      return client.request<ResetPasswordRequestMutation>(
        print(ResetPasswordRequestDocument),
        variables
      );
    },
    undoJoinCollectionMutation(
      variables: UndoJoinCollectionMutationMutationVariables
    ): Promise<UndoJoinCollectionMutationMutation> {
      return client.request<UndoJoinCollectionMutationMutation>(
        print(UndoJoinCollectionMutationDocument),
        variables
      );
    },
    undoJoinCommunityMutation(
      variables: UndoJoinCommunityMutationMutationVariables
    ): Promise<UndoJoinCommunityMutationMutation> {
      return client.request<UndoJoinCommunityMutationMutation>(
        print(UndoJoinCommunityMutationDocument),
        variables
      );
    },
    undoLikeCommentMutation(
      variables: UndoLikeCommentMutationMutationVariables
    ): Promise<UndoLikeCommentMutationMutation> {
      return client.request<UndoLikeCommentMutationMutation>(
        print(UndoLikeCommentMutationDocument),
        variables
      );
    },
    updateCollectionMutation(
      variables: UpdateCollectionMutationMutationVariables
    ): Promise<UpdateCollectionMutationMutation> {
      return client.request<UpdateCollectionMutationMutation>(
        print(UpdateCollectionMutationDocument),
        variables
      );
    },
    updateCommunityMutation(
      variables: UpdateCommunityMutationMutationVariables
    ): Promise<UpdateCommunityMutationMutation> {
      return client.request<UpdateCommunityMutationMutation>(
        print(UpdateCommunityMutationDocument),
        variables
      );
    },
    updateProfileMutation(
      variables: UpdateProfileMutationMutationVariables
    ): Promise<UpdateProfileMutationMutation> {
      return client.request<UpdateProfileMutationMutation>(
        print(UpdateProfileMutationDocument),
        variables
      );
    },
    updateResourceMutation(
      variables: UpdateResourceMutationMutationVariables
    ): Promise<UpdateResourceMutationMutation> {
      return client.request<UpdateResourceMutationMutation>(
        print(UpdateResourceMutationDocument),
        variables
      );
    }
  };
}
