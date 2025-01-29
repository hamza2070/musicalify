import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { NavigationContainer } from '@react-navigation/native';

import AudioProvider from "../../src/context/AudioProvider";
import color from "../../src/misc/color";
import AppNavigator from "../../src/navigation/AppNavigator";

// import { Text } from 'react-native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};

export default function App() {
  return (
    <AudioProvider>
        <AppNavigator />
      
    </AudioProvider>
  );
}
