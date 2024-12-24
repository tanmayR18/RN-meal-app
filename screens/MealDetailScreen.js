import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MeailDetail/Subtitle";
import List from "../components/MeailDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/slice";

const MealDetailScreen = ({ route, navigation }) => {
  const { itemData } = route.params;
  const dispatch = useDispatch();
  const isItemFavourite = useSelector(state => state.favourite.value.includes(itemData.id));

  const headerButtonPressHander = () => {
    isItemFavourite
      ? dispatch(removeFavourite(itemData.id))
      : dispatch(addFavourite(itemData.id));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: itemData.title,
      headerRight: () => {
        return (
          <IconButton
            color={"white"}
            icon={isItemFavourite ? "star" : "star-outline"}
            size={24}
            onpress={headerButtonPressHander}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHander]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Image style={styles.image} source={{ uri: itemData.imageUrl }} />
      <Text style={styles.title}>{itemData.title}</Text>

      <MealDetails textStyle={styles.detailText} itemData={itemData} />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List dataArr={itemData.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List dataArr={itemData.steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});
