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
  backgroundColor,
}: CardComponentProps) => {
  return (
    <View
      style={[
        styles.cardComponentContainer,
        { backgroundColor: backgroundColor },
      ]}
    >
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
    display: 'flex',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
    gap: 2,
    marginRight: 14,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 2,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '500',
  },
  cardComponentContainer: {
    marginTop: 10,
    display: 'flex',
  },
});
