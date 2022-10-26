import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Catagories from "../components/Catagories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
  "iVpx0HD9AThkZbzsmLfSJV8f5t9XnnGPqrFBRXHAHG9YNLt5cAuygMfc42KbwsjOWItkFUoP9FQKM_2Mff6-JDHr3qQ8O7cxR04T7U3uRyge77uci1jBVeKheFVXY3Yx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const getRestaurantsFromYelp = () => {
    const yelpurl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Riverbank";

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
        .then((json) => setRestaurantData(json.businesses))
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
