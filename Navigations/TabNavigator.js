import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Rides from '../screens/Ride Screens/Rides';
import Posts from '../screens/Ride Screens/Posts';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primary } from '../style/styles';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    const listTab = [
        { status: 'Ride' },
        { status: 'Post' },
    ]
    const [status, setStatus] = useState('Ride')
    const setStatusFilter = status => {
        setStatus(status)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listTab}>
                {listTab.map(e => (
                    <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]} onPress={() => setStatusFilter(e.status)}>
                        <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                {status==='Ride'
                ?
                <Rides></Rides>
                :
                <Posts></Posts>
                }
            </View>
        </SafeAreaView>
        // <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false}}>

        //     <Tab.Screen name='Rides' component={Rides} options={{tabBarIcon: ()=>(
        //         <>
        //         <Ionicons name='body' color={primary} size={28}></Ionicons>
        //         <Text> Rides</Text>
        //         </>

        //     ),tabBarActiveBackgroundColor:'lightblue'
        //      }}/>
        //     <Tab.Screen name='Posts' component={Posts} options={{tabBarIcon: ()=>(
        //         <>
        //          <Ionicons name='car' color={primary} size={28}></Ionicons>
        //         <Text style={{fontSize:18}}>Posts</Text>
        //         </>
        //     ),tabBarActiveBackgroundColor:'lightblue' 
        //     }}/>


        // </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        
    },
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop:15
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius:5,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    textTab: {
        fontSize: 16,
        fontWeight:'500'
    },
    btnTabActive: {
        backgroundColor: primary
    },
    textTabActive: {
        color: 'white'
    }
})