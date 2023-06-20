import { z } from 'zod'
import { Add_Account, Add_Audit_Report, Add_Comment, Add_Line_Item, Add_Vesting, Account, AccountInput, AccountUpdateInput, AddAccountAction, AddAccountInput, AddAuditReportAction, AddAuditReportInput, AddCommentAction, AddCommentInput, AddLineItemAction, AddLineItemInput, AddVestingAction, AddVestingInput, AuditReport, AuditReportInput, AuditReportStatus, BudgetStatement, BudgetStatementData, BudgetStatementDataInput, BudgetStatementInput, BudgetStatus, Comment, CommentAuthor, CommentAuthorInput, CommentInput, CommentUpdateInput, Delete_Account, Delete_Audit_Report, Delete_Comment, Delete_Line_Item, Delete_Vesting, DeleteAccountAction, DeleteAccountInput, DeleteAuditReportAction, DeleteAuditReportInput, DeleteCommentAction, DeleteCommentInput, DeleteLineItemAction, DeleteLineItemInput, DeleteVestingAction, DeleteVestingInput, DocumentFileInput, Ftes, FtesForecast, FtesForecastInput, FtesInput, Load_State, LineItem, LineItemCategory, LineItemDeleteInput, LineItemForecast, LineItemGroup, LineItemInput, LineItemUpdateInput, LineItemsSortInput, LoadStateAction, LoadStateActionInput, LoadStateActionStateInput, Operation, Owner, OwnerInput, Prune, PruneAction, PruneActionInput, Redo, RedoAction, Set_Ftes, Set_Month, Set_Name, Set_Owner, Set_Quote_Currency, Sort_Accounts, Sort_Line_Items, SetFtesAction, SetMonthAction, SetNameAction, SetNameOperation, SetOwnerAction, SetQuoteCurrencyAction, SortAccountsAction, SortAccountsInput, SortLineItemsAction, SortLineItemsInput, Undo, Update_Account, Update_Comment, Update_Line_Item, Update_Vesting, UndoAction, UpdateAccountAction, UpdateAccountInput, UpdateCommentAction, UpdateCommentInput, UpdateLineItemAction, UpdateLineItemInput, UpdateVestingAction, UpdateVestingInput, Vesting, VestingInput, VestingUpdateInput } from './'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const Add_AccountSchema = z.enum(['ADD_ACCOUNT']);

export const Add_Audit_ReportSchema = z.enum(['ADD_AUDIT_REPORT']);

export const Add_CommentSchema = z.enum(['ADD_COMMENT']);

export const Add_Line_ItemSchema = z.enum(['ADD_LINE_ITEM']);

export const Add_VestingSchema = z.enum(['ADD_VESTING']);

export function AccountSchema(): z.ZodObject<Properties<Account>> {
  return z.object<Properties<Account>>({
    __typename: z.literal('Account').optional(),
    address: z.string(),
    lineItems: z.array(LineItemSchema()),
    name: z.string()
  })
}

export function AccountInputSchema(): z.ZodObject<Properties<AccountInput>> {
  return z.object<Properties<AccountInput>>({
    address: z.string(),
    lineItems: z.array(z.lazy(() => LineItemInputSchema())).nullish(),
    name: z.string().nullish()
  })
}

export function AccountUpdateInputSchema(): z.ZodObject<Properties<AccountUpdateInput>> {
  return z.object<Properties<AccountUpdateInput>>({
    address: z.string(),
    lineItems: z.array(LineItemSchema()).nullish(),
    name: z.string().nullish()
  })
}

export function AddAccountActionSchema(): z.ZodObject<Properties<AddAccountAction>> {
  return z.object<Properties<AddAccountAction>>({
    input: z.lazy(() => AddAccountInputSchema()),
    type: Add_AccountSchema
  })
}

export function AddAccountInputSchema(): z.ZodObject<Properties<AddAccountInput>> {
  return z.object<Properties<AddAccountInput>>({
    accounts: z.array(z.lazy(() => AccountInputSchema()))
  })
}

