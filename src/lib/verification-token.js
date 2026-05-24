// Client helper to retrieve a verification token from common locations.
export function getVerificationToken() {
  if (typeof window === "undefined") return null;

  // 1) Explicit global (injected by server or script)
  if (window.__VERIFICATION_TOKEN__) return window.__VERIFICATION_TOKEN__;

  // 2) localStorage
  try {
    const ls = localStorage.getItem("verification_token");
    if (ls) return ls;
  } catch (e) {
    // ignore
  }

  // 3) cookie named verification_token
  try {
    const match = document.cookie.match(/(?:^|; )verification_token=([^;]+)/);
    if (match) return decodeURIComponent(match[1]);
  } catch (e) {
    // ignore
  }

  return null;
}

export default getVerificationToken;
