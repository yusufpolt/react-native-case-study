export type CartItem = {
  createdAt: string;
  name: string;
  image: any | string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
  quantity: number;
};

export type UserCart = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};
