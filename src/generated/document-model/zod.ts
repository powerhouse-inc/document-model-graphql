import { z } from 'zod'
import { AddModuleAction, AddOperationAction, AddOperationErrorAction, AddOperationExampleAction, AddStateExampleAction, Author, CodeExample, DeleteModuleAction, DeleteOperationAction, DeleteOperationErrorAction, DeleteOperationExampleAction, DeleteStateExampleAction, DocumentModel, DocumentModelData, Load_State, LoadStateAction, LoadStateActionInput, LoadStateActionStateInput, Module, MoveOperationAction, Operation, OperationError, Prune, PruneAction, PruneActionInput, Redo, RedoAction, ReorderModuleOperationsAction, ReorderModulesAction, ReorderOperationErrorsAction, ReorderOperationExamplesAction, ReorderStateExamplesAction, Set_Name, SetAuthorNameAction, SetAuthorWebsiteAction, SetModelDescriptionAction, SetModelExtensionAction, SetModelIdAction, SetModelNameAction, SetModuleDescriptionAction, SetModuleNameAction, SetNameAction, SetNameOperation, SetOperationDescriptionAction, SetOperationErrorCodeAction, SetOperationErrorDescriptionAction, SetOperationErrorNameAction, SetOperationErrorTemplateAction, SetOperationNameAction, SetOperationReducerAction, SetOperationSchemaAction, SetOperationTemplateAction, SetStateSchemaAction, State, Undo, UndoAction, UpdateOperationExampleAction, UpdateStateExampleAction } from './'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function AddModuleActionSchema(): z.ZodObject<Properties<AddModuleAction>> {
  return z.object<Properties<AddModuleAction>>({
    description: z.string(),
    name: z.string().nullish()
  })
}

export function AddOperationActionSchema(): z.ZodObject<Properties<AddOperationAction>> {
  return z.object<Properties<AddOperationAction>>({
    description: z.string().nullish(),
    name: z.string().nullish(),
    reducer: z.string().nullish(),
    schema: z.string().nullish(),
    template: z.string().nullish()
  })
}

export function AddOperationErrorActionSchema(): z.ZodObject<Properties<AddOperationErrorAction>> {
  return z.object<Properties<AddOperationErrorAction>>({
    errorCode: z.string().nullish(),
    errorDescription: z.string().nullish(),
    errorName: z.string().nullish(),
    errorTemplate: z.string().nullish(),
    operationId: z.string()
  })
}

export function AddOperationExampleActionSchema(): z.ZodObject<Properties<AddOperationExampleAction>> {
  return z.object<Properties<AddOperationExampleAction>>({
    example: z.string(),
    operationId: z.string()
  })
}

export function AddStateExampleActionSchema(): z.ZodObject<Properties<AddStateExampleAction>> {
  return z.object<Properties<AddStateExampleAction>>({
    example: z.string(),
    insertBefore: z.string().nullish()
  })
}

export function AuthorSchema(): z.ZodObject<Properties<Author>> {
  return z.object<Properties<Author>>({
    __typename: z.literal('Author').optional(),
    name: z.string(),
    website: z.string().nullable()
  })
}

export function CodeExampleSchema(): z.ZodObject<Properties<CodeExample>> {
  return z.object<Properties<CodeExample>>({
    __typename: z.literal('CodeExample').optional(),
    id: z.string(),
    value: z.string()
  })
}

export function DeleteModuleActionSchema(): z.ZodObject<Properties<DeleteModuleAction>> {
  return z.object<Properties<DeleteModuleAction>>({
    id: z.string()
  })
}

export function DeleteOperationActionSchema(): z.ZodObject<Properties<DeleteOperationAction>> {
  return z.object<Properties<DeleteOperationAction>>({
    id: z.string()
  })
}

export function DeleteOperationErrorActionSchema(): z.ZodObject<Properties<DeleteOperationErrorAction>> {
  return z.object<Properties<DeleteOperationErrorAction>>({
    id: z.string()
  })
}

export function DeleteOperationExampleActionSchema(): z.ZodObject<Properties<DeleteOperationExampleAction>> {
  return z.object<Properties<DeleteOperationExampleAction>>({
    id: z.string()
  })
}

export function DeleteStateExampleActionSchema(): z.ZodObject<Properties<DeleteStateExampleAction>> {
  return z.object<Properties<DeleteStateExampleAction>>({
    id: z.string()
  })
}

export function DocumentModelSchema(): z.ZodObject<Properties<DocumentModel>> {
  return z.object<Properties<DocumentModel>>({
    __typename: z.literal('DocumentModel').optional(),
    created: z.string().datetime(),
    data: DocumentModelDataSchema(),
    documentType: z.string(),
    lastModified: z.string().datetime(),
    name: z.string(),
    operations: z.array(definedNonNullAnySchema),
    revision: z.number()
  })
}

