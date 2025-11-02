import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const index = () => {
  function helper(){
    alert('You touched a button');
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
       <TouchableOpacity onPress={helper} style={styles.box}>
         <Text>General</Text>
        </TouchableOpacity>
      <View style={styles.box}>
      <Text>Entertainment</Text>
      </View>
      <View style={styles.box}>
      <Text>Buisness</Text>
      </View>
      <View style={styles.box}>
      <Text>Health</Text>
      </View>
      <View style={styles.box}>
      <Text>Sports</Text>
      </View>
      </ScrollView>
      
      {/* <Text style={styles.heading}>
        Hello EveryOne!
      </Text> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
  },
  heading:{
    fontSize:15,
    fontWeight:'bold'
  },
  box:{
    backgroundColor:'#4287f5',
    height:120,
    width:150,
    borderRadius:10,
    marginLeft:2,
    marginRight:2,
    boxShadow:'5',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  scrollContainer:{
    display:'flex',
    marginLeft:2,
    marginRight:2,
    marginTop:10,
  }
})
