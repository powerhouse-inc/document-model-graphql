import * as SchemaTypes from './types';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
) => SchemaTypes.Maybe<TTypes> | Promise<SchemaTypes.Maybe<TTypes>>;

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
export type ResolversUnionTypes = ResolversObject<{
  BaseAction: ( SchemaTypes.LoadStateAction ) | ( SchemaTypes.PruneAction ) | ( SchemaTypes.RedoAction ) | ( SchemaTypes.SetNameAction ) | ( SchemaTypes.UndoAction );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  BaseAction: ( SchemaTypes.LoadStateAction ) | ( SchemaTypes.PruneAction ) | ( SchemaTypes.RedoAction ) | ( SchemaTypes.SetNameAction ) | ( SchemaTypes.UndoAction );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Action: ResolverTypeWrapper<SchemaTypes.Action>;
  Address: ResolverTypeWrapper<SchemaTypes.Scalars['Address']>;
  BaseAction: ResolverTypeWrapper<ResolversUnionTypes['BaseAction']>;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<SchemaTypes.Scalars['DateTime']>;
  DocumentFile: ResolverTypeWrapper<SchemaTypes.DocumentFile>;
  IAction: ResolversTypes['Action'];
  IDocument: never;
  IOperation: ResolversTypes['Operation'] | ResolversTypes['SetNameOperation'];
  Int: ResolverTypeWrapper<SchemaTypes.Scalars['Int']>;
  LOAD_STATE: SchemaTypes.Load_State;
  LoadStateAction: SchemaTypes.LoadStateAction;
  LoadStateActionInput: SchemaTypes.LoadStateActionInput;
  LoadStateActionStateInput: SchemaTypes.LoadStateActionStateInput;
  Mutation: ResolverTypeWrapper<{}>;
  Operation: ResolverTypeWrapper<SchemaTypes.Operation>;
  PRUNE: SchemaTypes.Prune;
  PruneAction: SchemaTypes.PruneAction;
  PruneActionInput: SchemaTypes.PruneActionInput;
  Query: ResolverTypeWrapper<{}>;
  REDO: SchemaTypes.Redo;
  RedoAction: SchemaTypes.RedoAction;
  SET_NAME: SchemaTypes.Set_Name;
  SetNameAction: SchemaTypes.SetNameAction;
  SetNameOperation: ResolverTypeWrapper<SchemaTypes.SetNameOperation>;
  String: ResolverTypeWrapper<SchemaTypes.Scalars['String']>;
  UNDO: SchemaTypes.Undo;
  UndoAction: SchemaTypes.UndoAction;
  Unknown: ResolverTypeWrapper<SchemaTypes.Scalars['Unknown']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Action: SchemaTypes.Action;
  Address: SchemaTypes.Scalars['Address'];
  BaseAction: ResolversUnionParentTypes['BaseAction'];
  Boolean: SchemaTypes.Scalars['Boolean'];
  DateTime: SchemaTypes.Scalars['DateTime'];
  DocumentFile: SchemaTypes.DocumentFile;
  IAction: ResolversParentTypes['Action'];
  IDocument: never;
  IOperation: ResolversParentTypes['Operation'] | ResolversParentTypes['SetNameOperation'];
  Int: SchemaTypes.Scalars['Int'];
  LoadStateAction: SchemaTypes.LoadStateAction;
  LoadStateActionInput: SchemaTypes.LoadStateActionInput;
  LoadStateActionStateInput: SchemaTypes.LoadStateActionStateInput;
  Mutation: {};
  Operation: SchemaTypes.Operation;
  PruneAction: SchemaTypes.PruneAction;
  PruneActionInput: SchemaTypes.PruneActionInput;
  Query: {};
  RedoAction: SchemaTypes.RedoAction;
  SetNameAction: SchemaTypes.SetNameAction;
  SetNameOperation: SchemaTypes.SetNameOperation;
  String: SchemaTypes.Scalars['String'];
  UndoAction: SchemaTypes.UndoAction;
  Unknown: SchemaTypes.Scalars['Unknown'];
}>;

export type EqualsDirectiveArgs = {
  value?: SchemaTypes.Maybe<SchemaTypes.Scalars['String']>;
};

export type EqualsDirectiveResolver<Result, Parent, ContextType = any, Args = EqualsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = ResolversObject<{
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface AddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Address'], any> {
  name: 'Address';
}

export type BaseActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseAction'] = ResolversParentTypes['BaseAction']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LoadStateAction' | 'PruneAction' | 'RedoAction' | 'SetNameAction' | 'UndoAction', ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentFile'] = ResolversParentTypes['DocumentFile']> = ResolversObject<{
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IAction'] = ResolversParentTypes['IAction']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Action', ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type IDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDocument'] = ResolversParentTypes['IDocument']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['IOperation']>, ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type IOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['IOperation'] = ResolversParentTypes['IOperation']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Operation' | 'SetNameOperation', ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  loadState?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationLoadStateArgs, 'input'>>;
  prune?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationPruneArgs, 'input'>>;
  redo?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationRedoArgs, 'input'>>;
  setName?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetNameArgs, 'input'>>;
  undo?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUndoArgs, 'input'>>;
}>;

export type OperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operation'] = ResolversParentTypes['Operation']> = ResolversObject<{
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  document?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType>;
}>;

export type SetNameOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetNameOperation'] = ResolversParentTypes['SetNameOperation']> = ResolversObject<{
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  input?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UnknownScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Unknown'], any> {
  name: 'Unknown';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Action?: ActionResolvers<ContextType>;
  Address?: GraphQLScalarType;
  BaseAction?: BaseActionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DocumentFile?: DocumentFileResolvers<ContextType>;
  IAction?: IActionResolvers<ContextType>;
  IDocument?: IDocumentResolvers<ContextType>;
  IOperation?: IOperationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SetNameOperation?: SetNameOperationResolvers<ContextType>;
  Unknown?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  equals?: EqualsDirectiveResolver<any, any, ContextType>;
}>;
