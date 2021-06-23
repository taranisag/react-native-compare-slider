// All types for src/components/** goes here
// and some types can be inside component - not needed for external usage

import React from 'react';
import { Animated } from 'react-native';

export interface ISize {
  width: number;
  height: number;
}

export interface ISliderProps {
  translateX: Animated.AnimatedAddition;
  touchX: Animated.Value;
  sliderSize?: ISize;
}

export interface ICompareSlider {
  before: React.ReactNode;
  after: React.ReactNode;
  containerSize?: ISize;
  sliderSize?: ISize;
}
