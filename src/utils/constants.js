import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const resizeModes = {
  COVER: 'cover',
  CONTAIN: 'contain',
  CENTER: 'center',
};

export {width, height, resizeModes};
