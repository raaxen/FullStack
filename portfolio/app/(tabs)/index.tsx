import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 
import Avatar from '@/assets/images/avatar.png';

const index = () => {
  return (
    <View className="Container">
      <View className='Container-image'>
        <Image source={Avatar} style={{ width: 150, height: 150 }} />
      </View>
      <View className='Container-text'>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Welcome to my portfolio 
        </Text>
        <button>
            See Portfolio
        </button>
      </View>
    </View>
  );
}

export default index;