import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const RequestedRides = ({navigation}) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btn} onPress={()=>{

        navigation.navigate("LiveLocation")
      }}>
        <Ionicons name='add' style={styles.btntxt} size={50} onPress={()=>{navigation.navigate("LiveLocation")}}>
          <Text style={{color:'black'}}>Search</Text>
        </Ionicons>
      </TouchableOpacity>
    </View>
  )
}

export default RequestedRides

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    backgroundColor:'blue',
    height:90,
    width:90,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:210,
    marginTop:500,
    borderRadius:50

  },
  btntxt:{
    color:'white',
    height:50,
    width:50
  },
})