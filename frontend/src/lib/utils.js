import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // important for cookies
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export default api;