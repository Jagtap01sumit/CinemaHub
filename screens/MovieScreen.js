import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import malls from "../data/malls";

export default function MovieScreen() {
  const route = useRoute();
  const mallsData = malls;
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState("");
  const [mall, setMall] = useState([]);
  // const [showTimes,setShowTimes]=useState()
  console.log(mall);
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
          <Text style={{ fontSize: 20, fontWeight: "600", marginLeft: 5 }}>
            {route.params.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Ionicons name="search-sharp" size={24} color="black" />
          <Ionicons
            style={{ marginHorizontal: 10 }}
            name="filter"
            size={24}
            color="black"
          />
          <Entypo name="share-alternative" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginLeft: 5,
        }}
      >
        <AntDesign name="Safety" size={24} color="orange" />
        <Text style={{ paddingLeft: 4 }}>Your Safety is our priority</Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2020-08-20")}
        endDate={new Date("2020-08-31")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatList
        ContainerStyle={styles.flatListContainerStyle}
      />
      {mallsData.map((item, index) => (
        <Pressable
          onPress={() => {
            setMall(item.name);
          }}
          style={{ margin: 10 }}
          key={index}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item }) => (
                <Pressable
                  style={{
                    borderColor: "green",
                    borderWidth: 0.5,
                    width: 80,
                    borderRadius: 3,
                    margin: 15,
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "green",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
