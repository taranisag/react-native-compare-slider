import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import { CompareSlider } from '../../../src/components/CompareSlider';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageBefore = require('../../assets/images/before.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageAfter = require('../../assets/images/after.jpg');

type ScreenCustomSliderComponentProps = StackScreenProps<
  never,
  Screens.CUSTOM_SLIDER_COMPONENT
>;

const sliderSize = { width: 70, height: 70 };

const styles = StyleSheet.create({
  slider: {
    ...sliderSize,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  sliderText: {
    fontSize: 25,
  },
});

export const ScreenCustomSliderComponent: React.FC<ScreenCustomSliderComponentProps> =
  () => {
    return (
      <SafeAreaView>
        <CompareSlider
          before={<Image source={imageBefore} />}
          after={<Image source={imageAfter} />}
          sliderSize={sliderSize}
          SliderComponent={
            <View style={styles.slider}>
              <Text style={styles.sliderText}>{'<    >'}</Text>
            </View>
          }
          showSeparationLine={false}
        />
      </SafeAreaView>
    );
  };
