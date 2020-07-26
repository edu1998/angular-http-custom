export interface ResponseHttpType<T> {
	message: string;
	data: T;
	code: number;
}
