import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
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
    description:
      "Delicious Soup Delicious Soup Delicious Soup Delicious Soup Delicious Soup Delicious Soup ",
    price: "$17",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Lasagna",
    description: "Delicious Lasagna",
    price: "$15",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  },
  {
    title: "Pizza",
    description: "Delic Pizza",
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
];

const MenuItem = ({ restaurantName }) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false} pagingEnabled={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => {
                selectItem(food, checkboxValue);
              }}
              isChecked={isFoodInCart(food, cartItems)}
            />
            {/* Food Info */}
            <FoodInfo food={food} />
            {/* Food Image */}
            <FoodImage food={food} />
          </View>
          <Divider
            width={1.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItem;

const FoodInfo = (props) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.title}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = (props) => {
  return (
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
});
