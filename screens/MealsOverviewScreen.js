import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route, navigation}) => {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter( mealItem => {
        return mealItem.categoryIds.includes(categoryId)
    })

    const renderMealItem = (itemData) => {
        return <MealItem  itemData = {itemData.item} />
    }

    useLayoutEffect( () => {
        const categoryTitle = CATEGORIES.find( category => category.id === categoryId).title
        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation])

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