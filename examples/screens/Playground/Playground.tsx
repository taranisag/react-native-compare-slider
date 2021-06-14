import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';

type ScreenPlaygroundProps = StackScreenProps<never, Screens.TWO_MAPS>;

export const ScreenPlayground: React.FC<ScreenPlaygroundProps> = () => {
  return (
    <SafeAreaView>
      <Text>Playground for tests</Text>
    </SafeAreaView>
  );
};
