import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import malls from "../data/malls";
import { MovieCards } from "../Context";
// import { MovieCards } from "../Context";

export default function TheatreScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);
  const { seats, setSeats } = useContext(MovieCards);

  const onSeatSelect = (item) => {
    const seatSelected = seats.find((seat) => seat === item);
    if (seatSelected) {
      setSeats(seats.filter((seat) => seat != item));
    } else {
      setSeats([...seats, item]);
    }
  };

  const showSeats = () => {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {seats.map((seat, index) => (
          <Text
            style={{
              marginTop: 4,
              fontSize: 17,
              paddingHorizontal: 4,
            }}
          >
            {seat}
          </Text>
        ))}
      </View>
    );
  };
  console.log(seats, "seelected seat");
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={{ marginLeft: 5 }}
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: "gray",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {route.params.mall}
            </Text>
          </View>
        </View>
        <AntDesign
          style={{ marginRight: 12 }}
          name="sharealt"
          size={24}
          color="black"
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {route.params.timeSelected}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "gray",
            marginTop: 10,
          }}
        >
          CLASSIC {240}
        </Text>
      </View>
      <View style={{ marginTop: 20 }}></View>
      <FlatList
        numColumns={7}
        data={route.params.tableSeats}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onSeatSelect(item)}
            style={{
              margin: 10,
              borderColor: "gray",
              borderWidth: 0.5,
              borderRadius: 5,
              borderWidth: 0.5,
              // padding: 12,
            }}
          >
            {seats.includes(item) ? (
              <Text style={{ backgroundColor: "#FFC40C", padding: 12 }}>
                {item}
              </Text>
            ) : (
              <Text style={{ padding: 12 }}>{item}</Text>
            )}
          </Pressable>
        )}
      ></FlatList>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 20,
          backgroundColor: "#D8D8D8",
          padding: 10,
        }}
      >
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#FFC40C"
          />
          <Text>Selected</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="white"
          />
          <Text>Vacant</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#989898"
          />
          <Text>Occupied</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ marginBottom: 4, fontSize: 15, fontWeight: "500" }}>
            show end ome approax 6:52pm
          </Text>
          {seats.length > 0 ? (
            <Text style={{ fontSize: 20 }}>{seats.length} seat's selected</Text>
          ) : (
            <Text style={{ fontSize: 20 }}>No seats Selected</Text>
          )}
          {seats.length > 0 ? showSeats() : null}
        </View>
        <View
          style={{ backgroundColor: "#E0E0E0", padding: 6, borderRadius: 6 }}
        >
          <Text style={{ width: 100 }}>Now with ticket cancellation</Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "#FFC40C",
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <Pressable>
          <Text style={{ fontWeight: "500", fontSize: 19 }}>PAY 0</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
