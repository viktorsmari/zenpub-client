import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
export type UsernameAvailableComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables
  >,
  'query'
> &
  (
    | { variables: UsernameAvailableQueryVariables; skip?: boolean }
    | { skip: boolean });

export const UsernameAvailableComponent = (
  props: UsernameAvailableComponentProps
) => (
  <ApolloReactComponents.Query<
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables
  >
    query={UsernameAvailableDocument}
    {...props}
  />
);

export type UsernameAvailableProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  UsernameAvailableQuery,
  UsernameAvailableQueryVariables
> &
  TChildProps;
export function withUsernameAvailable<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables,
    UsernameAvailableProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables,
    UsernameAvailableProps<TChildProps>
  >(UsernameAvailableDocument, {
    alias: 'usernameAvailable',
    ...operationOptions
  });
}

/**
 * __useUsernameAvailableQuery__
 *
 * To run a query within a React component, call `useUsernameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsernameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsernameAvailableQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsernameAvailableQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables
  >(UsernameAvailableDocument, baseOptions);
}
export function useUsernameAvailableLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    UsernameAvailableQuery,
    UsernameAvailableQueryVariables
  >(UsernameAvailableDocument, baseOptions);
}
export type UsernameAvailableQueryHookResult = ReturnType<
  typeof useUsernameAvailableQuery
>;
export type UsernameAvailableLazyQueryHookResult = ReturnType<
  typeof useUsernameAvailableLazyQuery
>;
export type UsernameAvailableQueryResult = ApolloReactCommon.QueryResult<
  UsernameAvailableQuery,
  UsernameAvailableQueryVariables
>;
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
export type CreateCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateCollectionMutationMutation,
  CreateCollectionMutationMutationVariables
>;
export type CreateCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const CreateCollectionMutationComponent = (
  props: CreateCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >
    mutation={CreateCollectionMutationDocument}
    {...props}
  />
);

export type CreateCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateCollectionMutationMutation,
  CreateCollectionMutationMutationVariables
> &
  TChildProps;
export function withCreateCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables,
    CreateCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables,
    CreateCollectionMutationProps<TChildProps>
  >(CreateCollectionMutationDocument, {
    alias: 'createCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useCreateCollectionMutationMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutationMutation, { data, loading, error }] = useCreateCollectionMutationMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useCreateCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >(CreateCollectionMutationDocument, baseOptions);
}
export type CreateCollectionMutationMutationHookResult = ReturnType<
  typeof useCreateCollectionMutationMutation
>;
export type CreateCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateCollectionMutationMutation
>;
export type CreateCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCollectionMutationMutation,
  CreateCollectionMutationMutationVariables
>;
export const CreateCommunityMutationDocument = gql`
  mutation createCommunityMutation($community: CommunityInput!) {
    createCommunity(community: $community) {
      ...BasicCommunity
    }
  }
  ${BasicCommunityFragmentDoc}
`;
export type CreateCommunityMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateCommunityMutationMutation,
  CreateCommunityMutationMutationVariables
>;
export type CreateCommunityMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateCommunityMutationMutation,
    CreateCommunityMutationMutationVariables
  >,
  'mutation'
>;

export const CreateCommunityMutationComponent = (
  props: CreateCommunityMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateCommunityMutationMutation,
    CreateCommunityMutationMutationVariables
  >
    mutation={CreateCommunityMutationDocument}
    {...props}
  />
);

export type CreateCommunityMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateCommunityMutationMutation,
  CreateCommunityMutationMutationVariables
> &
  TChildProps;
export function withCreateCommunityMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateCommunityMutationMutation,
    CreateCommunityMutationMutationVariables,
    CreateCommunityMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateCommunityMutationMutation,
    CreateCommunityMutationMutationVariables,
    CreateCommunityMutationProps<TChildProps>
  >(CreateCommunityMutationDocument, {
    alias: 'createCommunityMutation',
    ...operationOptions
  });
}

/**
 * __useCreateCommunityMutationMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutationMutation, { data, loading, error }] = useCreateCommunityMutationMutation({
 *   variables: {
 *      community: // value for 'community'
 *   },
 * });
 */
export function useCreateCommunityMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCommunityMutationMutation,
    CreateCommunityMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCommunityMutationMutation,
    CreateCommunityMutationMutationVariables
  >(CreateCommunityMutationDocument, baseOptions);
}
export type CreateCommunityMutationMutationHookResult = ReturnType<
  typeof useCreateCommunityMutationMutation
>;
export type CreateCommunityMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateCommunityMutationMutation
>;
export type CreateCommunityMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCommunityMutationMutation,
  CreateCommunityMutationMutationVariables
>;
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
export type CreateReplyMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateReplyMutationMutation,
  CreateReplyMutationMutationVariables
>;
export type CreateReplyMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >,
  'mutation'
>;

export const CreateReplyMutationComponent = (
  props: CreateReplyMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >
    mutation={CreateReplyMutationDocument}
    {...props}
  />
);

export type CreateReplyMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateReplyMutationMutation,
  CreateReplyMutationMutationVariables
> &
  TChildProps;
export function withCreateReplyMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables,
    CreateReplyMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables,
    CreateReplyMutationProps<TChildProps>
  >(CreateReplyMutationDocument, {
    alias: 'createReplyMutation',
    ...operationOptions
  });
}

/**
 * __useCreateReplyMutationMutation__
 *
 * To run a mutation, you first call `useCreateReplyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReplyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReplyMutationMutation, { data, loading, error }] = useCreateReplyMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateReplyMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >(CreateReplyMutationDocument, baseOptions);
}
export type CreateReplyMutationMutationHookResult = ReturnType<
  typeof useCreateReplyMutationMutation
>;
export type CreateReplyMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateReplyMutationMutation
>;
export type CreateReplyMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateReplyMutationMutation,
  CreateReplyMutationMutationVariables
>;
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
export type CreateResourceMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateResourceMutationMutation,
  CreateResourceMutationMutationVariables
>;
export type CreateResourceMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateResourceMutationMutation,
    CreateResourceMutationMutationVariables
  >,
  'mutation'
>;

export const CreateResourceMutationComponent = (
  props: CreateResourceMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateResourceMutationMutation,
    CreateResourceMutationMutationVariables
  >
    mutation={CreateResourceMutationDocument}
    {...props}
  />
);

export type CreateResourceMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateResourceMutationMutation,
  CreateResourceMutationMutationVariables
> &
  TChildProps;
export function withCreateResourceMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateResourceMutationMutation,
    CreateResourceMutationMutationVariables,
    CreateResourceMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateResourceMutationMutation,
    CreateResourceMutationMutationVariables,
    CreateResourceMutationProps<TChildProps>
  >(CreateResourceMutationDocument, {
    alias: 'createResourceMutation',
    ...operationOptions
  });
}

/**
 * __useCreateResourceMutationMutation__
 *
 * To run a mutation, you first call `useCreateResourceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResourceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResourceMutationMutation, { data, loading, error }] = useCreateResourceMutationMutation({
 *   variables: {
 *      resourceId: // value for 'resourceId'
 *      resource: // value for 'resource'
 *   },
 * });
 */
