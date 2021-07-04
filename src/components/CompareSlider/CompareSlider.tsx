import React, { useRef } from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

import { Slider } from '../Slider';
import { DEFAULT_SLIDER_SIZE } from '../../utils/constants';
import { ICompareSlider } from '../../types';

import { styles } from './styles';

export const CompareSlider: React.FC<ICompareSlider> = (props) => {
  const {
    before,
    after,
    containerSize,
    sliderSize = DEFAULT_SLIDER_SIZE,
    SliderComponent,
    sliderStyles,
    showSeparationLine,
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
      <Slider
        touchX={touchX}
        translateX={translateX}
        sliderSize={sliderSize}
        containerHeight={containerHeight}
        sliderStyles={sliderStyles}
        SliderComponent={SliderComponent}
        showSeparationLine={showSeparationLine}
      />
    </View>
  );
};
