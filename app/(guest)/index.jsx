import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GuestStyles from '../../assets/Styles/guest-styles/Home'
import { Ionicons } from '@expo/vector-icons'

export default function Home() {
  return (
    <SafeAreaView style={GuestStyles.safe}>
      <View style={GuestStyles.container}>
        <View>
          <Text style={GuestStyles.containerTxt}>Hi, There{"\n"}Let's Start Learning !</Text>
        </View>
        <View style={GuestStyles.loginBtn}>
          <TouchableOpacity>
            <Text style={GuestStyles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={GuestStyles.category}>
        <View>
          <Text style={GuestStyles.categoryTxt}>Popular Courses</Text>
        </View>
        <View>
          <TouchableOpacity style={GuestStyles.seeBtn}>
            <Text style={GuestStyles.seeBtnTxt}>SEE ALL</Text>
            <Ionicons name='arrow-forward' size={20} color="#F16F39" />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}