export function useCreateResourceMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateResourceMutationMutation,
    CreateResourceMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateResourceMutationMutation,
    CreateResourceMutationMutationVariables
  >(CreateResourceMutationDocument, baseOptions);
}
export type CreateResourceMutationMutationHookResult = ReturnType<
  typeof useCreateResourceMutationMutation
>;
export type CreateResourceMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateResourceMutationMutation
>;
export type CreateResourceMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateResourceMutationMutation,
  CreateResourceMutationMutationVariables
>;
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
export type CreateThreadMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateThreadMutationMutation,
  CreateThreadMutationMutationVariables
>;
export type CreateThreadMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >,
  'mutation'
>;

export const CreateThreadMutationComponent = (
  props: CreateThreadMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >
    mutation={CreateThreadMutationDocument}
    {...props}
  />
);

export type CreateThreadMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateThreadMutationMutation,
  CreateThreadMutationMutationVariables
> &
  TChildProps;
export function withCreateThreadMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables,
    CreateThreadMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables,
    CreateThreadMutationProps<TChildProps>
  >(CreateThreadMutationDocument, {
    alias: 'createThreadMutation',
    ...operationOptions
  });
}

/**
 * __useCreateThreadMutationMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadMutationMutation, { data, loading, error }] = useCreateThreadMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateThreadMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >(CreateThreadMutationDocument, baseOptions);
}
export type CreateThreadMutationMutationHookResult = ReturnType<
  typeof useCreateThreadMutationMutation
>;
export type CreateThreadMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateThreadMutationMutation
>;
export type CreateThreadMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateThreadMutationMutation,
  CreateThreadMutationMutationVariables
>;
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
export type CreateUserMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
>;
export type CreateUserMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables
  >,
  'mutation'
>;

export const CreateUserMutationComponent = (
  props: CreateUserMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables
  >
    mutation={CreateUserMutationDocument}
    {...props}
  />
);

export type CreateUserMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
> &
  TChildProps;
export function withCreateUserMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables,
    CreateUserMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables,
    CreateUserMutationProps<TChildProps>
  >(CreateUserMutationDocument, {
    alias: 'createUserMutation',
    ...operationOptions
  });
}

/**
 * __useCreateUserMutationMutation__
 *
 * To run a mutation, you first call `useCreateUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutationMutation, { data, loading, error }] = useCreateUserMutationMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables
  >(CreateUserMutationDocument, baseOptions);
}
export type CreateUserMutationMutationHookResult = ReturnType<
  typeof useCreateUserMutationMutation
>;
export type CreateUserMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateUserMutationMutation
>;
export type CreateUserMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
>;
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
export type FetchResourceMutationFn = ApolloReactCommon.MutationFunction<
  FetchResourceMutation,
  FetchResourceMutationVariables
>;
export type FetchResourceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    FetchResourceMutation,
    FetchResourceMutationVariables
  >,
  'mutation'
>;

export const FetchResourceComponent = (props: FetchResourceComponentProps) => (
  <ApolloReactComponents.Mutation<
    FetchResourceMutation,
    FetchResourceMutationVariables
  >
    mutation={FetchResourceDocument}
    {...props}
  />
);

export type FetchResourceProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  FetchResourceMutation,
  FetchResourceMutationVariables
> &
  TChildProps;
export function withFetchResource<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchResourceMutation,
    FetchResourceMutationVariables,
    FetchResourceProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    FetchResourceMutation,
    FetchResourceMutationVariables,
    FetchResourceProps<TChildProps>
  >(FetchResourceDocument, {
    alias: 'fetchResource',
    ...operationOptions
  });
}

/**
 * __useFetchResourceMutation__
 *
 * To run a mutation, you first call `useFetchResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFetchResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fetchResourceMutation, { data, loading, error }] = useFetchResourceMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useFetchResourceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    FetchResourceMutation,
    FetchResourceMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    FetchResourceMutation,
    FetchResourceMutationVariables
  >(FetchResourceDocument, baseOptions);
}
export type FetchResourceMutationHookResult = ReturnType<
  typeof useFetchResourceMutation
>;
export type FetchResourceMutationResult = ApolloReactCommon.MutationResult<
  FetchResourceMutation
>;
export type FetchResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  FetchResourceMutation,
  FetchResourceMutationVariables
>;
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
export type GetAgentQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetAgentQueryQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetAgentQueryComponent = (props: GetAgentQueryComponentProps) => (
  <ApolloReactComponents.Query<GetAgentQueryQuery, GetAgentQueryQueryVariables>
    query={GetAgentQueryDocument}
    {...props}
  />
);

export type GetAgentQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetAgentQueryQuery,
  GetAgentQueryQueryVariables
> &
  TChildProps;
export function withGetAgentQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables,
    GetAgentQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables,
    GetAgentQueryProps<TChildProps>
  >(GetAgentQueryDocument, {
    alias: 'getAgentQuery',
    ...operationOptions
  });
}

/**
 * __useGetAgentQueryQuery__
 *
 * To run a query within a React component, call `useGetAgentQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgentQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgentQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *      limitColl: // value for 'limitColl'
 *      endColl: // value for 'endColl'
 *      limitTimeline: // value for 'limitTimeline'
 *      endTimeline: // value for 'endTimeline'
 *   },
 * });
 */
export function useGetAgentQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >(GetAgentQueryDocument, baseOptions);
}
export function useGetAgentQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >(GetAgentQueryDocument, baseOptions);
}
export type GetAgentQueryQueryHookResult = ReturnType<
  typeof useGetAgentQueryQuery
>;
export type GetAgentQueryLazyQueryHookResult = ReturnType<
  typeof useGetAgentQueryLazyQuery
>;
export type GetAgentQueryQueryResult = ApolloReactCommon.QueryResult<
  GetAgentQueryQuery,
  GetAgentQueryQueryVariables
>;
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
export type GetCollectionComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetCollectionQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetCollectionComponent = (props: GetCollectionComponentProps) => (
  <ApolloReactComponents.Query<GetCollectionQuery, GetCollectionQueryVariables>
    query={GetCollectionDocument}
    {...props}
  />
);

export type GetCollectionProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetCollectionQuery,
  GetCollectionQueryVariables
> &
  TChildProps;
