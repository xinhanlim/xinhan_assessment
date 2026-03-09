import { create } from "zustand"

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface AuthState {
    open: boolean;
    mode: "login" | "signup";
    user: User | null;
    users: User[];
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
    users: [],
    openModal: (mode = "login") => set({ open: true, mode }),
    closeModal: () => set({ open: false }),
    toggleModal: () => set((state) => ({ mode: state.mode === "login" ? "signup" : "login" })),

    login: async (email, password) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const {users} = get();
        const existingUser = users.find((u)=>u.email === email)

        if(!existingUser){
            throw new Error("Invalid Email/Password")
        }

        if(existingUser.password !== password){
            throw new Error("Invalid Email/Password")
        }

        set({
            user: existingUser,
            open: false
        });
    },

    signup: async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { users } = get();
        if (users.find((u) => u.email === data.email)) {
            throw new Error("Email Already Registered")
        }

        const newUser= {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        }

        set({
            users: [...users, newUser],
            user: newUser,
            open: false
        });
    },
    logout: () => set({ user: null }),
}));
