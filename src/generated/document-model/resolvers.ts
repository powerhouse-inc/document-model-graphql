import * as SchemaTypes from './types';
import { GraphQLResolveInfo } from 'graphql';
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
  DocumentModelInput: ( SchemaTypes.AddModuleInput ) | ( SchemaTypes.AddOperationErrorInput ) | ( SchemaTypes.AddOperationExampleInput ) | ( SchemaTypes.AddOperationInput ) | ( SchemaTypes.AddStateExampleInput ) | ( SchemaTypes.DeleteModuleInput ) | ( SchemaTypes.DeleteOperationErrorInput ) | ( SchemaTypes.DeleteOperationExampleInput ) | ( SchemaTypes.DeleteOperationInput ) | ( SchemaTypes.DeleteStateExampleInput ) | ( SchemaTypes.MoveOperationInput ) | ( SchemaTypes.ReorderModuleOperationsInput ) | ( SchemaTypes.ReorderModulesInput ) | ( SchemaTypes.ReorderOperationErrorsInput ) | ( SchemaTypes.ReorderOperationExamplesInput ) | ( SchemaTypes.ReorderStateExamplesInput ) | ( SchemaTypes.SetAuthorNameInput ) | ( SchemaTypes.SetAuthorWebsiteInput ) | ( SchemaTypes.SetModelDescriptionInput ) | ( SchemaTypes.SetModelExtensionInput ) | ( SchemaTypes.SetModelIdInput ) | ( SchemaTypes.SetModelNameInput ) | ( SchemaTypes.SetModuleDescriptionInput ) | ( SchemaTypes.SetModuleNameInput ) | ( SchemaTypes.SetOperationDescriptionInput ) | ( SchemaTypes.SetOperationErrorCodeInput ) | ( SchemaTypes.SetOperationErrorDescriptionInput ) | ( SchemaTypes.SetOperationErrorNameInput ) | ( SchemaTypes.SetOperationErrorTemplateInput ) | ( SchemaTypes.SetOperationNameInput ) | ( SchemaTypes.SetOperationReducerInput ) | ( SchemaTypes.SetOperationSchemaInput ) | ( SchemaTypes.SetOperationTemplateInput ) | ( SchemaTypes.SetStateSchemaInput ) | ( SchemaTypes.UpdateOperationExampleInput ) | ( SchemaTypes.UpdateStateExampleInput );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  DocumentModelInput: ( SchemaTypes.AddModuleInput ) | ( SchemaTypes.AddOperationErrorInput ) | ( SchemaTypes.AddOperationExampleInput ) | ( SchemaTypes.AddOperationInput ) | ( SchemaTypes.AddStateExampleInput ) | ( SchemaTypes.DeleteModuleInput ) | ( SchemaTypes.DeleteOperationErrorInput ) | ( SchemaTypes.DeleteOperationExampleInput ) | ( SchemaTypes.DeleteOperationInput ) | ( SchemaTypes.DeleteStateExampleInput ) | ( SchemaTypes.MoveOperationInput ) | ( SchemaTypes.ReorderModuleOperationsInput ) | ( SchemaTypes.ReorderModulesInput ) | ( SchemaTypes.ReorderOperationErrorsInput ) | ( SchemaTypes.ReorderOperationExamplesInput ) | ( SchemaTypes.ReorderStateExamplesInput ) | ( SchemaTypes.SetAuthorNameInput ) | ( SchemaTypes.SetAuthorWebsiteInput ) | ( SchemaTypes.SetModelDescriptionInput ) | ( SchemaTypes.SetModelExtensionInput ) | ( SchemaTypes.SetModelIdInput ) | ( SchemaTypes.SetModelNameInput ) | ( SchemaTypes.SetModuleDescriptionInput ) | ( SchemaTypes.SetModuleNameInput ) | ( SchemaTypes.SetOperationDescriptionInput ) | ( SchemaTypes.SetOperationErrorCodeInput ) | ( SchemaTypes.SetOperationErrorDescriptionInput ) | ( SchemaTypes.SetOperationErrorNameInput ) | ( SchemaTypes.SetOperationErrorTemplateInput ) | ( SchemaTypes.SetOperationNameInput ) | ( SchemaTypes.SetOperationReducerInput ) | ( SchemaTypes.SetOperationSchemaInput ) | ( SchemaTypes.SetOperationTemplateInput ) | ( SchemaTypes.SetStateSchemaInput ) | ( SchemaTypes.UpdateOperationExampleInput ) | ( SchemaTypes.UpdateStateExampleInput );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddModuleInput: SchemaTypes.AddModuleInput;
  AddOperationErrorInput: SchemaTypes.AddOperationErrorInput;
  AddOperationExampleInput: SchemaTypes.AddOperationExampleInput;
  AddOperationInput: SchemaTypes.AddOperationInput;
  AddStateExampleInput: SchemaTypes.AddStateExampleInput;
  Author: ResolverTypeWrapper<SchemaTypes.Author>;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  CodeExample: ResolverTypeWrapper<SchemaTypes.CodeExample>;
  DeleteModuleInput: SchemaTypes.DeleteModuleInput;
  DeleteOperationErrorInput: SchemaTypes.DeleteOperationErrorInput;
  DeleteOperationExampleInput: SchemaTypes.DeleteOperationExampleInput;
  DeleteOperationInput: SchemaTypes.DeleteOperationInput;
  DeleteStateExampleInput: SchemaTypes.DeleteStateExampleInput;
  DocumentModelInput: ResolverTypeWrapper<ResolversUnionTypes['DocumentModelInput']>;
  DocumentModelState: ResolverTypeWrapper<SchemaTypes.DocumentModelState>;
  ID: ResolverTypeWrapper<SchemaTypes.Scalars['ID']>;
  Module: ResolverTypeWrapper<SchemaTypes.Module>;
  MoveOperationInput: SchemaTypes.MoveOperationInput;
  Mutation: ResolverTypeWrapper<{}>;
  Operation: ResolverTypeWrapper<SchemaTypes.Operation>;
  OperationError: ResolverTypeWrapper<SchemaTypes.OperationError>;
  ReorderModuleOperationsInput: SchemaTypes.ReorderModuleOperationsInput;
  ReorderModulesInput: SchemaTypes.ReorderModulesInput;
  ReorderOperationErrorsInput: SchemaTypes.ReorderOperationErrorsInput;
  ReorderOperationExamplesInput: SchemaTypes.ReorderOperationExamplesInput;
  ReorderStateExamplesInput: SchemaTypes.ReorderStateExamplesInput;
  SetAuthorNameInput: SchemaTypes.SetAuthorNameInput;
  SetAuthorWebsiteInput: SchemaTypes.SetAuthorWebsiteInput;
  SetModelDescriptionInput: SchemaTypes.SetModelDescriptionInput;
  SetModelExtensionInput: SchemaTypes.SetModelExtensionInput;
  SetModelIdInput: SchemaTypes.SetModelIdInput;
  SetModelNameInput: SchemaTypes.SetModelNameInput;
  SetModuleDescriptionInput: SchemaTypes.SetModuleDescriptionInput;
  SetModuleNameInput: SchemaTypes.SetModuleNameInput;
  SetOperationDescriptionInput: SchemaTypes.SetOperationDescriptionInput;
  SetOperationErrorCodeInput: SchemaTypes.SetOperationErrorCodeInput;
  SetOperationErrorDescriptionInput: SchemaTypes.SetOperationErrorDescriptionInput;
  SetOperationErrorNameInput: SchemaTypes.SetOperationErrorNameInput;
  SetOperationErrorTemplateInput: SchemaTypes.SetOperationErrorTemplateInput;
  SetOperationNameInput: SchemaTypes.SetOperationNameInput;
  SetOperationReducerInput: SchemaTypes.SetOperationReducerInput;
  SetOperationSchemaInput: SchemaTypes.SetOperationSchemaInput;
  SetOperationTemplateInput: SchemaTypes.SetOperationTemplateInput;
  SetStateSchemaInput: SchemaTypes.SetStateSchemaInput;
  State: ResolverTypeWrapper<SchemaTypes.State>;
  String: ResolverTypeWrapper<SchemaTypes.Scalars['String']>;
  UpdateOperationExampleInput: SchemaTypes.UpdateOperationExampleInput;
  UpdateStateExampleInput: SchemaTypes.UpdateStateExampleInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddModuleInput: SchemaTypes.AddModuleInput;
  AddOperationErrorInput: SchemaTypes.AddOperationErrorInput;
  AddOperationExampleInput: SchemaTypes.AddOperationExampleInput;
  AddOperationInput: SchemaTypes.AddOperationInput;
  AddStateExampleInput: SchemaTypes.AddStateExampleInput;
  Author: SchemaTypes.Author;
  Boolean: SchemaTypes.Scalars['Boolean'];
  CodeExample: SchemaTypes.CodeExample;
  DeleteModuleInput: SchemaTypes.DeleteModuleInput;
  DeleteOperationErrorInput: SchemaTypes.DeleteOperationErrorInput;
  DeleteOperationExampleInput: SchemaTypes.DeleteOperationExampleInput;
  DeleteOperationInput: SchemaTypes.DeleteOperationInput;
  DeleteStateExampleInput: SchemaTypes.DeleteStateExampleInput;
  DocumentModelInput: ResolversUnionParentTypes['DocumentModelInput'];
  DocumentModelState: SchemaTypes.DocumentModelState;
  ID: SchemaTypes.Scalars['ID'];
  Module: SchemaTypes.Module;
  MoveOperationInput: SchemaTypes.MoveOperationInput;
  Mutation: {};
  Operation: SchemaTypes.Operation;
  OperationError: SchemaTypes.OperationError;
  ReorderModuleOperationsInput: SchemaTypes.ReorderModuleOperationsInput;
  ReorderModulesInput: SchemaTypes.ReorderModulesInput;
  ReorderOperationErrorsInput: SchemaTypes.ReorderOperationErrorsInput;
  ReorderOperationExamplesInput: SchemaTypes.ReorderOperationExamplesInput;
  ReorderStateExamplesInput: SchemaTypes.ReorderStateExamplesInput;
  SetAuthorNameInput: SchemaTypes.SetAuthorNameInput;
  SetAuthorWebsiteInput: SchemaTypes.SetAuthorWebsiteInput;
  SetModelDescriptionInput: SchemaTypes.SetModelDescriptionInput;
  SetModelExtensionInput: SchemaTypes.SetModelExtensionInput;
  SetModelIdInput: SchemaTypes.SetModelIdInput;
  SetModelNameInput: SchemaTypes.SetModelNameInput;
  SetModuleDescriptionInput: SchemaTypes.SetModuleDescriptionInput;
  SetModuleNameInput: SchemaTypes.SetModuleNameInput;
  SetOperationDescriptionInput: SchemaTypes.SetOperationDescriptionInput;
  SetOperationErrorCodeInput: SchemaTypes.SetOperationErrorCodeInput;
  SetOperationErrorDescriptionInput: SchemaTypes.SetOperationErrorDescriptionInput;
  SetOperationErrorNameInput: SchemaTypes.SetOperationErrorNameInput;
  SetOperationErrorTemplateInput: SchemaTypes.SetOperationErrorTemplateInput;
  SetOperationNameInput: SchemaTypes.SetOperationNameInput;
  SetOperationReducerInput: SchemaTypes.SetOperationReducerInput;
  SetOperationSchemaInput: SchemaTypes.SetOperationSchemaInput;
  SetOperationTemplateInput: SchemaTypes.SetOperationTemplateInput;
  SetStateSchemaInput: SchemaTypes.SetStateSchemaInput;
  State: SchemaTypes.State;
  String: SchemaTypes.Scalars['String'];
  UpdateOperationExampleInput: SchemaTypes.UpdateOperationExampleInput;
  UpdateStateExampleInput: SchemaTypes.UpdateStateExampleInput;
}>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CodeExampleResolvers<ContextType = any, ParentType extends ResolversParentTypes['CodeExample'] = ResolversParentTypes['CodeExample']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DocumentModelInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModelInput'] = ResolversParentTypes['DocumentModelInput']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddModuleInput' | 'AddOperationErrorInput' | 'AddOperationExampleInput' | 'AddOperationInput' | 'AddStateExampleInput' | 'DeleteModuleInput' | 'DeleteOperationErrorInput' | 'DeleteOperationExampleInput' | 'DeleteOperationInput' | 'DeleteStateExampleInput' | 'MoveOperationInput' | 'ReorderModuleOperationsInput' | 'ReorderModulesInput' | 'ReorderOperationErrorsInput' | 'ReorderOperationExamplesInput' | 'ReorderStateExamplesInput' | 'SetAuthorNameInput' | 'SetAuthorWebsiteInput' | 'SetModelDescriptionInput' | 'SetModelExtensionInput' | 'SetModelIdInput' | 'SetModelNameInput' | 'SetModuleDescriptionInput' | 'SetModuleNameInput' | 'SetOperationDescriptionInput' | 'SetOperationErrorCodeInput' | 'SetOperationErrorDescriptionInput' | 'SetOperationErrorNameInput' | 'SetOperationErrorTemplateInput' | 'SetOperationNameInput' | 'SetOperationReducerInput' | 'SetOperationSchemaInput' | 'SetOperationTemplateInput' | 'SetStateSchemaInput' | 'UpdateOperationExampleInput' | 'UpdateStateExampleInput', ParentType, ContextType>;
}>;

