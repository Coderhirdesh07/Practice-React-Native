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
  backgroundColor?: string;
}

const CardComponent = ({
  heading,
  image,
  onClick,
  backgroundColor = '#4287f5', // default color
}: CardComponentProps) => {
  return (
    <TouchableOpacity
      onPress={() => onClick?.(heading)}
      style={[styles.cardContainer, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.heading}>{heading}</Text>
    </TouchableOpacity>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 150,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderWidth: 2, // thinner than 4 for elegance
    borderColor: 'rgba(0,0,0,0.1)', // subtle shadow-like border
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
