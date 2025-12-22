import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <View>
        <Text>Hi, There</Text>
        <Text>Let's start Learning !</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}