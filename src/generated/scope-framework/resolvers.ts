import * as SchemaTypes from './types';
import { GraphQLResolveInfo } from 'graphql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  ElementComponents: ( SchemaTypes.ArticleComponent ) | ( SchemaTypes.CoreComponent ) | ( SchemaTypes.ScopeComponent ) | ( SchemaTypes.SectionComponent ) | ( SchemaTypes.TypeSpecificationComponent );
  ScopeFrameworkInput: ( Omit<SchemaTypes.AddElementInput, 'components'> & { components: SchemaTypes.Maybe<ResolversTypes['ElementComponents']> } ) | ( SchemaTypes.MoveElementInput ) | ( SchemaTypes.RemoveElementInput ) | ( SchemaTypes.ReorderElementsInput ) | ( SchemaTypes.SetRootPathInput ) | ( Omit<SchemaTypes.UpdateElementComponentsInput, 'components'> & { components: SchemaTypes.Maybe<ResolversTypes['ElementComponents']> } ) | ( SchemaTypes.UpdateElementNameInput ) | ( SchemaTypes.UpdateElementTypeInput );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  ElementComponents: ( SchemaTypes.ArticleComponent ) | ( SchemaTypes.CoreComponent ) | ( SchemaTypes.ScopeComponent ) | ( SchemaTypes.SectionComponent ) | ( SchemaTypes.TypeSpecificationComponent );
  ScopeFrameworkInput: ( Omit<SchemaTypes.AddElementInput, 'components'> & { components: SchemaTypes.Maybe<ResolversParentTypes['ElementComponents']> } ) | ( SchemaTypes.MoveElementInput ) | ( SchemaTypes.RemoveElementInput ) | ( SchemaTypes.ReorderElementsInput ) | ( SchemaTypes.SetRootPathInput ) | ( Omit<SchemaTypes.UpdateElementComponentsInput, 'components'> & { components: SchemaTypes.Maybe<ResolversParentTypes['ElementComponents']> } ) | ( SchemaTypes.UpdateElementNameInput ) | ( SchemaTypes.UpdateElementTypeInput );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddElementInput: ResolverTypeWrapper<Omit<SchemaTypes.AddElementInput, 'components'> & { components: SchemaTypes.Maybe<ResolversTypes['ElementComponents']> }>;
  ArticleComponent: ResolverTypeWrapper<SchemaTypes.ArticleComponent>;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  CoreComponent: ResolverTypeWrapper<SchemaTypes.CoreComponent>;
  ElementComponents: ResolverTypeWrapper<ResolversUnionTypes['ElementComponents']>;
  ID: ResolverTypeWrapper<SchemaTypes.Scalars['ID']>;
  Int: ResolverTypeWrapper<SchemaTypes.Scalars['Int']>;
  MoveElementInput: ResolverTypeWrapper<SchemaTypes.MoveElementInput>;
  Mutation: ResolverTypeWrapper<{}>;
  RemoveElementInput: ResolverTypeWrapper<SchemaTypes.RemoveElementInput>;
  ReorderElementsInput: ResolverTypeWrapper<SchemaTypes.ReorderElementsInput>;
  ScopeComponent: ResolverTypeWrapper<SchemaTypes.ScopeComponent>;
  ScopeFrameworkElement: ResolverTypeWrapper<Omit<SchemaTypes.ScopeFrameworkElement, 'components'> & { components: SchemaTypes.Maybe<ResolversTypes['ElementComponents']> }>;
  ScopeFrameworkElementType: SchemaTypes.ScopeFrameworkElementType;
  ScopeFrameworkInput: ResolverTypeWrapper<ResolversUnionTypes['ScopeFrameworkInput']>;
  ScopeFrameworkState: ResolverTypeWrapper<SchemaTypes.ScopeFrameworkState>;
  SectionComponent: ResolverTypeWrapper<SchemaTypes.SectionComponent>;
  SetRootPathInput: ResolverTypeWrapper<SchemaTypes.SetRootPathInput>;
  String: ResolverTypeWrapper<SchemaTypes.Scalars['String']>;
  TypeSpecificationComponent: ResolverTypeWrapper<SchemaTypes.TypeSpecificationComponent>;
  TypeSpecificationComponentCategory: SchemaTypes.TypeSpecificationComponentCategory;
  UpdateElementComponentsInput: ResolverTypeWrapper<Omit<SchemaTypes.UpdateElementComponentsInput, 'components'> & { components: SchemaTypes.Maybe<ResolversTypes['ElementComponents']> }>;
  UpdateElementNameInput: ResolverTypeWrapper<SchemaTypes.UpdateElementNameInput>;
  UpdateElementTypeInput: ResolverTypeWrapper<SchemaTypes.UpdateElementTypeInput>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddElementInput: Omit<SchemaTypes.AddElementInput, 'components'> & { components: SchemaTypes.Maybe<ResolversParentTypes['ElementComponents']> };
  ArticleComponent: SchemaTypes.ArticleComponent;
  Boolean: SchemaTypes.Scalars['Boolean'];
  CoreComponent: SchemaTypes.CoreComponent;
  ElementComponents: ResolversUnionParentTypes['ElementComponents'];
  ID: SchemaTypes.Scalars['ID'];
  Int: SchemaTypes.Scalars['Int'];
  MoveElementInput: SchemaTypes.MoveElementInput;
  Mutation: {};
  RemoveElementInput: SchemaTypes.RemoveElementInput;
  ReorderElementsInput: SchemaTypes.ReorderElementsInput;
  ScopeComponent: SchemaTypes.ScopeComponent;
  ScopeFrameworkElement: Omit<SchemaTypes.ScopeFrameworkElement, 'components'> & { components: SchemaTypes.Maybe<ResolversParentTypes['ElementComponents']> };
  ScopeFrameworkInput: ResolversUnionParentTypes['ScopeFrameworkInput'];
  ScopeFrameworkState: SchemaTypes.ScopeFrameworkState;
  SectionComponent: SchemaTypes.SectionComponent;
  SetRootPathInput: SchemaTypes.SetRootPathInput;
  String: SchemaTypes.Scalars['String'];
  TypeSpecificationComponent: SchemaTypes.TypeSpecificationComponent;
  UpdateElementComponentsInput: Omit<SchemaTypes.UpdateElementComponentsInput, 'components'> & { components: SchemaTypes.Maybe<ResolversParentTypes['ElementComponents']> };
  UpdateElementNameInput: SchemaTypes.UpdateElementNameInput;
  UpdateElementTypeInput: SchemaTypes.UpdateElementTypeInput;
}>;

