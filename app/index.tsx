import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import favicon from '../assets/images/favicon.png';

const index = () => {
  function helper(name: string) {
    alert(`You pressed ${name}`);
  }

  const heading = [
    'General',
    'Business', 
    'Sports',
    'Entertainment',
    'Health'
    ];
  return (
    <View>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {heading.map((heading, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => helper(heading)}
            style={styles.categoryCard}
          >
            <Image style={styles.img} source={favicon} />
            <Text style={styles.categoryName}>{heading}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.title}>Latest News</Text>
      <ScrollView
        contentContainerStyle={styles.newsContainer}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.newsItemContainer}>
          <View style={styles.newsimg} />
          <View>
            <Text style={styles.newsTitle}>News Title</Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              style={styles.newsDescription}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, obcaecati.
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>



    </View>
  )
}

export default index

const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    height: 140,
    flexDirection: 'row',
    gap: 5,
    marginTop: 12,
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },
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
})