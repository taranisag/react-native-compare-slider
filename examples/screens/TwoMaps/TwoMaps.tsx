import React from 'react';
import { Text, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import RNM, { MAP_TYPES, PROVIDER_GOOGLE } from 'react-native-maps';

import { Screens } from '../Screens';

const { width: dimensionsWindowWidth, height: dimensionsWindowHeight } =
  Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: dimensionsWindowHeight,
    width: dimensionsWindowWidth,
  },
});

type ScreenTwoMapsProps = StackScreenProps<never, Screens.TWO_MAPS>;

export const ScreenTwoMaps: React.FC<ScreenTwoMapsProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Two maps comparison screen</Text>
      <RNM
        provider={PROVIDER_GOOGLE}
        mapType={MAP_TYPES.SATELLITE}
        initialRegion={{
          latitude: 33.61099089454942,
          longitude: -90.79735743461134,
          latitudeDelta: 0.007,
          longitudeDelta: 0.007,
        }}
        style={styles.map}
      />
    </SafeAreaView>
  );
};
