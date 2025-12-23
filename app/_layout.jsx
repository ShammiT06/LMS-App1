import { Stack } from "expo-router";
import {useFonts} from "expo-font"

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    PoppinsRegular :require("../assets/fonts/Poppins-Regular.ttf"),
    OutfitRegular :require("../assets/fonts/Outfit-Regular.ttf"),
    OutfitSemibold:require("../assets/fonts/Outfit-SemiBold.ttf")

  })


  if (!fontsLoaded)
    return null


  return <Stack screenOptions={{headerShown:false,animation:"fade"}}>
    <Stack.Screen name="(auth)" />
    <Stack.Screen name="(guest)" />
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="(pages)" />
  </Stack>;
}
