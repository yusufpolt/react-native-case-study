import React, {FC} from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Button, Paragraph, VectorIcons} from '..';
import {Colors} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {CartItem} from '../../utils/types';
import {useCart} from '../../providers/cart-provider';

type CartProps = {
  item: CartItem;
};

const Cart: FC<CartProps> = ({item}) => {
  const navigation: any = useNavigation();
  const {addItem, addFavorites, favorites} = useCart();

  const hasFavorite = favorites.some(
    favorites => favorites.favorite_id === item.id,
  );

  return (
    <Button
      onPress={() => navigation.navigate('ProductDetail', {product: item})}
      activeOpacity={0.9}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image || null}} />
        <Button
          onPress={() => addFavorites(item)}
          style={styles.favoriteButton}>
          <VectorIcons
            type="ant-design"
            name="star"
            size={30}
            color={hasFavorite ? Colors.yellow : Colors.gray_medium}
          />
        </Button>
      </View>
      <Paragraph color={Colors.primary}>{item?.price} ₺</Paragraph>
      <Paragraph weight="600">{item?.name}</Paragraph>
      <Button onPress={() => addItem(item)} style={styles.button}>
        <Paragraph color={Colors.backgroundColor}>Add to Cart</Paragraph>
      </Button>
    </Button>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 300,
    padding: 10,
    gap: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 4,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    borderRadius: 4,
  },
  favoriteButton: {
    position: 'absolute',
    top: 4,
    right: 10,
  },
});
