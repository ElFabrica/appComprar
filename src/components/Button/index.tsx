import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {styles} from "./style"

type Props ={
        title: String
}

export function Button({title, ...rest}: Props) {

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
    
}