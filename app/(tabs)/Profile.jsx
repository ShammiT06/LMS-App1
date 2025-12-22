import { View, Text ,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileStyles from '../../assets/Styles/tabs-style/Profile'
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <SafeAreaView style={ProfileStyles.safe}>
    <View style={ProfileStyles.container}>
      <Text style={ProfileStyles.containerTxt}>
         My Profile
      </Text>  
      <Image
       source={require('../../assets/images/profile.png')}
       style={ProfileStyles.profileImg} />
      <View style={ProfileStyles.content}> 
         <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
           <Ionicons name="person" style={ProfileStyles.ionicons} />
          </View>
        <Text> Profile</Text>   
         </View> 
          <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
             <Ionicons name="language" style={ProfileStyles.ionicons} />
         </View>
          <Text> Language</Text>  
         </View> 
          <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
             <Ionicons name="wallet-outline" style={ProfileStyles.ionicons} />
          </View>
           <Text> Theme</Text>
         </View> 
          <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
              <Ionicons name="log-out-outline" size={24} color="black"/>
            </View>
            <Text> Logout</Text>
         </View> 
      </View>
    </View>
    </SafeAreaView>
  )
}