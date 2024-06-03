import {create} from "zustand";

const useAuthStore = create((set) => ({
    user:null,
    login:(user) =>set({user})
}))