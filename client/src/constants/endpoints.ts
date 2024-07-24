// const BASE_URL = "http://localhost:3000";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const LOGIN = "/login";
const VERIFY = "/verify";
const ME = "/me";

export { BASE_URL, LOGIN, VERIFY, ME };
