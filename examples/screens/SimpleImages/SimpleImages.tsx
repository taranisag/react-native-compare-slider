import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import { CompareSlider } from '../../../src/components/CompareSlider';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageBefore = require('../../assets/images/before.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageAfter = require('../../assets/images/after.jpg');

type ScreenSimpleImagesProps = StackScreenProps<never, Screens.SIMPLE_IMAGES>;

export const ScreenSimpleImages: React.FC<ScreenSimpleImagesProps> = () => {
  return (
    <SafeAreaView>
      <CompareSlider
        before={<Image source={imageBefore} />}
        after={<Image source={imageAfter} />}
      />
    </SafeAreaView>
  );
};
