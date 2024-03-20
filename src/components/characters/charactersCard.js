import {Text, View} from 'react-native';
import React from 'react';

const CharactersCard = props => {
  const {item} = props;
  return (
    <View>
      <Text style={{color: 'white'}}>{item.name}</Text>
    </View>
  );
};

export default CharactersCard;
