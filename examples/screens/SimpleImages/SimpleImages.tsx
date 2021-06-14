import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';

type ScreenSimpleImagesProps = StackScreenProps<never, Screens.SIMPLE_IMAGES>;

export const ScreenSimpleImages: React.FC<ScreenSimpleImagesProps> = () => {
  return (
    <SafeAreaView>
      <Text>Simple images comparison screen</Text>
    </SafeAreaView>
  );
};
