import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import type { todo } from "../App";

export default function TodoItem(props: {
  item: todo;
  removeItem: (arg0: string) => void;
}) {
  return (
    <TouchableOpacity onPress={() => props.removeItem(props.item.key)}>
      <Text style={styles.text}>{props.item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    padding: 10,
    fontWeight: "600",
    fontSize: 20,
  },
});
