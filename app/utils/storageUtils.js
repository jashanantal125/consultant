import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageUtils = {
  setData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(`Data stored successfully for key: ${key}`);
    } catch (error) {
      console.error(`Error storing data for key ${key}:`, error);
    }
  },

  getData: async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      console.log(`Data retrieved successfully for key: ${key}`, data);
      return data;
    } catch (error) {
      console.error(`Error retrieving data for key ${key}:`, error);
      return null;
    }
  },

  removeData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Data removed successfully for key: ${key}`);
    } catch (error) {
      console.error(`Error removing data for key ${key}:`, error);
    }
  },
};

export default StorageUtils;