export function AddAuditReportActionSchema(): z.ZodObject<Properties<AddAuditReportAction>> {
  return z.object<Properties<AddAuditReportAction>>({
    input: z.lazy(() => AddAuditReportInputSchema()),
    type: Add_Audit_ReportSchema
  })
}

export function AddAuditReportInputSchema(): z.ZodObject<Properties<AddAuditReportInput>> {
  return z.object<Properties<AddAuditReportInput>>({
    reports: z.array(AuditReportUnionSchema())
  })
}

export function AddCommentActionSchema(): z.ZodObject<Properties<AddCommentAction>> {
  return z.object<Properties<AddCommentAction>>({
    input: z.lazy(() => AddCommentInputSchema()),
    type: Add_CommentSchema
  })
}

export function AddCommentInputSchema(): z.ZodObject<Properties<AddCommentInput>> {
  return z.object<Properties<AddCommentInput>>({
    comments: z.array(z.lazy(() => CommentInputSchema()))
  })
}

export function AddLineItemActionSchema(): z.ZodObject<Properties<AddLineItemAction>> {
  return z.object<Properties<AddLineItemAction>>({
    input: z.lazy(() => AddLineItemInputSchema()),
    type: Add_Line_ItemSchema
  })
}

export function AddLineItemInputSchema(): z.ZodObject<Properties<AddLineItemInput>> {
  return z.object<Properties<AddLineItemInput>>({
    account: z.string(),
    lineItems: z.array(z.lazy(() => LineItemInputSchema()))
  })
}

export function AddVestingActionSchema(): z.ZodObject<Properties<AddVestingAction>> {
  return z.object<Properties<AddVestingAction>>({
    input: z.lazy(() => AddVestingInputSchema()),
    type: Add_VestingSchema
  })
}

export function AddVestingInputSchema(): z.ZodObject<Properties<AddVestingInput>> {
  return z.object<Properties<AddVestingInput>>({
    vesting: z.array(z.lazy(() => VestingInputSchema()))
  })
}

export function AuditReportSchema(): z.ZodObject<Properties<AuditReport>> {
  return z.object<Properties<AuditReport>>({
    __typename: z.literal('AuditReport').optional(),
    report: z.string(),
    status: AuditReportStatusSchema,
    timestamp: z.string().datetime()
  })
}

export function AuditReportInputSchema(): z.ZodObject<Properties<AuditReportInput>> {
  return z.object<Properties<AuditReportInput>>({
    report: z.lazy(() => DocumentFileInputSchema()),
    status: AuditReportStatusSchema,
    timestamp: z.string().datetime().nullish()
  })
}

export const AuditReportStatusSchema = z.enum(['Approved', 'ApprovedWithComments', 'Escalated', 'NeedsAction']);

export function AuditReportUnionSchema() {
  return z.union([AuditReportSchema(), AuditReportInputSchema()])
}

export function BudgetStatementSchema(): z.ZodObject<Properties<BudgetStatement>> {
  return z.object<Properties<BudgetStatement>>({
    __typename: z.literal('BudgetStatement').optional(),
    created: z.string().datetime(),
    data: BudgetStatementDataSchema(),
    documentType: z.string(),
    lastModified: z.string().datetime(),
    name: z.string(),
    operations: z.array(definedNonNullAnySchema),
    revision: z.number()
  })
}

export function BudgetStatementActionSchema() {
  return z.union([AddAccountActionSchema(), AddAuditReportActionSchema(), AddCommentActionSchema(), AddLineItemActionSchema(), AddVestingActionSchema(), DeleteAccountActionSchema(), DeleteAuditReportActionSchema(), DeleteCommentActionSchema(), DeleteLineItemActionSchema(), DeleteVestingActionSchema(), SetFtesActionSchema(), SetMonthActionSchema(), SetOwnerActionSchema(), SetQuoteCurrencyActionSchema(), SortAccountsActionSchema(), SortLineItemsActionSchema(), UpdateAccountActionSchema(), UpdateCommentActionSchema(), UpdateLineItemActionSchema(), UpdateVestingActionSchema()])
}

