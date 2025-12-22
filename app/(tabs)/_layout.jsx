import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "fade",
        tabBarActiveTintColor:"#F16F39",
        tabBarInactiveColor:"#000000",
        tabBarLabelStyle:{

            fontWeight:"700",
            fontSize:12,
            paddingHorizontal:2,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      /> 
      <Tabs.Screen name="Learn" options={{
        title:"Learn",
        tabBarIcon:({color,size}) => (
            <Ionicons name="book" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="Career" options={{
        title:"Career",
        tabBarIcon:({color,size})=>(
            <Ionicons name="school" size={size} color={color} />
        )
      }} />
            <Tabs.Screen name="Browse" options={{
        title:"Browse",
        tabBarIcon:({color,size})=>(
            <Ionicons name="compass" size={size} color={color} />
        )
      }} />
            <Tabs.Screen name="Profile" options={{
        title:"Profile",
        tabBarIcon:({color,size})=>(
            <Ionicons name="person" size={size} color={color} />
        )
      }} />
    </Tabs>

  );
}
