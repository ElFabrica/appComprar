import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus"

const ITEMS_STORGE_KEY = "@Comprar:items"

export type ItemStorge = {
    id: string,
    status: FilterStatus,
    description: string
}

async function get(): Promise<ItemStorge[]> {
    try {
        const storge = await AsyncStorage.getItem(ITEMS_STORGE_KEY)

            return storge ? JSON.parse(storge) : []
        
    } catch (error) {
        throw new Error("Get_items: " + error)
    }
}
async function getByStatus(status: FilterStatus): Promise<ItemStorge[]> {
        const items = await get()
        return items.filter((item) => item.status === status )
    }
    

export const itemsStorge = {
        get,
        getByStatus,
    }