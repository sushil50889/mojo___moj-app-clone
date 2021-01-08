import React from 'react'
import { View, Text, Image } from 'react-native'
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight'
const WIDTH = windowWidth/3;
const HEIGHT = WIDTH/3*4;


const ProfilePagePostPreview = () => {
    return (
        <View style={{width: WIDTH, height: HEIGHT, backgroundColor: 'black', padding: 1.5}}>
            <Image 
            source={{uri: 'https://res.cloudinary.com/sushilmandi/image/upload/v1609939369/topChannelImages/unnamed_dy3hge.jpg'}} 
            style={{width: '100%', height: '100%'}} 
            resizeMode={'cover'}
            />
        </View>
    )
}

export default ProfilePagePostPreview;
