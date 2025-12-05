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
      <TextInput
        accessibilityRole="search"
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder={'Enter Your Email'}
        keyboardType="default"
      />
      <TextInput
        accessibilityRole="search"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder={'Enter Your Email'}
        keyboardType="default"
      />
      <TextInput
        accessibilityRole="search"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder={'Enter Your Email'}
        keyboardType="default"
      />
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
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 3,
        margin: 6,
        height: 40,
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    },
    inputContainer:{
        display:'flex',
        flexDirection:'column',
        gap:8,
        padding:5,
        margin:5
    }
});
