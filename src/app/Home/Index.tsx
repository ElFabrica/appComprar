import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles } from "./styles"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../app")} style={styles.logo}>
        
      </Image>
      <StatusBar style="auto" />
    </View>
  );
}
