import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.text}>Todos</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    padding: 5,
    backgroundColor: "#ddd",
  },
  text: {
    padding: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});
