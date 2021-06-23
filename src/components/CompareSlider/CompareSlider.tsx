import React, { useRef } from 'react';
import { View, Animated, StyleSheet, useWindowDimensions } from 'react-native';

import { Slider } from '../Dragger';
import { ICompareSlider } from '../../types';
import { SLIDER_SIZE } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  itemBefore: {
    left: 0,
  },
  itemAfter: {
    right: 0,
  },
  itemAfterChild: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export const CompareSlider: React.FC<ICompareSlider> = (props) => {
  const {
    before,
    after,
    containerSize,
    sliderSize = { width: SLIDER_SIZE, height: SLIDER_SIZE },
  } = props;
  const { width: sliderWidth } = sliderSize;
  const { width: deviceWidth } = useWindowDimensions();
  const touchX = useRef(new Animated.Value(deviceWidth / 2)).current;
  const translateX = useRef(
    Animated.add(touchX, new Animated.Value(-sliderWidth / 2))
  ).current;

  const boxWidth = useRef(
    Animated.add(new Animated.Value(sliderWidth / 2), translateX)
  ).current;

  const containerWidth = containerSize?.width || deviceWidth;
  const containerHeight = containerSize?.height || deviceWidth / 2;
  return (
    <View
      style={[
        styles.container,
        { width: containerWidth, height: containerHeight },
      ]}
    >
      <Animated.View
        style={[styles.item, styles.itemBefore, { width: boxWidth }]}
      >
        {before}
      </Animated.View>
      <Animated.View
        style={[styles.item, styles.itemAfter, { left: boxWidth }]}
      >
        <Animated.View style={[styles.itemAfterChild, { width: deviceWidth }]}>
          {after}
        </Animated.View>
      </Animated.View>
      <Slider touchX={touchX} translateX={translateX} sliderSize={sliderSize} />
    </View>
  );
};
