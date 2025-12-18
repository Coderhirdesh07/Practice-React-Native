import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import authService from '../database/appwrite';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'expo-router';
const SignUp = () => {
  type SignUpFormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const router = useRouter();

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>();
  const password = watch('password');

  const handleSignUp: SubmitHandler<SignUpFormData> = async data => {
    try {
      await authService.handleUserRegistration(
        data.email,
        data.password,
        data.fullName,
      );
      router.replace('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Text style={styles.heading}>SignUp</Text>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <Controller
            control={control}
            name="fullName"
            rules={{ required: 'Name is required field' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={'Enter Your Full Name'}
                keyboardType="default"
              />
            )}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email:</Text>
          <Controller
            control={control}
            name="email"
            rules={{ required: 'Email is required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
              />
            )}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password:</Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={onChange}
                value={value}
                placeholder={'Enter Your Password'}
              />
            )}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Confirm Password:</Text>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirm Password is required',
              validate: value =>
                value === password || 'Password does not match',
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder={'Confirm Password'}
                keyboardType="default"
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
          />
        </View>
        <Button
          title={isSubmitting ? 'Signing Up' : 'Sign Up'}
          onPress={handleSubmit(handleSignUp)}
          disabled={isSubmitting}
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
