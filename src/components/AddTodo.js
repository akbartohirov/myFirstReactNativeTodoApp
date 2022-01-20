import React from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

export const AddTodo = ({ setText, addTodoHandler, text }) => {
  return (
    <View style={styles.addTodoWrapper}>
      <TextInput
        onChangeText={(text) => setText(text)}
        style={styles.input}
        clearButtonMode="always"
        value={text}
      />
      <Button onPress={addTodoHandler} style={styles.button} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    flex: 1,
  },
  addTodoWrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
