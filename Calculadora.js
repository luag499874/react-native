import React, {useState} from "react";
import { View, Text, TouchableOpacity, styleSheet } from "react-native";

export default function Calculadora() {
    const [ input, setInput] = useState("");
    const [ result, setResult] = useState("");

    const handlepress =(value) => {
        if (value === "=") {
            try {
                setResult(eval(input).toString());
              }catch (e) {
                setResult("Error");
              }
        } else if (value === "C") {
            setInput ("");
            setResult ("");
            }else {
                setInput(input + value);
                }
                };

                return (
                    < View style={styles.container}>
                        <View style={styles.resultcontainer}>
                        <Text style={styles.inputText}>{input}</Text>
                        <Text style={styles.resultText}>{result}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                       {["7", "8","9","/"].map((value) => (
                          <TouchableOpacity
                          key={value}
                          style={styles.button}
                          onPress={() => handlepress(value)}
                          >
                            <Text style={styles.buttonText}>{value}</Text>
                          </TouchableOpacity>
                          ))}
                          {["4", "5", "6", "*"].map ((value) => (
                          <TouchableOpacity
                          key={value}
                          style={styles.button}
                          onPress={() => handlepress(value)}
                          >
                            <Text style={styles.buttonText}></Text>
                          </TouchableOpacity>
                          ))}
                          {["1", "2", "3", "-"].map ((value) => (
                          <TouchableOpacity
                          key={value}
                          style={styles.button}
                          onPress={() => handlepress(value)}
                          >
                            <Text style={styles.buttonText}></Text>
                          </TouchableOpacity>
                          ))}
                          {["C", "0", "=", "+"].map ((value) => (
                          <TouchableOpacity
                          key={value}
                          style={styles.button}
                          onPress={() => handlepress(value)}
                          >
                            <Text style={styles.buttonText}></Text>
                          </TouchableOpacity>
                          ))}
                          </View>
                          </View>
                        );
                        const styles = StyleSheet.create({
                          cointainer: {
                            flex: 1,
                            justifyContent:"center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            },
                            resultContainer: {
                              width: "90%",
                              alignItems: "flexend",
                              marginBottom: 20,
                            },
                            inputText: {
                            fontSize: 32,
                            color: "#000",
                          },
                          resultText: {
                            fontSize: 24,
                            color: "#888",
                          },
                            buttonContainer:{
                            width: "90%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            },
                            button: {
                              width: "22%",
                              margin: "1%",
                              padding: 20,
                              backgroundColor: "#ddd",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 5,
                              },
                              buttonText: {
                                fontSize: 24,
                                color: "#000",
                               },
                              });
                              }