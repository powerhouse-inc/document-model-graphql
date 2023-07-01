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
  DocumentModelAction: ( SchemaTypes.AddModuleAction ) | ( SchemaTypes.AddOperationAction ) | ( SchemaTypes.AddOperationErrorAction ) | ( SchemaTypes.AddOperationExampleAction ) | ( SchemaTypes.AddStateExampleAction ) | ( SchemaTypes.DeleteModuleAction ) | ( SchemaTypes.DeleteOperationAction ) | ( SchemaTypes.DeleteOperationErrorAction ) | ( SchemaTypes.DeleteOperationExampleAction ) | ( SchemaTypes.DeleteStateExampleAction ) | ( SchemaTypes.MoveOperationAction ) | ( SchemaTypes.ReorderModuleOperationsAction ) | ( SchemaTypes.ReorderModulesAction ) | ( SchemaTypes.ReorderOperationErrorsAction ) | ( SchemaTypes.ReorderOperationExamplesAction ) | ( SchemaTypes.ReorderStateExamplesAction ) | ( SchemaTypes.SetAuthorNameAction ) | ( SchemaTypes.SetAuthorWebsiteAction ) | ( SchemaTypes.SetModelDescriptionAction ) | ( SchemaTypes.SetModelExtensionAction ) | ( SchemaTypes.SetModelIdAction ) | ( SchemaTypes.SetModelNameAction ) | ( SchemaTypes.SetModuleDescriptionAction ) | ( SchemaTypes.SetModuleNameAction ) | ( SchemaTypes.SetOperationDescriptionAction ) | ( SchemaTypes.SetOperationErrorCodeAction ) | ( SchemaTypes.SetOperationErrorDescriptionAction ) | ( SchemaTypes.SetOperationErrorNameAction ) | ( SchemaTypes.SetOperationErrorTemplateAction ) | ( SchemaTypes.SetOperationNameAction ) | ( SchemaTypes.SetOperationReducerAction ) | ( SchemaTypes.SetOperationSchemaAction ) | ( SchemaTypes.SetOperationTemplateAction ) | ( SchemaTypes.SetStateSchemaAction ) | ( SchemaTypes.UpdateOperationExampleAction ) | ( SchemaTypes.UpdateStateExampleAction );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  DocumentModelAction: ( SchemaTypes.AddModuleAction ) | ( SchemaTypes.AddOperationAction ) | ( SchemaTypes.AddOperationErrorAction ) | ( SchemaTypes.AddOperationExampleAction ) | ( SchemaTypes.AddStateExampleAction ) | ( SchemaTypes.DeleteModuleAction ) | ( SchemaTypes.DeleteOperationAction ) | ( SchemaTypes.DeleteOperationErrorAction ) | ( SchemaTypes.DeleteOperationExampleAction ) | ( SchemaTypes.DeleteStateExampleAction ) | ( SchemaTypes.MoveOperationAction ) | ( SchemaTypes.ReorderModuleOperationsAction ) | ( SchemaTypes.ReorderModulesAction ) | ( SchemaTypes.ReorderOperationErrorsAction ) | ( SchemaTypes.ReorderOperationExamplesAction ) | ( SchemaTypes.ReorderStateExamplesAction ) | ( SchemaTypes.SetAuthorNameAction ) | ( SchemaTypes.SetAuthorWebsiteAction ) | ( SchemaTypes.SetModelDescriptionAction ) | ( SchemaTypes.SetModelExtensionAction ) | ( SchemaTypes.SetModelIdAction ) | ( SchemaTypes.SetModelNameAction ) | ( SchemaTypes.SetModuleDescriptionAction ) | ( SchemaTypes.SetModuleNameAction ) | ( SchemaTypes.SetOperationDescriptionAction ) | ( SchemaTypes.SetOperationErrorCodeAction ) | ( SchemaTypes.SetOperationErrorDescriptionAction ) | ( SchemaTypes.SetOperationErrorNameAction ) | ( SchemaTypes.SetOperationErrorTemplateAction ) | ( SchemaTypes.SetOperationNameAction ) | ( SchemaTypes.SetOperationReducerAction ) | ( SchemaTypes.SetOperationSchemaAction ) | ( SchemaTypes.SetOperationTemplateAction ) | ( SchemaTypes.SetStateSchemaAction ) | ( SchemaTypes.UpdateOperationExampleAction ) | ( SchemaTypes.UpdateStateExampleAction );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddModuleAction: SchemaTypes.AddModuleAction;
  AddOperationAction: SchemaTypes.AddOperationAction;
  AddOperationErrorAction: SchemaTypes.AddOperationErrorAction;
  AddOperationExampleAction: SchemaTypes.AddOperationExampleAction;
  AddStateExampleAction: SchemaTypes.AddStateExampleAction;
  Author: ResolverTypeWrapper<SchemaTypes.Author>;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  CodeExample: ResolverTypeWrapper<SchemaTypes.CodeExample>;
  DateTime: ResolverTypeWrapper<SchemaTypes.Scalars['DateTime']>;
  DeleteModuleAction: SchemaTypes.DeleteModuleAction;
  DeleteOperationAction: SchemaTypes.DeleteOperationAction;
  DeleteOperationErrorAction: SchemaTypes.DeleteOperationErrorAction;
  DeleteOperationExampleAction: SchemaTypes.DeleteOperationExampleAction;
  DeleteStateExampleAction: SchemaTypes.DeleteStateExampleAction;
  DocumentModel: ResolverTypeWrapper<SchemaTypes.DocumentModel>;
  DocumentModelAction: ResolverTypeWrapper<ResolversUnionTypes['DocumentModelAction']>;
  DocumentModelData: ResolverTypeWrapper<SchemaTypes.DocumentModelData>;
  ID: ResolverTypeWrapper<SchemaTypes.Scalars['ID']>;
  IDocument: ResolversTypes['DocumentModel'];
  IOperation: ResolversTypes['Operation'] | ResolversTypes['SetNameOperation'];
  Int: ResolverTypeWrapper<SchemaTypes.Scalars['Int']>;
  LOAD_STATE: SchemaTypes.Load_State;
  LoadStateAction: SchemaTypes.LoadStateAction;
  LoadStateActionInput: SchemaTypes.LoadStateActionInput;
  LoadStateActionStateInput: SchemaTypes.LoadStateActionStateInput;
  Module: ResolverTypeWrapper<SchemaTypes.Module>;
  MoveOperationAction: SchemaTypes.MoveOperationAction;
  Mutation: ResolverTypeWrapper<{}>;
  Operation: ResolverTypeWrapper<SchemaTypes.Operation>;
  OperationError: ResolverTypeWrapper<SchemaTypes.OperationError>;
  PRUNE: SchemaTypes.Prune;
  PruneAction: SchemaTypes.PruneAction;
  PruneActionInput: SchemaTypes.PruneActionInput;
  Query: ResolverTypeWrapper<{}>;
  REDO: SchemaTypes.Redo;
  RedoAction: SchemaTypes.RedoAction;
  ReorderModuleOperationsAction: SchemaTypes.ReorderModuleOperationsAction;
  ReorderModulesAction: SchemaTypes.ReorderModulesAction;
  ReorderOperationErrorsAction: SchemaTypes.ReorderOperationErrorsAction;
  ReorderOperationExamplesAction: SchemaTypes.ReorderOperationExamplesAction;
  ReorderStateExamplesAction: SchemaTypes.ReorderStateExamplesAction;
  SET_NAME: SchemaTypes.Set_Name;
  SetAuthorNameAction: SchemaTypes.SetAuthorNameAction;
  SetAuthorWebsiteAction: SchemaTypes.SetAuthorWebsiteAction;
  SetModelDescriptionAction: SchemaTypes.SetModelDescriptionAction;
  SetModelExtensionAction: SchemaTypes.SetModelExtensionAction;
  SetModelIdAction: SchemaTypes.SetModelIdAction;
  SetModelNameAction: SchemaTypes.SetModelNameAction;
  SetModuleDescriptionAction: SchemaTypes.SetModuleDescriptionAction;
  SetModuleNameAction: SchemaTypes.SetModuleNameAction;
  SetNameAction: SchemaTypes.SetNameAction;
  SetNameOperation: ResolverTypeWrapper<SchemaTypes.SetNameOperation>;
  SetOperationDescriptionAction: SchemaTypes.SetOperationDescriptionAction;
  SetOperationErrorCodeAction: SchemaTypes.SetOperationErrorCodeAction;
  SetOperationErrorDescriptionAction: SchemaTypes.SetOperationErrorDescriptionAction;
  SetOperationErrorNameAction: SchemaTypes.SetOperationErrorNameAction;
  SetOperationErrorTemplateAction: SchemaTypes.SetOperationErrorTemplateAction;
  SetOperationNameAction: SchemaTypes.SetOperationNameAction;
  SetOperationReducerAction: SchemaTypes.SetOperationReducerAction;
  SetOperationSchemaAction: SchemaTypes.SetOperationSchemaAction;
  SetOperationTemplateAction: SchemaTypes.SetOperationTemplateAction;
  SetStateSchemaAction: SchemaTypes.SetStateSchemaAction;
  State: ResolverTypeWrapper<SchemaTypes.State>;
  String: ResolverTypeWrapper<SchemaTypes.Scalars['String']>;
  UNDO: SchemaTypes.Undo;
  UndoAction: SchemaTypes.UndoAction;
  Unknown: ResolverTypeWrapper<SchemaTypes.Scalars['Unknown']>;
  UpdateOperationExampleAction: SchemaTypes.UpdateOperationExampleAction;
  UpdateStateExampleAction: SchemaTypes.UpdateStateExampleAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddModuleAction: SchemaTypes.AddModuleAction;
  AddOperationAction: SchemaTypes.AddOperationAction;
  AddOperationErrorAction: SchemaTypes.AddOperationErrorAction;
  AddOperationExampleAction: SchemaTypes.AddOperationExampleAction;
  AddStateExampleAction: SchemaTypes.AddStateExampleAction;
  Author: SchemaTypes.Author;
  Boolean: SchemaTypes.Scalars['Boolean'];
  CodeExample: SchemaTypes.CodeExample;
  DateTime: SchemaTypes.Scalars['DateTime'];
  DeleteModuleAction: SchemaTypes.DeleteModuleAction;
  DeleteOperationAction: SchemaTypes.DeleteOperationAction;
  DeleteOperationErrorAction: SchemaTypes.DeleteOperationErrorAction;
  DeleteOperationExampleAction: SchemaTypes.DeleteOperationExampleAction;
  DeleteStateExampleAction: SchemaTypes.DeleteStateExampleAction;
  DocumentModel: SchemaTypes.DocumentModel;
  DocumentModelAction: ResolversUnionParentTypes['DocumentModelAction'];
  DocumentModelData: SchemaTypes.DocumentModelData;
  ID: SchemaTypes.Scalars['ID'];
  IDocument: ResolversParentTypes['DocumentModel'];
  IOperation: ResolversParentTypes['Operation'] | ResolversParentTypes['SetNameOperation'];
  Int: SchemaTypes.Scalars['Int'];
  LoadStateAction: SchemaTypes.LoadStateAction;
  LoadStateActionInput: SchemaTypes.LoadStateActionInput;
  LoadStateActionStateInput: SchemaTypes.LoadStateActionStateInput;
  Module: SchemaTypes.Module;
  MoveOperationAction: SchemaTypes.MoveOperationAction;
  Mutation: {};
  Operation: SchemaTypes.Operation;
  OperationError: SchemaTypes.OperationError;
  PruneAction: SchemaTypes.PruneAction;
  PruneActionInput: SchemaTypes.PruneActionInput;
  Query: {};
  RedoAction: SchemaTypes.RedoAction;
  ReorderModuleOperationsAction: SchemaTypes.ReorderModuleOperationsAction;
  ReorderModulesAction: SchemaTypes.ReorderModulesAction;
  ReorderOperationErrorsAction: SchemaTypes.ReorderOperationErrorsAction;
  ReorderOperationExamplesAction: SchemaTypes.ReorderOperationExamplesAction;
  ReorderStateExamplesAction: SchemaTypes.ReorderStateExamplesAction;
  SetAuthorNameAction: SchemaTypes.SetAuthorNameAction;
  SetAuthorWebsiteAction: SchemaTypes.SetAuthorWebsiteAction;
  SetModelDescriptionAction: SchemaTypes.SetModelDescriptionAction;
  SetModelExtensionAction: SchemaTypes.SetModelExtensionAction;
  SetModelIdAction: SchemaTypes.SetModelIdAction;
  SetModelNameAction: SchemaTypes.SetModelNameAction;
  SetModuleDescriptionAction: SchemaTypes.SetModuleDescriptionAction;
  SetModuleNameAction: SchemaTypes.SetModuleNameAction;
  SetNameAction: SchemaTypes.SetNameAction;
  SetNameOperation: SchemaTypes.SetNameOperation;
  SetOperationDescriptionAction: SchemaTypes.SetOperationDescriptionAction;
  SetOperationErrorCodeAction: SchemaTypes.SetOperationErrorCodeAction;
  SetOperationErrorDescriptionAction: SchemaTypes.SetOperationErrorDescriptionAction;
  SetOperationErrorNameAction: SchemaTypes.SetOperationErrorNameAction;
  SetOperationErrorTemplateAction: SchemaTypes.SetOperationErrorTemplateAction;
  SetOperationNameAction: SchemaTypes.SetOperationNameAction;
  SetOperationReducerAction: SchemaTypes.SetOperationReducerAction;
  SetOperationSchemaAction: SchemaTypes.SetOperationSchemaAction;
  SetOperationTemplateAction: SchemaTypes.SetOperationTemplateAction;
  SetStateSchemaAction: SchemaTypes.SetStateSchemaAction;
  State: SchemaTypes.State;
  String: SchemaTypes.Scalars['String'];
  UndoAction: SchemaTypes.UndoAction;
  Unknown: SchemaTypes.Scalars['Unknown'];
  UpdateOperationExampleAction: SchemaTypes.UpdateOperationExampleAction;
  UpdateStateExampleAction: SchemaTypes.UpdateStateExampleAction;
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

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModel'] = ResolversParentTypes['DocumentModel']> = ResolversObject<{
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['DocumentModelData'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['IOperation']>, ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DocumentModelActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModelAction'] = ResolversParentTypes['DocumentModelAction']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddModuleAction' | 'AddOperationAction' | 'AddOperationErrorAction' | 'AddOperationExampleAction' | 'AddStateExampleAction' | 'DeleteModuleAction' | 'DeleteOperationAction' | 'DeleteOperationErrorAction' | 'DeleteOperationExampleAction' | 'DeleteStateExampleAction' | 'MoveOperationAction' | 'ReorderModuleOperationsAction' | 'ReorderModulesAction' | 'ReorderOperationErrorsAction' | 'ReorderOperationExamplesAction' | 'ReorderStateExamplesAction' | 'SetAuthorNameAction' | 'SetAuthorWebsiteAction' | 'SetModelDescriptionAction' | 'SetModelExtensionAction' | 'SetModelIdAction' | 'SetModelNameAction' | 'SetModuleDescriptionAction' | 'SetModuleNameAction' | 'SetOperationDescriptionAction' | 'SetOperationErrorCodeAction' | 'SetOperationErrorDescriptionAction' | 'SetOperationErrorNameAction' | 'SetOperationErrorTemplateAction' | 'SetOperationNameAction' | 'SetOperationReducerAction' | 'SetOperationSchemaAction' | 'SetOperationTemplateAction' | 'SetStateSchemaAction' | 'UpdateOperationExampleAction' | 'UpdateStateExampleAction', ParentType, ContextType>;
}>;

