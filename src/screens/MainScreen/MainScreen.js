import { Text, View, StyleSheet, Image,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Coreographic } from "../../components/Coreographics/Coreographics";
import { Groups } from "../../components/Groups/Groups";
import { useState } from "react";

export default function MainScreen() {
  const [numberPage, setNumberPage] = useState(0);
  console.log("Hola Mundo")
  const handleNewPage = (newPage) =>{
    console.log(newPage)
    setNumberPage(newPage)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bars" size={25} color={"#fff"}></Icon>
        <Text style={styles.text}>Coreográficas</Text>
        <Icon name="plus" size={25} color={"#fff"}></Icon>
      </View>

      <View style={styles.main}>
        {numberPage === 0 ? 
        <TouchableOpacity onPress={()=> handleNewPage(0)}>
        <Coreographic/>
        </TouchableOpacity> : 
        <TouchableOpacity onPress={()=>handleNewPage(1)}>
          <Groups/>
        </TouchableOpacity>
        }
      </View>

      <View style={styles.footer}>
        <View style={styles.footerGroups}>
          {numberPage != 0 ? (
            <Icon name="table" size={20} color={"#727373"}></Icon>
          ) : (
            <Icon name="table" size={20} color={"#fff"}></Icon>
          )}
          <Text style={styles.footerText}>Coreografias</Text>
        </View>
        <View style={styles.footerGroups}>
          {numberPage == 0 ? (
            <Icon name="users" size={20} color={"#727373"}></Icon>
          ) : (
            <Icon name="users" size={20} color={"#fff"}></Icon>
          )}
          <Text style={styles.footerText}>Grupos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "400",
  },
  hamburguerIcon: {
    backgroundColor: "#fff",
    fill: "#fff",
    color: "#fff",
  },
  header: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 25,
    alignItems: "center",
  },

  main: {
    width: "100%",
    height: "78%",
    display: "flex",
    alignItems: "center",
  },

  footer: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#2f2f2e",
    borderTopWidth: 0.5,
  },
  footerGroups: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#fff",
  },
  containerCoreos: {
    width: "86%",
    height: "35%",
    borderColor: "#2f2f2e",
    borderWidth: 1,
    borderStyle: "dashed",
    marginTop: 20,
    borderRadius: 20,
  },
  items: {
    width: "100%",
    height: "65%",
  },
  design: {
    width: "100%",
    height: "37%",
    display: "flex",
    gap: "6",
    paddingLeft: "15",
    marginBottom: 10,
    borderColor: "#333232",
    borderTopWidth: 1,
    borderStyle: "solid",
    paddingTop: 10,
  },
  one: {
    width: "75%",
    padding: 12,
    backgroundColor: "#333232",
    borderRadius: 15,
  },
  two: {
    width: "60%",
    padding: 8,
    backgroundColor: "#333232",
    borderRadius: 15,
    marginBottom: 10,
  },
});
