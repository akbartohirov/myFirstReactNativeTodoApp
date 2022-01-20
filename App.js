import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AddTodo } from "./src/components/AddTodo";
import { Navbar } from "./src/components/Navbar";
import { Todos } from "./src/components/Todos";

const TODOS = [
  { title: "bread", id: 1 },
  { title: "milk", id: 2 },
  { title: "oil", id: 3 },
];

export default function App() {
  const [todos, setTodos] = React.useState(TODOS);
  const [text, setText] = React.useState("");

  const addTodoHandler = () => {
    setTodos((prevState) => {
      return prevState.concat([{ id: todos.length + 1, title: text }]);
    });
    setText("");
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.body}>
        <AddTodo
          text={text}
          setText={setText}
          addTodoHandler={addTodoHandler}
        />
        <Text style={styles.todoTitle}> My todos </Text>
        <Todos todos={todos} setTodos={setTodos} setText={setText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  todoTitle: {
    textAlign: "center",
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
  },
});
