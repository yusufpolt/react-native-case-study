import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  Button,
  FocusAwareStatusBar,
  Header,
  Paragraph,
  VStack,
  VectorIcons,
} from '../components';
import {Colors} from '../constants';
import {useCart} from '../providers/cart-provider';

const RenderItem = ({item, updateQuantity}: any) => {
  return (
    <VStack
      customStyle={{
        paddingBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Paragraph size={16}>{item.cart.name}</Paragraph>
        <Paragraph color={Colors.primary}>{item.cart.price}₺</Paragraph>
      </View>
      <VStack customStyle={{alignItems: 'center'}}>
        <Button
          onPress={() => updateQuantity(item.cart_id, -1)}
          style={{
            width: 36,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.gray_light,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}>
          <VectorIcons
            type="ant-design"
            name="minus"
            color={Colors.text}
            size={14}
          />
        </Button>
        <View
          style={{
            width: 40,
            height: 36,
            backgroundColor: Colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Paragraph size={16} color={Colors.backgroundColor}>
            {item.quantity}
          </Paragraph>
        </View>
        <Button
          onPress={() => updateQuantity(item.cart_id, 1)}
          style={{
            width: 36,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.gray_light,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <VectorIcons
            type="ant-design"
            name="plus"
            color={Colors.text}
            size={14}
          />
        </Button>
      </VStack>
    </VStack>
  );
};

const UserCart = () => {
  const {items, updateQuantity, total} = useCart();

  return (
    <View style={styles.container}>
      <Header title={'E-Market'} />
      <View style={{flex: 6, marginTop: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          data={items}
          renderItem={({item}) => (
            <RenderItem item={item} updateQuantity={updateQuantity} />
          )}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <VStack
          customStyle={{
            paddingBottom: 10,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View>
            <Paragraph size={16} color={Colors.primary}>
              Total:
            </Paragraph>
            <Paragraph size={20} weight={'700'}>
              {total}₺
            </Paragraph>
          </View>
          <Button style={styles.complateButton}>
            <Paragraph size={20} weight={'600'} color={Colors.backgroundColor}>
              Complate
            </Paragraph>
          </Button>
        </VStack>
      </View>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
      />
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  complateButton: {
    width: '50%',
    height: 42,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
