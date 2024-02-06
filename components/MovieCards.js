import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import movies from "../data/movies";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { MoviesCards } from "../Context";
import TicketComponent from "./TicketComponent";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieCards() {
  const data = movies;
  const navigation = useNavigation();
  const { ticket } = useContext(MoviesCards);
  useEffect(() => {
    console.log("heeyyyyyyyyyyyyyy");
    console.log("info", { ticket });
  }, []);
  return (
    // <SafeAreaView>
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ticket.length > 0 ? TicketComponent : Header}
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
              onPress={() =>
                navigation.navigate("Movies", {
                  name: item.name,
                  image: item.image,
                })
              }
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
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Book
              </Text>
            </Pressable>
          </Pressable>
        )}
      />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
