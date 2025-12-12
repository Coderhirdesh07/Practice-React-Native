import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import authService from '../database/appwrite';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const initialFormState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { handleSubmit, register } = useForm();
  const [form, setForm] = useState(initialFormState);

  const handleOnChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (form: any) => {
    const { fullName, email, password, confirmPassword } = form;
    if (!fullName || !email || !password || !confirmPassword) {
      return Alert.alert('Error', 'All fields are required');
    }

    if (password !== confirmPassword) {
      return Alert.alert('Error', 'Passwords do not match');
    }

    if (password.length < 6) {
      return Alert.alert('Error', 'Password must be at least 6 characters');
    }
    await authService.handleUserRegistration(email, password, fullName);
  };
  return (
    <SafeAreaView>
      <Text style={styles.heading}>SignUp</Text>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleOnChange('fullName', text)}
            value={form.fullName}
            placeholder={'Enter Your Full Name'}
            keyboardType="default"
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            accessibilityRole="search"
            style={styles.input}
            onChangeText={text => handleOnChange('email', text)}
            value={form.email}
            placeholder={'Enter Your Email'}
            keyboardType="default"
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            accessibilityRole="search"
            style={styles.input}
            onChangeText={text => handleOnChange('password', text)}
            value={form.password}
            placeholder={'Enter Your Password'}
            secureTextEntry
            keyboardType="default"
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleOnChange('confirmPassword', text)}
            value={form.confirmPassword}
            placeholder={'Confirm Password'}
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <Button
          title="Sign UP"
          onPress={handleSubmit(() => handleSignUp(form))}
        />
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
    flex: 1,
    height: 42,
  },
  label: {
    fontSize: 18,
    fontWeight: '300',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    padding: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    padding: 5,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 5,
    margin: 5,
  },
});
