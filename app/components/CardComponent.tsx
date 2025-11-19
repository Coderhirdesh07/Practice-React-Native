import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

interface CardComponentProps {
  heading: string;
  image: ImageSourcePropType;
  onClick?: (name: string) => void;
}

const CardComponent = ({ heading, image, onClick }: CardComponentProps) => {
  return (
    <View style={styles.cardComponentContainer}>
      <TouchableOpacity
        onPress={() => onClick?.(heading)}
        style={styles.categoryCard}
      >
        <Image style={styles.img} source={image} />

        <Text style={styles.categoryName}>{heading}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardComponent;
const styles = StyleSheet.create({
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
  img: {
    height:40,
    width:40,
    borderRadius:2,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '500',
  },
  cardComponentContainer: {
    marginVertical: 10,
  },
});
