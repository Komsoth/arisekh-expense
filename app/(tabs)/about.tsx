import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AboutScreen(){
    return(
        <View>
            <Text>About Screen</Text>
            <Link href="/">Home</Link>
        </View>
    )
}