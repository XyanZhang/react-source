export type Type = any;
export type Key = any;
export type Props = any;
export type Ref = any;
export type ElementType = any;

export interface ReactElement {
	$$typeof: symbol | number;
	type: Type;
	key: Key | null;
	ref: Ref | null;
	props: Props;
	__mark: string;
}
