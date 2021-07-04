import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import { CompareSlider } from '../../../src/components/CompareSlider';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageBefore = require('../../assets/images/before.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageAfter = require('../../assets/images/after.jpg');

type ScreenImagesProps = StackScreenProps<never, Screens.IMAGES>;

export const ScreenImages: React.FC<ScreenImagesProps> = () => {
  return (
    <SafeAreaView>
      <CompareSlider
        before={<Image source={imageBefore} />}
        after={<Image source={imageAfter} />}
      />
    </SafeAreaView>
  );
};
