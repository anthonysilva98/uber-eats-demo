import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: "white",
          padding: 15,
          marginTop: 10,
        }}
      >
        {/* Restaurant Image */}
        <RestaurantImage />
        {/* Restaurant Info */}
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const RestaurantImage = () => {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
        }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          FarmHouse Kitchen Thai Cuisine
        </Text>
        <Text style={{ color: "grey" }}>30-45 ` min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
};
