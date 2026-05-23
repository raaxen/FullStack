import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import Avatar from '@/assets/images/avatar.png';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router';


const Home = () => {
    const router = useRouter();
  return (
<>
    <View style={styles.nav}>
        <Text style={styles.navTitle}>Ny Avo Nekena</Text>
        <div style={styles.navLinks}>
            <TouchableOpacity onPress = {() => router.push("/(tabs)/home")}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => router.push("/(tabs)/about")}>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => router.push("/(tabs)/project")}>
                <Text>Project</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => router.push("/(tabs)/contact")}>
                <Text>Contact</Text>
            </TouchableOpacity>
        </div>
    </View>
</>
)
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d2621',
  },
  nav:{
    width: '100%',
    height: 80,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#0d2621',
    padding:20,
    justifyContent:'space-between',
  },
  navTitle:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  navLinks:{
    display:'flex',
    flexDirection:'row',
    gap:20,
  },

});
export default Home