import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ExpenseScreen(){
    return(
        <View>
            <Text>Expense Screen</Text>
            <Link href="/">Home</Link>
        </View>
    )
}