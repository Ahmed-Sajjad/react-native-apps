import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';//Stack, Tab, Drawer
import LoginComponent from './components/auth/LoginComponent';
import SignUpComponent from './components/auth/SignUpComponent';
import HomeComponent from './components/HomeComponent';

const MenuIcon = ({ toggleDrawer }) => {
    return <Icon name='bars' size={30} color='#000' style={{marginLeft: 10}} onPress={() => toggleDrawer()}/>
};

const Screen1 = () => {
    return <Text>Screen 1</Text>;
}

const Screen2 = () => {
    return <Text>Screen 2</Text>;
}

const DrawerStack = createDrawerNavigator({
    homeScreen: { screen: HomeComponent },
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 }
}, {
    initialRouteName: 'homeScreen'
});

const AuthStack = createStackNavigator({
    loginScreen: { screen: LoginComponent },
    signUpScreen: { screen: SignUpComponent }
});

const DrawerNavigation = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            title: 'Home',
            headerLeft: MenuIcon(navigation)
        }
    }
});

const Routing = createStackNavigator({
    AuthStack: { screen: AuthStack },
    DrawerStack: { screen: DrawerNavigation }
}, {
    headerMode: 'none',
    initialRouteName: 'AuthStack'
});
export default createAppContainer(Routing);