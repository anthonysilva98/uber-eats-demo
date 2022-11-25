import { View, Text } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontsize: 16 }}>{title}</Text>
      <Text style={{ fontWeight: "600", fontsize: 16 }}>{price}</Text>
    </View>
  );
};

export default OrderItem;
