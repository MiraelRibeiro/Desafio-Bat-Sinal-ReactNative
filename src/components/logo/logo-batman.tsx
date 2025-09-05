import React from "react";
import { View, Image } from "react-native";
import BatLogo from '../../../assets/batman-logo.jpg';
import { styles } from '../../styles/Styles-Active-Batsinal';

export default function LogoBatman() {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={BatLogo}
        style={styles.logoBatsinal}
        resizeMode="contain"
      />
    </View>
  );
}