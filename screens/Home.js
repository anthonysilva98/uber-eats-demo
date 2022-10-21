import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Catagories from "../components/Catagories";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "grey", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Catagories />
    </SafeAreaView>
  );
};

export default Home;
