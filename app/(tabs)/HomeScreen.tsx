import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardComponent from '../components/CardComponent';
import NewsItemComponent from '../components/NewsItemComponent';
import { cardCategory } from '../constants/constants';
import { NewsApiData } from '../constants/data';
import { handleApiArticlesEndpoint } from '../networkutils/index';
import { initDB } from '../database/local';

const HomeScreen = () => {
  const [response, setResponse] = useState<NewsApiData | null>(null);
  const [category, setCategory] = useState<string>('');

  const categorySelection = (name: string) => {
    setCategory(name);
  };

  const fetchData = async () => {
    try {
      const data = await handleApiArticlesEndpoint('bitcoin');
      if (data) {
        setResponse(data);
      } else setResponse(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const setup = async () => {
      try {
        await initDB();
        console.log('Database initialized');
        fetchData();
      } catch (err) {
        console.error('DB init failed:', err);
      }
    };
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cardCategory.map(item => (
          <CardComponent
            key={item.name}
            heading={item.name}
            image={item.icon}
            backgroundColor={item.colour}
            onClick={() => categorySelection(item.name)}
          />
        ))}
      </ScrollView>

      <Text style={styles.title}>TOP HEADLINES</Text>

      <FlatList
        data={response?.articles}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => <NewsItemComponent newsItemData={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 10,
  },
  outer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 8,
  },
  scrollContainer: {
    flexDirection: 'row',
    marginTop: 22,
    paddingHorizontal: 10,
    paddingBottom: 30,
    marginBottom: 18,
  },
});
