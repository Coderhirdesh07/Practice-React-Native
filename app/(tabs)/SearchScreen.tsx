import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import search from '../../assets/icons/icons8-search-100.png';
import NewsItemComponent from '../components/NewsItemComponent';
import { NewsApiData } from '../constants/data';
import { handleApiArticlesEndpoint } from '../networkutils';

const SearchScreen = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<NewsApiData | null>(null);

  async function handleQuery(q: string) {
    try {
      const data = await handleApiArticlesEndpoint(q);
      if (!data) {
        setResponse(null);
      }
      setResponse(data);
    } catch (error) {
      console.log('Error in search screen part');
    }
  }

  useEffect(() => {
    if (!query.trim()) {
      setResponse(null);
      return;
    }
    const timeout = setTimeout(() => {
      handleQuery(query);
    }, 500); // debounce 500ms

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleQuery(query)}>
          <Image style={styles.img} source={search} />
        </TouchableOpacity>

        <TextInput
          accessibilityRole="search"
          style={styles.input}
          onChangeText={setQuery}
          value={query}
          placeholder={'Enter Text to search'}
          keyboardType="default"
        />
      </View>
      <View style={styles.secondContainer}>
        <FlatList
          data={response?.articles}
          keyExtractor={(item, index) => item.url || index.toString()}
          renderItem={({ item }) => <NewsItemComponent newsItemData={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    padding: 2,
    height: 30,
    flex: 1,
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 5,
    marginTop: 8,
  },
  secondContainer: {
    marginTop: 15,
    padding: 8,
  },
  img: {
    width: 30,
    height: 30,
    padding: 3,
    marginTop: 8,
    borderRadius: 2,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 3,
    marginTop: 15,
    padding: 8,
  },
});