export function withGetCollection<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCollectionQuery,
    GetCollectionQueryVariables,
    GetCollectionProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCollectionQuery,
    GetCollectionQueryVariables,
    GetCollectionProps<TChildProps>
  >(GetCollectionDocument, {
    alias: 'getCollection',
    ...operationOptions
  });
}

/**
 * __useGetCollectionQuery__
 *
 * To run a query within a React component, call `useGetCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCollectionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >(GetCollectionDocument, baseOptions);
}
export function useGetCollectionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >(GetCollectionDocument, baseOptions);
}
export type GetCollectionQueryHookResult = ReturnType<
  typeof useGetCollectionQuery
>;
export type GetCollectionLazyQueryHookResult = ReturnType<
  typeof useGetCollectionLazyQuery
>;
export type GetCollectionQueryResult = ApolloReactCommon.QueryResult<
  GetCollectionQuery,
  GetCollectionQueryVariables
>;
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
export type GetCollectionsQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables
  >,
  'query'
>;

export const GetCollectionsQueryComponent = (
  props: GetCollectionsQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables
  >
    query={GetCollectionsQueryDocument}
    {...props}
  />
);

export type GetCollectionsQueryProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetCollectionsQueryQuery,
  GetCollectionsQueryQueryVariables
> &
  TChildProps;
export function withGetCollectionsQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables,
    GetCollectionsQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables,
    GetCollectionsQueryProps<TChildProps>
  >(GetCollectionsQueryDocument, {
    alias: 'getCollectionsQuery',
    ...operationOptions
  });
}

/**
 * __useGetCollectionsQueryQuery__
 *
 * To run a query within a React component, call `useGetCollectionsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionsQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetCollectionsQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables
  >(GetCollectionsQueryDocument, baseOptions);
}
export function useGetCollectionsQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCollectionsQueryQuery,
    GetCollectionsQueryQueryVariables
  >(GetCollectionsQueryDocument, baseOptions);
}
export type GetCollectionsQueryQueryHookResult = ReturnType<
  typeof useGetCollectionsQueryQuery
>;
export type GetCollectionsQueryLazyQueryHookResult = ReturnType<
  typeof useGetCollectionsQueryLazyQuery
>;
export type GetCollectionsQueryQueryResult = ApolloReactCommon.QueryResult<
  GetCollectionsQueryQuery,
  GetCollectionsQueryQueryVariables
>;
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
export type GetCommunitiesQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >,
  'query'
>;

export const GetCommunitiesQueryComponent = (
  props: GetCommunitiesQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >
    query={GetCommunitiesQueryDocument}
    {...props}
  />
);

export type GetCommunitiesQueryProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetCommunitiesQueryQuery,
  GetCommunitiesQueryQueryVariables
> &
  TChildProps;
export function withGetCommunitiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables,
    GetCommunitiesQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables,
    GetCommunitiesQueryProps<TChildProps>
  >(GetCommunitiesQueryDocument, {
    alias: 'getCommunitiesQuery',
    ...operationOptions
  });
}

/**
 * __useGetCommunitiesQueryQuery__
 *
 * To run a query within a React component, call `useGetCommunitiesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunitiesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunitiesQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetCommunitiesQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >(GetCommunitiesQueryDocument, baseOptions);
}
export function useGetCommunitiesQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >(GetCommunitiesQueryDocument, baseOptions);
}
export type GetCommunitiesQueryQueryHookResult = ReturnType<
  typeof useGetCommunitiesQueryQuery
>;
export type GetCommunitiesQueryLazyQueryHookResult = ReturnType<
  typeof useGetCommunitiesQueryLazyQuery
>;
export type GetCommunitiesQueryQueryResult = ApolloReactCommon.QueryResult<
  GetCommunitiesQueryQuery,
  GetCommunitiesQueryQueryVariables
>;
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
export type GetCommunityQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetCommunityQueryQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetCommunityQueryComponent = (
  props: GetCommunityQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >
    query={GetCommunityQueryDocument}
    {...props}
  />
);

export type GetCommunityQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetCommunityQueryQuery,
  GetCommunityQueryQueryVariables
> &
  TChildProps;
export function withGetCommunityQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables,
    GetCommunityQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables,
    GetCommunityQueryProps<TChildProps>
  >(GetCommunityQueryDocument, {
    alias: 'getCommunityQuery',
    ...operationOptions
  });
}

/**
 * __useGetCommunityQueryQuery__
 *
 * To run a query within a React component, call `useGetCommunityQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityQueryQuery({
 *   variables: {
 *      context: // value for 'context'
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetCommunityQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >(GetCommunityQueryDocument, baseOptions);
}
export function useGetCommunityQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >(GetCommunityQueryDocument, baseOptions);
}
export type GetCommunityQueryQueryHookResult = ReturnType<
  typeof useGetCommunityQueryQuery
>;
export type GetCommunityQueryLazyQueryHookResult = ReturnType<
  typeof useGetCommunityQueryLazyQuery
>;
export type GetCommunityQueryQueryResult = ApolloReactCommon.QueryResult<
  GetCommunityQueryQuery,
  GetCommunityQueryQueryVariables
>;
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
export type GetFeaturedCollectionsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetFeaturedCollectionsQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetFeaturedCollectionsComponent = (
  props: GetFeaturedCollectionsComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >
    query={GetFeaturedCollectionsDocument}
    {...props}
  />
);

export type GetFeaturedCollectionsProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetFeaturedCollectionsQuery,
  GetFeaturedCollectionsQueryVariables
> &
  TChildProps;
export function withGetFeaturedCollections<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables,
    GetFeaturedCollectionsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables,
    GetFeaturedCollectionsProps<TChildProps>
  >(GetFeaturedCollectionsDocument, {
    alias: 'getFeaturedCollections',
    ...operationOptions
  });
}

/**
 * __useGetFeaturedCollectionsQuery__
 *
 * To run a query within a React component, call `useGetFeaturedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedCollectionsQuery({
 *   variables: {
 *      one: // value for 'one'
 *      two: // value for 'two'
 *      three: // value for 'three'
 *      four: // value for 'four'
 *      five: // value for 'five'
 *      six: // value for 'six'
 *      seven: // value for 'seven'
 *   },
 * });
 */
export function useGetFeaturedCollectionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >(GetFeaturedCollectionsDocument, baseOptions);
}
export function useGetFeaturedCollectionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >(GetFeaturedCollectionsDocument, baseOptions);
}
export type GetFeaturedCollectionsQueryHookResult = ReturnType<
  typeof useGetFeaturedCollectionsQuery
>;
export type GetFeaturedCollectionsLazyQueryHookResult = ReturnType<
  typeof useGetFeaturedCollectionsLazyQuery
>;
export type GetFeaturedCollectionsQueryResult = ApolloReactCommon.QueryResult<
  GetFeaturedCollectionsQuery,
  GetFeaturedCollectionsQueryVariables
