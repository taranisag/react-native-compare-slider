import React, { useRef } from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

import { Slider } from '../Slider';
import { ICompareSlider } from '../../types';

import { styles } from './styles';

export const CompareSlider: React.FC<ICompareSlider> = (props) => {
  const { width: deviceWidth } = useWindowDimensions();
  const {
    before,
    after,
    containerSize = { width: deviceWidth, height: deviceWidth / 2 },
    sliderSize,
    SliderComponent,
    sliderStyles,
    showSeparationLine,
  } = props;
  const { width: containerWidth, height: containerHeight } = containerSize;
  const translateX = useRef(new Animated.Value(0)).current;

  const boxWidth = useRef(Animated.add(translateX, containerWidth / 2)).current;

  return (
    <View style={[{ width: containerWidth, height: containerHeight }]}>
      <View
        style={{
          position: 'absolute',
          width: containerWidth,
          height: containerHeight,
        }}
      >
        <Animated.View
          style={[styles.item, styles.itemBefore, { width: boxWidth }]}
        >
          {before}
        </Animated.View>
        <Animated.View
          style={[styles.item, styles.itemAfter, { left: boxWidth }]}
        >
          <Animated.View
            style={[styles.itemAfterChild, { width: deviceWidth }]}
          >
            {after}
          </Animated.View>
        </Animated.View>
      </View>
      <Slider
        translateX={translateX}
        sliderSize={sliderSize}
        containerSize={containerSize}
        sliderStyles={sliderStyles}
        SliderComponent={SliderComponent}
        showSeparationLine={showSeparationLine}
      />
    </View>
  );
};
