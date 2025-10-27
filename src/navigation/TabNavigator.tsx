import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/TabScreen/Home';
import Profile from '../screens/TabScreen/Profile';
import Ticket from '../screens/TabScreen/Ticket';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1E1E2D', 
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 80,
          position: 'absolute',
          bottom: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          if (route.name === 'Ticket') {
            return (
              <FontAwesome5
                name="ticket-alt"
                size={22}
                color={focused ? '#fff' : '#A6A6A8'}
              />
            );
          }

          return (
            <Ionicons
              name={iconName}
              size={26}
              color={focused ? '#fff' : '#A6A6A8'}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
