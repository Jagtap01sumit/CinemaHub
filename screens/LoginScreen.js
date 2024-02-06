import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 60,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Welcome to{" "}
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#4b0082" }}
            >
              CinemaHub
            </Text>
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../assets/programmer-gif.gif")}
          />
        </View>
        <View
          style={{
            height: 600,
            backgroundColor: "#FFD580",
            margin: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <AntDesign name="user" size={25} color="black" />
              </View>
              <TextInput
                style={{
                  width: 300,
                  height: 40,
                  borderWidth: 0.4,
                  padding: 10,
                  borderColor: "black",
                  marginLeft: 10,
                  alignContent: "center",
                  borderRadius: 6,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ justifyContent: "center" }}>
                <MaterialIcons name="password" size={25} color="black" />
              </View>
              <TextInput
                style={{
                  width: 300,
                  height: 40,
                  borderWidth: 0.4,
                  padding: 10,
                  borderColor: "black",
                  marginLeft: 10,
                  alignContent: "center",
                  borderRadius: 6,
                }}
              />
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Pressable
                onPress={() => navigation.navigate("Home")}
                style={{
                  borderWidth: 0.3,
                  borderColor: "black",
                  margin: 10,
                  padding: 10,
                  width: 140,
                  backgroundColor: "#4b0082",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
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
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  borderColor: "black",
                  borderWidth: 0.7,
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <AntDesign name="googleplus" size={24} color="black" />
              </View>
              <View
                style={{
                  borderColor: "black",
                  borderWidth: 0.7,
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <EvilIcons name="sc-facebook" size={24} color="black" />
              </View>
              <View
                style={{
                  borderColor: "black",
                  borderWidth: 0.7,
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Entypo name="instagram" size={24} color="black" />
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 15 }}>
            create new account?{" "}
            <Text
              style={{ fontSize: 18, color: "#4b0082" }}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
