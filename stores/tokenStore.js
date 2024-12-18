import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTokenStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (newToken) => set({ token: newToken }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'user-token', // The key to save to AsyncStorage
      storage: AsyncStorage, // Use AsyncStorage for persistence
    }
  )
);

export default useTokenStore;