>;
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
export type GetFeaturedCommunitiesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetFeaturedCommunitiesQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetFeaturedCommunitiesComponent = (
  props: GetFeaturedCommunitiesComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >
    query={GetFeaturedCommunitiesDocument}
    {...props}
  />
);

export type GetFeaturedCommunitiesProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetFeaturedCommunitiesQuery,
  GetFeaturedCommunitiesQueryVariables
> &
  TChildProps;
export function withGetFeaturedCommunities<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables,
    GetFeaturedCommunitiesProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables,
    GetFeaturedCommunitiesProps<TChildProps>
  >(GetFeaturedCommunitiesDocument, {
    alias: 'getFeaturedCommunities',
    ...operationOptions
  });
}

/**
 * __useGetFeaturedCommunitiesQuery__
 *
 * To run a query within a React component, call `useGetFeaturedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedCommunitiesQuery({
 *   variables: {
 *      one: // value for 'one'
 *      two: // value for 'two'
 *      three: // value for 'three'
 *      four: // value for 'four'
 *      five: // value for 'five'
 *      six: // value for 'six'
 *      seven: // value for 'seven'
 *   },
 * });
 */
export function useGetFeaturedCommunitiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >(GetFeaturedCommunitiesDocument, baseOptions);
}
export function useGetFeaturedCommunitiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >(GetFeaturedCommunitiesDocument, baseOptions);
}
export type GetFeaturedCommunitiesQueryHookResult = ReturnType<
  typeof useGetFeaturedCommunitiesQuery
>;
export type GetFeaturedCommunitiesLazyQueryHookResult = ReturnType<
  typeof useGetFeaturedCommunitiesLazyQuery
>;
export type GetFeaturedCommunitiesQueryResult = ApolloReactCommon.QueryResult<
  GetFeaturedCommunitiesQuery,
  GetFeaturedCommunitiesQueryVariables
>;
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
export type GetFollowedCollectionsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >,
  'query'
>;

export const GetFollowedCollectionsComponent = (
  props: GetFollowedCollectionsComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >
    query={GetFollowedCollectionsDocument}
    {...props}
  />
);

export type GetFollowedCollectionsProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetFollowedCollectionsQuery,
  GetFollowedCollectionsQueryVariables
> &
  TChildProps;
export function withGetFollowedCollections<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables,
    GetFollowedCollectionsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables,
    GetFollowedCollectionsProps<TChildProps>
  >(GetFollowedCollectionsDocument, {
    alias: 'getFollowedCollections',
    ...operationOptions
  });
}

/**
 * __useGetFollowedCollectionsQuery__
 *
 * To run a query within a React component, call `useGetFollowedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowedCollectionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endColl: // value for 'endColl'
 *   },
 * });
 */
export function useGetFollowedCollectionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >(GetFollowedCollectionsDocument, baseOptions);
}
export function useGetFollowedCollectionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >(GetFollowedCollectionsDocument, baseOptions);
}
export type GetFollowedCollectionsQueryHookResult = ReturnType<
  typeof useGetFollowedCollectionsQuery
>;
export type GetFollowedCollectionsLazyQueryHookResult = ReturnType<
  typeof useGetFollowedCollectionsLazyQuery
>;
export type GetFollowedCollectionsQueryResult = ApolloReactCommon.QueryResult<
  GetFollowedCollectionsQuery,
  GetFollowedCollectionsQueryVariables
>;
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
export type GetJoinedCommunitiesQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >,
  'query'
>;

export const GetJoinedCommunitiesQueryComponent = (
  props: GetJoinedCommunitiesQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >
    query={GetJoinedCommunitiesQueryDocument}
    {...props}
  />
);

export type GetJoinedCommunitiesQueryProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetJoinedCommunitiesQueryQuery,
  GetJoinedCommunitiesQueryQueryVariables
> &
  TChildProps;
export function withGetJoinedCommunitiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables,
    GetJoinedCommunitiesQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables,
    GetJoinedCommunitiesQueryProps<TChildProps>
  >(GetJoinedCommunitiesQueryDocument, {
    alias: 'getJoinedCommunitiesQuery',
    ...operationOptions
  });
}

/**
 * __useGetJoinedCommunitiesQueryQuery__
 *
 * To run a query within a React component, call `useGetJoinedCommunitiesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJoinedCommunitiesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJoinedCommunitiesQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endComm: // value for 'endComm'
 *   },
 * });
 */
export function useGetJoinedCommunitiesQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >(GetJoinedCommunitiesQueryDocument, baseOptions);
}
export function useGetJoinedCommunitiesQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >(GetJoinedCommunitiesQueryDocument, baseOptions);
}
export type GetJoinedCommunitiesQueryQueryHookResult = ReturnType<
  typeof useGetJoinedCommunitiesQueryQuery
>;
export type GetJoinedCommunitiesQueryLazyQueryHookResult = ReturnType<
  typeof useGetJoinedCommunitiesQueryLazyQuery
>;
export type GetJoinedCommunitiesQueryQueryResult = ApolloReactCommon.QueryResult<
  GetJoinedCommunitiesQueryQuery,
  GetJoinedCommunitiesQueryQueryVariables
>;
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
export type GetMeInboxComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >,
  'query'
>;

export const GetMeInboxComponent = (props: GetMeInboxComponentProps) => (
  <ApolloReactComponents.Query<GetMeInboxQuery, GetMeInboxQueryVariables>
    query={GetMeInboxDocument}
    {...props}
  />
);

export type GetMeInboxProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetMeInboxQuery,
  GetMeInboxQueryVariables
> &
  TChildProps;
export function withGetMeInbox<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetMeInboxQuery,
    GetMeInboxQueryVariables,
    GetMeInboxProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetMeInboxQuery,
    GetMeInboxQueryVariables,
    GetMeInboxProps<TChildProps>
  >(GetMeInboxDocument, {
    alias: 'getMeInbox',
    ...operationOptions
  });
}

/**
 * __useGetMeInboxQuery__
 *
 * To run a query within a React component, call `useGetMeInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeInboxQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetMeInboxQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetMeInboxQuery, GetMeInboxQueryVariables>(
    GetMeInboxDocument,
    baseOptions
  );
}
export function useGetMeInboxLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >(GetMeInboxDocument, baseOptions);
}
export type GetMeInboxQueryHookResult = ReturnType<typeof useGetMeInboxQuery>;
export type GetMeInboxLazyQueryHookResult = ReturnType<
  typeof useGetMeInboxLazyQuery
>;
export type GetMeInboxQueryResult = ApolloReactCommon.QueryResult<
  GetMeInboxQuery,
  GetMeInboxQueryVariables
>;
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
export type GetSidebarQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >,
  'query'
>;

export const GetSidebarQueryComponent = (
  props: GetSidebarQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >
    query={GetSidebarQueryDocument}
    {...props}
  />
);

export type GetSidebarQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetSidebarQueryQuery,
  GetSidebarQueryQueryVariables
> &
  TChildProps;
export function withGetSidebarQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables,
    GetSidebarQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables,
    GetSidebarQueryProps<TChildProps>
  >(GetSidebarQueryDocument, {
    alias: 'getSidebarQuery',
    ...operationOptions
  });
}

/**
 * __useGetSidebarQueryQuery__
 *
 * To run a query within a React component, call `useGetSidebarQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSidebarQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSidebarQueryQuery({
 *   variables: {
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *   },
 * });
 */
