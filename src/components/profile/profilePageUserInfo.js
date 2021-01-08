import React from 'react';
import { View, Text, Image } from 'react-native';
import { windowHeight, windowWidth } from '../../config/static-data/screenWidthHeight';
import ProfilePageCounts from './profilePageCounts';


const ProfilePageUserInfo = () => {
    return (
        <View style={{width: windowWidth, height: windowHeight*0.15, flexDirection: 'row'}}>
            <View style={{width: '30%', height: '100%', padding: 15}}>
                <Image source={{uri: 'https://res.cloudinary.com/sushilmandi/image/upload/v1610017997/unnamed_1_wbbkyt.png'}} style={{width: '100%', height: '100%', borderRadius: 50}} resizeMode={'cover'}/>
            </View>
            <View style={{width: '70%', height: '100%', padding: 15}}>
                <Text style={{color: '#fff'}}>MojUser</Text>
                <Text style={{color: '#fff'}}>@523220002145</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <ProfilePageCounts/>
                    <ProfilePageCounts/>
                    <ProfilePageCounts/>
                </View>
            </View>
        </View>
    )
}

export default ProfilePageUserInfo;
