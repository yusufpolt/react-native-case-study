import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {deviceStorage} from '../utils';

type CartType = {
  items: any[];
  addItem: (cart: any) => void;
  updateQuantity: (itemId: string, amount: 1 | -1) => void;
  total: number;
  favorites: any[];
  addFavorites: (cart: any) => void;
};

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
  favorites: [],
  addFavorites: () => {},
});

const CartProvider = ({children}: PropsWithChildren) => {
  const [items, setItems] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const loadCartData = () => {
      const storedItems = deviceStorage.getItem('cartItems');
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }

      const storedFavorites = deviceStorage.getItem('favoriteItems');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };

    loadCartData();
  }, []);

  const addItem = async (cart: any) => {
    const existingItem = items.find(item => item.cart_id === cart.id);

    if (existingItem) {
      updateQuantity(existingItem.cart_id, 1);
      return;
    }

    const newCartItem: any = {
      cart_id: cart.id,
      cart,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
    deviceStorage.setItem('cartItems', JSON.stringify([newCartItem, ...items]));
  };

  const updateQuantity = (itemId: string, amount: 1 | -1) => {
    const updatedItem = items
      .map(item =>
        item.cart_id !== itemId
          ? item
          : {
              ...item,
              quantity: item.quantity + amount,
            },
      )
      .filter(item => item.quantity > 0);

    setItems(updatedItem);
    deviceStorage.setItem('cartItems', JSON.stringify(updatedItem));
  };

  const total = items.reduce(
    (sum, item) => (sum += Number(item.cart.price) * item.quantity),
    0,
  );

  const addFavorites = (cart: any) => {
    const existingItem = favorites.find(item => item.favorite_id === cart.id);

    if (existingItem) {
      const updatedFavorites = favorites.filter(
        item => item.favorite_id !== cart.id,
      );
      setFavorites(updatedFavorites);
      deviceStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
      return;
    }

    const newFavoritesItem: any = {
      favorite_id: cart.id,
      cart,
    };
    setFavorites([newFavoritesItem, ...favorites]);
    deviceStorage.setItem(
      'favoriteItems',
      JSON.stringify([newFavoritesItem, ...favorites]),
    );
  };

  return (
    <CartContext.Provider
      value={{items, addItem, updateQuantity, total, favorites, addFavorites}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
