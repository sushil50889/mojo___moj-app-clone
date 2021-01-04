import React, {useEffect, useState, useRef} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, EvilIcons, SimpleLineIcons, Entypo, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { windowHeight } from '../config/static-data/screenWidthHeight';

const Post = (props) => {

  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef();
  const [isPlay, setisPlay] = useState(true);


  useEffect(()=>{
    // setisPlay(true);
    // setTimeout(()=>{
      isPlayButtonShow();
    // }, 1000)    
  }, [props.post.play])


  const onPlayPausePress = async () => {
    let status = await videoRef.current.getStatusAsync();
    if(status){
      if(status.isPlaying) { 
        videoRef.current.pauseAsync();
        props.post.play = false;
        setisPlay(false);
      } else{
        videoRef.current.playAsync();
        props.post.play = true;
        setisPlay(true);
      }
    }    
  }


  function isPlayButtonShow() {
    props.post.play ? setisPlay(true) : setisPlay(false);
  }


  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({...post, likes: post.likes + likesToAdd});
    setIsLiked(!isLiked);
  }



  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.container}>
        <View style={styles.container}>

          <Video
            ref={videoRef}
            source={{uri: post.videoUri}}
            style={styles.video}
            onError={(e) => console.log('error :  ', e)}
            onReadyForDisplay={(e) => console.log('')}
            onLoadStart={(e) => console.log('')}
            onLoad={(e) => console.log('')}
            resizeMode='cover'
            shouldPlay={props.post.play}
            isLooping
            volume={1.0}
            isMuted={false}
          />

          <View style={styles.uiContainer}>
            { (!isPlay) ? (<View style={styles.playBtn}><FontAwesome5 name="play" size={60} color="rgba(0,0,0,0.6)"/></View>) : null } 

            <View style={styles.rightContainer}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={styles.profilePicture} source={{uri: post.user.imageUri}}/>
                <MaterialCommunityIcons name="plus-circle" size={24} color="#f6a700"/>
              </View>

              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                <AntDesign name={'heart'} size={38} color={isLiked ? 'red' : 'white'} />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={38} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={31} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>

              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={[styles.description, {fontSize: 12}]}>{post.description}...</Text>
                <Text style={[styles.description, {fontSize: 12, fontWeight: 'bold', marginBottom: 6}]}>#india #funny #stylish</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={18} color="white" />
                  <Text style={styles.songName}>{post.song.name}</Text>
                </View>
              </View>

              <Image style={styles.songImage} source={{uri: post.song.imageUri}}/>
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}



export default Post;