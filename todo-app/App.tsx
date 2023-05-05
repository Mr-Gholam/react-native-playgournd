import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
    if (text.length < 5) {
      Alert.alert("There is a problem", "Todo must be at least 5 chars long", [
        { text: "I got it", onPress: () => console.log("btn pressed") },
      ]);
      return;
    }
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
  function dismiss() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => dismiss()}>
      <View style={styles.container}>
        <Header />
        <Form addItem={addItem} />
        <View style={styles.list}>
          <FlatList
            data={Todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeItem={removeItem} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
