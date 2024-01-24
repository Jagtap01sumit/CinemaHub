import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
    // <View style={styles.container}>
    //   <HomeScreen />
    //   <StatusBar style="auto"></StatusBar>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
