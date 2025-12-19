import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon from '../../assets/icons/icons8-profile-100.png';
import { useForm, Controller } from 'react-hook-form';
import authService from '../database/appwrite';
import { useRouter } from 'expo-router';
import { keys } from '../constants/constants';
import { setUserSignup, setItemToStorage } from '../database/storage';

const Login = () => {
  const { handleSubmit, control } = useForm();
  const router = useRouter();

  const handleNavigate = () => {
    router.replace('/(auth)/SignUp');
  };

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await authService.handleUserLogin(data.email, data.password);

      await setItemToStorage(keys.email, data.email);
      await setItemToStorage(keys.name, data.password);
      await setUserSignup(keys.loggedIn, true);

      router.replace('/(tabs)/HomeScreen');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={icon} style={styles.img} />
      </View>

      <Text style={styles.heading}>Welcome Back</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />

        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable onPress={handleNavigate} style={styles.signupRedirect}>
          <Text style={styles.signupText}>
            Create an Account
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    gap: 15,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signupRedirect: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#4a90e2',
    fontWeight: '600',
  },
});
