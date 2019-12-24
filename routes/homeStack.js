import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/review';

const screens = {
    Home : {
        screen: Home,
        navigationOptions: {
            title: "Film Review",
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

export default createAppContainer(HomeStack);