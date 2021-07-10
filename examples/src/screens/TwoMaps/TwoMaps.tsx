import { CompareSlider } from 'react-native-compare-slider';
import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import RNM, { MAP_TYPES, PROVIDER_GOOGLE } from 'react-native-maps';

import { Screens } from '../Screens';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: windowHeight,
    width: windowWidth,
  },
});

type ScreenTwoMapsProps = StackScreenProps<never, Screens.TWO_MAPS>;

export const ScreenTwoMaps: React.FC<ScreenTwoMapsProps> = () => {
  return (
    <SafeAreaView>
      <CompareSlider
        containerSize={{ width: 300, height: 200 }}
        before={
          <RNM
            provider={PROVIDER_GOOGLE}
            mapType={MAP_TYPES.SATELLITE}
            initialRegion={{
              latitude: 33.61099089454942,
              longitude: -90.79735743461134,
              latitudeDelta: 1,
              longitudeDelta: 1,
            }}
            style={styles.map}
          />
        }
        after={
          <RNM
            provider={PROVIDER_GOOGLE}
            mapType={MAP_TYPES.STANDARD}
            initialRegion={{
              latitude: 33.61099089454942,
              longitude: -90.79735743461134,
              latitudeDelta: 1,
              longitudeDelta: 1,
            }}
            style={styles.map}
          />
        }
      />
    </SafeAreaView>
  );
};
