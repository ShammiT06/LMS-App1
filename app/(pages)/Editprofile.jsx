import { View, Text,Image ,TextInput ,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileStyles from '../../assets/Styles/tabs-style/Profile'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { router } from 'expo-router'

export default function Editprofile() {
    return (
        <SafeAreaView>
            <View>
                      <View> 
        <Ionicons name="chevron-back" size={24} style={ProfileStyles.backbtn} onPress={() => router.back()}/>
      </View>
               <View style={ProfileStyles.top}>
                     <Text style={ProfileStyles.containerTxt}>
                        Edit Profile
                     </Text>  
                     <Image
                      source={require('../../assets/images/profile.png')}
                      style={ProfileStyles.profileImg} />
                      <Text>Name</Text>
                </View>
                <View style={ProfileStyles.inputfield}>
                    <View style={ProfileStyles.inputs}>
                        <Text>Full Name</Text>
                        <TextInput placeholder='Your Name ' style={ProfileStyles.inputbox} />
                    </View>
                     <View style={ProfileStyles.inputs}>
                        <Text>Phone Number</Text>
                        <TextInput placeholder='Your Number ' style={ProfileStyles.inputbox} />
                    </View>
                     <View style={ProfileStyles.inputs}>
                        <Text>Email</Text>
                        <TextInput placeholder='Your Email ' style={ProfileStyles.inputbox} />
                    </View>
                     <View style={ProfileStyles.inputs}>
                        <Text>Date of Birth</Text>
                        <TextInput placeholder='DD/MM/YYYY ' style={ProfileStyles.inputbox} />
                    </View>
                </View>
                <View style={ProfileStyles.btn}>
               <TouchableOpacity style={ProfileStyles.button} >
                    <Text style={ProfileStyles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}