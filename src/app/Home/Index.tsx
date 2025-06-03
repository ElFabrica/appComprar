import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity , Text, View, FlatList, Alert } from 'react-native';
import { styles } from "./styles"
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';
import {itemsStorge, ItemStorge} from "@/storage/itemsStorage"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]


export default function Home() {
    const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING)
    const [description, setDescription] = useState("")
    const [Items, setItems] = useState<ItemStorge[]>([])

    async function handleAdd(){
      if (!description.trim()){
        return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
      }
      const newItem = {
        id: Math.random().toString(36).substring(2),
        description,
        status: FilterStatus.PENDING

      }
      await itemsStorge.add(newItem)
      await itemsByStatus()
      setDescription("")
      setFilter(FilterStatus.PENDING)

      Alert.alert("Adicionado", `Adicionado ${description}`)
    }

    async function itemsByStatus(){
      try{
      const response = await itemsStorge.getByStatus(filter)
      setItems(response)
      } catch (error) {
        Alert.alert("Erro", "Não foi possível filtar os itens")
      }
    }

    async function handleRemove(id:string){
      try {
        const response = await itemsStorge.remove(id)
        await itemsByStatus()
      } catch (error) {
        console.log(error)
        Alert.alert("Remover", `Não foi possível remover.`)
      }
    }

    function handleClear(){
    Alert.alert("Limpar", "Deseja remover todos?", [
      {text: "Não", style: "cancel"},
      {text: "Sim", onPress:(()=> onClear())}
    ])
}

async function onClear() {
  try {
    await itemsStorge.clear()
    setItems([])
  } catch (error) {
    console.log(error)
    Alert.alert("Erro", "Não foi possível remover todos os itens.")
  }
  
}
async function  handleToggleItemStatus(id:string) {
  try {
    await itemsStorge.toggleStatus(id)
    await itemsByStatus()
  } catch (error) {
    console.log(error)
    Alert.alert("Error", "Não foi possível atualizar os status.")
  }
}

    useEffect(()=>{
      itemsByStatus()
      //console.log(Items[2].id)
    }, [filter])

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} >
        
      </Image>
      <View style={styles.form}>
      <Input placeholder='O que você precisa comprar ?' onChangeText={setDescription} value={description}/>
      <Button title="Adicionar" onPress={()=> handleAdd()} />
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
        <TouchableOpacity style={styles.clearButtom} onPress={() =>handleClear()}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
        </View>
    <FlatList
      data={Items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(  
        <Item 
        data={item}
        onRemove={() =>handleRemove(item.id)}
        onStatus={() =>handleToggleItemStatus(item.id)}
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
