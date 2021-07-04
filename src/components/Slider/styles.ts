import { StyleSheet } from 'react-native';
import { SLIDER_ARROW_SIZE, SLIDER_SIZE } from '../../utils/constants';

export const styles = StyleSheet.create({
  animatedView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    borderRadius: SLIDER_SIZE / 2,
    justifyContent: 'center',
  },
  sliderArrow: {
    width: SLIDER_ARROW_SIZE,
    height: SLIDER_ARROW_SIZE,
    position: 'absolute',
    borderTopWidth: SLIDER_ARROW_SIZE,
    borderTopColor: 'transparent',
    borderBottomWidth: SLIDER_ARROW_SIZE,
    borderBottomColor: 'transparent',
  },
  sliderArrowRight: {
    right: 8,
    borderLeftWidth: SLIDER_ARROW_SIZE,
    borderLeftColor: 'green',
  },
  sliderArrowLeft: {
    left: 8,
    borderRightWidth: SLIDER_ARROW_SIZE,
    borderRightColor: 'green',
  },
  separationLine: {
    backgroundColor: '#fff',
    width: 5,
    position: 'absolute',
  },
});
