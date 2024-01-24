import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import movies from "../data/movies";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
export default function MovieCards() {
  const data = movies;
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        data={data}
        renderItem={({ item }) => (
          <Pressable style={{ margin: 10, marginHorizontal: 23 }}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 6,
              }}
              source={{ uri: item.image }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                width: 160,
                marginTop: 10,
              }}
            >
              {item.name.substr(0.16) + "..."}
            </Text>
            <Text style={{ marginTop: 1, fontSize: 15, color: "gray" }}>
              U/A + {item.language}
            </Text>
            <Text style={{ marginTop: 1, fontSize: 14, fontWeight: "500" }}>
              {item.genre}
            </Text>
            <Pressable
              onPress={() => navigation.navigate("Movies", { name: item.name })}
              style={{
                backgroundColor: "#FFC40C",
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
                width: 100,
                marginTop: 10,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}
              >
                Book
              </Text>
            </Pressable>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
