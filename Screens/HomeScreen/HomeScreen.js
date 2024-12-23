
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './HomeScreenstyle';
const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/one.jpg')}
        style={styles.logo}
      />
      <Text style={styles.titl}>Welcome to Animal Tracker</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddAnimal')}
      >
        <Text style={styles.buttonText}>Add Animal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Animal List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
