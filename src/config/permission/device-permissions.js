import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

const permission = {};


permission.getLocationPermission = () => {
    return new Promise((resolve, reject)=>{
        if (Constants.isDevice) {

            Permissions.getAsync(Permissions.LOCATION).then(async (locPer) => {
              if (locPer.status !== 'granted'){
                Permissions.askAsync(Permissions.LOCATION).then((status) => {
                  if(status.status !== 'granted'){
                    resolve({status: false, msg: 'LOCATION permission not granted'});
                  }else{
                    resolve({status: true, msg: 'LOCATION permission granted'});
                  }
                }).catch(err => {
                    reject(err);
                });            
              }else{
                resolve({status: true, msg: 'All Ready have the location permission'});
              }
            }).catch(err=>{
                reject(err);
            });          
            
        }
    });
}




permission.getCameraPermission = () => {
  return new Promise((resolve, reject)=>{

      if (Constants.isDevice) {
        Permissions.getAsync(Permissions.CAMERA).then(async (camPer) => {
          if (camPer.status !== 'granted'){
            Permissions.askAsync(Permissions.CAMERA).then((status) => {
              if(status.status !== 'granted'){  
                resolve({status: false, msg: 'Camera permission not granted'});
              }else{
                resolve({status: true, msg: 'Camera permission granted'});
              }
            }).catch(err => { 
              reject(err);             
            });            
          }else{
            resolve({status: true, msg: 'All Ready have the camera permission'});
          }
        }).catch(err=>{ reject(err) });         
      }

  });
}




export default permission;