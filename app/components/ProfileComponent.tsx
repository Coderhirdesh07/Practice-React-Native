import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import arrow from '../../assets/icons/right-arrow.png'

const ProfileComponent = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Item</Text>
        <Image style = {styles.img} source={arrow}/>
    </View>
  )
}

export default ProfileComponent

const styles = StyleSheet.create({
    container:{
        height:50,
        display:'flex',
        flexDirection:'row'
    },
    img:{
        height:15,
        width:12
    },
    title:{
        fontSize:18,
        fontWeight:'medium'
    }
})