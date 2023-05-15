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
  AuditReportUnion: ( SchemaTypes.AuditReport ) | ( SchemaTypes.AuditReportInput );
  BudgetStatementAction: ( SchemaTypes.AddAccountAction ) | ( SchemaTypes.AddAuditReportAction ) | ( SchemaTypes.AddCommentAction ) | ( SchemaTypes.AddLineItemAction ) | ( SchemaTypes.AddVestingAction ) | ( SchemaTypes.DeleteAccountAction ) | ( SchemaTypes.DeleteAuditReportAction ) | ( SchemaTypes.DeleteCommentAction ) | ( SchemaTypes.DeleteLineItemAction ) | ( SchemaTypes.DeleteVestingAction ) | ( SchemaTypes.SetFtesAction ) | ( SchemaTypes.SetMonthAction ) | ( SchemaTypes.SetOwnerAction ) | ( SchemaTypes.SetQuoteCurrencyAction ) | ( SchemaTypes.UpdateAccountAction ) | ( SchemaTypes.UpdateCommentAction ) | ( SchemaTypes.UpdateLineItemAction ) | ( SchemaTypes.UpdateVestingAction );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  AuditReportUnion: ( SchemaTypes.AuditReport ) | ( SchemaTypes.AuditReportInput );
  BudgetStatementAction: ( SchemaTypes.AddAccountAction ) | ( SchemaTypes.AddAuditReportAction ) | ( SchemaTypes.AddCommentAction ) | ( SchemaTypes.AddLineItemAction ) | ( SchemaTypes.AddVestingAction ) | ( SchemaTypes.DeleteAccountAction ) | ( SchemaTypes.DeleteAuditReportAction ) | ( SchemaTypes.DeleteCommentAction ) | ( SchemaTypes.DeleteLineItemAction ) | ( SchemaTypes.DeleteVestingAction ) | ( SchemaTypes.SetFtesAction ) | ( SchemaTypes.SetMonthAction ) | ( SchemaTypes.SetOwnerAction ) | ( SchemaTypes.SetQuoteCurrencyAction ) | ( SchemaTypes.UpdateAccountAction ) | ( SchemaTypes.UpdateCommentAction ) | ( SchemaTypes.UpdateLineItemAction ) | ( SchemaTypes.UpdateVestingAction );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ADD_ACCOUNT: SchemaTypes.Add_Account;
  ADD_AUDIT_REPORT: SchemaTypes.Add_Audit_Report;
  ADD_COMMENT: SchemaTypes.Add_Comment;
  ADD_LINE_ITEM: SchemaTypes.Add_Line_Item;
  ADD_VESTING: SchemaTypes.Add_Vesting;
  Account: ResolverTypeWrapper<SchemaTypes.Account>;
  AccountInput: SchemaTypes.AccountInput;
  AccountUpdateInput: SchemaTypes.AccountUpdateInput;
  AddAccountAction: SchemaTypes.AddAccountAction;
  AddAccountInput: SchemaTypes.AddAccountInput;
  AddAuditReportAction: SchemaTypes.AddAuditReportAction;
  AddAuditReportInput: SchemaTypes.AddAuditReportInput;
  AddCommentAction: SchemaTypes.AddCommentAction;
  AddCommentInput: SchemaTypes.AddCommentInput;
  AddLineItemAction: SchemaTypes.AddLineItemAction;
  AddLineItemInput: SchemaTypes.AddLineItemInput;
  AddVestingAction: SchemaTypes.AddVestingAction;
  AddVestingInput: SchemaTypes.AddVestingInput;
  AuditReport: ResolverTypeWrapper<SchemaTypes.AuditReport>;
  AuditReportInput: SchemaTypes.AuditReportInput;
  AuditReportStatus: SchemaTypes.AuditReportStatus;
  AuditReportUnion: ResolverTypeWrapper<ResolversUnionTypes['AuditReportUnion']>;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  BudgetStatement: ResolverTypeWrapper<SchemaTypes.BudgetStatement>;
  BudgetStatementAction: ResolverTypeWrapper<ResolversUnionTypes['BudgetStatementAction']>;
  BudgetStatementData: ResolverTypeWrapper<SchemaTypes.BudgetStatementData>;
  BudgetStatementDataInput: SchemaTypes.BudgetStatementDataInput;
  BudgetStatementInput: SchemaTypes.BudgetStatementInput;
  BudgetStatus: SchemaTypes.BudgetStatus;
  Comment: ResolverTypeWrapper<SchemaTypes.Comment>;
  CommentAuthor: ResolverTypeWrapper<SchemaTypes.CommentAuthor>;
  CommentAuthorInput: SchemaTypes.CommentAuthorInput;
  CommentInput: SchemaTypes.CommentInput;
  CommentUpdateInput: SchemaTypes.CommentUpdateInput;
  DELETE_ACCOUNT: SchemaTypes.Delete_Account;
  DELETE_AUDIT_REPORT: SchemaTypes.Delete_Audit_Report;
  DELETE_COMMENT: SchemaTypes.Delete_Comment;
  DELETE_LINE_ITEM: SchemaTypes.Delete_Line_Item;
  DELETE_VESTING: SchemaTypes.Delete_Vesting;
  DateTime: ResolverTypeWrapper<SchemaTypes.Scalars['DateTime']>;
  DeleteAccountAction: SchemaTypes.DeleteAccountAction;
  DeleteAccountInput: SchemaTypes.DeleteAccountInput;
  DeleteAuditReportAction: SchemaTypes.DeleteAuditReportAction;
  DeleteAuditReportInput: SchemaTypes.DeleteAuditReportInput;
  DeleteCommentAction: SchemaTypes.DeleteCommentAction;
  DeleteCommentInput: SchemaTypes.DeleteCommentInput;
  DeleteLineItemAction: SchemaTypes.DeleteLineItemAction;
  DeleteLineItemInput: SchemaTypes.DeleteLineItemInput;
  DeleteVestingAction: SchemaTypes.DeleteVestingAction;
  DeleteVestingInput: SchemaTypes.DeleteVestingInput;
  DocumentFileInput: SchemaTypes.DocumentFileInput;
  Float: ResolverTypeWrapper<SchemaTypes.Scalars['Float']>;
  Ftes: ResolverTypeWrapper<SchemaTypes.Ftes>;
  FtesForecast: ResolverTypeWrapper<SchemaTypes.FtesForecast>;
  FtesForecastInput: SchemaTypes.FtesForecastInput;
  FtesInput: SchemaTypes.FtesInput;
  IDocument: ResolversTypes['BudgetStatement'];
  IOperation: ResolversTypes['Operation'] | ResolversTypes['SetNameOperation'];
  Int: ResolverTypeWrapper<SchemaTypes.Scalars['Int']>;
  LOAD_STATE: SchemaTypes.Load_State;
  LineItem: ResolverTypeWrapper<SchemaTypes.LineItem>;
  LineItemCategory: ResolverTypeWrapper<SchemaTypes.LineItemCategory>;
  LineItemDeleteInput: SchemaTypes.LineItemDeleteInput;
  LineItemForecast: ResolverTypeWrapper<SchemaTypes.LineItemForecast>;
  LineItemGroup: ResolverTypeWrapper<SchemaTypes.LineItemGroup>;
  LineItemInput: SchemaTypes.LineItemInput;
  LineItemUpdateInput: SchemaTypes.LineItemUpdateInput;
  LoadStateAction: SchemaTypes.LoadStateAction;
  LoadStateActionInput: SchemaTypes.LoadStateActionInput;
  LoadStateActionStateInput: SchemaTypes.LoadStateActionStateInput;
  Mutation: ResolverTypeWrapper<{}>;
  Operation: ResolverTypeWrapper<SchemaTypes.Operation>;
  Owner: ResolverTypeWrapper<SchemaTypes.Owner>;
  OwnerInput: SchemaTypes.OwnerInput;
  PRUNE: SchemaTypes.Prune;
  PruneAction: SchemaTypes.PruneAction;
  PruneActionInput: SchemaTypes.PruneActionInput;
  Query: ResolverTypeWrapper<{}>;
  REDO: SchemaTypes.Redo;
  RedoAction: SchemaTypes.RedoAction;
  SET_FTES: SchemaTypes.Set_Ftes;
  SET_MONTH: SchemaTypes.Set_Month;
  SET_NAME: SchemaTypes.Set_Name;
  SET_OWNER: SchemaTypes.Set_Owner;
  SET_QUOTE_CURRENCY: SchemaTypes.Set_Quote_Currency;
  SetFtesAction: SchemaTypes.SetFtesAction;
  SetMonthAction: SchemaTypes.SetMonthAction;
  SetNameAction: SchemaTypes.SetNameAction;
  SetNameOperation: ResolverTypeWrapper<SchemaTypes.SetNameOperation>;
  SetOwnerAction: SchemaTypes.SetOwnerAction;
  SetQuoteCurrencyAction: SchemaTypes.SetQuoteCurrencyAction;
  String: ResolverTypeWrapper<SchemaTypes.Scalars['String']>;
  UNDO: SchemaTypes.Undo;
  UPDATE_ACCOUNT: SchemaTypes.Update_Account;
  UPDATE_COMMENT: SchemaTypes.Update_Comment;
  UPDATE_LINE_ITEM: SchemaTypes.Update_Line_Item;
  UPDATE_VESTING: SchemaTypes.Update_Vesting;
  UndoAction: SchemaTypes.UndoAction;
  Unknown: ResolverTypeWrapper<SchemaTypes.Scalars['Unknown']>;
  UpdateAccountAction: SchemaTypes.UpdateAccountAction;
  UpdateAccountInput: SchemaTypes.UpdateAccountInput;
  UpdateCommentAction: SchemaTypes.UpdateCommentAction;
  UpdateCommentInput: SchemaTypes.UpdateCommentInput;
  UpdateLineItemAction: SchemaTypes.UpdateLineItemAction;
  UpdateLineItemInput: SchemaTypes.UpdateLineItemInput;
  UpdateVestingAction: SchemaTypes.UpdateVestingAction;
  UpdateVestingInput: SchemaTypes.UpdateVestingInput;
  Vesting: ResolverTypeWrapper<SchemaTypes.Vesting>;
  VestingInput: SchemaTypes.VestingInput;
  VestingUpdateInput: SchemaTypes.VestingUpdateInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: SchemaTypes.Account;
  AccountInput: SchemaTypes.AccountInput;
  AccountUpdateInput: SchemaTypes.AccountUpdateInput;
  AddAccountAction: SchemaTypes.AddAccountAction;
  AddAccountInput: SchemaTypes.AddAccountInput;
  AddAuditReportAction: SchemaTypes.AddAuditReportAction;
  AddAuditReportInput: SchemaTypes.AddAuditReportInput;
  AddCommentAction: SchemaTypes.AddCommentAction;
  AddCommentInput: SchemaTypes.AddCommentInput;
  AddLineItemAction: SchemaTypes.AddLineItemAction;
  AddLineItemInput: SchemaTypes.AddLineItemInput;
  AddVestingAction: SchemaTypes.AddVestingAction;
  AddVestingInput: SchemaTypes.AddVestingInput;
  AuditReport: SchemaTypes.AuditReport;
  AuditReportInput: SchemaTypes.AuditReportInput;
  AuditReportUnion: ResolversUnionParentTypes['AuditReportUnion'];
  Boolean: SchemaTypes.Scalars['Boolean'];
  BudgetStatement: SchemaTypes.BudgetStatement;
  BudgetStatementAction: ResolversUnionParentTypes['BudgetStatementAction'];
  BudgetStatementData: SchemaTypes.BudgetStatementData;
  BudgetStatementDataInput: SchemaTypes.BudgetStatementDataInput;
  BudgetStatementInput: SchemaTypes.BudgetStatementInput;
  Comment: SchemaTypes.Comment;
  CommentAuthor: SchemaTypes.CommentAuthor;
  CommentAuthorInput: SchemaTypes.CommentAuthorInput;
  CommentInput: SchemaTypes.CommentInput;
  CommentUpdateInput: SchemaTypes.CommentUpdateInput;
  DateTime: SchemaTypes.Scalars['DateTime'];
  DeleteAccountAction: SchemaTypes.DeleteAccountAction;
  DeleteAccountInput: SchemaTypes.DeleteAccountInput;
  DeleteAuditReportAction: SchemaTypes.DeleteAuditReportAction;
  DeleteAuditReportInput: SchemaTypes.DeleteAuditReportInput;
  DeleteCommentAction: SchemaTypes.DeleteCommentAction;
  DeleteCommentInput: SchemaTypes.DeleteCommentInput;
  DeleteLineItemAction: SchemaTypes.DeleteLineItemAction;
  DeleteLineItemInput: SchemaTypes.DeleteLineItemInput;
  DeleteVestingAction: SchemaTypes.DeleteVestingAction;
  DeleteVestingInput: SchemaTypes.DeleteVestingInput;
  DocumentFileInput: SchemaTypes.DocumentFileInput;
  Float: SchemaTypes.Scalars['Float'];
  Ftes: SchemaTypes.Ftes;
  FtesForecast: SchemaTypes.FtesForecast;
  FtesForecastInput: SchemaTypes.FtesForecastInput;
  FtesInput: SchemaTypes.FtesInput;
  IDocument: ResolversParentTypes['BudgetStatement'];
  IOperation: ResolversParentTypes['Operation'] | ResolversParentTypes['SetNameOperation'];
  Int: SchemaTypes.Scalars['Int'];
  LineItem: SchemaTypes.LineItem;
  LineItemCategory: SchemaTypes.LineItemCategory;
  LineItemDeleteInput: SchemaTypes.LineItemDeleteInput;
  LineItemForecast: SchemaTypes.LineItemForecast;
  LineItemGroup: SchemaTypes.LineItemGroup;
  LineItemInput: SchemaTypes.LineItemInput;
  LineItemUpdateInput: SchemaTypes.LineItemUpdateInput;
  LoadStateAction: SchemaTypes.LoadStateAction;
  LoadStateActionInput: SchemaTypes.LoadStateActionInput;
  LoadStateActionStateInput: SchemaTypes.LoadStateActionStateInput;
  Mutation: {};
  Operation: SchemaTypes.Operation;
  Owner: SchemaTypes.Owner;
  OwnerInput: SchemaTypes.OwnerInput;
  PruneAction: SchemaTypes.PruneAction;
  PruneActionInput: SchemaTypes.PruneActionInput;
  Query: {};
  RedoAction: SchemaTypes.RedoAction;
  SetFtesAction: SchemaTypes.SetFtesAction;
  SetMonthAction: SchemaTypes.SetMonthAction;
  SetNameAction: SchemaTypes.SetNameAction;
  SetNameOperation: SchemaTypes.SetNameOperation;
  SetOwnerAction: SchemaTypes.SetOwnerAction;
  SetQuoteCurrencyAction: SchemaTypes.SetQuoteCurrencyAction;
  String: SchemaTypes.Scalars['String'];
  UndoAction: SchemaTypes.UndoAction;
  Unknown: SchemaTypes.Scalars['Unknown'];
  UpdateAccountAction: SchemaTypes.UpdateAccountAction;
  UpdateAccountInput: SchemaTypes.UpdateAccountInput;
  UpdateCommentAction: SchemaTypes.UpdateCommentAction;
  UpdateCommentInput: SchemaTypes.UpdateCommentInput;
  UpdateLineItemAction: SchemaTypes.UpdateLineItemAction;
  UpdateLineItemInput: SchemaTypes.UpdateLineItemInput;
  UpdateVestingAction: SchemaTypes.UpdateVestingAction;
  UpdateVestingInput: SchemaTypes.UpdateVestingInput;
  Vesting: SchemaTypes.Vesting;
  VestingInput: SchemaTypes.VestingInput;
  VestingUpdateInput: SchemaTypes.VestingUpdateInput;
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineItems?: Resolver<Array<ResolversTypes['LineItem']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuditReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditReport'] = ResolversParentTypes['AuditReport']> = ResolversObject<{
  report?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AuditReportStatus'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuditReportUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditReportUnion'] = ResolversParentTypes['AuditReportUnion']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AuditReport' | 'AuditReportInput', ParentType, ContextType>;
}>;

