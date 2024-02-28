import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  FocusAwareStatusBar,
  Header,
  Paragraph,
  VStack,
} from '../../components';
import {Colors} from '../../constants';
import {useCart} from '../../providers/cart-provider';

const ProductDetail = () => {
  const router: any = useRoute();
  const product = router?.params.product || null;
  const {addItem} = useCart();
  return (
    <View style={{flex: 1}}>
      <Header hasBackButton title={product.name} />
      <View style={styles.container}>
        <View style={{flex: 6}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{height: '78%'}}>
            <View style={{gap: 14}}>
              <Image
                style={styles.image}
                source={{uri: product?.image || null}}
              />
              <Paragraph numberOfLines={1} weight={'800'} size={24}>
                {product.name}
              </Paragraph>
              <Paragraph customStyle={styles.decsription}>
                {product.description}
              </Paragraph>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <VStack customStyle={styles.footer}>
            <View>
              <Paragraph size={18} color={Colors.primary}>
                Price:
              </Paragraph>
              <Paragraph weight={'700'} size={20}>
                {product?.price} ₺
              </Paragraph>
            </View>
            <Button onPress={() => addItem(product)} style={styles.button}>
              <Paragraph size={16} color={Colors.backgroundColor}>
                Add to Cart
              </Paragraph>
            </Button>
          </VStack>
        </View>
      </View>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
      />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  decsription: {
    letterSpacing: 1,
    lineHeight: 20,
  },
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    width: '44%',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
