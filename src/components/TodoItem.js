import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const TodoItem = ({ title, id, removeHandler }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.title}>{title}</Text>
      <Button
        style={styles.remove}
        onPress={() => removeHandler(id)}
        color={"red"}
        title="remove"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#75F93C",
  },
  title: {
    fontSize: 32,
    textTransform: "capitalize",
    flex: 2,
  },
});
