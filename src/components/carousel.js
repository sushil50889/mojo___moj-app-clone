import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { windowHeight, windowWidth } from '../config/static-data/screenWidthHeight';
import CarouselItem from './carouselItem';


const Carousel = ({ data }) => {

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, windowWidth)
    const [dataList, setDataList] = useState(data)
    const flatList = useRef();
    let setIntervalSubs;

    useEffect(()=> {
        setDataList(data)
        infiniteScroll(dataList)

        return ()=> {
            clearInterval(setIntervalSubs);
        }
    }, []);


    function infiniteScroll(dataList){
        const numberOfData = dataList.length
        let scrollValue = 0, scrolled = 0
    
        setIntervalSubs = setInterval(function() {
            scrolled ++
            if(scrolled < numberOfData)
            scrollValue = scrollValue + windowWidth
    
            else{
                scrollValue = 0
                scrolled = 0
            }
    
            flatList.current.scrollToOffset({ animated: true, offset: scrollValue})
            
        }, 5000)
    }


    if (data && data.length > 0) {
        return (
            <View style={{backgroundColor: '#000'}}>
                <FlatList 
                    data={data}
                    ref={ ref => flatList.current=ref}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    decelerationRate={'normal'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {useNativeDriver: false}
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: { 
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        // backgroundColor: 'green',
        width: windowWidth,
        top: windowHeight/3 - 25
    }
})

export default Carousel