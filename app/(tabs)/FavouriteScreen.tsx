import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, View, Text, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArticleOffline } from '../constants/data';
import NewsItemOfflineComponent from '../components/NewsItemOfflineComponent';
import { listDataFromDatabase } from '../database/local';

const FavouriteScreen = () => {
  const [articles, setArticles] = useState<ArticleOffline[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchArticles = async () => {
    try {
      const response = await listDataFromDatabase();
      setArticles(response || []);
    } catch (error) {
      console.error('Failed to fetch favourites:', error);
      setArticles([]);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchArticles();
    setRefreshing(false);
  }, []);

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No favourite articles yet.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Favourites</Text>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => (
          <NewsItemOfflineComponent newsItemData={item} />
        )}
        contentContainerStyle={
          articles.length === 0 ? styles.flatListEmpty : undefined
        }
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 2,
    paddingTop: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  flatListEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});
