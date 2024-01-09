import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center pb-3"
        >
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold">
            ogien{' '}
            <Text
              style={{ fontSize: hp(5) }}
              className="text-[#fa5641] font-bold tracking-wide"
            >
              z ku.
            </Text>
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{ fontSize: hp(5), marginRight: 15 }}
              className="text-white font-bold"
            >
              dokręć
            </Text>
            <Image
              source={require('../assets/images/sruba.png')}
              style={{ width: hp(5), height: hp(5) }}
              resizeMode="contain"
            />
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="pb-3"
        >
          <TouchableOpacity
            onPress={() => router.push('home' as `http${string}`)}
            style={{ height: hp(6), width: wp(80) }}
            className="bg-[#fa5641] flex flex-row items-center justify-center mx-auto rounded-full"
          >
            <Image
              source={require('../assets/images/dzik_logo.png')}
              style={{ width: wp(10), height: hp(10) }}
              resizeMode="contain"
            />
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-wider"
            >
              JAZDA
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
