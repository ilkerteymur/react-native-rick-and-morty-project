import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {height, width} from '../utils/constants';

const characterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BLACK,
  },
});

const characterCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2 - 20,
    height: width / 2 - 5,
    margin: 5,
  },
  infoContainer: {
    backgroundColor: AppColors.GREEN,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  name: {
    color: AppColors.WHITE,
    marginBottom: 10,
  },
  status: {
    color: AppColors.WHITE,
  },
});

export {characterScreenStyles, characterCardStyles};
