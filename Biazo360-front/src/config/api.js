export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  ENDPOINTS: {
    RASTREIO: "/encomenda/rastreio",
  },
  TIMEOUT: 10000,
  CACHE_REVALIDATE: 60,
  API_DEBUG: process.env.NODE_ENV === "development",
};

export function buildApiUrl(endpoint, params = {}) {
  const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);

  Object.keys(params).forEach((key) => {
    if (params[key] !== null && params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });

  return url.toString();
}
