/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {RnDynoEkycModuleView} from './EkycModule'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <RnDynoEkycModuleView 
        style={styles.box}
        onSuccess={(event) => {
          const { isSuccess, filePath } = event.nativeEvent;
          console.warn(isSuccess);
          console.warn(filePath);
        }}
        faceUp="Ngửa mặt"
        faceDown="Cúi mặt"
        faceLeft="Quay trái"
        faceRight="Quay phải"
        blink="Nháy mắt"
        normal="Nhìn thẳng"/>
      </View>
    );
  }
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
