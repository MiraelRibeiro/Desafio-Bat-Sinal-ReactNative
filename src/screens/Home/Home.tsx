import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import LogoBatman from "../../components/logo/logo-batman";
import { styles } from "../../styles/Styles-Active-Batsinal";
import Form from "../../components/forms/Form";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonPress = () => {
    if (!showForm) {
      setShowForm(true);
    } else {
      Alert.alert("Formulário enviado!", "Seus dados foram enviados com sucesso.");
      setShowForm(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {showForm ? (
        <Form />
      ) : (
        <LogoBatman />
      )}

        <View style={styles.containerButton}>            
            <TouchableOpacity style={styles.buttonActive} onPress={() => handleButtonPress()}>
                {
                    !showForm 
                        ? <Text style={styles.textButton}>Acionar Bat-Sinal</Text> 
                        : <Text style={styles.textButton}>Enviar</Text>
                }
                
            </TouchableOpacity>
        </View>
    </View>
  );
}
