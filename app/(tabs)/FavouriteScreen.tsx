import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ArticleOffline } from '../constants/data';
import NewsItemOfflineComponent from '../components/NewsItemOfflineComponent';
import { listDataFromDatabase } from '../database/local';

const FavouriteScreen = () => {
  const [article, setArticle] = useState<ArticleOffline[]>([]);
  const handleList = async () => {
    const response = await listDataFromDatabase();
    if (response) setArticle(response);
    else setArticle([]);
  };
  useEffect(() => {
    handleList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={article}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => (
          <NewsItemOfflineComponent newsItemData={item} />
        )}
      />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 8,
  },
});
