// All types for src/components/** goes here
// and some types can be inside component - not needed for external usage

import React from 'react';
import { Animated, ViewStyle } from 'react-native';

export interface ISize {
  width: number;
  height: number;
}

export interface IDefaultSliderProps {
  sliderSize?: ISize;
  sliderStyles?: ViewStyle;
}

export interface ISliderProps extends IDefaultSliderProps {
  translateX: Animated.AnimatedAddition;
  touchX: Animated.Value;
  SliderComponent?: React.ReactNode;
  containerHeight: number;
  showSeparationLine?: boolean;
  separationLineStyles?: ViewStyle;
}

export interface ICompareSlider {
  before: React.ReactNode;
  after: React.ReactNode;
  containerSize?: ISize;

  // Slider props
  sliderSize?: ISize;
  SliderComponent?: React.ReactNode;
  sliderStyles?: ViewStyle;

  // Separation line
  showSeparationLine?: boolean;
  separationLineStyles?: ViewStyle;
}
