import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { MoviesCards } from "../Context";
import { useStripe } from "@stripe/stripe-react-native";

export default function TheatreScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);
  const { seats, setSeats, occupied, setOccupied } = useContext(MoviesCards);
  console.log("image", route.params.image);
  const onSeatSelect = (item) => {
    const seatSelected = seats.find((seat) => seat === item);
    if (seatSelected) {
      setSeats(seats.filter((seat) => seat != item));
    } else {
      setSeats([...seats, item]);
      // setSeats(seats.push(item)); ]1fdxfg
    }
  };
  const fee = 87;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? fee + noOfSeats * 240 : 0;
  console.log(total);
  console.log(fee);
  console.log(noOfSeats);
  const displaySeats = [...seats];
  const stripe = useStripe();
  if (!stripe) {
    console.error("Stripe is not initialized");
    Alert.alert("Payment failed", "Please try again later");
    return;
  }
  const subscribe = async () => {
    console.log("reach");
    const response = await fetch("http://192.168.0.103:8000/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(total * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error in fetch:", response.status, response.statusText);
      return;
    }

    const data = await response.json();
    console.log(data);

    if (!response.ok) return Alert.alert(data.message);

    const clientSecret = data.clientSecret;

    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "sumit",
    });

    if (initSheet.error) return Alert.alert(initSheet.error.message);

    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });

    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    else {
      occupied.push(...seats);
      navigation.navigate("Ticket", {
        name: route.params.name,
        mall: route.params.mall,
        timeSelected: route.params.timeSelected,
        total: total,
        image: route.params.image,
        date: route.params.date,
        seatsSelected: displaySeats,
        priceValue: priceValue,
      });
    }
  };
  const priceValue = noOfSeats * 240;
  console.log(route.params.image);
  console.log("occupied", occupied);
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
              borderRadius: 6,
              borderWidth: 0.5,
            }}
          >
            {seats.includes(item) ? (
              <Text
                style={{
                  backgroundColor: "#FFC40C",
                  padding: 12,
                  borderRadius: 6,
                }}
              >
                {item}
              </Text>
            ) : occupied.includes(item) ? (
              <Text
                style={{
                  backgroundColor: "#989898",
                  padding: 12,
                  borderRadius: 6,
                }}
              >
                {item}
              </Text>
            ) : (
              <Text
                style={{
                  padding: 12,
                  borderRadius: 6,
                }}
              >
                {item}
              </Text>
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
            show end on approax 6:52pm
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
        <Text style={{ fontWeight: "400", fontSize: 16 }}>
          {seats.length} Seats are selected
        </Text>

        <Pressable onPress={subscribe}>
          <Text style={{ fontWeight: "500", fontSize: 19 }}>PAY {total}</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
}
