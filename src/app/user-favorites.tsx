import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Cart, FocusAwareStatusBar, Header} from '../components';
import {useCart} from '../providers/cart-provider';
import {Colors} from '../constants';

const UserFavorites = () => {
  const {favorites} = useCart();
  return (
    <View>
      <Header title="Favorites" />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={favorites || null}
          renderItem={({item}) => <Cart item={item.cart} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            gap: 14,
            paddingBottom: 140,
            marginTop: 20,
          }}
          columnWrapperStyle={{gap: 20}}
        />
      </View>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
      />
    </View>
  );
};

export default UserFavorites;

const styles = StyleSheet.create({});
