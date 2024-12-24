import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";

const Favourites = () => {
  const favouriteMealIds = useSelector((state) => state.favourite.value);
  const data = MEALS.filter( meal => favouriteMealIds.includes(meal.id));

  return (
    <View style={styles.container}>
      <MealList data={data} />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
