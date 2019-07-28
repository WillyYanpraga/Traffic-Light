import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from "../../firebase";
import Home from "../Home";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validasi = aksi => {
    const { email, password } = this.state;
    if (email == "") {
      alert("please input email");
    } else if (password == "") {
      alert("please input password");
    } else {
      // alert("thank you, your form is submit");
      this.signInUser(email, password);
    }
  };
  signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        alert("Success");

        this.props.navigation.replace("Home");
      })
      .catch(error => {
        alert(error.message);
      });
  };
  render() {
    return (
      <Container style={styles.Container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() => this.validasi()}
          >
            <Text>Sign In</Text>
          </Button>
          <Text>Dont have account ? </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text>signUp</Text>
          </TouchableOpacity>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  }
});
