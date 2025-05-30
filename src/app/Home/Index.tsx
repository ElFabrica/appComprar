import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles } from "./styles"
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} >
        
      </Image>
      <View style={styles.form}>
      <Input/>
      <Button title="Entrar"/>
      </View>

      <View style={styles.content}>
    <Filter status={FilterStatus.DONE} isActive={true} />
    <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
    
  );
}
