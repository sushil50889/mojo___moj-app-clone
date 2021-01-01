import React from 'react';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, EvilIcons, SimpleLineIcons, Entypo, Octicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../static-data/colors';
import { windowHeight } from '../static-data/screenWidthHeight';

const iconSize = {
    home: 25, 
    profile: 23,
    store: 21,
    cart: 32,
    logout: 20
}

export var tabBarOption = {
    activeTintColor: colors.activeTintColor,
    inactiveTintColor: colors.inactiveTintColor,
    // activeBackgroundColor: colors.activeBackgroundColor,
    inactiveBackgroundColor: null,
    style:{
        height: windowHeight * 0.065,
        backgroundColor: '#000',
        borderTopColor: '#2e2e2e'
    },
    tabStyle: {
        padding: 5,
    },
    showLabel: false,
    labelStyle: {
        //  fontFamily: fonts.epiloguevariable,
    },
    keyboardHidesTabBar: false,
}


export const screenoption = (navigation, route) => {    

    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'homepage') {
               return focused ? <Entypo name="home" size={iconSize.home} color={color} /> : <AntDesign name='home' size={iconSize.home} color={color}/>;
            } else if (route.name === 'searchpage') {
                return focused ? <Ionicons name="md-search-sharp" size={26} color={color} /> : <Ionicons name="md-search-outline" size={24} color={color} />;
            } else if (route.name === 'camerapage') {
                return focused ? <Octicons name="diff-added" size={26} color={color} /> : <Octicons name="diff-added" size={26} color={color} />;
            } else if (route.name === 'notificationpage') {
                return focused ? <Ionicons name="md-notifications-sharp" size={25} color={color} /> : <Ionicons name="md-notifications-outline" size={25} color={color} />;
            } else if (route.name === 'profilepage') {
                return focused ? <FontAwesome name="user" size={25} color={color} /> : <AntDesign name="user" size={25} color={color} />;
            } else if (route.name === 'camera') {
               
            }           
        }
    }
}




// const styles = StyleSheet.create({
//     tablabeltext: {
//       fontFamily: fonts.epiloguevariable
//     }
// });


