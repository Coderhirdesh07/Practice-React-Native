import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Article } from '../constants/data';

interface NewsItemProps {
  newsItemData: Article;
}

const NewsItemComponent = ({ newsItemData }: NewsItemProps) => {
  
  function helper(name: string) {
    alert(`You pressed ${name}`);
  }

  return (
    <View>
      <TouchableOpacity style={styles.newsItemContainer}>
        {newsItemData.urlToImage ? (
          <Image
            source={{uri: newsItemData.urlToImage }}
            style={styles.newsimg}
          />
        ) : (
          <View style={[styles.newsimg, { backgroundColor: '#ccc' }]} />
        )}
        <View>
          <Text numberOfLines={2} style={styles.newsTitle}>
            {newsItemData.title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.newsDescription}
          >
            {newsItemData.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsItemComponent;

const styles = StyleSheet.create({
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
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textOverflow: 'hidden',
  },
  newsDescription: {
    fontSize: 12,
    textOverflow: 'hidden',
  },
  newsItemContainer: {
    display: 'flex',
    backgroundColor: '#898989',
    flexDirection: 'row',
    gap: 5,
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
  },
});
