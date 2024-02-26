import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
  // Yerel depolama işlevleri
  async saveItem(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error: string | any) {
      console.error('AsyncStorage Hatası: ', error.message);
    }
  },

  async getItem(key: any) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error: string | any) {
      console.error('AsyncStorage Hatası: ', error.message);
      return null;
    }
  },

  async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: string | any) {
      console.error('AsyncStorage Hatası: ', error.message);
    }
  },
};

export default deviceStorage;
