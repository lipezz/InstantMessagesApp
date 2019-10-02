import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Image, TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Status from './pages/Status';
import Calls from './pages/Calls';
import Chat from './pages/Chat';
import camera from './assets/camera.png';

const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: Home },
    Status: { screen: Status },
    Calls: { screen: Calls },
  }, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#000000',
      style: {
        backgroundColor: '#006633',
      },
      labelStyle: {
        textAlign: 'center',
      }, 
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 6,
      },     
    },  
  },  
);

const App = createStackNavigator({ 
  TabScreen: {
    screen: TabScreen,          
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#006633',
      },
      headerTintColor: '#FFFFFF',      
      title: 'WhatsApp',    
    },    
  },
  ChatScreen: {
    screen: Chat,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#006633',
      },
      headerTintColor: '#FFFFFF',     
      gesturesEnabled: true,      
    },
  },
});

export default createAppContainer(App);