export type BudgetStatementResolvers<ContextType = any, ParentType extends ResolversParentTypes['BudgetStatement'] = ResolversParentTypes['BudgetStatement']> = ResolversObject<{
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['BudgetStatementData'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['IOperation']>, ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BudgetStatementActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BudgetStatementAction'] = ResolversParentTypes['BudgetStatementAction']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddAccountAction' | 'AddAuditReportAction' | 'AddCommentAction' | 'AddLineItemAction' | 'AddVestingAction' | 'DeleteAccountAction' | 'DeleteAuditReportAction' | 'DeleteCommentAction' | 'DeleteLineItemAction' | 'DeleteVestingAction' | 'SetFtesAction' | 'SetMonthAction' | 'SetOwnerAction' | 'SetQuoteCurrencyAction' | 'UpdateAccountAction' | 'UpdateCommentAction' | 'UpdateLineItemAction' | 'UpdateVestingAction', ParentType, ContextType>;
}>;

export type BudgetStatementDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BudgetStatementData'] = ResolversParentTypes['BudgetStatementData']> = ResolversObject<{
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  auditReports?: Resolver<Array<ResolversTypes['AuditReport']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  ftes?: Resolver<SchemaTypes.Maybe<ResolversTypes['Ftes']>, ParentType, ContextType>;
  month?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<SchemaTypes.Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  quoteCurrency?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vesting?: Resolver<Array<ResolversTypes['Vesting']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  author?: Resolver<ResolversTypes['CommentAuthor'], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BudgetStatus'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentAuthor'] = ResolversParentTypes['CommentAuthor']> = ResolversObject<{
  id?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ref?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleLabel?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FtesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ftes'] = ResolversParentTypes['Ftes']> = ResolversObject<{
  forecast?: Resolver<Array<SchemaTypes.Maybe<ResolversTypes['FtesForecast']>>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FtesForecastResolvers<ContextType = any, ParentType extends ResolversParentTypes['FtesForecast'] = ResolversParentTypes['FtesForecast']> = ResolversObject<{
  month?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDocument'] = ResolversParentTypes['IDocument']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BudgetStatement', ParentType, ContextType>;
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

export type LineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineItem'] = ResolversParentTypes['LineItem']> = ResolversObject<{
  actual?: Resolver<SchemaTypes.Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  budgetCap?: Resolver<SchemaTypes.Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category?: Resolver<SchemaTypes.Maybe<ResolversTypes['LineItemCategory']>, ParentType, ContextType>;
  comment?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forecast?: Resolver<Array<ResolversTypes['LineItemForecast']>, ParentType, ContextType>;
  group?: Resolver<SchemaTypes.Maybe<ResolversTypes['LineItemGroup']>, ParentType, ContextType>;
  headcountExpense?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payment?: Resolver<SchemaTypes.Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LineItemCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineItemCategory'] = ResolversParentTypes['LineItemCategory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ref?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LineItemForecastResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineItemForecast'] = ResolversParentTypes['LineItemForecast']> = ResolversObject<{
  budgetCap?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LineItemGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineItemGroup'] = ResolversParentTypes['LineItemGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ref?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addAccount?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddAccountArgs, 'input'>>;
  addAuditReport?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddAuditReportArgs, 'input'>>;
  addComment?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddCommentArgs, 'input'>>;
  addLineItem?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddLineItemArgs, 'input'>>;
  addVesting?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationAddVestingArgs, 'input'>>;
  deleteAccount?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteAccountArgs, 'input'>>;
  deleteAuditReport?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteAuditReportArgs, 'input'>>;
  deleteComment?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteCommentArgs, 'input'>>;
  deleteLineItem?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteLineItemArgs, 'input'>>;
  deleteVesting?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationDeleteVestingArgs, 'input'>>;
  loadState?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationLoadStateArgs, 'input'>>;
  prune?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationPruneArgs, 'input'>>;
  redo?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationRedoArgs, 'input'>>;
  setFtes?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetFtesArgs, 'input'>>;
  setMonth?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetMonthArgs, 'input'>>;
  setName?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetNameArgs, 'input'>>;
  setOwner?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetOwnerArgs, 'input'>>;
  setQuoteCurrency?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationSetQuoteCurrencyArgs, 'input'>>;
  undo?: Resolver<SchemaTypes.Maybe<ResolversTypes['IDocument']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUndoArgs, 'input'>>;
  updateAccount?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateAccountArgs, 'input'>>;
  updateComment?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateCommentArgs, 'input'>>;
  updateLineItem?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateLineItemArgs, 'input'>>;
  updateVesting?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatementData']>, ParentType, ContextType, RequireFields<SchemaTypes.MutationUpdateVestingArgs, 'input'>>;
}>;

export type OperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operation'] = ResolversParentTypes['Operation']> = ResolversObject<{
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = ResolversObject<{
  id?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ref?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<SchemaTypes.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  budgetStatement?: Resolver<SchemaTypes.Maybe<ResolversTypes['BudgetStatement']>, ParentType, ContextType>;
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

export type VestingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vesting'] = ResolversParentTypes['Vesting']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountOld?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vested?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AuditReport?: AuditReportResolvers<ContextType>;
  AuditReportUnion?: AuditReportUnionResolvers<ContextType>;
  BudgetStatement?: BudgetStatementResolvers<ContextType>;
  BudgetStatementAction?: BudgetStatementActionResolvers<ContextType>;
  BudgetStatementData?: BudgetStatementDataResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentAuthor?: CommentAuthorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Ftes?: FtesResolvers<ContextType>;
  FtesForecast?: FtesForecastResolvers<ContextType>;
  IDocument?: IDocumentResolvers<ContextType>;
  IOperation?: IOperationResolvers<ContextType>;
  LineItem?: LineItemResolvers<ContextType>;
  LineItemCategory?: LineItemCategoryResolvers<ContextType>;
  LineItemForecast?: LineItemForecastResolvers<ContextType>;
  LineItemGroup?: LineItemGroupResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SetNameOperation?: SetNameOperationResolvers<ContextType>;
  Unknown?: GraphQLScalarType;
  Vesting?: VestingResolvers<ContextType>;
}>;

