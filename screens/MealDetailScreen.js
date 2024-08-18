import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import MealDetails from '../components/MealDetails'

const MealDetailScreen = ({route, navigation}) => {
    const {itemData} = route.params

    useLayoutEffect( () => {
        navigation.setOptions({
            title: itemData.title
        })
    },[])

  return (
    <View>
      <Image source={{ uri: itemData.imageUrl}} />
      <Text></Text>
      
      <MealDetails itemData={itemData}/>
      <Text>Ingredients</Text>
      {
        itemData.ingredients.map( (ingredient, index) => <Text key={index}>{ingredient}</Text>)
      }
      <Text>Steps</Text>
      {
        itemData.steps.map( (step, index) => <Text key={index}>{step}</Text>)
      }
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({})