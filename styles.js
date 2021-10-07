import { StyleSheet } from 'react-native';

const radius = 10;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    elevation: 1000,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});

export { styles, radius };
