
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Headerstyle';
import { useNavigation } from '@react-navigation/native';
const Header = ({ title }) => {

  const navigation = useNavigation();
  return (
    <View style={styles.containr}>
      <Image
        source={require('../../assets/animals.jpg')} style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AnimalList')}>
          <MaterialIcons name="format-list-bulleted" size={28} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddAnimal')}>
          <MaterialIcons name="add-circle" size={28} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Header;
