import React from 'react';
import { SafeAreaView, Dimensions, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import Compare, { DefaultDragger } from '../../../src/components/Slider';

type ScreenSimpleImagesProps = StackScreenProps<never, Screens.SIMPLE_IMAGES>;

const deviceWidth = Dimensions.get('window').width;

export const ScreenSimpleImages: React.FC<ScreenSimpleImagesProps> = () => {
  return (
    <SafeAreaView>
      <Compare
        initial={deviceWidth / 2}
        draggerWidth={50}
        width={deviceWidth - 20}
        itemOne={
          <Image
            source={require('../../../assets/images/before.jpg')}
            style={{ width: deviceWidth - 20, height: deviceWidth / 2 }}
          />
        }
        itemTwo={
          <Image
            source={require('../../../assets/images/after.jpg')}
            style={{ width: deviceWidth - 20, height: deviceWidth / 2 }}
          />
        }
      >
        <DefaultDragger />
      </Compare>
    </SafeAreaView>
  );
};
