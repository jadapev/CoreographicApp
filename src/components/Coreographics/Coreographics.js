import { StyleSheet, View } from "react-native"

export const Coreographic = () =>{
    return(
        <View style={styles.containerCoreos}>
                <View style={styles.items}></View>
                  <View style={styles.design}>
                      <View style={styles.one}></View>
                      <View style={styles.two}></View>
                  </View>
               </View>
    )
}


const styles = StyleSheet.create({
    containerCoreos:{
        width:'86%',
        height:'35%',
        borderColor:'#2f2f2e',
        borderWidth:1,
        borderStyle:'dashed',
        marginTop:20,
        borderRadius:20,
      },
      items:{
        width:'100%',
        height:'65%'
      },
      design:{
        width:'100%',
        height:'37%',
        display:'flex',
        gap:'6',
        paddingLeft:'15',
        marginBottom:10,
       borderColor:'#333232',
       borderTopWidth:1,
       borderStyle:'solid',
       paddingTop:10,
      
      },
      one:{
        width:'75%',
        padding:12,
        backgroundColor:'#333232',
        borderRadius:15,
      },
      two:{
        width:'60%',
        padding:8,
        backgroundColor:'#333232',
        borderRadius:15,
        marginBottom:10,
      }
})