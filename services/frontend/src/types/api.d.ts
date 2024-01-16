export interface Response<T> {
	data: T;
}

export interface GenericError<T> {
	code?: number;
	message: string;
	data?: T;
}
