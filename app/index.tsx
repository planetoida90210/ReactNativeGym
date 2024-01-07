import React,{useEffect} from 'react';

import { View, Text, Image, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function Index() {
    // useEffect(() => {
    //     StatusBar.setBarStyle("light-content");
    //     if (Platform.OS === "android") {
    //       StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    //       StatusBar.setTranslucent(true);
    //     }
    //   }, []);
  return (
    <View className="flex-1 flex justify-end">
    <StatusBar style='light' />
      <Image
        className="w-full h-full "
        source={require('../assets/images/welcome.png')}
      />
    </View>
  );
}
