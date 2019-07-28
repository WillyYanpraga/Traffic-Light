import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from "../../firebase";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validasi = () => {
    const { email, password } = this.state;
    if (email == "") {
      alert("please input email");
    } else if (password == "") {
      alert("please input password");
    } else {
      // alert("thank you, your form is submit");
      this.signUpUser(email, password);
    }
  };
  signUpUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {})
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
            primary
            onPress={() => this.validasi()}
          >
            <Text>Sign Up</Text>
          </Button>
          <Text>Already have account ? </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text>signIn</Text>
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
