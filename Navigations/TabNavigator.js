import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Rides from '../screens/Ride Screens/Rides';
import Posts from '../screens/Ride Screens/Posts';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
        <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false}}>

            <Tab.Screen name='Rides' component={Rides} options={{tabBarIcon: ()=>(
                <>
                <Ionicons name='body' color={'blue'} size={28}></Ionicons>
                <Text> Rides</Text>
                </>

            ),tabBarActiveBackgroundColor:'lightblue'
             }}/>
            <Tab.Screen name='Posts' component={Posts} options={{tabBarIcon: ()=>(
                <>
                 <Ionicons name='car' color={'blue'} size={28}></Ionicons>
                <Text>Posts</Text>
                </>
            ),tabBarActiveBackgroundColor:'lightblue' 
            }}/>
            
            
        </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})