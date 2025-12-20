import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import arrow from '../../assets/icons/right-arrow.png';

interface ProfileProp {
  title: string;
}

const ProfileComponent = ({ title }: ProfileProp) => {
  return (
    <TouchableOpacity
      onPress={() => alert('You pressed a component')}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={arrow} />
    </TouchableOpacity>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    margin: 8,
    justifyContent: 'space-between',
  },
  img: {
    height: 25,
    width: 25,
    marginRight: 5,
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  outer: {
    display: 'flex',
    flex: 1,
    padding: 8,
    marginTop: 20,
  },
});