export function useGetSidebarQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >(GetSidebarQueryDocument, baseOptions);
}
export function useGetSidebarQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >(GetSidebarQueryDocument, baseOptions);
}
export type GetSidebarQueryQueryHookResult = ReturnType<
  typeof useGetSidebarQueryQuery
>;
export type GetSidebarQueryLazyQueryHookResult = ReturnType<
  typeof useGetSidebarQueryLazyQuery
>;
export type GetSidebarQueryQueryResult = ApolloReactCommon.QueryResult<
  GetSidebarQueryQuery,
  GetSidebarQueryQueryVariables
>;
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
export type GetThreadComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >,
  'query'
> &
  ({ variables: GetThreadQueryVariables; skip?: boolean } | { skip: boolean });

export const GetThreadComponent = (props: GetThreadComponentProps) => (
  <ApolloReactComponents.Query<GetThreadQuery, GetThreadQueryVariables>
    query={GetThreadDocument}
    {...props}
  />
);

export type GetThreadProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetThreadQuery,
  GetThreadQueryVariables
> &
  TChildProps;
export function withGetThread<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetThreadQuery,
    GetThreadQueryVariables,
    GetThreadProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetThreadQuery,
    GetThreadQueryVariables,
    GetThreadProps<TChildProps>
  >(GetThreadDocument, {
    alias: 'getThread',
    ...operationOptions
  });
}

/**
 * __useGetThreadQuery__
 *
 * To run a query within a React component, call `useGetThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThreadQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetThreadQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetThreadQuery, GetThreadQueryVariables>(
    GetThreadDocument,
    baseOptions
  );
}
export function useGetThreadLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetThreadQuery, GetThreadQueryVariables>(
    GetThreadDocument,
    baseOptions
  );
}
export type GetThreadQueryHookResult = ReturnType<typeof useGetThreadQuery>;
export type GetThreadLazyQueryHookResult = ReturnType<
  typeof useGetThreadLazyQuery
>;
export type GetThreadQueryResult = ApolloReactCommon.QueryResult<
  GetThreadQuery,
  GetThreadQueryVariables
>;
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
export type GetUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
  'query'
>;

export const GetUserComponent = (props: GetUserComponentProps) => (
  <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables>
    query={GetUserDocument}
    {...props}
  />
);

export type GetUserProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetUserQuery,
  GetUserQueryVariables
> &
  TChildProps;
export function withGetUser<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserQuery,
    GetUserQueryVariables,
    GetUserProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserQuery,
    GetUserQueryVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, {
    alias: 'getUser',
    ...operationOptions
  });
}

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *      limitColl: // value for 'limitColl'
 *      endColl: // value for 'endColl'
 *      limitTimeline: // value for 'limitTimeline'
 *      endTimeline: // value for 'endTimeline'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  );
}
export function useGetUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
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
export type GetUserBasicComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserBasicQuery,
    GetUserBasicQueryVariables
  >,
  'query'
>;

export const GetUserBasicComponent = (props: GetUserBasicComponentProps) => (
  <ApolloReactComponents.Query<GetUserBasicQuery, GetUserBasicQueryVariables>
    query={GetUserBasicDocument}
    {...props}
  />
);

export type GetUserBasicProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetUserBasicQuery,
  GetUserBasicQueryVariables
> &
  TChildProps;
export function withGetUserBasic<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserBasicQuery,
    GetUserBasicQueryVariables,
    GetUserBasicProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserBasicQuery,
    GetUserBasicQueryVariables,
    GetUserBasicProps<TChildProps>
  >(GetUserBasicDocument, {
    alias: 'getUserBasic',
    ...operationOptions
  });
}

/**
 * __useGetUserBasicQuery__
 *
 * To run a query within a React component, call `useGetUserBasicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBasicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBasicQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBasicQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUserBasicQuery,
    GetUserBasicQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetUserBasicQuery,
    GetUserBasicQueryVariables
  >(GetUserBasicDocument, baseOptions);
}
export function useGetUserBasicLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUserBasicQuery,
    GetUserBasicQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetUserBasicQuery,
    GetUserBasicQueryVariables
  >(GetUserBasicDocument, baseOptions);
}
export type GetUserBasicQueryHookResult = ReturnType<
  typeof useGetUserBasicQuery
>;
export type GetUserBasicLazyQueryHookResult = ReturnType<
  typeof useGetUserBasicLazyQuery
>;
export type GetUserBasicQueryResult = ApolloReactCommon.QueryResult<
  GetUserBasicQuery,
  GetUserBasicQueryVariables
>;
export const JoinCollectionMutationDocument = gql`
  mutation joinCollectionMutation($collectionId: Int!) {
    followCollection(collectionLocalId: $collectionId)
  }
`;
export type JoinCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  JoinCollectionMutationMutation,
  JoinCollectionMutationMutationVariables
>;
export type JoinCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const JoinCollectionMutationComponent = (
  props: JoinCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >
    mutation={JoinCollectionMutationDocument}
    {...props}
  />
);

export type JoinCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  JoinCollectionMutationMutation,
  JoinCollectionMutationMutationVariables
> &
  TChildProps;
export function withJoinCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables,
    JoinCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables,
    JoinCollectionMutationProps<TChildProps>
  >(JoinCollectionMutationDocument, {
    alias: 'joinCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useJoinCollectionMutationMutation__
 *
 * To run a mutation, you first call `useJoinCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinCollectionMutationMutation, { data, loading, error }] = useJoinCollectionMutationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useJoinCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >(JoinCollectionMutationDocument, baseOptions);
}
export type JoinCollectionMutationMutationHookResult = ReturnType<
  typeof useJoinCollectionMutationMutation
>;
export type JoinCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  JoinCollectionMutationMutation
>;
export type JoinCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  JoinCollectionMutationMutation,
  JoinCollectionMutationMutationVariables
>;
export const JoinCommunityMutationDocument = gql`
  mutation joinCommunityMutation($communityId: Int!) {
    joinCommunity(communityLocalId: $communityId)
  }
`;
export type JoinCommunityMutationMutationFn = ApolloReactCommon.MutationFunction<
  JoinCommunityMutationMutation,
  JoinCommunityMutationMutationVariables
>;
export type JoinCommunityMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >,
  'mutation'
>;

export const JoinCommunityMutationComponent = (
  props: JoinCommunityMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >
    mutation={JoinCommunityMutationDocument}
    {...props}
  />
);

export type JoinCommunityMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  JoinCommunityMutationMutation,
  JoinCommunityMutationMutationVariables
> &
  TChildProps;
export function withJoinCommunityMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables,
    JoinCommunityMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables,
    JoinCommunityMutationProps<TChildProps>
  >(JoinCommunityMutationDocument, {
    alias: 'joinCommunityMutation',
    ...operationOptions
  });
}

/**
 * __useJoinCommunityMutationMutation__
 *
 * To run a mutation, you first call `useJoinCommunityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinCommunityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinCommunityMutationMutation, { data, loading, error }] = useJoinCommunityMutationMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useJoinCommunityMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >(JoinCommunityMutationDocument, baseOptions);
}
export type JoinCommunityMutationMutationHookResult = ReturnType<
  typeof useJoinCommunityMutationMutation
>;
export type JoinCommunityMutationMutationResult = ApolloReactCommon.MutationResult<
  JoinCommunityMutationMutation
>;
export type JoinCommunityMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  JoinCommunityMutationMutation,
  JoinCommunityMutationMutationVariables
>;
export const LikeCommentMutationDocument = gql`
  mutation likeCommentMutation($localId: Int!) {
    likeComment(localId: $localId)
  }
`;
export type LikeCommentMutationMutationFn = ApolloReactCommon.MutationFunction<
  LikeCommentMutationMutation,
  LikeCommentMutationMutationVariables
>;
export type LikeCommentMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >,
  'mutation'
>;

export const LikeCommentMutationComponent = (
  props: LikeCommentMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >
    mutation={LikeCommentMutationDocument}
    {...props}
  />
);

export type LikeCommentMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  LikeCommentMutationMutation,
  LikeCommentMutationMutationVariables
> &
  TChildProps;
export function withLikeCommentMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables,
    LikeCommentMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables,
    LikeCommentMutationProps<TChildProps>
  >(LikeCommentMutationDocument, {
    alias: 'likeCommentMutation',
    ...operationOptions
  });
}

/**
 * __useLikeCommentMutationMutation__
 *
 * To run a mutation, you first call `useLikeCommentMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCommentMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCommentMutationMutation, { data, loading, error }] = useLikeCommentMutationMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *   },
 * });
 */
