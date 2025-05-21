import { StyleSheet,TouchableOpacity,Text } from "react-native"

export default function CustomButton({title,screenName,onPress,navigation}){

    const handlePress = () =>{
        if(screenName){
            navigation.navigate(screenName)
        }
        if(onPress) onPress();
    }

    return(
        <TouchableOpacity style={style.button} onPress={handlePress}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}   

const style = StyleSheet.create({
    button:{
        backgroundColor:'purple',
        width:'90%',
        padding:16 ,
        borderRadius:25
    },

    text:{
        color:'#fff',
        fontWeight:'600',
        fontSize:18,
        textAlign:'center'
    }
})

