import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainTabsLayout from './src/navigation/main-tabs-layout';
import {QueryClient, QueryClientProvider} from 'react-query';
import CartProvider from './src/providers/cart-provider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <NavigationContainer>
              <MainTabsLayout />
            </NavigationContainer>
          </CartProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
