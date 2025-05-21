import { ImageBackground,Image,View, Button, Text,ScrollView,StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButtos';

const image = {uri:'https://img.freepik.com/premium-photo/silhouette-one-young-hip-hop-male-break-dancer-dancing-colorful-background_489646-14545.jpg?semt=ais_hybrid&w=740'}

export default function HomeScreen({navigation}) {



  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.background}>
        <View style={styles.container}>
        <View style={styles.containerInfo}>
            <Text style={styles.text}>Crea tus formaciones de manera rapida y sencilla</Text>
            <CustomButton title={"Comenzar ahora"} screenName={"Main"} navigation={navigation}/>
        </View>
        
        <Text style={styles.textFooter}>Creador por @jadapev</Text>
       
    </View>
  
    </ImageBackground>
    /*
    
   */
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity:0.7,
    },
    background:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
       opacity:1,
    },
    containerInfo:{
        width:'100%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'20'
    },  

    text:{
        color:'#fff',
        textAlign:'center',
        fontSize:34,
        fontFamily:'System-ui',
    },
    textFooter:{
        color:'#ccc',
        textAlign:'center',
        fontSize:16,
        fontFamily:'System-ui',
        marginTop:50,
    }
   
})