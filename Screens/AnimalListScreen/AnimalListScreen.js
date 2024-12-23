
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Animalliststyles';

const AnimalListScreen = () => {
  const animals = useSelector((state) => state.animal.animals);

  return (
    <FlatList
      data={animals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          
          <ScrollView horizontal style={styles.imageScroll}>
            {item.images.map((uri, index) => (
              <Image
                key={index}
                source={{ uri: uri  }}
                style={styles.image}
                onError={(e) => console.log(`Failed to load image: ${e.nativeEvent.error}`)}
              />
            ))}
          </ScrollView>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Name: {item.name}</Text>
            <Text style={styles.breed}>Breed: {item.breed}</Text>
            <Text style={styles.description}>Description: {item.description}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Icon name="info-outline" size={60} color="#008080" />
          <Text style={styles.emptyText}>No animals added yet!</Text>
        </View>
      }
    />
  );
};
export default AnimalListScreen;
