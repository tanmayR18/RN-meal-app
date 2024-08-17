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
        return <MealItem  title={itemData.item.title} />
    }

  return (
    <View style={styles.container}>
      <FlatList 
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