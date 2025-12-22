import { View, Text , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileStyles from '../../assets/Styles/tabs-style/Profile'

export default function Profile() {

  return (
    <SafeAreaView>
    <View>
      <Text style={ProfileStyles.container}>My Profile</Text>
      {/* <Image src='img'/> */}
      <View></View>
    </View>
    </SafeAreaView>
  )
}