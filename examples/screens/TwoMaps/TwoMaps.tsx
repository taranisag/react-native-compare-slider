import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';

type ScreenTwoMapsProps = StackScreenProps<never, Screens.TWO_MAPS>;

export const ScreenTwoMaps: React.FC<ScreenTwoMapsProps> = () => {
  return (
    <SafeAreaView>
      <Text>Two maps comparison screen</Text>
    </SafeAreaView>
  );
};
