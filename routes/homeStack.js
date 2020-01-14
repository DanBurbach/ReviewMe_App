import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import Review from '../screens/reviewDetails';
import Header from '../shared/header';

const screens = {
    Home : {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='ReviewMe'/>,
            }
        }
    },
    Review: {
        screen: Review,
        navigationOptions: {
            title: "Review List",
        }
    }
}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 40}
}
});

export default HomeStack;