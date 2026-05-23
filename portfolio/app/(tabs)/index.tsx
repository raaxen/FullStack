import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Linking } from 'react-native'; 
import Avatar from '@/assets/images/avatar.png';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router';

const { width } = Dimensions.get('window');

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={Avatar} style={styles.avatar} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.hi}>
            Razakasoa{'\n'}Tanjon'ny Avo Nekena
          </Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-instagram" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-linkedin" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-github" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/home")}>
            <Text style={styles.buttonText}>See my Portfolio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d2621',
  },
  container: {
    width: width > 600 ? '40%' : '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0d2621',
    backgroundColor: 'white',
    borderRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  containerImage: {
    marginBottom: 20,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: '#0d2621',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: '#0d2621',
  },
  avatar: {
    width: width > 600 ? 200 : 150,
    height: width > 600 ? 200 : 150,
    borderRadius: width > 600 ? 100 : 75,
  },
  containerText: {
    alignItems: 'center',
  },
  hi: {
    fontSize: width > 600 ? 27 : 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: '#0d2621',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  button: {
    backgroundColor: '#0d2621',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;