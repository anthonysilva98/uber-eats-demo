import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Catagories from "../components/Catagories";
import BottomTabs from "../components/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "iVpx0HD9AThkZbzsmLfSJV8f5t9XnnGPqrFBRXHAHG9YNLt5cAuygMfc42KbwsjOWItkFUoP9FQKM_2Mff6-JDHr3qQ8O7cxR04T7U3uRyge77uci1jBVeKheFVXY3Yx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return (
      fetch(yelpurl, apiOptions)
        // get data in json format
        .then((res) => res.json())
        // get json and pass to restaurant
        .then((json) =>
          setRestaurantData(
            json.businesses.filter((buisness) =>
              buisness.transactions.includes(activeTab.toLowerCase())
            )
          )
        )
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
