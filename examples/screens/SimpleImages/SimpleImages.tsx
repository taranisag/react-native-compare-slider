import React from 'react';
import { SafeAreaView, Dimensions, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../Screens';
import Compare, { DefaultDragger } from '../../../src/components/Slider';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageBefore = require('../../../assets/images/before.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageAfter = require('../../../assets/images/after.jpg');

type ScreenSimpleImagesProps = StackScreenProps<never, Screens.SIMPLE_IMAGES>;

const deviceWidth = Dimensions.get('window').width;

export const ScreenSimpleImages: React.FC<ScreenSimpleImagesProps> = () => {
  return (
    <SafeAreaView>
      <Compare
        initial={deviceWidth / 2}
        draggerWidth={50}
        width={deviceWidth}
        itemOne={
          <Image
            source={imageBefore}
            style={{ width: deviceWidth, height: deviceWidth / 2 }}
          />
        }
        itemTwo={
          <Image
            source={imageAfter}
            style={{ width: deviceWidth, height: deviceWidth / 2 }}
          />
        }
      >
        <DefaultDragger />
      </Compare>
    </SafeAreaView>
  );
};
