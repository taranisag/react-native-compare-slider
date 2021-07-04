import React, { useCallback, useRef } from 'react';
import { Animated, View } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
import { HandlerStateChangeEvent } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

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
    containerSize: { height: containerHeight },
    translateX = initialAnimatedValue,
    sliderSize = DEFAULT_SLIDER_SIZE,
    sliderStyles,
    showSeparationLine = true,
    separationLineStyles,
    SliderComponent = (
      <DefaultSlider sliderSize={sliderSize} sliderStyles={sliderStyles} />
    ),
  } = props;
  const lastOffsetX = useRef(0);

  const onPanGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    {
      useNativeDriver: false,
    }
  );

  const onHandlerStateChange = useCallback(
    (event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        lastOffsetX.current += event.nativeEvent.translationX;
        translateX.setOffset(lastOffsetX.current);
        translateX.setValue(0);
      }
    },
    [translateX]
  );

  return (
    <PanGestureHandler
      activeOffsetX={[-0, 0]}
      onGestureEvent={onPanGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={[
          sliderSize,
          styles.animatedView,
          { transform: [{ translateX }] },
        ]}
        pointerEvents="box-only"
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
    </PanGestureHandler>
  );
};
