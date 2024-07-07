import React from "react";
import { View, Text, Button, styleSheet} from "react-native";

export default function Inicio({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a la app calculadora</Text>
        < Button
        title="Ir a Calculadora"
        onPress={() => navigation.navigate("Calculadora")}
        />
     </View>
    );
  }

    const styles =styleSheet.create({
    container: {
        flex: 1,
        justtifyContent: "center",
        alignItems: "center",

    },
title: {
    fontSize: 24,
    marginBotton: 20,
},
});