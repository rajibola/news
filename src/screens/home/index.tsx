import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import apiService from '../../utils/apiHandler';
import {styles} from './styles';

export const Home = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    apiService('/articles?page=1&size=50', 'get')
      .then(res => {
        console.log('RESPO', res);
        setData(res);
      })
      .catch(err => console.log('ERROR', err));
  }, []);

  return (
    <View style={styles.container}>
      {!data ? (
        <Text>News is loading ...</Text>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={data.data}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.newsCard}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
