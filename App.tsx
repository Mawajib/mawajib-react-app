import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';



const sign_in =(user_name, password)=>{
    if ((user_name == "Shahiryar") && (password === "12345678")){
        return true
    }else{
        return false
    }
}

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Image source={require('./assets/logo.png')} style={{width: 250, height: 250}}/>

      {/* Title */}
      <Text style={styles.titleText}>Sign In</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.textInput}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
      />

      {/* Remember Me Checkbox */}
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxText}>Remember Me</Text>
      </View>

      {/* Forgot Password Link */}
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

      {/* Login Button */}
      <Button title="SIGN IN" color="#681F2A" style={styles.button}/>

      {/* Social Login Buttons (Optional) */}
      {/* ... */}

      {/* Signup Link */}
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <Button title="Sign Up" color="#681F2A" style={{height:120}}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 5,
  },
  forgotPasswordText: {
    marginBottom: 10,
    textAlign: 'right',
  },
    button: {
      height: 70,
      borderRadius: 100,
      marginTop: 10,
    },
});

export default Login;
