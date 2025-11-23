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
    padding: 5,
    justifyContent: 'space-between',
  },
  img: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'medium',
  },
  outer: {
    display: 'flex',
    flex: 1,
    padding: 5,
    marginTop: 20,
  },
});
