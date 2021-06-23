import React, { useCallback, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { ISliderProps } from '../../types';

const styles = StyleSheet.create({
  slider: {
    backgroundColor: 'red',
  },
  wrapper: {
    flex: 1,
  },
});

const initialAnimatedValue = new Animated.Value(0);

export const Slider: React.FC<ISliderProps> = (props) => {
  const {
    touchX = initialAnimatedValue,
    translateX = initialAnimatedValue,
    sliderSize,
  } = props;
  const panRef = useRef(); // Can be passed here from Parent in future
  const tapRef = useRef(); // Can be passed here from Parent in future

  const onTapHandlerStateChange = useCallback(
    ({ nativeEvent }): void => {
      if (nativeEvent.oldState === State.ACTIVE) {
        touchX.setValue(nativeEvent.x);
      }
    },
    [touchX]
  );

  const onPanGestureEvent = Animated.event([{ nativeEvent: { x: touchX } }], {
    useNativeDriver: false,
  });

  return (
    <TapGestureHandler
      ref={tapRef}
      waitFor={panRef}
      onHandlerStateChange={onTapHandlerStateChange}
    >
      <Animated.View style={styles.wrapper}>
        <PanGestureHandler
          ref={panRef}
          activeOffsetX={[-0, 0]}
          onGestureEvent={onPanGestureEvent}
        >
          <Animated.View>
            <Animated.View
              style={[
                styles.slider,
                sliderSize,
                { transform: [{ translateX }] },
              ]}
            />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};
