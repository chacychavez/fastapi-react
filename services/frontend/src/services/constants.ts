// eslint-disable-next-line no-console
console.log('ENV:', import.meta.env.MODE);

export const GET_BASE_URL = () => {
	return 'http://localhost:5050'
};

// Users
export const LOGIN_ENDPOINT = `/login/`;
export const REGISTRATION_ENDPOINT = `/registration/`;
export const DETAILS_ENDPOINT = `/users/whoami`;

// Notes
export const NOTES_ENDPOINT = '/notes';
export const NOTE_ENDPOINT = (noteId: number) => `/note/${noteId}`;