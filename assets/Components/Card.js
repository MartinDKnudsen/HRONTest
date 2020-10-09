import React from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import Colors from "../config/Colors/Colors";
import Screen from "./Screen"
import AppText from "./AppText"
import Rater from '../Components/StarRater'
import Icon from '../Components/icon'

var currentDate = new Date().toLocaleDateString("dk-DK");
var currentTime = new Date().toLocaleTimeString();

export default function Card({ name, age, image}) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name}> {name} </AppText>
        <AppText style={styles.age}>
          {" "}
          <Text style={styles.textAsBold}>Age: </Text>
          {age} {"\n"}
          {currentDate} : {currentTime}{" "}
        </AppText>
        <View style={styles.iconStyle}>
            <Icon name="email" />
            <AppText> </AppText>
            <Icon name="phone" />
        </View>
        <View>
          <Rater />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: Colors.WhiteColor,
    marginBottom: -10
  },
  card: {
    flexDirection: "column",
    borderRadius: 15,
    flex: 1,
    backgroundColor: Colors.WhiteColor,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 35,
  },
  textAsBold: {
fontWeight: "bold"
  },
  age: {
    color: Colors.medium,
    fontSize: 16,
    fontWeight: "100",
    lineHeight: Platform.OS === "android" ? 15 : 20,
  },
  detailsContainer: {
    padding: 12,
    marginLeft: -8,
  },
  name: {
    lineHeight: Platform.OS === "android" ? 20 : 25,
    color: Colors.Black,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
iconStyle: {
flexDirection: "row"
}
});
