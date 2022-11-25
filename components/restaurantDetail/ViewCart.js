import { View, Text, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const [modalVisable, setmodalVisable] = useState(false);
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  //adds up total from price array to display them
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalUSD);

  const checkoutModalContent = () => {
    return (
      <View
        style={{
          backgroundColor: "black",
          padding: 10,
          borderRadius: 30,
          width: 150,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={{ color: "white" }}>Checkout</Text>
        </TouchableOpacity>
      </View>
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
