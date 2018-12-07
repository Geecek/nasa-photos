import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

import Colors from '../constants/Colors';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    },
  },
);

export default createAppContainer(TabNavigator);
