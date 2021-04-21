import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//import SignUp_Screen from './screen/SignUp_Screen';

export default class App extends React.Component {
  state = {
    email: "",
    password: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>bl∞m</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Your email"
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Your password"
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>FORGOT DETAILS?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.create}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGN  IN</Text>
        </TouchableOpacity>  
        <Text style={styles.option}>____________             OR             ____________</Text>
        <TouchableOpacity>
          <Text style={styles.loginText2}>SIGN  UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a5acd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#ffffff",
    marginBottom: 80
  },
  inputView: {
    width: "85%",
    backgroundColor: "#d3d3d3",
    opacity: 0.4,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
    opacity: 0.4,
    position: 'absolute',
    bottom: -260,
    left: -190
  },
  loginBtn: {
    width: "85%",
    backgroundColor: "#9acd32",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "black",
    fontWeight: "bold"
  },
  option: {
    color: "white",
    fontWeight: "bold",
    opacity: 0.25,
    marginTop: 5,
    marginBottom: 25
  },
  loginText2: {
    color: "white",
    fontWeight: "bold"
  },
  create: {
    color: "white",
    fontSize: 11,
    opacity: 0.4,
    position: 'absolute',
    bottom: -260,
    left: 100
  }
});
