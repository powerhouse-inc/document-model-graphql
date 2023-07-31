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
  DocumentModelInput: ( SchemaTypes.AddChangeLogItemInput ) | ( SchemaTypes.AddModuleInput ) | ( SchemaTypes.AddOperationErrorInput ) | ( SchemaTypes.AddOperationExampleInput ) | ( SchemaTypes.AddOperationInput ) | ( SchemaTypes.AddStateExampleInput ) | ( SchemaTypes.DeleteChangeLogItemInput ) | ( SchemaTypes.DeleteModuleInput ) | ( SchemaTypes.DeleteOperationErrorInput ) | ( SchemaTypes.DeleteOperationExampleInput ) | ( SchemaTypes.DeleteOperationInput ) | ( SchemaTypes.DeleteStateExampleInput ) | ( SchemaTypes.MoveOperationInput ) | ( SchemaTypes.ReorderChangeLogItemsInput ) | ( SchemaTypes.ReorderModuleOperationsInput ) | ( SchemaTypes.ReorderModulesInput ) | ( SchemaTypes.ReorderOperationErrorsInput ) | ( SchemaTypes.ReorderOperationExamplesInput ) | ( SchemaTypes.ReorderStateExamplesInput ) | ( SchemaTypes.SetAuthorNameInput ) | ( SchemaTypes.SetAuthorWebsiteInput ) | ( SchemaTypes.SetInitialStateInput ) | ( SchemaTypes.SetModelDescriptionInput ) | ( SchemaTypes.SetModelExtensionInput ) | ( SchemaTypes.SetModelIdInput ) | ( SchemaTypes.SetModelNameInput ) | ( SchemaTypes.SetModuleDescriptionInput ) | ( SchemaTypes.SetModuleNameInput ) | ( SchemaTypes.SetOperationDescriptionInput ) | ( SchemaTypes.SetOperationErrorCodeInput ) | ( SchemaTypes.SetOperationErrorDescriptionInput ) | ( SchemaTypes.SetOperationErrorNameInput ) | ( SchemaTypes.SetOperationErrorTemplateInput ) | ( SchemaTypes.SetOperationNameInput ) | ( SchemaTypes.SetOperationReducerInput ) | ( SchemaTypes.SetOperationSchemaInput ) | ( SchemaTypes.SetOperationTemplateInput ) | ( SchemaTypes.SetStateSchemaInput ) | ( SchemaTypes.UpdateChangeLogItemInput ) | ( SchemaTypes.UpdateOperationExampleInput ) | ( SchemaTypes.UpdateStateExampleInput );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  DocumentModelInput: ( SchemaTypes.AddChangeLogItemInput ) | ( SchemaTypes.AddModuleInput ) | ( SchemaTypes.AddOperationErrorInput ) | ( SchemaTypes.AddOperationExampleInput ) | ( SchemaTypes.AddOperationInput ) | ( SchemaTypes.AddStateExampleInput ) | ( SchemaTypes.DeleteChangeLogItemInput ) | ( SchemaTypes.DeleteModuleInput ) | ( SchemaTypes.DeleteOperationErrorInput ) | ( SchemaTypes.DeleteOperationExampleInput ) | ( SchemaTypes.DeleteOperationInput ) | ( SchemaTypes.DeleteStateExampleInput ) | ( SchemaTypes.MoveOperationInput ) | ( SchemaTypes.ReorderChangeLogItemsInput ) | ( SchemaTypes.ReorderModuleOperationsInput ) | ( SchemaTypes.ReorderModulesInput ) | ( SchemaTypes.ReorderOperationErrorsInput ) | ( SchemaTypes.ReorderOperationExamplesInput ) | ( SchemaTypes.ReorderStateExamplesInput ) | ( SchemaTypes.SetAuthorNameInput ) | ( SchemaTypes.SetAuthorWebsiteInput ) | ( SchemaTypes.SetInitialStateInput ) | ( SchemaTypes.SetModelDescriptionInput ) | ( SchemaTypes.SetModelExtensionInput ) | ( SchemaTypes.SetModelIdInput ) | ( SchemaTypes.SetModelNameInput ) | ( SchemaTypes.SetModuleDescriptionInput ) | ( SchemaTypes.SetModuleNameInput ) | ( SchemaTypes.SetOperationDescriptionInput ) | ( SchemaTypes.SetOperationErrorCodeInput ) | ( SchemaTypes.SetOperationErrorDescriptionInput ) | ( SchemaTypes.SetOperationErrorNameInput ) | ( SchemaTypes.SetOperationErrorTemplateInput ) | ( SchemaTypes.SetOperationNameInput ) | ( SchemaTypes.SetOperationReducerInput ) | ( SchemaTypes.SetOperationSchemaInput ) | ( SchemaTypes.SetOperationTemplateInput ) | ( SchemaTypes.SetStateSchemaInput ) | ( SchemaTypes.UpdateChangeLogItemInput ) | ( SchemaTypes.UpdateOperationExampleInput ) | ( SchemaTypes.UpdateStateExampleInput );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddChangeLogItemInput: ResolverTypeWrapper<SchemaTypes.AddChangeLogItemInput>;
  AddModuleInput: SchemaTypes.AddModuleInput;
  AddOperationErrorInput: SchemaTypes.AddOperationErrorInput;
  AddOperationExampleInput: SchemaTypes.AddOperationExampleInput;
  AddOperationInput: SchemaTypes.AddOperationInput;
  AddStateExampleInput: SchemaTypes.AddStateExampleInput;
  Author: ResolverTypeWrapper<SchemaTypes.Author>;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  CodeExample: ResolverTypeWrapper<SchemaTypes.CodeExample>;
  DeleteChangeLogItemInput: ResolverTypeWrapper<SchemaTypes.DeleteChangeLogItemInput>;
  DeleteModuleInput: SchemaTypes.DeleteModuleInput;
  DeleteOperationErrorInput: SchemaTypes.DeleteOperationErrorInput;
  DeleteOperationExampleInput: SchemaTypes.DeleteOperationExampleInput;
  DeleteOperationInput: SchemaTypes.DeleteOperationInput;
  DeleteStateExampleInput: SchemaTypes.DeleteStateExampleInput;
  DocumentModelInput: ResolverTypeWrapper<ResolversUnionTypes['DocumentModelInput']>;
  DocumentModelState: ResolverTypeWrapper<SchemaTypes.DocumentModelState>;
  DocumentSpecification: ResolverTypeWrapper<SchemaTypes.DocumentSpecification>;
  ID: ResolverTypeWrapper<SchemaTypes.Scalars['ID']>;
  Int: ResolverTypeWrapper<SchemaTypes.Scalars['Int']>;
  Module: ResolverTypeWrapper<SchemaTypes.Module>;
  MoveOperationInput: SchemaTypes.MoveOperationInput;
  Mutation: ResolverTypeWrapper<{}>;
  Operation: ResolverTypeWrapper<SchemaTypes.Operation>;
  OperationError: ResolverTypeWrapper<SchemaTypes.OperationError>;
  ReorderChangeLogItemsInput: ResolverTypeWrapper<SchemaTypes.ReorderChangeLogItemsInput>;
  ReorderModuleOperationsInput: SchemaTypes.ReorderModuleOperationsInput;
  ReorderModulesInput: SchemaTypes.ReorderModulesInput;
  ReorderOperationErrorsInput: SchemaTypes.ReorderOperationErrorsInput;
  ReorderOperationExamplesInput: SchemaTypes.ReorderOperationExamplesInput;
  ReorderStateExamplesInput: SchemaTypes.ReorderStateExamplesInput;
  SetAuthorNameInput: SchemaTypes.SetAuthorNameInput;
  SetAuthorWebsiteInput: SchemaTypes.SetAuthorWebsiteInput;
  SetInitialStateInput: SchemaTypes.SetInitialStateInput;
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
  UpdateChangeLogItemInput: ResolverTypeWrapper<SchemaTypes.UpdateChangeLogItemInput>;
  UpdateOperationExampleInput: SchemaTypes.UpdateOperationExampleInput;
  UpdateStateExampleInput: SchemaTypes.UpdateStateExampleInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddChangeLogItemInput: SchemaTypes.AddChangeLogItemInput;
  AddModuleInput: SchemaTypes.AddModuleInput;
  AddOperationErrorInput: SchemaTypes.AddOperationErrorInput;
  AddOperationExampleInput: SchemaTypes.AddOperationExampleInput;
  AddOperationInput: SchemaTypes.AddOperationInput;
  AddStateExampleInput: SchemaTypes.AddStateExampleInput;
  Author: SchemaTypes.Author;
  Boolean: SchemaTypes.Scalars['Boolean'];
  CodeExample: SchemaTypes.CodeExample;
  DeleteChangeLogItemInput: SchemaTypes.DeleteChangeLogItemInput;
  DeleteModuleInput: SchemaTypes.DeleteModuleInput;
  DeleteOperationErrorInput: SchemaTypes.DeleteOperationErrorInput;
  DeleteOperationExampleInput: SchemaTypes.DeleteOperationExampleInput;
  DeleteOperationInput: SchemaTypes.DeleteOperationInput;
  DeleteStateExampleInput: SchemaTypes.DeleteStateExampleInput;
  DocumentModelInput: ResolversUnionParentTypes['DocumentModelInput'];
  DocumentModelState: SchemaTypes.DocumentModelState;
  DocumentSpecification: SchemaTypes.DocumentSpecification;
  ID: SchemaTypes.Scalars['ID'];
  Int: SchemaTypes.Scalars['Int'];
  Module: SchemaTypes.Module;
  MoveOperationInput: SchemaTypes.MoveOperationInput;
  Mutation: {};
  Operation: SchemaTypes.Operation;
  OperationError: SchemaTypes.OperationError;
  ReorderChangeLogItemsInput: SchemaTypes.ReorderChangeLogItemsInput;
  ReorderModuleOperationsInput: SchemaTypes.ReorderModuleOperationsInput;
  ReorderModulesInput: SchemaTypes.ReorderModulesInput;
  ReorderOperationErrorsInput: SchemaTypes.ReorderOperationErrorsInput;
  ReorderOperationExamplesInput: SchemaTypes.ReorderOperationExamplesInput;
  ReorderStateExamplesInput: SchemaTypes.ReorderStateExamplesInput;
  SetAuthorNameInput: SchemaTypes.SetAuthorNameInput;
  SetAuthorWebsiteInput: SchemaTypes.SetAuthorWebsiteInput;
  SetInitialStateInput: SchemaTypes.SetInitialStateInput;
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
  UpdateChangeLogItemInput: SchemaTypes.UpdateChangeLogItemInput;
  UpdateOperationExampleInput: SchemaTypes.UpdateOperationExampleInput;
  UpdateStateExampleInput: SchemaTypes.UpdateStateExampleInput;
}>;

