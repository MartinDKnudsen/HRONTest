import React from "react";
import { StyleSheet, FlatList, View, Text,  TouchableHighlight } from "react-native";

import Card from "../Components/Card"
import Colors from "../config/Colors/Colors";
import { Feather } from "@expo/vector-icons";
import AppText from '../Components/AppText'
import People from '../Components/PeopleConst'
import Separator from "../Components/Separator";

var icon = <Feather name="star" size={30} color="black" />;

export default function ListingFav() {
  return (
    <View style={styles.screen}>
      <AppText style={styles.headLine}>{icon} Favorites</AppText>
      <FlatList
        data={People}
        keyExtractor={(People) => People.id.toString()}
        renderItem={({ item }) => (
          <Card name={item.title} age={item.age} image={item.image} />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    flex: 1,
    padding: 5,
    backgroundColor: Colors.White,
    
  },
  headLine: {
    fontSize: 30,
    color: Colors.Black,
    fontWeight: "bold",
     textDecorationLine: "underline"
  },
});
