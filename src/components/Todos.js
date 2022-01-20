import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, setTodos }) => {
  const removeHandler = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const renderItem = ({ item }) => (
    <TodoItem title={item.title} id={item.id} removeHandler={removeHandler} />
  );

  return (
    <View style={styles.todos}>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noTodo}>There is no todo...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todos: {
    flex: 8,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  noTodo: {
    textAlign: "center",
  },
});
