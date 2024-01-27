import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Animated ,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function Account() {
  const translateX = useSharedValue(100);

  const handlePress = () => {
    translateX.value += 50;
  }

  const animatedStyle = useAnimatedStyle(()=> ({
    transform: [
      // { translateX: withSpring(translateX.value * 2)},
      { translateY: withSpring(translateX.value * 2)},
    ]
  }))

  return (
    <>
    <Animated.View
        style={[
          styles.box,
          animatedStyle
        ]}
      />
    <View style={styles.container}>
      
      <TouchableOpacity onPress={handlePress} ><Text>Press my boobs</Text></TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width:100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
    marginLeft: 50
  },
});