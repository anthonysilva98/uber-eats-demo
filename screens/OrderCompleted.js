import { View, Text, SafeAreaView, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import {
  limit,
  onSnapshot,
  orderBy,
  collection,
  unsubscribe,
} from "firebase/firestore";
import { useState } from "react";
import MenuItem from "../components/restaurantDetail/MenuItem";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Cheese",
        description: "Fresh Cheese",
        price: "$15",
        image:
          "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  //adds up total from price array to display them
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const dbRef = collection(db, "orders");
    //Function to reterive order by using created at timestamp
    const unsubscribe = () => {
      orderBy("createdAt", "desc");
      limit(1);
      onSnapshot(dbRef, (snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    };
    unsubscribe();
    console.log("Last order ", lastOrder);
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        {/* Green Check Animation */}
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        {/* Ordered Items */}
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          {/* Cooking Animation */}
          <LottieView
            style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
            loop={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
