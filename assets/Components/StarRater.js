import React from 'react'
import { StyleSheet, View, } from "react-native";
import { Rating } from "react-native-ratings";
import Color from '../config/Colors/Colors'

export default function StarRater() {
    return (
      <View style={styles.starContainer}>
        <Rating
          type="star"
          imageSize={40} 
        />
      </View>
    );
}

const styles = StyleSheet.create({
  starContainer: {
    paddingTop: 1  
  },
  headLine: {
    fontSize: 30,
    color: Color.Black,
    fontWeight: "bold",
  },
});
