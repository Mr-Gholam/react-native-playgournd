import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Form(props: { addItem: (arg0: string) => void }) {
  const [item, setItem] = useState("");
  const inputChanged = (value: string) => {
    setItem(value);
  };

  function addNewTodo() {
    props.addItem(item);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        placeholder="Add todo .."
        keyboardType="default"
        onChangeText={inputChanged}
      />
      <Button title="Add todo" color={"#74aebe"} onPress={addNewTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  form: {
    marginVertical: 10,
    padding: 15,
    borderColor: "#658d98",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 16,
    borderStyle: "dashed",
  },
});