export function BudgetStatementDataSchema(): z.ZodObject<Properties<BudgetStatementData>> {
  return z.object<Properties<BudgetStatementData>>({
    __typename: z.literal('BudgetStatementData').optional(),
    accounts: z.array(AccountSchema()),
    auditReports: z.array(AuditReportSchema()),
    comments: z.array(CommentSchema()),
    ftes: FtesSchema().nullable(),
    month: z.string().nullable(),
    owner: OwnerSchema().nullable(),
    quoteCurrency: z.string().nullable(),
    vesting: z.array(VestingSchema())
  })
}

export function BudgetStatementDataInputSchema(): z.ZodObject<Properties<BudgetStatementDataInput>> {
  return z.object<Properties<BudgetStatementDataInput>>({
    accounts: z.array(AccountSchema()).nullish(),
    auditReports: z.array(AuditReportSchema()).nullish(),
    comments: z.array(CommentSchema()).nullish(),
    ftes: FtesSchema().nullish(),
    month: z.string().nullish(),
    owner: OwnerSchema().nullish(),
    quoteCurrency: z.string().nullish(),
    vesting: z.array(VestingSchema()).nullish()
  })
}

export function BudgetStatementInputSchema(): z.ZodObject<Properties<BudgetStatementInput>> {
  return z.object<Properties<BudgetStatementInput>>({
    created: z.string().datetime().nullish(),
    data: z.lazy(() => BudgetStatementDataInputSchema()),
    documentType: z.string().nullish(),
    lastModified: z.string().datetime().nullish(),
    name: z.string().nullish(),
    revision: z.number().nullish()
  })
}

export const BudgetStatusSchema = z.enum(['Draft', 'Escalated', 'Final', 'Review']);

export function CommentSchema(): z.ZodObject<Properties<Comment>> {
  return z.object<Properties<Comment>>({
    __typename: z.literal('Comment').optional(),
    author: CommentAuthorSchema(),
    comment: z.string(),
    key: z.string(),
    status: BudgetStatusSchema,
    timestamp: z.string().datetime()
  })
}

export function CommentAuthorSchema(): z.ZodObject<Properties<CommentAuthor>> {
  return z.object<Properties<CommentAuthor>>({
    __typename: z.literal('CommentAuthor').optional(),
    id: z.string().nullable(),
    ref: z.string().nullable(),
    roleLabel: z.string().nullable(),
    username: z.string().nullable()
  })
}

export function CommentAuthorInputSchema(): z.ZodObject<Properties<CommentAuthorInput>> {
  return z.object<Properties<CommentAuthorInput>>({
    id: z.string().nullish(),
    ref: z.string().nullish(),
    roleLabel: z.string().nullish(),
    username: z.string().nullish()
  })
}

export function CommentInputSchema(): z.ZodObject<Properties<CommentInput>> {
  return z.object<Properties<CommentInput>>({
    author: z.lazy(() => CommentAuthorInputSchema().nullish()),
    comment: z.string(),
    key: z.string().nullish(),
    status: BudgetStatusSchema.nullish(),
    timestamp: z.string().datetime().nullish()
  })
}

export function CommentUpdateInputSchema(): z.ZodObject<Properties<CommentUpdateInput>> {
  return z.object<Properties<CommentUpdateInput>>({
    author: z.lazy(() => CommentAuthorInputSchema().nullish()),
    comment: z.string().nullish(),
    key: z.string(),
    status: BudgetStatusSchema.nullish(),
    timestamp: z.string().datetime().nullish()
  })
}

export const Delete_AccountSchema = z.enum(['DELETE_ACCOUNT']);

export const Delete_Audit_ReportSchema = z.enum(['DELETE_AUDIT_REPORT']);

export const Delete_CommentSchema = z.enum(['DELETE_COMMENT']);

export const Delete_Line_ItemSchema = z.enum(['DELETE_LINE_ITEM']);

export const Delete_VestingSchema = z.enum(['DELETE_VESTING']);

