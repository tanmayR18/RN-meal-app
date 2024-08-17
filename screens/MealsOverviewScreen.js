import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route}) => {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter( mealItem => {
        return mealItem.categoryIds.includes(categoryId)
    })

    const renderMealItem = (itemData) => {
        return <MealItem  itemData = {itemData.item} />
    }

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={ itemData => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})