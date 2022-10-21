import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Catagories from "../components/Catagories";
import RestaurantItem from "../components/RestaurantItem";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
