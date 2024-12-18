import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserStore = create((set) => ({
  user: null, // The initial user data state
  setUserData: (userData) => set({ user: userData }),
  clearUserData: () => set({ user: null }),
}));

export default useUserStore;
