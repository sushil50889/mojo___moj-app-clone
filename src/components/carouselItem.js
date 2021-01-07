import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { windowWidth, windowHeight } from '../config/static-data/screenWidthHeight'
// const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: windowWidth,
        height: windowHeight / 3,
        backgroundColor: '#000',
        // margin: 10,
        // borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        // shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        // bottom: 10,
        // margin: 10,
        // left: 5,
    },
    image: {
        width: windowWidth,
        height: windowHeight / 3,
        // borderRadius: 10
        backgroundColor: '#000'
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        // shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        // shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem