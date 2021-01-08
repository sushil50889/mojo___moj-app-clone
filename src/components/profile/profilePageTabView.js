import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons';  
import { windowWidth } from '../../config/static-data/screenWidthHeight';
import profilePagePostTab from './profilePagePostTab';
import profilePageLikePostTab from './profilePageLikedPostTab';

 
const FirstRoute = () => profilePagePostTab(); 
const SecondRoute = () => profilePageLikePostTab();
const initialLayout = { width: windowWidth };


const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#000' }}
      renderIcon={({ route, focused, color }) => {

        if(route.key === 'second'){
            return (<AntDesign name={focused ? "heart" : "hearto"} size={24} color="white" />)
        }else if(route.key === 'first'){
            return (<AntDesign name={!focused ? "appstore-o" : "appstore1"} size={24} color="white" />)
        }    

      }}
      renderLabel={({ route, focused, color }) => null}
    />
);
 



 
export default function ProfilePageTabView() {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{ key: 'first', title: 'First' }, { key: 'second', title: 'Second' }]); 
  const renderScene = SceneMap({first: FirstRoute, second: SecondRoute});

 
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )


}
 
// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
// });