export type AddChangeLogItemInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddChangeLogItemInput'] = ResolversParentTypes['AddChangeLogItemInput']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  insertBefore?: Resolver<SchemaTypes.Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type DeleteChangeLogItemInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteChangeLogItemInput'] = ResolversParentTypes['DeleteChangeLogItemInput']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DocumentModelInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModelInput'] = ResolversParentTypes['DocumentModelInput']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddChangeLogItemInput' | 'AddModuleInput' | 'AddOperationErrorInput' | 'AddOperationExampleInput' | 'AddOperationInput' | 'AddStateExampleInput' | 'DeleteChangeLogItemInput' | 'DeleteModuleInput' | 'DeleteOperationErrorInput' | 'DeleteOperationExampleInput' | 'DeleteOperationInput' | 'DeleteStateExampleInput' | 'MoveOperationInput' | 'ReorderChangeLogItemsInput' | 'ReorderModuleOperationsInput' | 'ReorderModulesInput' | 'ReorderOperationErrorsInput' | 'ReorderOperationExamplesInput' | 'ReorderStateExamplesInput' | 'SetAuthorNameInput' | 'SetAuthorWebsiteInput' | 'SetInitialStateInput' | 'SetModelDescriptionInput' | 'SetModelExtensionInput' | 'SetModelIdInput' | 'SetModelNameInput' | 'SetModuleDescriptionInput' | 'SetModuleNameInput' | 'SetOperationDescriptionInput' | 'SetOperationErrorCodeInput' | 'SetOperationErrorDescriptionInput' | 'SetOperationErrorNameInput' | 'SetOperationErrorTemplateInput' | 'SetOperationNameInput' | 'SetOperationReducerInput' | 'SetOperationSchemaInput' | 'SetOperationTemplateInput' | 'SetStateSchemaInput' | 'UpdateChangeLogItemInput' | 'UpdateOperationExampleInput' | 'UpdateStateExampleInput', ParentType, ContextType>;
}>;

