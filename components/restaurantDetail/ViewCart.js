import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { db } from "../../firebase";
import {
  addDoc,
  setDoc,
  getFirestore,
  Firestore,
  collection,
  serverTimestamp,
} from "firebase/firestore";
const ViewCart = () => {
  const [modalVisable, setmodalVisable] = useState(false);
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
  console.log(totalUSD);

  const addOrderToFirebase = () => {
    const dbRef = collection(db, "orders");
    const data = {
      items: items,
      restaurantName: restaurantName,
      createdAt: serverTimestamp(),
    };
    addDoc(dbRef, data);
    setmodalVisable(false);
  };
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFirebase();
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 16,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisable}
        transparent={true}
        onRequestClose={() => setmodalVisable(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            top: 800,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setmodalVisable(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart{" "}
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subTotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
});
