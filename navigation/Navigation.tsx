import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Shop from '../screens/Shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from '../screens/Order';
import Favorite from '../screens/Favorite';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CoffeeDetails from '../screens/CoffeeDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="shop"
        component={Shop}
        options={{
          tabBarLabel: 'Главная',
          tabBarActiveTintColor: '#C67C4E',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={Order}
        options={{
          tabBarLabel: 'Ваш кофе',
          tabBarActiveTintColor: '#C67C4E',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="coffee" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Избранное',
          tabBarActiveTintColor: '#C67C4E',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoffeeDetails" component={CoffeeDetails} />
    </Stack.Navigator>
  );
};

export default Navigation;