export type DocumentModelStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModelState'] = ResolversParentTypes['DocumentModelState']> = ResolversObject<{
  author?: Resolver<SchemaTypes.Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extension?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<Array<ResolversTypes['Module']>, ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<SchemaTypes.Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module']> = ResolversObject<{
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['Operation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addModule?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, Partial<SchemaTypes.MutationAddModuleArgs>>;
  addOperation?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationArgs, 'input'>>;
  addOperationError?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationErrorArgs, 'input'>>;
  addOperationExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationExampleArgs, 'input'>>;
  addStateExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddStateExampleArgs, 'input'>>;
  deleteModule?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteModuleArgs, 'input'>>;
  deleteOperation?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationArgs, 'input'>>;
  deleteOperationError?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationErrorArgs, 'input'>>;
  deleteOperationExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationExampleArgs, 'input'>>;
  deleteStateExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteStateExampleArgs, 'input'>>;
  moveOperation?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationMoveOperationArgs, 'input'>>;
  reorderModuleOperations?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderModuleOperationsArgs, 'input'>>;
  reorderModules?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderModulesArgs, 'input'>>;
  reorderOperationErrors?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderOperationErrorsArgs, 'input'>>;
  reorderOperationExamples?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderOperationExamplesArgs, 'input'>>;
  reorderStateExamples?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderStateExamplesArgs, 'input'>>;
  setAuthorName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetAuthorNameArgs, 'input'>>;
  setAuthorWebsite?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetAuthorWebsiteArgs, 'input'>>;
  setModelDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelDescriptionArgs, 'input'>>;
  setModelExtension?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelExtensionArgs, 'input'>>;
  setModelId?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelIdArgs, 'input'>>;
  setModelName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelNameArgs, 'input'>>;
  setModuleDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModuleDescriptionArgs, 'input'>>;
  setModuleName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModuleNameArgs, 'input'>>;
  setOperationDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationDescriptionArgs, 'input'>>;
  setOperationErrorCode?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorCodeArgs, 'input'>>;
  setOperationErrorDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorDescriptionArgs, 'input'>>;
  setOperationErrorName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorNameArgs, 'input'>>;
  setOperationErrorTemplate?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorTemplateArgs, 'input'>>;
  setOperationName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationNameArgs, 'input'>>;
  setOperationReducer?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationReducerArgs, 'input'>>;
  setOperationSchema?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationSchemaArgs, 'input'>>;
  setOperationTemplate?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationTemplateArgs, 'input'>>;
  setStateSchema?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetStateSchemaArgs, 'input'>>;
  updateOperationExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateOperationExampleArgs, 'input'>>;
  updateStateExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateStateExampleArgs, 'input'>>;
}>;

export type OperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operation'] = ResolversParentTypes['Operation']> = ResolversObject<{
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['OperationError']>, ParentType, ContextType>;
  examples?: Resolver<Array<ResolversTypes['CodeExample']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reducer?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schema?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OperationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OperationError'] = ResolversParentTypes['OperationError']> = ResolversObject<{
  code?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = ResolversObject<{
  examples?: Resolver<Array<ResolversTypes['CodeExample']>, ParentType, ContextType>;
  schema?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Author?: AuthorResolvers<ContextType>;
  CodeExample?: CodeExampleResolvers<ContextType>;
  DocumentModelInput?: DocumentModelInputResolvers<ContextType>;
  DocumentModelState?: DocumentModelStateResolvers<ContextType>;
  Module?: ModuleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  OperationError?: OperationErrorResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
}>;