export function DeleteAccountActionSchema(): z.ZodObject<Properties<DeleteAccountAction>> {
  return z.object<Properties<DeleteAccountAction>>({
    input: z.lazy(() => DeleteAccountInputSchema()),
    type: Delete_AccountSchema
  })
}

export function DeleteAccountInputSchema(): z.ZodObject<Properties<DeleteAccountInput>> {
  return z.object<Properties<DeleteAccountInput>>({
    accounts: z.array(z.string())
  })
}

export function DeleteAuditReportActionSchema(): z.ZodObject<Properties<DeleteAuditReportAction>> {
  return z.object<Properties<DeleteAuditReportAction>>({
    input: z.lazy(() => DeleteAuditReportInputSchema()),
    type: Delete_Audit_ReportSchema
  })
}

export function DeleteAuditReportInputSchema(): z.ZodObject<Properties<DeleteAuditReportInput>> {
  return z.object<Properties<DeleteAuditReportInput>>({
    reports: z.array(z.string())
  })
}

export function DeleteCommentActionSchema(): z.ZodObject<Properties<DeleteCommentAction>> {
  return z.object<Properties<DeleteCommentAction>>({
    input: z.lazy(() => DeleteCommentInputSchema()),
    type: Delete_CommentSchema
  })
}

export function DeleteCommentInputSchema(): z.ZodObject<Properties<DeleteCommentInput>> {
  return z.object<Properties<DeleteCommentInput>>({
    comments: z.array(z.string())
  })
}

export function DeleteLineItemActionSchema(): z.ZodObject<Properties<DeleteLineItemAction>> {
  return z.object<Properties<DeleteLineItemAction>>({
    input: z.lazy(() => DeleteLineItemInputSchema()),
    type: Delete_Line_ItemSchema
  })
}

export function DeleteLineItemInputSchema(): z.ZodObject<Properties<DeleteLineItemInput>> {
  return z.object<Properties<DeleteLineItemInput>>({
    account: z.string(),
    lineItems: z.array(z.lazy(() => LineItemDeleteInputSchema()))
  })
}

export function DeleteVestingActionSchema(): z.ZodObject<Properties<DeleteVestingAction>> {
  return z.object<Properties<DeleteVestingAction>>({
    input: z.lazy(() => DeleteVestingInputSchema()),
    type: Delete_VestingSchema
  })
}

export function DeleteVestingInputSchema(): z.ZodObject<Properties<DeleteVestingInput>> {
  return z.object<Properties<DeleteVestingInput>>({
    vesting: z.array(z.string())
  })
}

export function DocumentFileInputSchema(): z.ZodObject<Properties<DocumentFileInput>> {
  return z.object<Properties<DocumentFileInput>>({
    data: z.string(),
    extension: z.string().nullish(),
    fileName: z.string().nullish(),
    mimeType: z.string()
  })
}

export function FtesSchema(): z.ZodObject<Properties<Ftes>> {
  return z.object<Properties<Ftes>>({
    __typename: z.literal('Ftes').optional(),
    forecast: z.array(FtesForecastSchema()),
    value: z.number()
  })
}

export function FtesForecastSchema(): z.ZodObject<Properties<FtesForecast>> {
  return z.object<Properties<FtesForecast>>({
    __typename: z.literal('FtesForecast').optional(),
    month: z.string(),
    value: z.number()
  })
}

export function FtesForecastInputSchema(): z.ZodObject<Properties<FtesForecastInput>> {
  return z.object<Properties<FtesForecastInput>>({
    month: z.string(),
    value: z.number()
  })
}

export function FtesInputSchema(): z.ZodObject<Properties<FtesInput>> {
  return z.object<Properties<FtesInput>>({
    forecast: z.array(z.lazy(() => FtesForecastInputSchema())),
    value: z.number()
  })
}

export const Load_StateSchema = z.enum(['LOAD_STATE']);

