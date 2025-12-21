import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ArticleOffline } from '../constants/data';
import deleteIcon from '../../assets/icons/icons8-delete-96.png';
import { deleteDataFromDatabase } from '../database/local';

interface NewsItemOfflineProps {
  newsItemData: ArticleOffline;
  onDelete: (id: number) => void;
}

const NewsItemOfflineComponent = ({
  newsItemData,
  onDelete,
}: NewsItemOfflineProps) => {
  const handleArticleDelete = async () => {
    const id = newsItemData.id;

    if (id === null || id === undefined) {
      console.warn('Cannot delete article: missing id');
      return;
    }
    try {
      await deleteDataFromDatabase(Number(id));
      onDelete(Number(id));
    } catch (error) {
      console.error('Failed to delete article:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {newsItemData.urlToImage ? (
        <Image
          source={{ uri: newsItemData.urlToImage }}
          style={styles.newsImage}
        />
      ) : (
        <View style={[styles.newsImage, { backgroundColor: '#e0e0e0' }]} />
      )}

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.newsTitle}>
          {newsItemData.title}
        </Text>
        <Text numberOfLines={3} style={styles.newsDescription}>
          {newsItemData.description}
        </Text>
        <Text style={styles.sourceText}>
          {newsItemData.author || 'Unknown Author'}
        </Text>
      </View>

      <Pressable onPress={handleArticleDelete} hitSlop={10}>
        <Image
          style={{ height: 20, width: 20, padding: 5 }}
          source={deleteIcon}
        />
      </Pressable>
    </TouchableOpacity>
  );
};

export default NewsItemOfflineComponent;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    gap: 12,
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  newsDescription: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  sourceText: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
});