export type DocumentModelDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentModelData'] = ResolversParentTypes['DocumentModelData']> = ResolversObject<{
  author?: Resolver<SchemaTypes.Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extension?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<Array<ResolversTypes['Module']>, ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<SchemaTypes.Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDocument'] = ResolversParentTypes['IDocument']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DocumentModel', ParentType, ContextType>;
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

export type ModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module']> = ResolversObject<{
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['Operation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addModule?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddModuleArgs, 'input'>>;
  addOperation?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationArgs, 'input'>>;
  addOperationError?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationErrorArgs, 'input'>>;
  addOperationExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddOperationExampleArgs, 'input'>>;
  addStateExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddStateExampleArgs, 'input'>>;
  deleteModule?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteModuleArgs, 'input'>>;
  deleteOperation?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationArgs, 'input'>>;
  deleteOperationError?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationErrorArgs, 'input'>>;
  deleteOperationExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteOperationExampleArgs, 'input'>>;
  deleteStateExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteStateExampleArgs, 'input'>>;
  loadState?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationLoadStateArgs, 'input'>>;
  moveOperation?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationMoveOperationArgs, 'input'>>;
  prune?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationPruneArgs, 'input'>>;
  redo?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationRedoArgs, 'input'>>;
  reorderModuleOperations?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderModuleOperationsArgs, 'input'>>;
  reorderModules?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderModulesArgs, 'input'>>;
  reorderOperationErrors?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderOperationErrorsArgs, 'input'>>;
  reorderOperationExamples?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderOperationExamplesArgs, 'input'>>;
  reorderStateExamples?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderStateExamplesArgs, 'input'>>;
  setAuthorName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetAuthorNameArgs, 'input'>>;
  setAuthorWebsite?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetAuthorWebsiteArgs, 'input'>>;
  setModelDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelDescriptionArgs, 'input'>>;
  setModelExtension?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelExtensionArgs, 'input'>>;
  setModelId?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelIdArgs, 'input'>>;
  setModelName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModelNameArgs, 'input'>>;
  setModuleDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModuleDescriptionArgs, 'input'>>;
  setModuleName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetModuleNameArgs, 'input'>>;
  setName?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetNameArgs, 'input'>>;
  setOperationDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationDescriptionArgs, 'input'>>;
  setOperationErrorCode?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorCodeArgs, 'input'>>;
  setOperationErrorDescription?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorDescriptionArgs, 'input'>>;
  setOperationErrorName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorNameArgs, 'input'>>;
  setOperationErrorTemplate?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationErrorTemplateArgs, 'input'>>;
  setOperationName?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationNameArgs, 'input'>>;
  setOperationReducer?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationReducerArgs, 'input'>>;
  setOperationSchema?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationSchemaArgs, 'input'>>;
  setOperationTemplate?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOperationTemplateArgs, 'input'>>;
  setStateSchema?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetStateSchemaArgs, 'input'>>;
  undo?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUndoArgs, 'input'>>;
  updateOperationExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateOperationExampleArgs, 'input'>>;
  updateStateExample?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModelData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateStateExampleArgs, 'input'>>;
}>;

