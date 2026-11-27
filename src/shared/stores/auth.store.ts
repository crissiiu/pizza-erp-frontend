import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

const ACCESS_TOKEN_KEY = "accessToken";

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  setAccessToken: (accessToken) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    set({ accessToken });
  },
  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    set({ accessToken: null });
  },
}));
