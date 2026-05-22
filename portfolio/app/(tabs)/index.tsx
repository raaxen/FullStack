import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

import Avatar from '@/assets/images/avatar.png';

const index = () => {
  return (
    <View className = "Container">
      <View className='Container-image'>
        <Image source={Avatar} />
      </View>
      <View className='Container-text'>
        <Text>
          
        </Text>
      </View>
    </View>
  )
}

export default index