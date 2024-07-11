import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import { enableScreens } from 'react-native-screens';
import {Ionicons} from '@expo/vector-icons';

enableScreens();

const Stack = createStackNavigator();
/*const Tabs = createBottomTabNavigator();*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,}} />
        <Stack.Screen name="Cart" component={CartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*
    <NavigationContainer>
     <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={"gold"} />
                ),
              }}/>
      <Tabs.Screen name="Cart" component={CartScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart" size={size} color={"red"}/>
                ),
              }}/>
     </Tabs.Navigator>
    </NavigationContainer>
    */

  );
}