export function useLikeCommentMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >(LikeCommentMutationDocument, baseOptions);
}
export type LikeCommentMutationMutationHookResult = ReturnType<
  typeof useLikeCommentMutationMutation
>;
export type LikeCommentMutationMutationResult = ApolloReactCommon.MutationResult<
  LikeCommentMutationMutation
>;
export type LikeCommentMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LikeCommentMutationMutation,
  LikeCommentMutationMutationVariables
>;
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
export type LocalActivitiesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables
  >,
  'query'
>;

export const LocalActivitiesComponent = (
  props: LocalActivitiesComponentProps
) => (
  <ApolloReactComponents.Query<
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables
  >
    query={LocalActivitiesDocument}
    {...props}
  />
);

export type LocalActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  LocalActivitiesQuery,
  LocalActivitiesQueryVariables
> &
  TChildProps;
export function withLocalActivities<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables,
    LocalActivitiesProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables,
    LocalActivitiesProps<TChildProps>
  >(LocalActivitiesDocument, {
    alias: 'localActivities',
    ...operationOptions
  });
}

/**
 * __useLocalActivitiesQuery__
 *
 * To run a query within a React component, call `useLocalActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalActivitiesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useLocalActivitiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables
  >(LocalActivitiesDocument, baseOptions);
}
export function useLocalActivitiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    LocalActivitiesQuery,
    LocalActivitiesQueryVariables
  >(LocalActivitiesDocument, baseOptions);
}
export type LocalActivitiesQueryHookResult = ReturnType<
  typeof useLocalActivitiesQuery
>;
export type LocalActivitiesLazyQueryHookResult = ReturnType<
  typeof useLocalActivitiesLazyQuery
>;
export type LocalActivitiesQueryResult = ApolloReactCommon.QueryResult<
  LocalActivitiesQuery,
  LocalActivitiesQueryVariables
>;
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
export type LoginMutationMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export type LoginMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >,
  'mutation'
>;

export const LoginMutationComponent = (props: LoginMutationComponentProps) => (
  <ApolloReactComponents.Mutation<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >
    mutation={LoginMutationDocument}
    {...props}
  />
);

export type LoginMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  LoginMutationMutation,
  LoginMutationMutationVariables
> &
  TChildProps;
export function withLoginMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginMutationMutation,
    LoginMutationMutationVariables,
    LoginMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LoginMutationMutation,
    LoginMutationMutationVariables,
    LoginMutationProps<TChildProps>
  >(LoginMutationDocument, {
    alias: 'loginMutation',
    ...operationOptions
  });
}

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >(LoginMutationDocument, baseOptions);
}
export type LoginMutationMutationHookResult = ReturnType<
  typeof useLoginMutationMutation
>;
export type LoginMutationMutationResult = ApolloReactCommon.MutationResult<
  LoginMutationMutation
>;
export type LoginMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
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
export type MeQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MeQueryQuery,
    MeQueryQueryVariables
  >,
  'query'
>;

export const MeQueryComponent = (props: MeQueryComponentProps) => (
  <ApolloReactComponents.Query<MeQueryQuery, MeQueryQueryVariables>
    query={MeQueryDocument}
    {...props}
  />
);

export type MeQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  MeQueryQuery,
  MeQueryQueryVariables
> &
  TChildProps;
export function withMeQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    MeQueryQuery,
    MeQueryQueryVariables,
    MeQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    MeQueryQuery,
    MeQueryQueryVariables,
    MeQueryProps<TChildProps>
  >(MeQueryDocument, {
    alias: 'meQuery',
    ...operationOptions
  });
}

/**
 * __useMeQueryQuery__
 *
 * To run a query within a React component, call `useMeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MeQueryQuery,
    MeQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<MeQueryQuery, MeQueryQueryVariables>(
    MeQueryDocument,
    baseOptions
  );
}
export function useMeQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MeQueryQuery,
    MeQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<MeQueryQuery, MeQueryQueryVariables>(
    MeQueryDocument,
    baseOptions
  );
}
export type MeQueryQueryHookResult = ReturnType<typeof useMeQueryQuery>;
export type MeQueryLazyQueryHookResult = ReturnType<typeof useMeQueryLazyQuery>;
export type MeQueryQueryResult = ApolloReactCommon.QueryResult<
  MeQueryQuery,
  MeQueryQueryVariables
>;
export const ResetPasswordDocument = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token)
  }
`;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export type ResetPasswordComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
  'mutation'
>;

export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
  <ApolloReactComponents.Mutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
    mutation={ResetPasswordDocument}
    {...props}
  />
);

export type ResetPasswordProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
> &
  TChildProps;
export function withResetPassword<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordProps<TChildProps>
  >(ResetPasswordDocument, {
    alias: 'resetPassword',
    ...operationOptions
  });
}

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, baseOptions);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<
  ResetPasswordMutation
>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const ResetPasswordRequestDocument = gql`
  mutation resetPasswordRequest($email: String!) {
    resetPasswordRequest(email: $email)
  }
`;
export type ResetPasswordRequestMutationFn = ApolloReactCommon.MutationFunction<
  ResetPasswordRequestMutation,
  ResetPasswordRequestMutationVariables
>;
export type ResetPasswordRequestComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables
  >,
  'mutation'
>;

export const ResetPasswordRequestComponent = (
  props: ResetPasswordRequestComponentProps
) => (
  <ApolloReactComponents.Mutation<
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables
  >
    mutation={ResetPasswordRequestDocument}
    {...props}
  />
);

export type ResetPasswordRequestProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  ResetPasswordRequestMutation,
  ResetPasswordRequestMutationVariables
> &
  TChildProps;
export function withResetPasswordRequest<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables,
    ResetPasswordRequestProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables,
    ResetPasswordRequestProps<TChildProps>
  >(ResetPasswordRequestDocument, {
    alias: 'resetPasswordRequest',
    ...operationOptions
  });
}

/**
 * __useResetPasswordRequestMutation__
 *
 * To run a mutation, you first call `useResetPasswordRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordRequestMutation, { data, loading, error }] = useResetPasswordRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordRequestMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables
  >(ResetPasswordRequestDocument, baseOptions);
}
export type ResetPasswordRequestMutationHookResult = ReturnType<
  typeof useResetPasswordRequestMutation
>;
export type ResetPasswordRequestMutationResult = ApolloReactCommon.MutationResult<
  ResetPasswordRequestMutation
>;
export type ResetPasswordRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetPasswordRequestMutation,
  ResetPasswordRequestMutationVariables
>;
export const UndoJoinCollectionMutationDocument = gql`
  mutation undoJoinCollectionMutation($collectionId: Int!) {
    undoFollowCollection(collectionLocalId: $collectionId)
  }
`;
export type UndoJoinCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  UndoJoinCollectionMutationMutation,
  UndoJoinCollectionMutationMutationVariables
>;
export type UndoJoinCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const UndoJoinCollectionMutationComponent = (
  props: UndoJoinCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >
    mutation={UndoJoinCollectionMutationDocument}
    {...props}
  />
);

export type UndoJoinCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UndoJoinCollectionMutationMutation,
  UndoJoinCollectionMutationMutationVariables
> &
  TChildProps;
export function withUndoJoinCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables,
    UndoJoinCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables,
    UndoJoinCollectionMutationProps<TChildProps>
  >(UndoJoinCollectionMutationDocument, {
    alias: 'undoJoinCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useUndoJoinCollectionMutationMutation__
 *
 * To run a mutation, you first call `useUndoJoinCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoJoinCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoJoinCollectionMutationMutation, { data, loading, error }] = useUndoJoinCollectionMutationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useUndoJoinCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >(UndoJoinCollectionMutationDocument, baseOptions);
}
export type UndoJoinCollectionMutationMutationHookResult = ReturnType<
  typeof useUndoJoinCollectionMutationMutation
>;
export type UndoJoinCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  UndoJoinCollectionMutationMutation
>;
export type UndoJoinCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoJoinCollectionMutationMutation,
  UndoJoinCollectionMutationMutationVariables
>;
export const UndoJoinCommunityMutationDocument = gql`
  mutation undoJoinCommunityMutation($communityId: Int!) {
    undoJoinCommunity(communityLocalId: $communityId)
  }
`;
export type UndoJoinCommunityMutationMutationFn = ApolloReactCommon.MutationFunction<
  UndoJoinCommunityMutationMutation,
  UndoJoinCommunityMutationMutationVariables
>;
export type UndoJoinCommunityMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >,
  'mutation'
>;

export const UndoJoinCommunityMutationComponent = (
  props: UndoJoinCommunityMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >
    mutation={UndoJoinCommunityMutationDocument}
    {...props}
  />
);

export type UndoJoinCommunityMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UndoJoinCommunityMutationMutation,
  UndoJoinCommunityMutationMutationVariables
> &
  TChildProps;
export function withUndoJoinCommunityMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables,
    UndoJoinCommunityMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables,
    UndoJoinCommunityMutationProps<TChildProps>
  >(UndoJoinCommunityMutationDocument, {
    alias: 'undoJoinCommunityMutation',
    ...operationOptions
  });
}

/**
 * __useUndoJoinCommunityMutationMutation__
 *
 * To run a mutation, you first call `useUndoJoinCommunityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoJoinCommunityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoJoinCommunityMutationMutation, { data, loading, error }] = useUndoJoinCommunityMutationMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useUndoJoinCommunityMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >(UndoJoinCommunityMutationDocument, baseOptions);
}
export type UndoJoinCommunityMutationMutationHookResult = ReturnType<
  typeof useUndoJoinCommunityMutationMutation
>;
export type UndoJoinCommunityMutationMutationResult = ApolloReactCommon.MutationResult<
  UndoJoinCommunityMutationMutation
>;
export type UndoJoinCommunityMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoJoinCommunityMutationMutation,
  UndoJoinCommunityMutationMutationVariables
>;
export const UndoLikeCommentMutationDocument = gql`
  mutation undoLikeCommentMutation($localId: Int!) {
    undoLikeComment(localId: $localId)
  }
`;
export type UndoLikeCommentMutationMutationFn = ApolloReactCommon.MutationFunction<
  UndoLikeCommentMutationMutation,
  UndoLikeCommentMutationMutationVariables
>;
export type UndoLikeCommentMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >,
  'mutation'
>;

export const UndoLikeCommentMutationComponent = (
  props: UndoLikeCommentMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >
    mutation={UndoLikeCommentMutationDocument}
    {...props}
  />
);

export type UndoLikeCommentMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UndoLikeCommentMutationMutation,
  UndoLikeCommentMutationMutationVariables
> &
  TChildProps;
export function withUndoLikeCommentMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables,
    UndoLikeCommentMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables,
    UndoLikeCommentMutationProps<TChildProps>
  >(UndoLikeCommentMutationDocument, {
    alias: 'undoLikeCommentMutation',
    ...operationOptions
  });
}

/**
 * __useUndoLikeCommentMutationMutation__
 *
 * To run a mutation, you first call `useUndoLikeCommentMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoLikeCommentMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoLikeCommentMutationMutation, { data, loading, error }] = useUndoLikeCommentMutationMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *   },
 * });
 */
