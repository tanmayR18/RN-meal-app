import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({data}) => {

    const renderMealItem = (itemData) => {
        return <MealItem  itemData = {itemData.item} />
    }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealList;

const styles = StyleSheet.create({});
