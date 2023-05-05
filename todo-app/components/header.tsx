import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#2F8886",
  },
  text: {
    padding: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});
