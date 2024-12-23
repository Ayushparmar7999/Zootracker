
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Animalliststyles';
import { removeAnimal } from '../../Redux/animalSlice';

const AnimalListScreen = ({ route, navigation }) => {
  const animals = useSelector((state) => state.animal.animals);
  const dispatch = useDispatch();

  const handleRemoveAnimal = (id) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to remove this animal?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => dispatch(removeAnimal(id)),
        },
      ],
      { cancelable: true }
    );
  };

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

            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('EditAnimal', { animalId: item.id })}
              >
                <Icon name="edit" size={20} color="#FFFFFF" />
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveAnimal(item.id)}
              >
                <Icon name="delete" size={20} color="#FFFFFF" />
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>

            </View>


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