export type AddElementInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddElementInput'] = ResolversParentTypes['AddElementInput']> = ResolversObject<{
  components?: Resolver<SchemaTypes.Maybe<ResolversTypes['ElementComponents']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ScopeFrameworkElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleComponent'] = ResolversParentTypes['ArticleComponent']> = ResolversObject<{
  content?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoreComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoreComponent'] = ResolversParentTypes['CoreComponent']> = ResolversObject<{
  content?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElementComponentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementComponents'] = ResolversParentTypes['ElementComponents']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ArticleComponent' | 'CoreComponent' | 'ScopeComponent' | 'SectionComponent' | 'TypeSpecificationComponent', ParentType, ContextType>;
}>;

export type MoveElementInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveElementInput'] = ResolversParentTypes['MoveElementInput']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  newParentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addElement?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddElementArgs, 'input'>>;
  moveElement?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationMoveElementArgs, 'input'>>;
  removeElement?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationRemoveElementArgs, 'input'>>;
  reorderElements?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationReorderElementsArgs, 'input'>>;
  setRootPath?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetRootPathArgs, 'input'>>;
  updateElementComponents?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateElementComponentsArgs, 'input'>>;
  updateElementName?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateElementNameArgs, 'input'>>;
  updateElementType?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkState']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateElementTypeArgs, 'input'>>;
}>;

