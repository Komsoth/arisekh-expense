import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constand/colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
            tabBarStyle: {
                backgroundColor: Colors.primary,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 5,
                height: 85
            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 600,
                paddingTop: 4
            }
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "ទំព័រដើម",
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="expense" 
                options={{
                    title: "ចំណាយ",
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name="add-circle" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="about" 
                options={{
                    title: "អំពីយើង",
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name="information-circle" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}