import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import SampleScreen from '../screens/SampleScreen';

const TabNavigator = createBottomTabNavigator({
    Sample: SampleScreen
})

export default createAppContainer(TabNavigator);