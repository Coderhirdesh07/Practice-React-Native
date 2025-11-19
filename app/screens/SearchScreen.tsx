import { StyleSheet,FlatList, Text,View,Image, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import search from "../../assets/icons/icons8-search-100.png"
import { NewsApiData } from '../constants/data';
import NewsItemComponent from '../components/NewsItemComponent';
import { handleApiArticlesEndpoint } from '../networkutils';

const SearchScreen = () => {

  const [query,setQuery] = useState<string>('');
  const [response,setResponse] = useState<NewsApiData | null>(null);

  useEffect(() => {
    const fetchData = async(q:string)=>{
      try{
       const data = await handleApiArticlesEndpoint({q:query});
        if(!data){
         setResponse(null);
        }
       setResponse(data);
      }
      catch(error){
        console.log('Error in search screen part');
      }
    }
    fetchData(query);
  },[query]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.img} source={search}/>
        <TextInput
         accessibilityRole='search'
         style={styles.input}
         onChangeText={setQuery}
         value={query}
         placeholder={"Enter Text to search"}
         keyboardType="default"
      />

      <View style={styles.secondContainer}>
      <FlatList
        data={response?.articles}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => <NewsItemComponent newsItemData={item} />}
      />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  
  input:{
    padding: 10,
    flex:1,
    borderColor: '#000',
    borderWidth: 3,
    borderRadius:5,
    margin: 12,
  },
  secondContainer:{
    marginTop:15
  },
  img:{
    width:50,
    height:50,
    padding:4,
    marginTop:10,
    borderRadius:2
  },
  container:{
    width:'auto',
    display:'flex',
    flexDirection:'row-reverse',
    gap:4,
    marginTop:10,
    padding:5
  }

});
