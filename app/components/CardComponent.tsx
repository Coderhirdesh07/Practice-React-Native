import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import favicon from '../../assets/images/favicon.png';

interface CardComponentProps {
  heading: string;
  imageurl?: string;
  onClick?: (name: string) => void;
}

const CardComponent = ({ heading, imageurl, onClick }: CardComponentProps) => {
  return (
    <View style={styles.cardComponentContainer}>
      <TouchableOpacity
        onPress={() => onClick?.name}
        style={styles.categoryCard}
      >
        <Image style={styles.img} source={favicon} />

        <Text style={styles.categoryName}>{heading}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardComponent;
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
  img: {},
  categoryName: {
    fontSize: 25,
    fontWeight: '600',
  },
  cardComponentContainer: {
    marginVertical: 10,
  },
});
