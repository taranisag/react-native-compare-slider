import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Screens } from '../screens/Screens';
import {
  ScreenPlayground,
  ScreenRoot,
  ScreenSimpleImages,
  ScreenTwoMaps,
} from '../screens';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerBackTitle: 'Back',
  headerShown: true,
};

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Screens.ROOT}
    >
      <Stack.Screen name={Screens.ROOT} component={ScreenRoot} />
      <Stack.Screen
        name={Screens.SIMPLE_IMAGES}
        component={ScreenSimpleImages}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name={Screens.TWO_MAPS}
        component={ScreenTwoMaps}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name={Screens.PLAYGROUND}
        component={ScreenPlayground}
        options={defaultScreenOptions}
      />
    </Stack.Navigator>
  );
}

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
