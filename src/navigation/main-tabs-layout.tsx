import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, UserCart, UserFavorites, UserProfile} from '../app';
import {VectorIcons} from '../components';
import {Colors} from '../constants';
import HomeLayout from './home-layout';
import { useCart } from '../providers/cart-provider';

const Tab = createBottomTabNavigator();

const TAB_BAR_ICON: string | any = {
  HomeLayout: 'home',
  UserCart: 'shoppingcart',
  UserFavorites: 'staro',
  UserProfile: 'user',
};

const MainTabsLayout = () => {
  const {items} =useCart()
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <VectorIcons
              type="ant-design"
              name={TAB_BAR_ICON[route.name]}
              size={34}
              color={color}
            />
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: Colors.text,
        tabBarActiveTintColor: Colors.primary,
      })}>
      <Tab.Screen name="HomeLayout" component={HomeLayout} />
      <Tab.Screen
        options={{
          tabBarBadge: items?.length,
          tabBarBadgeStyle: {
            fontFamily: 'Montserrat',
            fontSize: 14,
          },
        }}
        name="UserCart"
        component={UserCart}
      />
      <Tab.Screen name="UserFavorites" component={UserFavorites} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default MainTabsLayout;

const styles = StyleSheet.create({});
