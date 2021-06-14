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
        onPress={onButtonPress(Screens.SIMPLE_IMAGES)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Compare simple images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onButtonPress(Screens.TWO_MAPS)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Compare two maps</Text>
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
