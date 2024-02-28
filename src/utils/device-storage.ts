import {MMKV} from 'react-native-mmkv';

const mmkv = new MMKV();

const deviceStorage = {
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return value;
  },
  removeItem: (key: string) => {
    mmkv.delete(key);
  },
  setMultipleItem: (key: string, item: any) => {
    mmkv.set(key, item);
  },
};

export default deviceStorage;
