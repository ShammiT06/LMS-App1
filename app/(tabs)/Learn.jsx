import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import LearnStyles from '../../assets/Styles/tabs-style/Learn'


export default function Learn() {
  return (
    <SafeAreaView style={LearnStyles.safe}>
     <View style={LearnStyles.top}>
       <Ionicons name="arrow-back" size={28} />
       <Text style={LearnStyles.topic}>Courses</Text>
     </View>
    </SafeAreaView>
  )
}