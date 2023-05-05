import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
