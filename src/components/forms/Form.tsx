import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import BatLogo from '../../../assets/batman-logo.jpg';
import { styles } from '../../styles/Styles-Form';

export default function Form() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [observacao, setObservacao] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                source={BatLogo}
                style={styles.logoBatsinal}
                resizeMode="contain"
            />
            </View>
            
            <Text style={styles.text}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.text}>Telefone para contato:</Text>
            <TextInput
                style={styles.input}
                placeholder="(xx) xxxxx-xxxx"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
            />
            <Text style={styles.text}>Localização atual:</Text>
            <TextInput
                style={{...styles.input, height: 150, textAlignVertical: 'top'}}
                placeholder="Digite sua localização"
                value={localizacao}
                onChangeText={setLocalizacao}
            />
            <Text style={styles.text}>Observação:</Text>
            <TextInput
                style={{...styles.input, height: 150, textAlignVertical: 'top'}}
                placeholder="Alguma observação?"
                value={observacao}
                onChangeText={setObservacao}
                multiline
            />
        </View>
    );
}
