import React, { useEffect } from 'react';

import { View, Text, Image, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

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
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute"
        source={require('../assets/images/welcome.png')}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <View className="flex items-center">
           <Text style={{fontSize: hp(5)}} className='text-white'>
            Best <Text className='text-rose-500'>Workouts</Text> 
           </Text>
        </View>
        </LinearGradient>
    </View>
  );
}
