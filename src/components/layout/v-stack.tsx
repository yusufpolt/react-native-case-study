import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type VStackProps = {
  children: React.ReactNode;
  customStyle: ViewStyle;
};

const VStack: FC<VStackProps> = ({children, customStyle}) => {
  return (
    <View style={StyleSheet.compose(customStyle, styles.container)}>
      {children}
    </View>
  );
};

export default VStack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
