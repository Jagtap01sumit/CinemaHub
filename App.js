import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import StackNavigator from "./StackNavigator";
import { MovieContext } from "./Context";

export default function App() {
  return (
    <>
      <MovieContext>
        <StripeProvider publishableKey="pk_test_51NtTNWSAH0cWcMgCsPnvDW7i1P3ruFPVeDDSiyEGT4OhUB5dB56yiMxN0PYd5t3uZTy0htg4nV8Uv1wlwNnO2NrJ00HPi1oxG4">
          <StackNavigator />
          <StatusBar style="auto" />
        </StripeProvider>
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
