import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import logo from "D:/FullStack/my_portfolio/assets/images/Logo.png";

const Landing = () => {
  return (
    <div>
        <View style={styles.container}> 
            <View className="logo" style={styles.logo} >
                <img src={logo} alt="Logo" style={styles.img}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>Nekena</Text>
                <a href={index} style={styles.link}>
                    <button style={styles.button}>
                        View Portfolio
                    </button>
                </a>
            </View>
        </View>
    </div>
  )
}

export default Landing