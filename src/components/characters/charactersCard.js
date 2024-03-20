import {Text, View, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {characterCardStyles} from '../../styles/charactersStyle';
import {resizeModes} from '../../utils/constants';

const CharactersCard = props => {
  const {item} = props;
  return (
    <TouchableOpacity
    onPress={() => Alert("tıklandı")}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode={resizeModes.CONTAIN}
        style={characterCardStyles.container}>
        <View style={characterCardStyles.infoContainer}>
          <Text numberOfLines={1} style={characterCardStyles.name}>
            {item.name}
          </Text>
          <Text style={characterCardStyles.status}>{item.status}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CharactersCard;
