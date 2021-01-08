import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePagePostPreview from './profilePagePostPreview'

const profilePagePostTab = () => {
    return (
        <View style={[{ flex: 1, flexDirection: 'column'}]}>
            <FlatList
            data={[{image: ''}, {image: ''}, {image: ''}, {image: ''}, {image: ''}]}
            renderItem={({ item }) => (
                <ProfilePagePostPreview/>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default profilePagePostTab;
