import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import RNM, { MAP_TYPES, PROVIDER_GOOGLE } from 'react-native-maps';

import { Screens } from '../Screens';
import Compare, { DefaultDragger } from '../../../src/components/Slider';

const deviceWidth = Dimensions.get('window').width;

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
    <SafeAreaView>
      <Compare
        initial={deviceWidth / 2}
        draggerWidth={50}
        width={deviceWidth - 20}
        itemOne={
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
        itemTwo={
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
      >
        <DefaultDragger />
      </Compare>
    </SafeAreaView>
  );
};
