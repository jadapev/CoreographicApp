import Icon from "react-native-vector-icons/FontAwesome";
import  {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { use, useState } from "react";

export const CoreoScreen = ({navigation}) =>{

    const [dancersNumber, setDancersNumbers] = useState(0)
    const [width,setWidth ] = useState(18)
    const [height, setHeight] = useState(10)

    const handleNavigation = (screenName) =>{
        navigation.navigate(screenName)
    }


    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View  style={styles.header}> 
                <TouchableOpacity onPress={()=>handleNavigation("Main")}>
                <Icon name="arrow-left" size={24} color={'#fff'}> </Icon>
                </TouchableOpacity>
                <Text style={styles.text}>Nueva Coreo</Text>
                <TouchableOpacity>
                    <Text style={styles.shadowText}>Hecho</Text>
                </TouchableOpacity>
                </View>
                {dancersNumber == 0 ?
                    <View style={styles.redAlert}>
                        <Text style={styles.textAlert}>Toca el escenario para añadir bailarines</Text>
                    </View>

                    :
                    null
                }

            </View>

            
            <View style={styles.main}>
                <Text style={styles.text}>Aqui va las graficas</Text>
            </View>


            <View style={styles.footer}>
                <View style= {styles.footerSize}>
                    <View style={styles.containerSquare}>
                        <Text style={styles.buttonText}>Ancho</Text>
                        <View style={styles.buttonsSquare}>
                            <TouchableOpacity style={styles.button}><Icon name="minus" size={13} color={"#fff"}></Icon></TouchableOpacity>
                            <Text style={styles.text}>{width}</Text>
                            <TouchableOpacity style={styles.button}><Icon name="plus" size={13} color={"#fff"}></Icon></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerSquare}> 
                        <Text style={styles.buttonText}>Profundidad</Text>
                        <View style={styles.buttonsSquare}>
                            <TouchableOpacity style={styles.button}><Icon name="minus" size={13} color={"#fff"}></Icon></TouchableOpacity>
                            <Text style={styles.text}>{height}</Text>
                            <TouchableOpacity style={styles.button}><Icon name="plus" size={13} color={"#fff"}></Icon></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonGroup}>
                    <Icon name="users" color={"#000"} size={16}></Icon>
                    <Text style={styles.buttonGroupText}>Usar Grupo</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        width:"100%",
        height:"100%",
        display:'flex',
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:'#fff',
        fontSize:20,
        textAlign:"center"
    },
    containerHeader:{
        width:"100%",
        height:"35.3%",
        paddingTop:40,
        display:"flex",
        alignItems:"center"
    },
    header:{
        width:'100%',
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    shadowText:{
        color:'#7f7f7e',
        fontSize:18,
    },
    redAlert:{
        width:'80%',
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'#f2483f',
        marginTop:40,
        borderRadius:10,      
    },
    textAlert:{
        fontSize:18,
        fontWeight:500,
        color:'#fff',
        textAlign:"center"
    },
    main:{
        width:"100%",
        height:"33.3%",
    },
    footer:{
        width:"100%",
        height:"24.3%",
    },
    footerSize:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    
    },
    buttonText:{
        fontSize:18,
        color:"#fff",
    },
    containerSquare:{
        width:"50%",
        display:"flex",
        gap:10,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonsSquare:{
        width:"70%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20,
        padding:8,
        backgroundColor:"#323332",
        borderRadius:15
    },
    button:{
        padding:4,
        borderRadius:"50%",
        borderColor:"#fff",
        borderWidth:1,
    },
    buttonGroup:{
        width:"80%",
        padding:18,
        backgroundColor:"#fff",
        margin:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:6,
        borderRadius:30
    },
    buttonGroupText:{
        color:"#000",
        fontSize:16,
        fontWeight:500
    }
    


})