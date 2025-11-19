import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from '../components/CardComponent';
import NewsItemComponent from '../components/NewsItemComponent';
import TopHeadlineComponent from '../components/TopHeadlineComponent';
import { cardCategory } from "../constants/constants";
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
        const data = await handleApiArticlesEndpoint();
        if (data) {
          setResponse(data);
        } else setResponse(null);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, );

  return (
    <SafeAreaView >
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

      <Text style={styles.title}>HEADLINES</Text>
        <TopHeadlineComponent/>


      <Text style={styles.title}>BREAKING NEWS</Text>
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
  // scrollContainer: {
  //   display: 'flex',
  //   flex:3,
  //   flexDirection: 'row',
  //   gap: 5,
  //   marginTop: 12,
  // },
  container:{
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  scrollContainer: {
    display: 'flex',
    height: 140,
    flexDirection: 'row',
    gap: 5,
    marginTop: 12,
    marginBottom:5,
    flex:2
  },
  categoryCard: {
    height: 120,
    width: 180,
    backgroundColor: '#4287f5',
    display: 'flex',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'column',
    gap: 2,
    marginRight: 10,
    marginLeft:5,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  newsContainer: {
    marginTop: 15,
  },
  newsimg: {
    width: 80,
    height: 80,
    marginBottom: 2,
    borderRadius: 6,
    backgroundColor: '#CD1C18',
  },
  img: {},
  categoryName: {
    fontSize: 25,
    fontWeight: '600',
  },
  // title: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginTop: 12,
  // },
  newsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  newsDescription: {
    fontSize: 15,
    textOverflow: 'hidden',
  },
  newsItemContainer: {
    width: 'auto',
    display: 'flex',
    backgroundColor: '#898989',
    flexDirection: 'row',
    gap: 5,
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
  }
});
