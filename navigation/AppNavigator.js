import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Search: SearchScreen
})

export default createAppContainer(TabNavigator);