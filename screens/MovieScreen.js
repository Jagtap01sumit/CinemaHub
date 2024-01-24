import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieScreen() {
  const route = useRoute();
  console.log(route.params);
  return (
    <SafeAreaView>
      <Text>{route.params.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