export type DocumentModelStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModelState'] = ResolversParentTypes['DocumentModelState']> = ResolversObject<{
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specifications?: Resolver<Array<ResolversTypes['DocumentSpecification']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DocumentSpecificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentSpecification'] = ResolversParentTypes['DocumentSpecification']> = ResolversObject<{
  changeLog?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<Array<ResolversTypes['Module']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  addChangeLogItemInput?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, Partial<SchemaTypes.MutationAddChangeLogItemInputArgs>>;
  addModule?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationAddModuleArgs, 'input'>>;
  addOperation?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationArgs, 'input'>>;
  addOperationError?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationErrorArgs, 'input'>>;
  addOperationExample?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationExampleArgs, 'input'>>;
  addStateExample?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationAddStateExampleArgs, 'input'>>;
  deleteChangeLogItemInput?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, Partial<SchemaTypes.MutationDeleteChangeLogItemInputArgs>>;
  deleteModule?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteModuleArgs, 'input'>>;
  deleteOperation?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationArgs, 'input'>>;
  deleteOperationError?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationErrorArgs, 'input'>>;
  deleteOperationExample?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationExampleArgs, 'input'>>;
  deleteStateExample?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteStateExampleArgs, 'input'>>;
  moveOperation?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationMoveOperationArgs, 'input'>>;
  releaseNewVersion?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType>;
  reorderChangeLogItemsInput?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, Partial<SchemaTypes.MutationReorderChangeLogItemsInputArgs>>;
  reorderModuleOperations?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderModuleOperationsArgs, 'input'>>;
  reorderModules?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderModulesArgs, 'input'>>;
  reorderOperationErrors?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderOperationErrorsArgs, 'input'>>;
  reorderOperationExamples?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderOperationExamplesArgs, 'input'>>;
  reorderStateExamples?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderStateExamplesArgs, 'input'>>;
  setAuthorName?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetAuthorNameArgs, 'input'>>;
  setAuthorWebsite?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetAuthorWebsiteArgs, 'input'>>;
  setInitialState?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetInitialStateArgs, 'input'>>;
  setModelDescription?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelDescriptionArgs, 'input'>>;
  setModelExtension?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelExtensionArgs, 'input'>>;
  setModelId?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelIdArgs, 'input'>>;
  setModelName?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelNameArgs, 'input'>>;
  setModuleDescription?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModuleDescriptionArgs, 'input'>>;
  setModuleName?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModuleNameArgs, 'input'>>;
  setOperationDescription?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationDescriptionArgs, 'input'>>;
  setOperationErrorCode?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorCodeArgs, 'input'>>;
  setOperationErrorDescription?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorDescriptionArgs, 'input'>>;
  setOperationErrorName?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorNameArgs, 'input'>>;
  setOperationErrorTemplate?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorTemplateArgs, 'input'>>;
  setOperationName?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationNameArgs, 'input'>>;
  setOperationReducer?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationReducerArgs, 'input'>>;
  setOperationSchema?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationSchemaArgs, 'input'>>;
  setOperationTemplate?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationTemplateArgs, 'input'>>;
  setStateSchema?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationSetStateSchemaArgs, 'input'>>;
  updateChangeLogItemInput?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, Partial<SchemaTypes.MutationUpdateChangeLogItemInputArgs>>;
  updateOperationExample?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateOperationExampleArgs, 'input'>>;
  updateStateExample?: Resolver<ResolversTypes['DocumentModelState'], ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateStateExampleArgs, 'input'>>;
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

export type ReorderChangeLogItemsInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReorderChangeLogItemsInput'] = ResolversParentTypes['ReorderChangeLogItemsInput']> = ResolversObject<{
  order?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = ResolversObject<{
  examples?: Resolver<Array<ResolversTypes['CodeExample']>, ParentType, ContextType>;
  initialValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schema?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateChangeLogItemInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateChangeLogItemInput'] = ResolversParentTypes['UpdateChangeLogItemInput']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  newContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AddChangeLogItemInput?: AddChangeLogItemInputResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  CodeExample?: CodeExampleResolvers<ContextType>;
  DeleteChangeLogItemInput?: DeleteChangeLogItemInputResolvers<ContextType>;
  DocumentModelInput?: DocumentModelInputResolvers<ContextType>;
  DocumentModelState?: DocumentModelStateResolvers<ContextType>;
  DocumentSpecification?: DocumentSpecificationResolvers<ContextType>;
  Module?: ModuleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  OperationError?: OperationErrorResolvers<ContextType>;
  ReorderChangeLogItemsInput?: ReorderChangeLogItemsInputResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  UpdateChangeLogItemInput?: UpdateChangeLogItemInputResolvers<ContextType>;
}>;

