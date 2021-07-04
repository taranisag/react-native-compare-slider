import React from 'react';
import { Animated, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { DEFAULT_SLIDER_SIZE } from '../../utils/constants';
import { IDefaultSliderProps, ISliderProps } from '../../types';

import { styles } from './styles';

const initialAnimatedValue = new Animated.Value(0);

const DefaultSlider: React.FC<IDefaultSliderProps> = ({
  sliderSize = DEFAULT_SLIDER_SIZE,
  sliderStyles,
}) => {
  return (
    <View style={[styles.slider, sliderStyles, sliderSize]}>
      <View style={[styles.sliderArrow, styles.sliderArrowRight]} />
      <View style={[styles.sliderArrow, styles.sliderArrowLeft]} />
    </View>
  );
};

export const Slider: React.FC<ISliderProps> = (props) => {
  const {
    touchX = initialAnimatedValue,
    translateX = initialAnimatedValue,
    containerHeight,
    sliderSize = DEFAULT_SLIDER_SIZE,
    sliderStyles,
    showSeparationLine = true,
    separationLineStyles,
    SliderComponent = (
      <DefaultSlider sliderSize={sliderSize} sliderStyles={sliderStyles} />
    ),
  } = props;

  const onPanGestureEvent = Animated.event([{ nativeEvent: { x: touchX } }], {
    useNativeDriver: false,
  });

  return (
    <PanGestureHandler
      activeOffsetX={[-0, 0]}
      onGestureEvent={onPanGestureEvent}
    >
      <Animated.View>
        <Animated.View
          style={[styles.animatedView, { transform: [{ translateX }] }]}
        >
          {showSeparationLine && (
            <View
              style={[
                styles.separationLine,
                { height: containerHeight },
                separationLineStyles,
              ]}
            />
          )}
          {SliderComponent}
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};
