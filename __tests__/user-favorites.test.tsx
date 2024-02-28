/**
 * @format
 */

import 'react-native';

import {describe, expect, test, jest} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import UserFavorites from '../src/app/user-favorites';

jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    SafeAreaProvider: jest
      .fn()
      .mockImplementation(({children}: any) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({children}: any) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

jest.mock('@react-navigation/native', () => {
  const actualNav: any = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useIsFocused: jest.fn().mockReturnValue(true),
  };
});

jest.mock('../src/providers/cart-provider', () => ({
  useCart: () => ({
    favorites: [
      {
        cart: {},
      },
    ],
  }),
}));

jest.mock('../src/providers/cart-provider', () => ({
  useCart: () => ({
    favorites: [
      {
        cart: {
          createdAt: '2023-07-17T07:21:02.529Z',
          name: 'Bentley Focus',
          image: 'https://loremflickr.com/640/480/food',
          price: '51.00',
          description:
            'Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.',
          model: 'CTS',
          brand: 'Lamborghini',
          id: '1',
        },
      },
    ],
  }),
}));

describe('<UserFavorites/>', () => {
  test('renders UserFavorites page with correct content', () => {
    const {getByText, queryByTestId} = render(<UserFavorites />);

    const headerElement = getByText('Favorites');
    expect(headerElement).toBeDefined();

    const favoriteProduct1 = getByText('Bentley Focus');
    expect(favoriteProduct1).toBeDefined();
    const favoriteProductPrice1 = getByText('51.00 ₺');
    expect(favoriteProductPrice1).toBeDefined();

    const flatListElement = queryByTestId('flat-list');
    expect(flatListElement).toBeDefined();

    const statusBarElement = queryByTestId('status-bar');
    expect(statusBarElement).toBeDefined();
  });
});
