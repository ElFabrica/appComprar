import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity , Text, View } from 'react-native';
import { styles } from "./styles"
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

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
        <View style={styles.header}>
        {
          FILTER_STATUS.map((status) =>(
            <Filter key={status} status={FilterStatus.DONE} isActive/>
          ))
        }
        <TouchableOpacity style={styles.clearButtom}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
        </View>
        <Item 
        data={{status: FilterStatus.DONE, description: "Café"}}
        onRemove={() =>console.log("Remover item")}
        onStatus={() =>console.log("Alterar Status")}
        />
      </View>
    </View>
    
  );
}
