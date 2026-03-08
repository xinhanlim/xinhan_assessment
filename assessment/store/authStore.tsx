import { create } from "zustand"

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

interface AuthState {
    open: boolean;
    mode: "login" | "signup";
    user: User | null;
    openModal: (mode?: "login" | "signup") => void;
    closeModal: () => void;
    toggleModal: () => void;
    login: (email: string, password: string) => Promise<void>;
    signup: (data: { firstName: string; lastName: string; email: string; password: string; mobile: string; country: string; confirmPassword: string; }) => Promise<void>;
    logout: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
    open: false,
    mode: "login",
    user: null,
    openModal: (mode = "login") => set({ open: true, mode }),
    closeModal: () => set({ open: false }),
    toggleModal: () => set((state) => ({ mode: state.mode === "login" ? "signup" : "login" })),

    login: (email, password) => new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (email && password) {
                resolve();
            } else {
                reject(new Error("invalid credentials"));
            }
        }, 1000)
    }),
    signup: (data) =>
        new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (data.password === data.confirmPassword) {
                    set({ user: { firstName: data.firstName, lastName: data.lastName, email: data.email }, open: false });
                    resolve();
                } else {
                    reject(new Error("Passwords do not match"));
                }
            }, 1000);
        }),
    logout : () => set ({user : null}),
}))