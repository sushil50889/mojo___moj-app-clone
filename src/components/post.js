import React, {useEffect, useState, useRef} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, EvilIcons, SimpleLineIcons, Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Post = (props) => {

  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef();
  const [isPlay, setisPlay] = useState(props.post.play);


  const onPlayPausePress = async () => {
    let status = await videoRef.current.getStatusAsync();
    if(status){
      status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
    }    
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
            <View style={styles.rightContainer}>
              <Image style={styles.profilePicture} source={{uri: post.user.imageUri}}/>

              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={33} color="white" />
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