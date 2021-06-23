import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import { CompareSlider } from '../../../src/components/CompareSlider';

type ScreenPlaygroundProps = StackScreenProps<never, Screens.TWO_MAPS>;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageBefore = require('../../../assets/images/before.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageAfter = require('../../../assets/images/after.jpg');

export const ScreenPlayground: React.FC<ScreenPlaygroundProps> = () => {
  return (
    <SafeAreaView>
      <CompareSlider
        before={<Image source={imageBefore} resizeMode="cover" />}
        after={<Image source={imageAfter} resizeMode="cover" />}
      />
    </SafeAreaView>
  );
};
