import {axiosInstance} from '../utils';

export const handleGetProducts = async () => {
  try {
    const {data} = await axiosInstance.get(`/products`);
    return data;
  } catch (error) {
    console.log('handleGetProducts', error);
  }
};
