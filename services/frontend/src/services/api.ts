import axios, { AxiosResponse } from 'axios';

import { Response } from '../types/api';

import { Note } from '../types/notes';
import { DETAILS_ENDPOINT, GET_BASE_URL, LOGIN_ENDPOINT, NOTES_ENDPOINT, NOTE_ENDPOINT, REGISTRATION_ENDPOINT } from './constants';

// axios instance with interceptor
export const apiWOI = axios.create();

const sendData = async <T>(
	method: string,
	endpoint: string,
	data: object
): Promise<T | undefined> => {
	const response: AxiosResponse<T> = await apiWOI({
		method,
		url: `${GET_BASE_URL()}${endpoint}`,
		data,
		withCredentials: true,
	});
	return response.data;
};

const requestData = async <T>(endpoint: string): Promise<T | undefined> => {
	const config = {
		withCredentials: true,
	};
	const response: Response<T> = await apiWOI.get(
		`${GET_BASE_URL()}${endpoint}`,
		config
	);
	return response.data;
};

export const loginUserFn = async (data: FormData) => {
	const responseData = await sendData('post', LOGIN_ENDPOINT, data);
	return responseData;
};

export const registerUserFn = async (data: FormData) => {
	const responseData = await sendData('post', REGISTRATION_ENDPOINT, data);
	return responseData;
};


export const viewMeFn = async () => requestData(DETAILS_ENDPOINT);

export const getNotesFn = async () => requestData<Note[]>(NOTES_ENDPOINT);

export const getNoteFn = async (noteId: number) => requestData<Note>(NOTE_ENDPOINT(noteId));

export const createNoteFn = async (data: Partial<Note>) => {
	const responseData = await sendData('post', NOTES_ENDPOINT, data);
	return responseData;
};

export const updateNoteFn = async ( note: Pick<Note, "id" | "title" | "content">) => {
	const responseData = await sendData('patch', NOTE_ENDPOINT(note.id), note);
	return responseData;
};

export const deletNoteFn = async (noteId: number) => {
	const responseData = await sendData('delete', NOTE_ENDPOINT(noteId), {});
	return responseData;
};
