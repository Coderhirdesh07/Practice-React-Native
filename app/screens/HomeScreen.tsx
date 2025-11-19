import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import NewsItemComponent from '../components/NewsItemComponent';
import { NewsApiData } from '../constants/data';
import {handleApiArticlesEndpoint} from '../networkutils/index';
import {cardCategory} from "../constants/constants"
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [response, setResponse] = useState<NewsApiData | null>(null);
  const [category, setCategory] = useState<string>('');

  const categorySelection = (name: string) => {
    setCategory(name);
  };

  useEffect(() => {
    const fetchData = async (category:string) => {
      try {
        const data = await handleApiArticlesEndpoint(category?{category}:{});
        if (data) {
          setResponse(data);
        } else setResponse(null);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(category);
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cardCategory.map((item) => (
          <CardComponent
            key={item.name}
            heading={item.name}
            image={item.icon}
            onClick={() => categorySelection(item.name)}
          />
        ))}
      </ScrollView>

      <Text style={styles.title}>Latest News</Text>
      <FlatList
        data={response?.articles}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => <NewsItemComponent newsItemData={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    flex:1,
    flexDirection: 'row',
    gap: 5,
    marginTop: 15,
  },
  container:{
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },
});
