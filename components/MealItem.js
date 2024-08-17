import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React from "react";

const MealItem = ({ itemData }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable style={ ({pressed}) => pressed ? styles.buttonPressed : null} android_ripple={{color: "#ccc"}}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: itemData.imageUrl }} />
            <Text style={styles.title}>{itemData.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{itemData.duration}m</Text>
            <Text style={styles.detailItem}>{itemData.complexity}</Text>
            <Text style={styles.detailItem}>{itemData.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },    
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
  buttonPressed: {
    opacity: 0.5,
  },
});
