import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";
const foods = [
  {
    title: "Lasagna",
    description: "Delic Lasagna",
    price: "$15",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Pizza",
    description: "Delicious Pizza",
    price: "$12",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Soup",
    description: "Delicious Soup  ",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Steak",
    description: "Medium rare Steak",
    price: "$15",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Pasta",
    description: "Delic Pasta",
    price: "$12",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Soup",
    description: "Delicious Soup",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Veggies",
    description: "Veggie Board served with Carrots, Peas, and Celary",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Lasagna",
    description: "Delic Lasagna",
    price: "$15",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Pizza",
    description: "Delicious Pizza",
    price: "$12",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Soup",
    description: "Delicious Soup  ",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Steak",
    description: "Medium rare Steak",
    price: "$15",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Pasta",
    description: "Delic Pasta",
    price: "$12",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Soup",
    description: "Delicious Soup",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Veggies",
    description: "Veggie Board served with Carrots, Peas, and Celary",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
];

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />

      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;