export function LineItemSchema(): z.ZodObject<Properties<LineItem>> {
  return z.object<Properties<LineItem>>({
    __typename: z.literal('LineItem').optional(),
    actual: z.number().nullable(),
    budgetCap: z.number().nullable(),
    category: LineItemCategorySchema().nullable(),
    comment: z.string().nullable(),
    forecast: z.array(LineItemForecastSchema()),
    group: LineItemGroupSchema().nullable(),
    headcountExpense: z.boolean(),
    payment: z.number().nullable()
  })
}

export function LineItemCategorySchema(): z.ZodObject<Properties<LineItemCategory>> {
  return z.object<Properties<LineItemCategory>>({
    __typename: z.literal('LineItemCategory').optional(),
    id: z.string(),
    ref: z.string(),
    title: z.string()
  })
}

export function LineItemDeleteInputSchema(): z.ZodObject<Properties<LineItemDeleteInput>> {
  return z.object<Properties<LineItemDeleteInput>>({
    category: z.string().nullish(),
    group: z.string().nullish()
  })
}

export function LineItemForecastSchema(): z.ZodObject<Properties<LineItemForecast>> {
  return z.object<Properties<LineItemForecast>>({
    __typename: z.literal('LineItemForecast').optional(),
    budgetCap: z.number(),
    month: z.string(),
    value: z.number()
  })
}

export function LineItemGroupSchema(): z.ZodObject<Properties<LineItemGroup>> {
  return z.object<Properties<LineItemGroup>>({
    __typename: z.literal('LineItemGroup').optional(),
    color: z.string(),
    id: z.string(),
    ref: z.string(),
    title: z.string()
  })
}

export function LineItemInputSchema(): z.ZodObject<Properties<LineItemInput>> {
  return z.object<Properties<LineItemInput>>({
    actual: z.number().nullish(),
    budgetCap: z.number().nullish(),
    category: LineItemCategorySchema().nullish(),
    comment: z.string().nullish(),
    forecast: z.array(LineItemForecastSchema()).nullish(),
    group: LineItemGroupSchema().nullish(),
    headcountExpense: z.boolean().nullish(),
    payment: z.number().nullish()
  })
}

export function LineItemUpdateInputSchema(): z.ZodObject<Properties<LineItemUpdateInput>> {
  return z.object<Properties<LineItemUpdateInput>>({
    actual: z.number().nullish(),
    budgetCap: z.number().nullish(),
    category: z.string().nullish(),
    comment: z.string().nullish(),
    forecast: z.array(LineItemForecastSchema()).nullish(),
    group: z.string().nullish(),
    headcountExpense: z.boolean().nullish(),
    payment: z.number().nullish()
  })
}

export function LineItemsSortInputSchema(): z.ZodObject<Properties<LineItemsSortInput>> {
  return z.object<Properties<LineItemsSortInput>>({
    category: z.string().nullish(),
    group: z.string().nullish()
  })
}

export function LoadStateActionSchema(): z.ZodObject<Properties<LoadStateAction>> {
  return z.object<Properties<LoadStateAction>>({
    input: z.lazy(() => LoadStateActionInputSchema()),
    type: Load_StateSchema
  })
}

export function LoadStateActionInputSchema(): z.ZodObject<Properties<LoadStateActionInput>> {
  return z.object<Properties<LoadStateActionInput>>({
    operations: z.number(),
    state: z.lazy(() => LoadStateActionStateInputSchema())
  })
}

export function LoadStateActionStateInputSchema(): z.ZodObject<Properties<LoadStateActionStateInput>> {
  return z.object<Properties<LoadStateActionStateInput>>({
    data: z.unknown().nullish(),
    name: z.string()
  })
}

export function OperationSchema(): z.ZodObject<Properties<Operation>> {
  return z.object<Properties<Operation>>({
    __typename: z.literal('Operation').optional(),
    hash: z.string(),
    index: z.number(),
    timestamp: z.string().datetime(),
    type: z.string()
  })
}

export function OwnerSchema(): z.ZodObject<Properties<Owner>> {
  return z.object<Properties<Owner>>({
    __typename: z.literal('Owner').optional(),
    id: z.string().nullable(),
    ref: z.string().nullable(),
    title: z.string().nullable()
  })
}

