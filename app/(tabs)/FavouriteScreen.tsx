import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const FavouriteScreen = () => {
  return (
    <View>
      <Text>FavouriteScreen</Text>
      {/* <FlatList
        data={response?.articles}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => <NewsItemOfflineComponent newsItemData={item} />}
      /> */}
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
