const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_CLIENT_API_URI;
const SERVER_API_BASE_URL = process.env.NEXT_SERVER_URL;

const DEFAULT_API_BASE_URL = PUBLIC_API_BASE_URL || SERVER_API_BASE_URL || "https://ideavault-server-sigma.vercel.app";

export const getApiBaseUrl = () => {
  return DEFAULT_API_BASE_URL.replace(/\/+$|^\s+|\s+$/g, "");
};

export const buildApiUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
};
