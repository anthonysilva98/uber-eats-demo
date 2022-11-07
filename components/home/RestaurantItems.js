import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const localRestaurants = [
  {
    name: "Best Restaurant",
    image_url:
      "https://popmenucloud.com/byzevpwi/a4805191-43af-4d57-b9c7-7e2099ce5370.jpg",
    catagories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1222,
    rating: 5.0,
  },
  {
    name: "My Restaurant",
    image_url:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    catagories: ["Diner", "Bar"],
    price: "$",
    reviews: 122,
    rating: 4.0,
  },
  {
    name: "The Restaurant",
    image_url:
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    catagories: ["Bar"],
    price: "$$$",
    reviews: 1212,
    rating: 3.0,
  },
];
const RestaurantItems = ({ navigation, ...props }) => {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              catagories: restaurant.categories,
            })
          }
        >
          <View
            key={index}
            style={{
              paddingHorizontal: 10,
              backgroundColor: "white",
              padding: 15,
              marginTop: 10,
            }}
          >
            {/* Restaurant Image */}
            <RestaurantImage image={restaurant.image_url} />
            {/* Restaurant Info */}
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestaurantItems;

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => {
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
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: "grey" }}>30-45 ● min</Text>
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
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