export function DocumentModelActionSchema() {
  return z.union([AddModuleActionSchema(), AddOperationActionSchema(), AddOperationErrorActionSchema(), AddOperationExampleActionSchema(), AddStateExampleActionSchema(), DeleteModuleActionSchema(), DeleteOperationActionSchema(), DeleteOperationErrorActionSchema(), DeleteOperationExampleActionSchema(), DeleteStateExampleActionSchema(), MoveOperationActionSchema(), ReorderModuleOperationsActionSchema(), ReorderModulesActionSchema(), ReorderOperationErrorsActionSchema(), ReorderOperationExamplesActionSchema(), ReorderStateExamplesActionSchema(), SetAuthorNameActionSchema(), SetAuthorWebsiteActionSchema(), SetModelDescriptionActionSchema(), SetModelExtensionActionSchema(), SetModelIdActionSchema(), SetModelNameActionSchema(), SetModuleDescriptionActionSchema(), SetModuleNameActionSchema(), SetOperationDescriptionActionSchema(), SetOperationErrorCodeActionSchema(), SetOperationErrorDescriptionActionSchema(), SetOperationErrorNameActionSchema(), SetOperationErrorTemplateActionSchema(), SetOperationNameActionSchema(), SetOperationReducerActionSchema(), SetOperationSchemaActionSchema(), SetOperationTemplateActionSchema(), SetStateSchemaActionSchema(), UpdateOperationExampleActionSchema(), UpdateStateExampleActionSchema()])
}

export function DocumentModelDataSchema(): z.ZodObject<Properties<DocumentModelData>> {
  return z.object<Properties<DocumentModelData>>({
    __typename: z.literal('DocumentModelData').optional(),
    author: AuthorSchema().nullable(),
    description: z.string().nullable(),
    extension: z.string().nullable(),
    id: z.string().nullable(),
    modules: z.array(ModuleSchema()),
    name: z.string().nullable(),
    state: StateSchema().nullable()
  })
}

export const Load_StateSchema = z.enum(['LOAD_STATE']);

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

export function ModuleSchema(): z.ZodObject<Properties<Module>> {
  return z.object<Properties<Module>>({
    __typename: z.literal('Module').optional(),
    description: z.string().nullable(),
    id: z.string(),
    name: z.string(),
    operations: z.array(OperationSchema())
  })
}

export function MoveOperationActionSchema(): z.ZodObject<Properties<MoveOperationAction>> {
  return z.object<Properties<MoveOperationAction>>({
    newModuleId: z.string(),
    operationId: z.string()
  })
}

export function OperationSchema(): z.ZodObject<Properties<Operation>> {
  return z.object<Properties<Operation>>({
    __typename: z.literal('Operation').optional(),
    description: z.string().nullable(),
    errors: z.array(OperationErrorSchema()),
    examples: z.array(CodeExampleSchema()),
    hash: z.string(),
    id: z.string(),
    index: z.number(),
    name: z.string().nullable(),
    reducer: z.string().nullable(),
    schema: z.string().nullable(),
    template: z.string().nullable(),
    timestamp: z.string().datetime(),
    type: z.string()
  })
}