export function OwnerInputSchema(): z.ZodObject<Properties<OwnerInput>> {
  return z.object<Properties<OwnerInput>>({
    id: z.string().nullish(),
    ref: z.string().nullish(),
    title: z.string().nullish()
  })
}

export const PruneSchema = z.enum(['PRUNE']);

export function PruneActionSchema(): z.ZodObject<Properties<PruneAction>> {
  return z.object<Properties<PruneAction>>({
    input: z.lazy(() => PruneActionInputSchema()),
    type: PruneSchema
  })
}

export function PruneActionInputSchema(): z.ZodObject<Properties<PruneActionInput>> {
  return z.object<Properties<PruneActionInput>>({
    end: z.number().nullish(),
    start: z.number().nullish()
  })
}

export const RedoSchema = z.enum(['REDO']);

export function RedoActionSchema(): z.ZodObject<Properties<RedoAction>> {
  return z.object<Properties<RedoAction>>({
    input: z.number(),
    type: RedoSchema
  })
}

export const Set_FtesSchema = z.enum(['SET_FTES']);

export const Set_MonthSchema = z.enum(['SET_MONTH']);

export const Set_NameSchema = z.enum(['SET_NAME']);

export const Set_OwnerSchema = z.enum(['SET_OWNER']);

export const Set_Quote_CurrencySchema = z.enum(['SET_QUOTE_CURRENCY']);

export const Sort_AccountsSchema = z.enum(['SORT_ACCOUNTS']);

export const Sort_Line_ItemsSchema = z.enum(['SORT_LINE_ITEMS']);

export function SetFtesActionSchema(): z.ZodObject<Properties<SetFtesAction>> {
  return z.object<Properties<SetFtesAction>>({
    input: z.lazy(() => FtesInputSchema()),
    type: Set_FtesSchema
  })
}

export function SetMonthActionSchema(): z.ZodObject<Properties<SetMonthAction>> {
  return z.object<Properties<SetMonthAction>>({
    input: z.string(),
    type: Set_MonthSchema
  })
}

export function SetNameActionSchema(): z.ZodObject<Properties<SetNameAction>> {
  return z.object<Properties<SetNameAction>>({
    input: z.string(),
    type: Set_NameSchema
  })
}

export function SetNameOperationSchema(): z.ZodObject<Properties<SetNameOperation>> {
  return z.object<Properties<SetNameOperation>>({
    __typename: z.literal('SetNameOperation').optional(),
    hash: z.string(),
    index: z.number(),
    input: z.string(),
    timestamp: z.string().datetime(),
    type: z.string()
  })
}

export function SetOwnerActionSchema(): z.ZodObject<Properties<SetOwnerAction>> {
  return z.object<Properties<SetOwnerAction>>({
    input: z.lazy(() => OwnerInputSchema()),
    type: Set_OwnerSchema
  })
}

export function SetQuoteCurrencyActionSchema(): z.ZodObject<Properties<SetQuoteCurrencyAction>> {
  return z.object<Properties<SetQuoteCurrencyAction>>({
    input: z.string(),
    type: Set_Quote_CurrencySchema
  })
}

export function SortAccountsActionSchema(): z.ZodObject<Properties<SortAccountsAction>> {
  return z.object<Properties<SortAccountsAction>>({
    input: z.lazy(() => SortAccountsInputSchema()),
    type: Sort_AccountsSchema
  })
}

export function SortAccountsInputSchema(): z.ZodObject<Properties<SortAccountsInput>> {
  return z.object<Properties<SortAccountsInput>>({
    accounts: z.array(z.string())
  })
}

export function SortLineItemsActionSchema(): z.ZodObject<Properties<SortLineItemsAction>> {
  return z.object<Properties<SortLineItemsAction>>({
    input: z.lazy(() => SortLineItemsInputSchema()),
    type: Sort_Line_ItemsSchema
  })
}

export function SortLineItemsInputSchema(): z.ZodObject<Properties<SortLineItemsInput>> {
  return z.object<Properties<SortLineItemsInput>>({
    account: z.string(),
    lineItems: z.array(z.lazy(() => LineItemsSortInputSchema()))
  })
}

