import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import NewsItemComponent from '../components/NewsItemComponent';
import { NewsApiData } from '../constants/data';
import {
  handleApiTopHeadlinesEndpoint,
  handleApiArticlesEndpoint,
} from '../networkutils/index';

const HomeScreen = () => {
  const [response, setResponse] = useState<NewsApiData | null>(null);
  const [category, setCategory] = useState<String | null>(null);

  const categoryCardHeading = [
    'General',
    'Business',
    'Sports',
    'Entertainment',
    'Health',
  ];

  const categorySelection = (name: string) => {
    setCategory(name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleApiArticlesEndpoint();
        if (data) {
          setResponse(data);
        } else setResponse(null);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categoryCardHeading.map(name => (
          <CardComponent
            key={name}
            heading={name}
            onClick={() => categorySelection(name)}
          />
        ))}
      </ScrollView>

      <Text style={styles.title}>Latest News</Text>
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
  scrollContainer: {
    display: 'flex',
    height: 140,
    flexDirection: 'row',
    gap: 5,
    marginTop: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },
});
