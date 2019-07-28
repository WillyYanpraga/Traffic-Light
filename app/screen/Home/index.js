import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Form, Item, Input, Button } from "native-base";
export default class Home extends Component {
  render() {
    return (
      <Container style={styles.Container}>
        <Text>Welcome Users </Text>
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
