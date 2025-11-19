import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
    height: 130,
    width: 170,
    backgroundColor: '#4287f5',
    display: 'flex',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'column',
    gap: 1,
    marginRight: 13,
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
    display:'flex',
    flex:1,
  },
});
