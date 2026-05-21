import React from 'react'
import {View, Text, styles} from 'react-native'
import { StyleSheet } from 'react-native'
import Avatar from 'D:/FullStack/my_portfolio/assets/images/1779365547870.png'
import Button from 'D:/FullStack/my_portfolio/components/Button.jsx'
const Landing = () => {
  return (
    <>
    <View className="Card_Container" style={styles.cardContainer}>
      <View className="Card" style={styles.card}>
          <View className="Card_Image" style={styles.cardImage}>
              <img src={Avatar} alt="Avatar" style={styles.avatarImage}/>
          </View>
          <View className = "Card_text" style={styles.cardText}>
           <Text className="Card_Title" style={styles.cardTitle}>
             Welcome to My Portfolio
           </Text>
           <Text className="Card_Description" style={styles.cardDescription}>
             Explore my projects and skills
           </Text>
           <Button />
        </View>
      </View>
    </View>
    </>
  )
}

export default Landing