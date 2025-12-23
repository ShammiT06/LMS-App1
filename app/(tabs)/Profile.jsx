import { View, Text ,Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileStyles from '../../assets/Styles/tabs-style/Profile'
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router'
import { useNavigation } from "expo-router";

export default function Profile() {
  return (
    <SafeAreaView style={ProfileStyles.safe}>
        <Ionicons name="chevron-back" size={24} style={ProfileStyles.backbtn} onPress={() => router.back()}/>
    <View style={ProfileStyles.container}>
   <View style={ProfileStyles.top}>
      <Text style={ProfileStyles.containerTxt}>
         My Profile
      </Text>  
      <Image
       source={require('../../assets/images/profile.png')}
       style={ProfileStyles.profileImg} />
       <Text>Name</Text>
       </View>

      <View style={ProfileStyles.content}> 
         <TouchableOpacity style={ProfileStyles.contentTxt} onPress={()=>{router.push("/(pages)/Editprofile")}}>
              <View style={ProfileStyles.iconBg}>
                <Ionicons name="person" size={24} color="#FF6B2C" />
              </View>
             <Text> Profile</Text>   
            
         </TouchableOpacity> 
          <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
             <Ionicons name="language" size={24} color="#FF6B2C" />
         </View>
          <Text> Language</Text>  
         </View> 
          <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
             <Ionicons name="wallet-outline" size={24} color="#FF6B2C" />
          </View>
           <Text> Theme</Text>
         </View> 
          <View style={ProfileStyles.contentTxt}>
            <View style={ProfileStyles.iconBg}>
              <Ionicons name="log-out-outline" size={24} color="#FF6B2C"/>
            </View>
            <Text> Logout</Text>
         </View> 
      </View>
    </View>
    </SafeAreaView>
  )
}