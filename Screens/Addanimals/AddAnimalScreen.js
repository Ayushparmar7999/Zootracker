
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './AddAnimalstyles';
import { useDispatch } from 'react-redux';
import { addAnimal } from '../../Redux/animalSlice';

const AddAnimalScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const handleAddAnimal = () => {
    if (!name || !breed || !description || images.length === 0) {
      alert('Please fill all fields ');
      return;
    }

    dispatch(
      addAnimal({
        name,
        breed,
        description,
        images,
      })
    );
    navigation.navigate('AnimalList');
  };

  const pickImages = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 0,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImages((prevImages) => [
          ...prevImages,
          ...response.assets.map((asset) => asset.uri),
        ]);
      }
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add a New Animal</Text>

      <View style={styles.inputWrapper}>
        <Icon name="pets" size={24} color="#D3D3D3" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Animal Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="badge" size={24} color="#D3D3D3" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Breed"
          value={breed}
          onChangeText={setBreed}
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View style={styles.textAreaWrapper}>
        <Icon name="description" size={24} color="#D3D3D3" style={styles.inputIcon} />
        <TextInput
          style={styles.textArea}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImages}>
        <Icon name="image" size={24} color="#FFFFFF" />
        <Text style={styles.imagePickerText}>Select Images</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {images.length > 0 ? (
          images.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.image} />
          ))
        ) : (
          <Text style={styles.placeholderText}>No images selected yet!</Text>
        )}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddAnimal}>
        <Icon name="check-circle" size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Save Animal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default AddAnimalScreen;
