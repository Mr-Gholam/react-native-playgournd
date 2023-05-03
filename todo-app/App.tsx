import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import TodoItem from "./components/todoItem";

export type todo = {
  text: string;
  key: string;
};

export default function App() {
  const [Todos, setTodos] = useState<todo[]>([
    { text: "create a app", key: "1" },
    { text: "go to gym", key: "2" },
    { text: "go shoping", key: "3" },
  ]);
  function removeItem(key: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  }
  function addItem(text: string) {
    setTodos((prevTodos) => {
      return [
        {
          text: text,
          key: Math.random().toString(),
        },
        ...prevTodos,
      ];
    });
  }

  return (
    <>
      <Header />
      <Form addItem={addItem} />
      <View>
        <FlatList
          data={Todos}
          renderItem={({ item }) => (
            <TodoItem item={item} removeItem={removeItem} />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
