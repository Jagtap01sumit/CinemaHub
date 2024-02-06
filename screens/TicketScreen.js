import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import moment from "moment";
import QRCode from "react-native-qrcode-svg";
import { MoviesCards } from "../Context";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function TicketScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const img = route.params.image;
  console.log("img", img);
  const { ticket } = useContext(MoviesCards);
  const ticketDetails = route.params;
  console.log("ticketDetails", ticketDetails);
  useEffect(() => {
    const loadTicket = () => {
      ticket.push(ticketDetails);
    };
    loadTicket();
  }, []);
  console.log("ticketDetails length", ticket);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          margin: 10,
          borderRadius: 6,
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {route.params.name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {route.params.seatsSelected.length}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "gray" }}>HINDI - 20</Text>
          <Text style={{ fontSize: 16, color: "red" }}>MOVIE TICKET</Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginHorizontal: 10,
            marginTop: 6,
          }}
        >
          {route.params.mall}
        </Text>
        <Text
          style={{
            borderColor: "black",
            borderStyle: "dotted",
            borderWidth: 0.5,
            margin: 10,
            height: 1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text>DATE & TIME</Text>
            <Text>{route.params.timeSelected}</Text>
            <Text>{moment(route.params.date).format("MM/DD/YYYY")}</Text>
          </View>
          <Image
            style={{ aspectRatio: 4 / 2, height: 60, borderRadius: 6 }}
            source={{ uri: route.params.image }}
          />
        </View>
        <Text
          style={{
            borderColor: "#DCDCDC",
            borderStyle: "dotted",
            borderWidth: 0.5,
            margin: 10,
            height: 1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <Text>AUDI No</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 6,
              }}
            >
              2
            </Text>
          </View>
          <View>
            <Text>TICKETS</Text>
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
            >
              {route.params.seatsSelected.length}
            </Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Text>SEATS</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {route.params.seatsSelected.map((item) => (
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#DCDCDC",
            borderStyle: "dotted",
            borderWidth: 0.5,
            margin: 10,
            height: 1,
          }}
        />
        <View
          style={{
            height: 150,
            backgroundColor: "#8DA399",
            borderRadius: 6,
            margin: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              PriceDetails
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                0's Seat convenience
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ₹{route.params.priceValue}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Convenience Fee
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ₹89
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Grand Total
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ₹{route.params.total}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ID No.
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                FSZ8937828829
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#DCDCDC",
            borderStyle: "dotted",
            borderWidth: 0.5,
            margin: 10,
            height: 1,
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <QRCode value={route.params.name} />
        </View>
        <Text style={{ fontSize: 18, fontWeight: "500", textAlign: "center" }}>
          W33JNC990
        </Text>
        <Text
          style={{
            borderColor: "#DCDCDC",
            borderStyle: "dotted",
            borderWidth: 0.5,
            margin: 10,
            height: 1,
          }}
        />
        <Pressable
          style={{
            backgroundColor: "green",
            marginLeft: "auto",
            marginRight: "auto",
            width: 140,
            borderRadius: 4,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              padding: 3,
              margin: 8,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Home
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
