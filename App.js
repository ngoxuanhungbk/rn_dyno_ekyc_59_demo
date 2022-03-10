/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {RnDynoEkycModuleView} from './EkycModule'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default function App() {

  const [hidedCamera,setHidedCamera] = useState(false);

  const _onSuccess = (event) => {
    const { isSuccess, filePath } = event.nativeEvent;
    console.warn(isSuccess);
    console.warn(filePath);
  };

  const _onClick = () => {
    setHidedCamera(!hidedCamera);
  }

  const _renderCamera = () => {
    if(hidedCamera){
      return <View style={styles.box}/>
    }else{
      return <RnDynoEkycModuleView
      style={styles.box}
      onSuccess={_onSuccess}
      faceUp="Ngửa mặt"
      faceDown="Cúi mặt"
      faceLeft="Quay trái"
      faceRight="Quay phải"
      blink="Nháy mắt"
      normal="Nhìn thẳng"
      initString="Đưa khuôn mặt vào trong camera"
      sessionToken="95376c946216e04a57e8061d800ba4da3d67e77693be06d8d98e04a2"
    />
    }
  }

  return (
    <View style={styles.container}>
      {_renderCamera()}
      <Button title='Hide camera'
        onPress={_onClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
    width: '100%',
    aspectRatio: 480 / 640,
  },
});
