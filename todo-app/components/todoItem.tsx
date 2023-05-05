import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import type { todo } from "../App";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem(props: {
  item: todo;
  removeItem: (arg0: string) => void;
}) {
  return (
    <TouchableOpacity onPress={() => props.removeItem(props.item.key)}>
      <View style={styles.container}>
        <MaterialIcons name="delete" size={16} color="black" />
        <Text>{props.item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginHorizontal: 15,
    padding: 10,
    fontWeight: "600",
    fontSize: 20,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});
