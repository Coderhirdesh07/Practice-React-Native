import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import favourite1 from '../../assets/icons/heart.png'; // filled
import favourite2 from '../../assets/icons/love.png'; // outline
import { Article } from '../constants/data';

interface NewsItemProps {
  newsItemData: Article;
}

const NewsItemComponent = ({ newsItemData }: NewsItemProps) => {
  const [favourite, setFavourite] = useState<boolean>(false);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {/* Image */}
      {newsItemData.urlToImage ? (
        <Image
          source={{ uri: newsItemData.urlToImage }}
          style={styles.newsImage}
        />
      ) : (
        <View style={[styles.newsImage, { backgroundColor: '#dcdcdc' }]} />
      )}

      {/* Right Side Content */}
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.newsTitle}>
          {newsItemData.title}
        </Text>
        <Text numberOfLines={3} style={styles.newsDescription}>
          {newsItemData.description}
        </Text>

        <Text style={styles.sourceText}>
          {newsItemData.source?.name || 'Unknown Source'}
        </Text>
      </View>

      {/* Favourite Button */}
      <TouchableOpacity
        onPress={() => setFavourite(!favourite)}
        style={styles.favButton}
      >
        <Image
          source={favourite ? favourite1 : favourite2}
          style={styles.favIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NewsItemComponent;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 12,
    marginTop: 12,
    gap: 12,

    // shadow
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  newsImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 40,
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
    color: '#777',
    marginTop: 8,
  },

  favButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 5,
  },

  favIcon: {
    width: 28,
    height: 28,
  },
});
