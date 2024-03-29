import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import MovieCards from "../components/MovieCards";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#F0F0F0", flex: 1 }}>
      <MovieCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
