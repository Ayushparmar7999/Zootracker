
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Headerstyle';
const Header = ({ title }) => {


  return (
    <View style={styles.containr}>
      <Image
        source={require('../../assets/animals.jpg')} style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity >
          <MaterialIcons name="format-list-bulleted" size={28} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity >
          <MaterialIcons name="add-circle" size={28} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Header;
