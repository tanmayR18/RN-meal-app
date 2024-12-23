import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {

  function renderCategoryItem(itemData) {

    function pressHandler() {
        navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id
        })
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      key={"two-column"}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
