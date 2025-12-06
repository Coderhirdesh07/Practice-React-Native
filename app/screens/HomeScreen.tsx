import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardComponent from '../components/CardComponent';
import NewsItemComponent from '../components/NewsItemComponent';
import { cardCategory } from '../constants/constants';
import { NewsApiData } from '../constants/data';
import { handleApiArticlesEndpoint } from '../networkutils/index';
const HomeScreen = () => {
  const [response, setResponse] = useState<NewsApiData | null>(null);
  const [category, setCategory] = useState<string>('');

  const categorySelection = (name: string) => {
    setCategory(name);
  };

  useEffect(() => {
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
    fetchData();
  });

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
    backgroundColor:'#9efff0',
  },
  outer: {
    display: 'flex',
    flexDirection: 'column',
    padding:4,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 8,
  },
  scrollContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 22,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom: 18,
  },
});
