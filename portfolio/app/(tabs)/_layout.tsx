import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { display: 'none' }, // ← cache toute la barre
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          headerShown: false,
        }}
      /> 
      <Tabs.Screen
        name="home"
        options={{
          title: 'Portfolio',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}