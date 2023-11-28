import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';

import Home from './src/screens/Home'
import CreateAccount from './src/screens/CreateAccount'
import Login from './src/screens/Login'
import TakeNote from './src/screens/TakeNote'
import AddNote from './src/screens/AddNote';
import UpdateNote from './src/screens/UpdateNote';

const Stack = createStackNavigator()

export default function App() {
  const [editingMode, setEditingMode] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CreateAccount'>
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: '#F8EEE2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#403B36',
          },
          headerLeft:()=>(
            <View style={{marginLeft: 20}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerRight:()=>(
            <View style={{marginRight: 20}}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </View>
          ),
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
          headerStyle: {
            backgroundColor: '#F8EEE2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#403B36',
          },
          headerShown: false,
          // headerLeft:()=>(
            // <View style={{marginLeft: 20}}>
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <AntDesign name="left" size={24} color="black" />
            //   </TouchableOpacity>
            // </View>
          // ),
          headerRight:()=>(
            <View style={{marginRight: 20}}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </View>
          ),
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerStyle: {
            backgroundColor: '#F8EEE2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#403B36',
          },
          // headerLeft:()=>(
          //   <View style={{marginLeft: 20}}>
          //     <TouchableOpacity onPress={() => navigation.goBack()}>
          //       <AntDesign name="left" size={24} color="black" />
          //     </TouchableOpacity>
          //   </View>
          // ),
          headerRight:()=>(
            <View style={{marginRight: 20}}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </View>
          ),
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="TakeNote" options={({ route }) => ({
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#403B36',
          },
          // headerLeft: () => (
          //   <View style={{ marginLeft: 20 }}>
          //     <TouchableOpacity onPress={() => route.params?.goBack()}>
          //       <AntDesign name="left" size={24} color="black" />
          //     </TouchableOpacity>
          //   </View>
          // ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity onPress={() => setEditingMode(!editingMode)}>
                <Text style={{ fontSize: 22, color: 'blue' }}>
                  {editingMode ? 'Done' : 'Edit'}
                </Text>
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'center',
          title: 'Note List',
        })}>
          {(props) => <TakeNote {...props} editingMode={editingMode} />}
        </Stack.Screen>
        <Stack.Screen name="AddNote" component={AddNote} options={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#403B36',
          },
          // headerLeft:()=>(
          //   <View style={{marginLeft: 20}}>
          //     <TouchableOpacity onPress={() => navigation.goBack()}>
          //       <AntDesign name="left" size={24} color="black" />
          //     </TouchableOpacity>
          //   </View>
          // ),
          headerRight:()=>(
            <View style={{marginRight: 20}}>
              <Text style={{fontSize: 22, color: 'blue'}}>Save</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          title : 'Add Note'
        }}/>
        <Stack.Screen name="UpdateNote" component={UpdateNote} options={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#403B36',
          },
          // headerLeft:()=>(
          //   <View style={{marginLeft: 20}}>
          //     <TouchableOpacity onPress={() => navigation.goBack()}>
          //       <AntDesign name="left" size={24} color="black" />
          //     </TouchableOpacity>
          //   </View>
          // ),
          // headerRight:()=>(
          //   <View style={{marginRight: 20}}>
          //     <Text style={{fontSize: 22, color: 'blue'}}>Save</Text>
          //   </View>
          // ),
          headerTitleAlign: 'center',
          title : 'Update Note',
          
        }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}