import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();
const RootNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
