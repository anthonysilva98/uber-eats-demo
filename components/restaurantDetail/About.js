import { View, Text, Image } from "react-native";
import React from "react";

const About = (props) => {
  //Destructure Information Coming in from Route
  const { name, image, price, reviews, rating, catagories } =
    props.route.params;

  const formattedCatagories = catagories.map((cat) => cat.title).join(" ● ");
  //Formatted Concatenization of Destructed Data
  const description = `${formattedCatagories} ${
    price ? " ● " + price : ""
  } ● ${rating} Stars ● ${reviews}  `;
  return (
    <View>
      {/* Restaurant Image */}
      <RestaurantImage image={image} />
      {/* Restaurant Title */}
      <RestaurantTitleComponent name={name} />
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
        marginHorizontal: 10,
      }}
    >
      {props.name}
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