export function useUndoLikeCommentMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >(UndoLikeCommentMutationDocument, baseOptions);
}
export type UndoLikeCommentMutationMutationHookResult = ReturnType<
  typeof useUndoLikeCommentMutationMutation
>;
export type UndoLikeCommentMutationMutationResult = ApolloReactCommon.MutationResult<
  UndoLikeCommentMutationMutation
>;
export type UndoLikeCommentMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoLikeCommentMutationMutation,
  UndoLikeCommentMutationMutationVariables
>;
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
export type UpdateCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCollectionMutationMutation,
  UpdateCollectionMutationMutationVariables
>;
export type UpdateCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const UpdateCollectionMutationComponent = (
  props: UpdateCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >
    mutation={UpdateCollectionMutationDocument}
    {...props}
  />
);

export type UpdateCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UpdateCollectionMutationMutation,
  UpdateCollectionMutationMutationVariables
> &
  TChildProps;
export function withUpdateCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables,
    UpdateCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables,
    UpdateCollectionMutationProps<TChildProps>
  >(UpdateCollectionMutationDocument, {
    alias: 'updateCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateCollectionMutationMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutationMutation, { data, loading, error }] = useUpdateCollectionMutationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useUpdateCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >(UpdateCollectionMutationDocument, baseOptions);
}
export type UpdateCollectionMutationMutationHookResult = ReturnType<
  typeof useUpdateCollectionMutationMutation
>;
export type UpdateCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateCollectionMutationMutation
>;
export type UpdateCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCollectionMutationMutation,
  UpdateCollectionMutationMutationVariables
>;
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
export type UpdateCommunityMutationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCommunityMutationMutation,
  UpdateCommunityMutationMutationVariables
>;
export type UpdateCommunityMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateCommunityMutationMutation,
    UpdateCommunityMutationMutationVariables
  >,
  'mutation'
>;

export const UpdateCommunityMutationComponent = (
  props: UpdateCommunityMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateCommunityMutationMutation,
    UpdateCommunityMutationMutationVariables
  >
    mutation={UpdateCommunityMutationDocument}
    {...props}
  />
);

export type UpdateCommunityMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UpdateCommunityMutationMutation,
  UpdateCommunityMutationMutationVariables
> &
  TChildProps;
export function withUpdateCommunityMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateCommunityMutationMutation,
    UpdateCommunityMutationMutationVariables,
    UpdateCommunityMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateCommunityMutationMutation,
    UpdateCommunityMutationMutationVariables,
    UpdateCommunityMutationProps<TChildProps>
  >(UpdateCommunityMutationDocument, {
    alias: 'updateCommunityMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateCommunityMutationMutation__
 *
 * To run a mutation, you first call `useUpdateCommunityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommunityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommunityMutationMutation, { data, loading, error }] = useUpdateCommunityMutationMutation({
 *   variables: {
 *      community: // value for 'community'
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useUpdateCommunityMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCommunityMutationMutation,
    UpdateCommunityMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateCommunityMutationMutation,
    UpdateCommunityMutationMutationVariables
  >(UpdateCommunityMutationDocument, baseOptions);
}
export type UpdateCommunityMutationMutationHookResult = ReturnType<
  typeof useUpdateCommunityMutationMutation
>;
export type UpdateCommunityMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateCommunityMutationMutation
>;
export type UpdateCommunityMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCommunityMutationMutation,
  UpdateCommunityMutationMutationVariables
>;
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
export type UpdateProfileMutationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateProfileMutationMutation,
  UpdateProfileMutationMutationVariables
>;
export type UpdateProfileMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateProfileMutationMutation,
    UpdateProfileMutationMutationVariables
  >,
  'mutation'
>;

export const UpdateProfileMutationComponent = (
  props: UpdateProfileMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateProfileMutationMutation,
    UpdateProfileMutationMutationVariables
  >
    mutation={UpdateProfileMutationDocument}
    {...props}
  />
);

export type UpdateProfileMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UpdateProfileMutationMutation,
  UpdateProfileMutationMutationVariables
> &
  TChildProps;
export function withUpdateProfileMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateProfileMutationMutation,
    UpdateProfileMutationMutationVariables,
    UpdateProfileMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateProfileMutationMutation,
    UpdateProfileMutationMutationVariables,
    UpdateProfileMutationProps<TChildProps>
  >(UpdateProfileMutationDocument, {
    alias: 'updateProfileMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateProfileMutationMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutationMutation, { data, loading, error }] = useUpdateProfileMutationMutation({
 *   variables: {
 *      profile: // value for 'profile'
 *   },
 * });
 */
export function useUpdateProfileMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateProfileMutationMutation,
    UpdateProfileMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateProfileMutationMutation,
    UpdateProfileMutationMutationVariables
  >(UpdateProfileMutationDocument, baseOptions);
}
export type UpdateProfileMutationMutationHookResult = ReturnType<
  typeof useUpdateProfileMutationMutation
>;
export type UpdateProfileMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateProfileMutationMutation
>;
export type UpdateProfileMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateProfileMutationMutation,
  UpdateProfileMutationMutationVariables
>;
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
export type UpdateResourceMutationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateResourceMutationMutation,
  UpdateResourceMutationMutationVariables
>;
export type UpdateResourceMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >,
  'mutation'
>;

export const UpdateResourceMutationComponent = (
  props: UpdateResourceMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >
    mutation={UpdateResourceMutationDocument}
    {...props}
  />
);

export type UpdateResourceMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UpdateResourceMutationMutation,
  UpdateResourceMutationMutationVariables
> &
  TChildProps;
export function withUpdateResourceMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables,
    UpdateResourceMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables,
    UpdateResourceMutationProps<TChildProps>
  >(UpdateResourceMutationDocument, {
    alias: 'updateResourceMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateResourceMutationMutation__
 *
 * To run a mutation, you first call `useUpdateResourceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResourceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResourceMutationMutation, { data, loading, error }] = useUpdateResourceMutationMutation({
 *   variables: {
 *      resourceId: // value for 'resourceId'
 *      resource: // value for 'resource'
 *   },
 * });
 */
export function useUpdateResourceMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >(UpdateResourceMutationDocument, baseOptions);
}
export type UpdateResourceMutationMutationHookResult = ReturnType<
  typeof useUpdateResourceMutationMutation
>;
export type UpdateResourceMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateResourceMutationMutation
>;
export type UpdateResourceMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateResourceMutationMutation,
  UpdateResourceMutationMutationVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
