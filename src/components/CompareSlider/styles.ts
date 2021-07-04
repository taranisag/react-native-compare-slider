import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
