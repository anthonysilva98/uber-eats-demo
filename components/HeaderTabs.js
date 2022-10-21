import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <HeaderButton
        text="Delivery"
        buttonColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="PickUp"
        buttonColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.text ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
      >
        <Text
          style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: "900",
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
