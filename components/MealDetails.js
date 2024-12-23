import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ itemData, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{itemData.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{itemData.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {itemData.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
