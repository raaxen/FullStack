import { StyleSheet, Text, View } from "react-native";
import Landing from "./(tabs)/Landing.jsx";
export default function Page() {
  return (
    <>
    <Landing />
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hi, I'm Nekena</Text>
        <Text style={styles.subtitle}>A Front-React Designer</Text>
        <Text style={styles.Description}>
          I'm actually a Front-React Designer, but I also have experience in UI/UX design and web development.
          <br />I have a passion for creating beautiful and functional designs that solve real-world problems.
          <br />I'm always looking for new opportunities to learn and grow as a designer.

        </Text>
      </View>
      <View ClassName="avatar"> 
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 364,
    alignItems:"center",
    padding: 24,
  },
  main: {
    marginRight: "auto",
    maxWidth: 960,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  Description: {
    fontSize: 18,
    color: "#38434D",
  },
});
