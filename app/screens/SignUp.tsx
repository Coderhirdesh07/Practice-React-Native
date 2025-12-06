import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
    const [name,setName]  = useState<string>('');
    const [email,setEmail]  = useState<string>('');
    const [password,setPassword]  = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');
    const handleSignUp = () =>{

    }
  return (
    <SafeAreaView>
      <Text style={styles.heading}>SignUp</Text>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
        <Text style={styles.label}>Full Name:</Text>
          <TextInput
          accessibilityRole="search"
          style={styles.input}
          onChangeText={setName}
         value={name}
         placeholder={'Enter Your Full Name'}
         keyboardType="default"
        />
        </View>



        <View style={styles.labelContainer}>
        <Text style={styles.label}>Email:</Text>
         <TextInput
         accessibilityRole="search"
         style={styles.input}
         onChangeText={setEmail}
         value={email}
         placeholder={'Enter Your Email'}
         keyboardType="default"
        />
        </View>


        <View style={styles.labelContainer}>
        <Text style={styles.label}>Password:</Text>
         <TextInput
        accessibilityRole="search"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder={'Enter Your Password'}
        keyboardType="default"
       />
        </View>

        <View style={styles.labelContainer}>
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
         accessibilityRole="search"
         style={styles.input}
         onChangeText={setConfirmPassword}
         value={confirmPassword}
         placeholder={'Confirm Password'}
         keyboardType="default"
         />
        </View>
      <Button title="Sign UP" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 3,
        flex:1,
        height: 42,
    },
    label:{
      fontSize:18,
      fontWeight:'semibold'
    },
    labelContainer:{
      display:'flex',
      flexDirection:'row',
      gap:8,
      padding:5,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        padding:5,
    },
    inputContainer:{
        display:'flex',
        flexDirection:'column',
        gap:8,
        padding:5,
        margin:5
    }
});
