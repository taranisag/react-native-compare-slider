import React, { useState } from 'react';
import { ScrollView, Image, Dimensions } from 'react-native';
import { Compare, Before, After, DefaultDragger } from '../TempSlider';

const deviceWidth = Dimensions.get('window').width;

export const Container: React.FC = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function onMoveStart() {
    setScrollEnabled(false);
  }

  function onMoveEnd() {
    setScrollEnabled(true);
  }

  return (
    <ScrollView style={{ marginTop: 50 }} scrollEnabled={scrollEnabled}>
      <Compare
        initial={deviceWidth / 2}
        draggerWidth={50}
        onMoveStart={onMoveStart}
        onMoveEnd={onMoveEnd}
      >
        <Before>
          <Image
            source={require('../../../assets/images/before.jpg')}
            style={{ width: deviceWidth, height: deviceWidth / 2 }}
          />
        </Before>
        <After>
          <Image
            source={require('../../../assets/images/after.jpg')}
            style={{ width: deviceWidth, height: deviceWidth / 2 }}
          />
        </After>
        <DefaultDragger />
      </Compare>
    </ScrollView>
  );
};
