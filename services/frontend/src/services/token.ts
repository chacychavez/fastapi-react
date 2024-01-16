const isDev = import.meta.env.MODE === 'development';
const LOGIN_FLAG = 'LOGGED_IN_FLAG';

// Main methods to retrieve tokens or `False` in case of prod builds
// Follow component naming conventions
const AuthToken = (): string => {
	if (isDev) {
		return localStorage.getItem(DEV_AUTH_TOKEN_KEY) ?? '';
	}

	return '';
};

const RefreshToken = () => {
	if (isDev) {
		return localStorage.getItem(DEV_REFRESH_TOKEN_KEY);
	}
	return false;
};

// Helper methods to set/update or remove tokens
// Follow method naming conventions
const setAuthToken = (token: string) => {
	if (isDev) {
		localStorage.setItem(DEV_AUTH_TOKEN_KEY, token);
	}
};

const setRefreshToken = (token: string) => {
	if (isDev) {
		localStorage.setItem(DEV_REFRESH_TOKEN_KEY, token);
	}
};

const isLoggedIn = (): boolean => {
	return localStorage.getItem(LOGIN_FLAG) === '_';
};

const removeLoginFlag = () => {
	localStorage.removeItem(LOGIN_FLAG);
};

const setLoginFlag = () => {
	return localStorage.setItem(LOGIN_FLAG, '_');
};

export {
	AuthToken,
	RefreshToken,
	isLoggedIn,
	removeLoginFlag,
	setAuthToken,
	setLoginFlag,
	setRefreshToken,
};
