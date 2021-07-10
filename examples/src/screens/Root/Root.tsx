import React, { useCallback } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';

import { styles } from './styles';

type ScreenRootProps = StackScreenProps<never, Screens.ROOT>;

export const ScreenRoot: React.FC<ScreenRootProps> = (props) => {
  const { navigation } = props;

  const onButtonPress = useCallback(
    (name: string) => () => {
      navigation.navigate({ name, key: name });
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        onPress={onButtonPress(Screens.IMAGES)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Simple Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onButtonPress(Screens.TWO_MAPS)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Compare Two Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onButtonPress(Screens.CUSTOM_SLIDER_COMPONENT)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Custom Slider Component</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onButtonPress(Screens.PLAYGROUND)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Playground</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
