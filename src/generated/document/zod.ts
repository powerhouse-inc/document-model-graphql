import { z } from 'zod'
import { Action, DocumentFile, Load_State, LoadStateAction, LoadStateActionInput, LoadStateActionStateInput, Operation, Prune, PruneAction, PruneActionInput, Redo, RedoAction, Set_Name, SetNameAction, SetNameOperation, Undo, UndoAction } from './'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function ActionSchema(): z.ZodObject<Properties<Action>> {
  return z.object<Properties<Action>>({
    __typename: z.literal('Action').optional(),
    type: z.string()
  })
}

export function BaseActionSchema() {
  return z.union([LoadStateActionSchema(), PruneActionSchema(), RedoActionSchema(), SetNameActionSchema(), UndoActionSchema()])
}

export function DocumentFileSchema(): z.ZodObject<Properties<DocumentFile>> {
  return z.object<Properties<DocumentFile>>({
    __typename: z.literal('DocumentFile').optional(),
    data: z.string(),
    extension: z.string().nullish(),
    fileName: z.string().nullish(),
    mimeType: z.string()
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

export function OperationSchema(): z.ZodObject<Properties<Operation>> {
  return z.object<Properties<Operation>>({
    __typename: z.literal('Operation').optional(),
    hash: z.string(),
    index: z.number(),
    timestamp: z.string().datetime(),
    type: z.string()
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

export const Set_NameSchema = z.enum(['SET_NAME']);

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

export const UndoSchema = z.enum(['UNDO']);

export function UndoActionSchema(): z.ZodObject<Properties<UndoAction>> {
  return z.object<Properties<UndoAction>>({
    input: z.number(),
    type: UndoSchema
  })
}
