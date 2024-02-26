import {StyleSheet, Text, TextProps, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';

type ParagraphProps = TextProps & {
  customStyle?: ViewStyle;
};

const Paragraph: FC<ParagraphProps> = ({children, customStyle, ...props}) => {
  return (
    <Text style={StyleSheet.compose(styles.text, customStyle)} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
  },
});
