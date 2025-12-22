import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import LoginStyles from '../../assets/Styles/auth-styles/Login'
import { router } from 'expo-router'
export default function index() {
    const [eyeopen, setEyeopen] = useState(false)


    const navigate = () =>{
        router.push("/(guest)")
    }



    return (
        <SafeAreaView style={LoginStyles.container}>
            <View>
                <Text style={LoginStyles.headerText}>Login</Text>
            </View>
            <View style={LoginStyles.ipFields}>
                <View style={LoginStyles.email}>
                    <Ionicons name='mail' size={24} color="#515960" />
                    <TextInput placeholder='Email' />
                </View>
                <View style={LoginStyles.password}>
                    <Ionicons name="lock-closed" size={24} color="#515960" />

                    <TextInput
                        placeholder="Password"
                        secureTextEntry={!eyeopen}
                        style={LoginStyles.pass}
                    />

                    <TouchableOpacity onPress={() => setEyeopen(!eyeopen)}>
                        {eyeopen ? (
                            <Ionicons name="eye" size={24} />
                        ) : (
                            <Ionicons name="eye-off" size={24} />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={LoginStyles.button} onPress={()=>{router.push("/(tabs)")}}>
                    <Text style={LoginStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={LoginStyles.Forgot}>
                    <Text>Forgot Your Password?</Text>
                    <TouchableOpacity>
                        <Text style={LoginStyles.resetText}> Reset your password</Text>
                    </TouchableOpacity>
                </View>
                <View style={LoginStyles.optional}>
                    <View style={LoginStyles.leftLine}></View>
                    <Text>OR</Text>
                    <View style={LoginStyles.leftLine}></View>
                </View>
                <View>
                    <View style={LoginStyles.btnContainer}>
                        <TouchableOpacity style={LoginStyles.apple}>
                            <Ionicons name='logo-apple' size={24} />
                            <Text>Sign in with Apple</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={LoginStyles.google}>
                            <Ionicons name='logo-google' size={24} />
                            <Text>Sign in with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={LoginStyles.loginContainer}>
                    <TouchableOpacity style={LoginStyles.login} onPress={navigate} >
                        <Text style={LoginStyles.loginTxt}>Explore the app with Our Features</Text>
                        <FontAwesome name='arrow-right' size={18} color="#F16F39" />
                    </TouchableOpacity>
                </View>
                <View style={LoginStyles.register}>
                    <Text>
                        Are you not registered ?
                    </Text>
                    <Text style={LoginStyles.registerTxt}>Register</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}