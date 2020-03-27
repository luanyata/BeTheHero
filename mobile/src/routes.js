import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#000"
        }}
      >
        <NavigationContainer>
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Incidents" component={Incidents} />
            <AppStack.Screen name="Detail" component={Detail} />
          </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// function HookComponent() {
//   const insets = useSafeArea();

//   return <View style={{ paddingTop: insets.top }} />;
// }
