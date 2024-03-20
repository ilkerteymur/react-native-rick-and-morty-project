import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenWrapper} from '../../styles/screenWrapper.js.js';
import {getRequest} from '../../service/verb.js';
import {CHARACTERS_URL} from '../../service/urls.js';
import {AppColors} from '../../theme/colors.js';
import CharactersCard from '../../components/characters/charactersCard.js';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCharacter = async () => {
    setLoading(true);
    getRequest(CHARACTERS_URL)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(eror => {
        console.log(eror);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <View style={screenWrapper.container}>
      {loading ? (
        <View style={screenWrapper.loadingWrapper}>
          <ActivityIndicator color={AppColors.WHITE} size={'large'} />
        </View>
      ) : (
        <FlatList
          numColumns={2}
          data={characters}
          renderItem={({item}) => <CharactersCard item={item} />}
          keyExtractor={item => '_' + item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Characters;
