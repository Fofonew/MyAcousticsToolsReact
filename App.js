import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import Screen4 from './src/Screen4';


const Tab = createBottomTabNavigator();

const tabBarIcon = (name) => ({color, size}) => (
    <Icon name={name} color={color} size={size} />
);

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName;
                switch (route.name) {
                  case 'Screen1':
                    iconName = 'home';
                    break;
                  case 'Screen2':
                    iconName = 'search';
                    break;
                  case 'Screen3':
                    iconName = 'add';
                    break;
                  case 'Screen4':
                    iconName = 'person';
                    break;
                }
                return tabBarIcon(iconName)({color, size});
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              showLabel: false,
            }}
        >
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
          <Tab.Screen name="Screen4" component={Screen4} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
