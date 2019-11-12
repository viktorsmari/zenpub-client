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
  /** Flag */
  flag?: Maybe<Scalars['Boolean']>;
  /** Delete a comment */
  deleteComment?: Maybe<Scalars['Boolean']>;
  /** Fetch an AS2 object from URL */
  fetchObject?: Maybe<FetchedObject>;
  /** Undo a previous like to a comment */
  undoLikeComment?: Maybe<Scalars['Boolean']>;
  /** Update a resource */
  updateResource?: Maybe<Resource>;
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
  /** Undo a previous flag */
  undoFlag?: Maybe<Scalars['Boolean']>;
  /** Undo join a community */
  undoJoinCommunity?: Maybe<Scalars['Boolean']>;
  /** Delete a resource */
  deleteResource?: Maybe<Scalars['Boolean']>;
  /** Undo follow a collection */
  undoFollowCollection?: Maybe<Scalars['Boolean']>;
  /** Create a resource */
  createResource?: Maybe<Resource>;
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
  /** Create a new thread */
  createThread?: Maybe<Comment>;
  /** Join a community */
  joinCommunity?: Maybe<Scalars['Boolean']>;
  /** Logout */
  deleteSession?: Maybe<Scalars['Boolean']>;
  /** Update a collection */
  updateCollection?: Maybe<Collection>;
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

export type RootMutationTypeFlagArgs = {
  contextId: Scalars['String'];
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

export type RootMutationTypeUndoFlagArgs = {
  contextId: Scalars['Int'];
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
