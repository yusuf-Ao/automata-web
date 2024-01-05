import { API } from "../config";

export const emailAvailability = () => API.get(`/auth/email-availability`)


export const usernameAvailability = () => API.get(`/auth/username-availability`)
