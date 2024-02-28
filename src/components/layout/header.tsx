import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Button, Paragraph, VectorIcons} from '..';
import {Colors} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

const Header: FC<HeaderProps> = ({title, hasBackButton = false}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  let headerRight;

  if (hasBackButton) {
    headerRight = (
      <Button onPress={() => navigation.goBack()}>
        <VectorIcons
          type="ant-design"
          name="arrowleft"
          size={34}
          color={Colors.backgroundColor}
        />
      </Button>
    );
  }

  return (
    <View
      style={[styles.container, {paddingTop: Platform.OS === 'ios' ? top : 0}]}>
      {headerRight}
      <Paragraph
        numberOfLines={1}
        size={24}
        weight={'800'}
        color={Colors.backgroundColor}>
        {title}
      </Paragraph>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    gap: 50,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    height: Platform.OS === "ios" ?  100 : 60,
    alignItems: 'center',
  },
});
