import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://popmenucloud.com/byzevpwi/a4805191-43af-4d57-b9c7-7e2099ce5370.jpg";
const title = "Farmhouse Kitchen Tai Cuisine";
const description = "Thai - Comfort Food $$ 4 Star (2915+)";
const About = () => {
  return (
    <View>
      {/* Restaurant Image */}
      <RestaurantImage image={image} />
      {/* Restaurant Title */}
      <RestaurantTitleComponent title={title} />
      {/* Restaurant Description */}
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestaurantTitleComponent = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 10,
      }}
    >
      {props.title}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 16,
      }}
    >
      {props.description}
    </Text>
  );
};
export default About;
