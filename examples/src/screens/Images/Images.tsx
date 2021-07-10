import { CompareSlider } from 'react-native-compare-slider';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, useWindowDimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Screens } from '../Screens';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageBefore = require('../../../assets/images/before.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageAfter = require('../../../assets/images/after.jpg');

type ScreenImagesProps = StackScreenProps<never, Screens.IMAGES>;

export const ScreenImages: React.FC<ScreenImagesProps> = () => {
  const { width, height } = useWindowDimensions();
  const [size, setSize] = useState({ width, height: width / 2 });

  useEffect(() => {
    if (width > height) {
      setSize({ width: height, height: height / 1.5 });
    }
  }, [width, height]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CompareSlider
        before={<Image source={imageBefore} />}
        after={<Image source={imageAfter} />}
        containerSize={size}
      />
    </SafeAreaView>
  );
};
