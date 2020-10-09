import React from "react";
import { TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from '../config/Colors/Colors'


export default function icon({
  name,
  size = 45,
  backgroundColor = Colors.Black,
  iconColor = Colors.White,
}) {
  return (
    <TouchableHighlight underlayColor={Colors.orange}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      </View>
    </TouchableHighlight>
  );
}
