import create from "zustand";
import { persist } from 'zustand/middleware'

let useStore = create((set) => ({
    darkMode: false,
    toggleMode: () => set((state) => ({ darkMode: !state.darkMode}) )
}))

persist(useStore)

export default useStore;