export type OperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operation'] = ResolversParentTypes['Operation']> = ResolversObject<{
  description?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['OperationError']>, ParentType, ContextType>;
  examples?: Resolver<Array<ResolversTypes['CodeExample']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reducer?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schema?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  document?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType>;
  documentModel?: Resolver<SchemaTypes.Maybe<ResolversTypes['DocumentModel']>, ParentType, ContextType>;
}>;

export type SetNameOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetNameOperation'] = ResolversParentTypes['SetNameOperation']> = ResolversObject<{
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  input?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = ResolversObject<{
  examples?: Resolver<Array<ResolversTypes['CodeExample']>, ParentType, ContextType>;
  schema?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UnknownScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Unknown'], any> {
  name: 'Unknown';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Author?: AuthorResolvers<ContextType>;
  CodeExample?: CodeExampleResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DocumentModel?: DocumentModelResolvers<ContextType>;
  DocumentModelAction?: DocumentModelActionResolvers<ContextType>;
  DocumentModelData?: DocumentModelDataResolvers<ContextType>;
  IDocument?: IDocumentResolvers<ContextType>;
  IOperation?: IOperationResolvers<ContextType>;
  Module?: ModuleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  OperationError?: OperationErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SetNameOperation?: SetNameOperationResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  Unknown?: GraphQLScalarType;
}>;

