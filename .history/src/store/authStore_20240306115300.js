import {create} from "zustand";

const useAuthStore = create((set) => ({
    user:null,
    login:(user) => set ({user}),
    logout:() => set({user:null}),
    setUser:(user) => set({user})
}));

export default 