export function OperationErrorSchema(): z.ZodObject<Properties<OperationError>> {
  return z.object<Properties<OperationError>>({
    __typename: z.literal('OperationError').optional(),
    code: z.string().nullable(),
    description: z.string().nullable(),
    id: z.string(),
    name: z.string().nullable(),
    template: z.string().nullable()
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

export function ReorderModuleOperationsActionSchema(): z.ZodObject<Properties<ReorderModuleOperationsAction>> {
  return z.object<Properties<ReorderModuleOperationsAction>>({
    moduleId: z.string(),
    order: z.array(z.string())
  })
}

export function ReorderModulesActionSchema(): z.ZodObject<Properties<ReorderModulesAction>> {
  return z.object<Properties<ReorderModulesAction>>({
    order: z.array(z.string())
  })
}

export function ReorderOperationErrorsActionSchema(): z.ZodObject<Properties<ReorderOperationErrorsAction>> {
  return z.object<Properties<ReorderOperationErrorsAction>>({
    operationId: z.string(),
    order: z.array(z.string())
  })
}

export function ReorderOperationExamplesActionSchema(): z.ZodObject<Properties<ReorderOperationExamplesAction>> {
  return z.object<Properties<ReorderOperationExamplesAction>>({
    operationId: z.string(),
    order: z.array(z.string())
  })
}

export function ReorderStateExamplesActionSchema(): z.ZodObject<Properties<ReorderStateExamplesAction>> {
  return z.object<Properties<ReorderStateExamplesAction>>({
    order: z.array(z.string())
  })
}

export const Set_NameSchema = z.enum(['SET_NAME']);

export function SetAuthorNameActionSchema(): z.ZodObject<Properties<SetAuthorNameAction>> {
  return z.object<Properties<SetAuthorNameAction>>({
    authorName: z.string()
  })
}

export function SetAuthorWebsiteActionSchema(): z.ZodObject<Properties<SetAuthorWebsiteAction>> {
  return z.object<Properties<SetAuthorWebsiteAction>>({
    authorWebsite: z.string()
  })
}

export function SetModelDescriptionActionSchema(): z.ZodObject<Properties<SetModelDescriptionAction>> {
  return z.object<Properties<SetModelDescriptionAction>>({
    description: z.string()
  })
}

export function SetModelExtensionActionSchema(): z.ZodObject<Properties<SetModelExtensionAction>> {
  return z.object<Properties<SetModelExtensionAction>>({
    extension: z.string()
  })
}

export function SetModelIdActionSchema(): z.ZodObject<Properties<SetModelIdAction>> {
  return z.object<Properties<SetModelIdAction>>({
    id: z.string()
  })
}

export function SetModelNameActionSchema(): z.ZodObject<Properties<SetModelNameAction>> {
  return z.object<Properties<SetModelNameAction>>({
    name: z.string()
  })
}

export function SetModuleDescriptionActionSchema(): z.ZodObject<Properties<SetModuleDescriptionAction>> {
  return z.object<Properties<SetModuleDescriptionAction>>({
    description: z.string().nullish(),
    id: z.string()
  })
}

export function SetModuleNameActionSchema(): z.ZodObject<Properties<SetModuleNameAction>> {
  return z.object<Properties<SetModuleNameAction>>({
    id: z.string(),
    name: z.string().nullish()
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

export function SetOperationDescriptionActionSchema(): z.ZodObject<Properties<SetOperationDescriptionAction>> {
  return z.object<Properties<SetOperationDescriptionAction>>({
    description: z.string().nullish(),
    id: z.string()
  })
}

export function SetOperationErrorCodeActionSchema(): z.ZodObject<Properties<SetOperationErrorCodeAction>> {
  return z.object<Properties<SetOperationErrorCodeAction>>({
    errorCode: z.string().nullish(),
    id: z.string()
  })
}

export function SetOperationErrorDescriptionActionSchema(): z.ZodObject<Properties<SetOperationErrorDescriptionAction>> {
  return z.object<Properties<SetOperationErrorDescriptionAction>>({
    errorDescription: z.string().nullish(),
    id: z.string()
  })
}

export function SetOperationErrorNameActionSchema(): z.ZodObject<Properties<SetOperationErrorNameAction>> {
  return z.object<Properties<SetOperationErrorNameAction>>({
    errorName: z.string().nullish(),
    id: z.string()
  })
}

export function SetOperationErrorTemplateActionSchema(): z.ZodObject<Properties<SetOperationErrorTemplateAction>> {
  return z.object<Properties<SetOperationErrorTemplateAction>>({
    errorTemplate: z.string().nullish(),
    id: z.string()
  })
}

export function SetOperationNameActionSchema(): z.ZodObject<Properties<SetOperationNameAction>> {
  return z.object<Properties<SetOperationNameAction>>({
    id: z.string(),
    name: z.string().nullish()
  })
}

export function SetOperationReducerActionSchema(): z.ZodObject<Properties<SetOperationReducerAction>> {
  return z.object<Properties<SetOperationReducerAction>>({
    id: z.string(),
    reducer: z.string().nullish()
  })
}

export function SetOperationSchemaActionSchema(): z.ZodObject<Properties<SetOperationSchemaAction>> {
  return z.object<Properties<SetOperationSchemaAction>>({
    id: z.string(),
    schema: z.string().nullish()
  })
}

export function SetOperationTemplateActionSchema(): z.ZodObject<Properties<SetOperationTemplateAction>> {
  return z.object<Properties<SetOperationTemplateAction>>({
    id: z.string(),
    template: z.string().nullish()
  })
}

export function SetStateSchemaActionSchema(): z.ZodObject<Properties<SetStateSchemaAction>> {
  return z.object<Properties<SetStateSchemaAction>>({
    schema: z.string()
  })
}

export function StateSchema(): z.ZodObject<Properties<State>> {
  return z.object<Properties<State>>({
    __typename: z.literal('State').optional(),
    examples: z.array(CodeExampleSchema()),
    schema: z.string()
  })
}

export const UndoSchema = z.enum(['UNDO']);

export function UndoActionSchema(): z.ZodObject<Properties<UndoAction>> {
  return z.object<Properties<UndoAction>>({
    input: z.number(),
    type: UndoSchema
  })
}

export function UpdateOperationExampleActionSchema(): z.ZodObject<Properties<UpdateOperationExampleAction>> {
  return z.object<Properties<UpdateOperationExampleAction>>({
    example: z.string(),
    id: z.string()
  })
}

export function UpdateStateExampleActionSchema(): z.ZodObject<Properties<UpdateStateExampleAction>> {
  return z.object<Properties<UpdateStateExampleAction>>({
    id: z.string(),
    newExample: z.string()
  })
}
