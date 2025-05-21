import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MainScreen from "../screens/MainScreen/MainScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}