export const UndoSchema = z.enum(['UNDO']);

export const Update_AccountSchema = z.enum(['UPDATE_ACCOUNT']);

export const Update_CommentSchema = z.enum(['UPDATE_COMMENT']);

export const Update_Line_ItemSchema = z.enum(['UPDATE_LINE_ITEM']);

export const Update_VestingSchema = z.enum(['UPDATE_VESTING']);

export function UndoActionSchema(): z.ZodObject<Properties<UndoAction>> {
  return z.object<Properties<UndoAction>>({
    input: z.number(),
    type: UndoSchema
  })
}

export function UpdateAccountActionSchema(): z.ZodObject<Properties<UpdateAccountAction>> {
  return z.object<Properties<UpdateAccountAction>>({
    input: z.lazy(() => UpdateAccountInputSchema()),
    type: Update_AccountSchema
  })
}

export function UpdateAccountInputSchema(): z.ZodObject<Properties<UpdateAccountInput>> {
  return z.object<Properties<UpdateAccountInput>>({
    accounts: z.array(z.lazy(() => AccountUpdateInputSchema()))
  })
}

export function UpdateCommentActionSchema(): z.ZodObject<Properties<UpdateCommentAction>> {
  return z.object<Properties<UpdateCommentAction>>({
    input: z.lazy(() => UpdateCommentInputSchema()),
    type: Update_CommentSchema
  })
}

export function UpdateCommentInputSchema(): z.ZodObject<Properties<UpdateCommentInput>> {
  return z.object<Properties<UpdateCommentInput>>({
    comments: z.array(z.lazy(() => CommentUpdateInputSchema()))
  })
}

export function UpdateLineItemActionSchema(): z.ZodObject<Properties<UpdateLineItemAction>> {
  return z.object<Properties<UpdateLineItemAction>>({
    input: z.lazy(() => UpdateLineItemInputSchema()),
    type: Update_Line_ItemSchema
  })
}

export function UpdateLineItemInputSchema(): z.ZodObject<Properties<UpdateLineItemInput>> {
  return z.object<Properties<UpdateLineItemInput>>({
    account: z.string(),
    lineItems: z.array(z.lazy(() => LineItemUpdateInputSchema()))
  })
}

export function UpdateVestingActionSchema(): z.ZodObject<Properties<UpdateVestingAction>> {
  return z.object<Properties<UpdateVestingAction>>({
    input: z.lazy(() => UpdateVestingInputSchema()),
    type: Update_VestingSchema
  })
}

export function UpdateVestingInputSchema(): z.ZodObject<Properties<UpdateVestingInput>> {
  return z.object<Properties<UpdateVestingInput>>({
    vesting: z.array(z.lazy(() => VestingUpdateInputSchema()))
  })
}

export function VestingSchema(): z.ZodObject<Properties<Vesting>> {
  return z.object<Properties<Vesting>>({
    __typename: z.literal('Vesting').optional(),
    amount: z.string(),
    amountOld: z.string(),
    comment: z.string(),
    currency: z.string(),
    date: z.string(),
    key: z.string(),
    vested: z.boolean()
  })
}

export function VestingInputSchema(): z.ZodObject<Properties<VestingInput>> {
  return z.object<Properties<VestingInput>>({
    amount: z.string().nullish(),
    amountOld: z.string().nullish(),
    comment: z.string().nullish(),
    currency: z.string().nullish(),
    date: z.string().nullish(),
    key: z.string().nullish(),
    vested: z.boolean().nullish()
  })
}

export function VestingUpdateInputSchema(): z.ZodObject<Properties<VestingUpdateInput>> {
  return z.object<Properties<VestingUpdateInput>>({
    amount: z.string().nullish(),
    amountOld: z.string().nullish(),
    comment: z.string().nullish(),
    currency: z.string().nullish(),
    date: z.string().nullish(),
    key: z.string(),
    vested: z.boolean().nullish()
  })
}
