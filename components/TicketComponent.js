import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { MoviesCards } from "../Context";
import { useNavigation } from "@react-navigation/native";

export default function TicketComponent() {
  const { ticket } = useContext(MoviesCards);
  const navigation = useNavigation();
  return (
    <View>
      {ticket.slice(0, 1).map((item, index) => (
        <ImageBackground
          style={{ aspectRatio: 5 / 2, height: 170 }}
          source={{
            uri: item.image,
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              height: 130,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 6,
              top: 140,
              left: 32,
              width: "82%",
            }}
            onPress={navigation.navigate("Ticket")}
          >
            <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
              YOUR TICKET
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "gray",
                    marginTop: 4,
                  }}
                >
                  U/A + KANNADA
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  borderRadius: 6,
                  marginRight: 10,
                }}
                onPress={() => navigation.navigate("Ticket")}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  VIEW TICKET
                </Text>
              </Pressable>
            </View>
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "500" }}>
              {item.mall}
            </Text>
          </Pressable>
        </ImageBackground>
      ))}
      <View style={{ marginTop: 110 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