export type RemoveElementInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveElementInput'] = ResolversParentTypes['RemoveElementInput']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReorderElementsInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReorderElementsInput'] = ResolversParentTypes['ReorderElementsInput']> = ResolversObject<{
  order?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  parentElementId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScopeComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScopeComponent'] = ResolversParentTypes['ScopeComponent']> = ResolversObject<{
  content?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScopeFrameworkElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScopeFrameworkElement'] = ResolversParentTypes['ScopeFrameworkElement']> = ResolversObject<{
  components?: Resolver<SchemaTypes.Maybe<ResolversTypes['ElementComponents']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<SchemaTypes.Maybe<ResolversTypes['ScopeFrameworkElementType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScopeFrameworkInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScopeFrameworkInput'] = ResolversParentTypes['ScopeFrameworkInput']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddElementInput' | 'MoveElementInput' | 'RemoveElementInput' | 'ReorderElementsInput' | 'SetRootPathInput' | 'UpdateElementComponentsInput' | 'UpdateElementNameInput' | 'UpdateElementTypeInput', ParentType, ContextType>;
}>;

export type ScopeFrameworkStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScopeFrameworkState'] = ResolversParentTypes['ScopeFrameworkState']> = ResolversObject<{
  elements?: Resolver<Array<ResolversTypes['ScopeFrameworkElement']>, ParentType, ContextType>;
  rootPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SectionComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SectionComponent'] = ResolversParentTypes['SectionComponent']> = ResolversObject<{
  content?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetRootPathInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetRootPathInput'] = ResolversParentTypes['SetRootPathInput']> = ResolversObject<{
  newRootPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypeSpecificationComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypeSpecificationComponent'] = ResolversParentTypes['TypeSpecificationComponent']> = ResolversObject<{
  additionalLogic?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<SchemaTypes.Maybe<ResolversTypes['TypeSpecificationComponentCategory']>, ParentType, ContextType>;
  documentIdentifierRules?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overview?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeAuthority?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateElementComponentsInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateElementComponentsInput'] = ResolversParentTypes['UpdateElementComponentsInput']> = ResolversObject<{
  components?: Resolver<SchemaTypes.Maybe<ResolversTypes['ElementComponents']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateElementNameInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateElementNameInput'] = ResolversParentTypes['UpdateElementNameInput']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateElementTypeInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateElementTypeInput'] = ResolversParentTypes['UpdateElementTypeInput']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ScopeFrameworkElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AddElementInput?: AddElementInputResolvers<ContextType>;
  ArticleComponent?: ArticleComponentResolvers<ContextType>;
  CoreComponent?: CoreComponentResolvers<ContextType>;
  ElementComponents?: ElementComponentsResolvers<ContextType>;
  MoveElementInput?: MoveElementInputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  RemoveElementInput?: RemoveElementInputResolvers<ContextType>;
  ReorderElementsInput?: ReorderElementsInputResolvers<ContextType>;
  ScopeComponent?: ScopeComponentResolvers<ContextType>;
  ScopeFrameworkElement?: ScopeFrameworkElementResolvers<ContextType>;
  ScopeFrameworkInput?: ScopeFrameworkInputResolvers<ContextType>;
  ScopeFrameworkState?: ScopeFrameworkStateResolvers<ContextType>;
  SectionComponent?: SectionComponentResolvers<ContextType>;
  SetRootPathInput?: SetRootPathInputResolvers<ContextType>;
  TypeSpecificationComponent?: TypeSpecificationComponentResolvers<ContextType>;
  UpdateElementComponentsInput?: UpdateElementComponentsInputResolvers<ContextType>;
  UpdateElementNameInput?: UpdateElementNameInputResolvers<ContextType>;
  UpdateElementTypeInput?: UpdateElementTypeInputResolvers<ContextType>;
}>;

