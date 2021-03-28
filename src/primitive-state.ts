import { BaseState } from './base-state';


/**
 *	@class
 *	@abstract
 *	@classdes Primitive state class. Used for save state with Primitive type (Like boolean, number or string).
 */
export class PrimitiveState<T> extends BaseState<T> {}