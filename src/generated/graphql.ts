import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Add_Account {
  AddAccount = 'ADD_ACCOUNT'
}

export type Account = {
  __typename?: 'Account';
  address: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type AccountInput = {
  address: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type AddAccount = {
  input: AddAccountInput;
  type: Add_Account;
};

export type AddAccountInput = {
  accounts: Array<AccountInput>;
};

export type AddAccountOperation = Operation & {
  __typename?: 'AddAccountOperation';
  index: Scalars['Int'];
  input: AddAccountPayload;
  type: Scalars['String'];
};

export type AddAccountPayload = {
  __typename?: 'AddAccountPayload';
  accounts: Array<Account>;
};

export type BaseOperation = Operation & {
  __typename?: 'BaseOperation';
  index: Scalars['Int'];
  type: Scalars['String'];
};

export type BudgetStatement = Document & {
  __typename?: 'BudgetStatement';
  created?: Maybe<Scalars['String']>;
  data?: Maybe<BudgetStatementData>;
  documentType?: Maybe<Scalars['String']>;
  lastModified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  operations?: Maybe<Array<Maybe<BudgetStatementOperation>>>;
  revision?: Maybe<Scalars['Int']>;
};

export type BudgetStatementData = {
  __typename?: 'BudgetStatementData';
  accounts?: Maybe<Array<Maybe<Account>>>;
};

export type BudgetStatementOperation = AddAccountOperation | DeleteAccountOperation;

export enum Delete_Account {
  DeleteAccount = 'DELETE_ACCOUNT'
}

export type DeleteAccount = {
  input: DeleteAccountInput;
  type: Delete_Account;
};

export type DeleteAccountInput = {
  accounts: Array<Scalars['String']>;
};

export type DeleteAccountOperation = Operation & {
  __typename?: 'DeleteAccountOperation';
  index: Scalars['Int'];
  input: DeleteAccountPayload;
  type: Scalars['String'];
};

export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  accounts: Array<Scalars['String']>;
};

export type Document = {
  created?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  lastModified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccount?: Maybe<BudgetStatement>;
  deleteAccount?: Maybe<BudgetStatement>;
};


export type MutationAddAccountArgs = {
  input: AddAccount;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccount;
};

export type Operation = {
  index: Scalars['Int'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  budgetStatement?: Maybe<BudgetStatement>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  BudgetStatementOperation: ( AddAccountOperation ) | ( DeleteAccountOperation );
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  BudgetStatementOperation: ( AddAccountOperation ) | ( DeleteAccountOperation );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ADD_ACCOUNT: Add_Account;
  Account: ResolverTypeWrapper<Account>;
  AccountInput: AccountInput;
  AddAccount: AddAccount;
  AddAccountInput: AddAccountInput;
  AddAccountOperation: ResolverTypeWrapper<AddAccountOperation>;
  AddAccountPayload: ResolverTypeWrapper<AddAccountPayload>;
  BaseOperation: ResolverTypeWrapper<BaseOperation>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BudgetStatement: ResolverTypeWrapper<Omit<BudgetStatement, 'operations'> & { operations?: Maybe<Array<Maybe<ResolversTypes['BudgetStatementOperation']>>> }>;
  BudgetStatementData: ResolverTypeWrapper<BudgetStatementData>;
  BudgetStatementOperation: ResolverTypeWrapper<ResolversUnionTypes['BudgetStatementOperation']>;
  DELETE_ACCOUNT: Delete_Account;
  DeleteAccount: DeleteAccount;
  DeleteAccountInput: DeleteAccountInput;
  DeleteAccountOperation: ResolverTypeWrapper<DeleteAccountOperation>;
  DeleteAccountPayload: ResolverTypeWrapper<DeleteAccountPayload>;
  Document: ResolversTypes['BudgetStatement'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Operation: ResolversTypes['AddAccountOperation'] | ResolversTypes['BaseOperation'] | ResolversTypes['DeleteAccountOperation'];
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  AccountInput: AccountInput;
  AddAccount: AddAccount;
  AddAccountInput: AddAccountInput;
  AddAccountOperation: AddAccountOperation;
  AddAccountPayload: AddAccountPayload;
  BaseOperation: BaseOperation;
  Boolean: Scalars['Boolean'];
  BudgetStatement: Omit<BudgetStatement, 'operations'> & { operations?: Maybe<Array<Maybe<ResolversParentTypes['BudgetStatementOperation']>>> };
  BudgetStatementData: BudgetStatementData;
  BudgetStatementOperation: ResolversUnionParentTypes['BudgetStatementOperation'];
  DeleteAccount: DeleteAccount;
  DeleteAccountInput: DeleteAccountInput;
  DeleteAccountOperation: DeleteAccountOperation;
  DeleteAccountPayload: DeleteAccountPayload;
  Document: ResolversParentTypes['BudgetStatement'];
  Int: Scalars['Int'];
  Mutation: {};
  Operation: ResolversParentTypes['AddAccountOperation'] | ResolversParentTypes['BaseOperation'] | ResolversParentTypes['DeleteAccountOperation'];
  Query: {};
  String: Scalars['String'];
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddAccountOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddAccountOperation'] = ResolversParentTypes['AddAccountOperation']> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  input?: Resolver<ResolversTypes['AddAccountPayload'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddAccountPayload'] = ResolversParentTypes['AddAccountPayload']> = {
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseOperation'] = ResolversParentTypes['BaseOperation']> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BudgetStatementResolvers<ContextType = any, ParentType extends ResolversParentTypes['BudgetStatement'] = ResolversParentTypes['BudgetStatement']> = {
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType>;
  documentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operations?: Resolver<Maybe<Array<Maybe<ResolversTypes['BudgetStatementOperation']>>>, ParentType, ContextType>;
  revision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BudgetStatementDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BudgetStatementData'] = ResolversParentTypes['BudgetStatementData']> = {
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BudgetStatementOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BudgetStatementOperation'] = ResolversParentTypes['BudgetStatementOperation']> = {
  __resolveType: TypeResolveFn<'AddAccountOperation' | 'DeleteAccountOperation', ParentType, ContextType>;
};

export type DeleteAccountOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAccountOperation'] = ResolversParentTypes['DeleteAccountOperation']> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  input?: Resolver<ResolversTypes['DeleteAccountPayload'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAccountPayload'] = ResolversParentTypes['DeleteAccountPayload']> = {
  accounts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  __resolveType: TypeResolveFn<'BudgetStatement', ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAccount?: Resolver<Maybe<ResolversTypes['BudgetStatement']>, ParentType, ContextType, RequireFields<MutationAddAccountArgs, 'input'>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['BudgetStatement']>, ParentType, ContextType, RequireFields<MutationDeleteAccountArgs, 'input'>>;
};

export type OperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operation'] = ResolversParentTypes['Operation']> = {
  __resolveType: TypeResolveFn<'AddAccountOperation' | 'BaseOperation' | 'DeleteAccountOperation', ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  budgetStatement?: Resolver<Maybe<ResolversTypes['BudgetStatement']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AddAccountOperation?: AddAccountOperationResolvers<ContextType>;
  AddAccountPayload?: AddAccountPayloadResolvers<ContextType>;
  BaseOperation?: BaseOperationResolvers<ContextType>;
  BudgetStatement?: BudgetStatementResolvers<ContextType>;
  BudgetStatementData?: BudgetStatementDataResolvers<ContextType>;
  BudgetStatementOperation?: BudgetStatementOperationResolvers<ContextType>;
  DeleteAccountOperation?: DeleteAccountOperationResolvers<ContextType>;
  DeleteAccountPayload?: DeleteAccountPayloadResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

