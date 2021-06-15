import React from 'react';
import { SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import { Container } from '../../../src/components/Container';

type ScreenPlaygroundProps = StackScreenProps<never, Screens.TWO_MAPS>;

export const ScreenPlayground: React.FC<ScreenPlaygroundProps> = () => {
  return (
    <SafeAreaView>
      <Container />
    </SafeAreaView>
  );
};
