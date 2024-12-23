import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({onpress, size, color, icon}) => {
  return (
    <Pressable style={({pressed}) => pressed ? styles.pressed : null} onPress={onpress}>
        <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})