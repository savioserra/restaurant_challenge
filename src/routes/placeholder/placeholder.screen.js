import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import {red} from '../../colors';

export const PlaceholderScreen = ({navigation, route, color = red, placeholderText, backButton}) => {
  const text = route?.params?.text || placeholderText || 'Placeholder Text';

  return (
    <View style={[StyleSheet.absoluteFill, styles.container, {backgroundColor: color}]}>
      <Text style={styles.placeholderText}>{text}</Text>

      {backButton && <Button title="Back" onPress={() => navigation.goBack()} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  placeholderText: {fontFamily: 'Comfortaa-Bold', fontSize: 36, color: 'white'},
});
