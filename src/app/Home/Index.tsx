import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity , Text, View, FlatList } from 'react-native';
import { styles } from "./styles"
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = [
  
  {id: "1", status: FilterStatus.DONE, description: "Comprar 1 pacote de café"},
  {id: "2", status: FilterStatus.PENDING, description: "Comprar 3 pacotes de macarrão"},
  {id: "3", status: FilterStatus.PENDING, description: "Comprar 3 pacotes de cebolas"}
  

]

export default function Home() {
    const [filter, setFilter] = useState<FilterStatus>()

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} >
        
      </Image>
      <View style={styles.form}>
      <Input placeholder='O que você precisa comprar ?'/>
      <Button title="Entrar"/>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
        {
          FILTER_STATUS.map((status) =>(
            <Filter key={status} 
            status={FilterStatus.DONE} 
            isActive ={status ===filter}
            onPress={()=> setFilter(status)}
            />
            
          ))
        }
        <TouchableOpacity style={styles.clearButtom}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
        </View>
    <FlatList
      data={ITEMS}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(  
        <Item 
        data={item}
        onRemove={() =>console.log("Remover item")}
        onStatus={() =>console.log("Alterar Status")}
        />
      )}
      showsVerticalScrollIndicator= {false}
      ItemSeparatorComponent={() => <View style={styles.separator}/>}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={() =>  <Text style={styles.empty}>Nenhum item aqui</Text>}
      
    />
      </View>
      
    </View>
    
  );
}
