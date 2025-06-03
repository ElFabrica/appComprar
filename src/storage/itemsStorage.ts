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
        throw new Error("ITEMS_GET: " + error)
    }
}
async function getByStatus(status: FilterStatus): Promise<ItemStorge[]> {
    const items = await get()
    return items.filter((item) => item.status === status)
}
async function save(items: ItemStorge[]): Promise<void> {
    try {
        await AsyncStorage.setItem(ITEMS_STORGE_KEY, JSON.stringify(items))
    } catch (error) {
        throw new Error("ITEMS_SAVE: " + error)
    }
}
async function add(newItem: ItemStorge): Promise<ItemStorge[]> {
    const items = await get()
    const updatedItems = [...items, newItem]
    await save(updatedItems)

    return updatedItems 

}

export const itemsStorge = {
    get,
    getByStatus,
    save,
    add
}