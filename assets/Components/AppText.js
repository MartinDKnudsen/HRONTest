import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[customStyle.TextForApp, style]} {...otherProps}>{children}</Text>
  );
}

const customStyle = StyleSheet.create({
  TextForApp: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
