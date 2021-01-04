import React from 'react'; 
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, EvilIcons, SimpleLineIcons, Entypo, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';


function showIcon({name, size, color, type}) {
    switch(type) {
        case 'MaterialIcons':
            return (<MaterialIcons name={name} size={size} color={color}/>);
        case 'Ionicons':
            return (<Ionicons name={name} size={size} color={color}/>);    
        case 'Entypo':
            return (<Entypo name={name} size={size} color={color}/>);    
        case 'MaterialCommunityIcons':
            return (<MaterialCommunityIcons name={name} size={size} color={color}/>);    
        case 'MaterialCommunityIcons':
            return (<MaterialCommunityIcons name={name} size={size} color={color}/>);    
        case 'AntDesign':
            return <AntDesign name={name} size={size} color={color}/>;    
        default:
            return null;    
    }
}



export const iconData = {
    name: [
        'camera',            //0
        'md-reverse-camera', //1
        'save',              //2
        'back',              //3
        'ios-flash',         //4
        'ios-flash-off',     //5
        'focus-auto',        //6
        'home',              //7
    ], 
    size: [
        75,                  //0
        30,                  //1
        35,                  //2
        25,                  //3
    ],
    color: [
        'white',             //0
        'grey',              //1
    ],
    type: [
        'MaterialIcons',     //0
        'Ionicons',          //1
        'Entypo',            //2
        'MaterialCommunityIcons',//3
        'AntDesign',            //4
    ],
}





export default showIcon;