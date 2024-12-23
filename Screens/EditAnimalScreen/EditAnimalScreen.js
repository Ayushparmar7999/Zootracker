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
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { editAnimal } from '../../Redux/animalSlice';
import styles from './Editstyle';

const EditAnimalScreen = ({ route, navigation }) => {
  const { animalId } = route.params;
  const animal = useSelector((state) =>
    state.animal.animals.find((animal) => animal.id === animalId)
  );

  const [name, setName] = useState(animal.name);
  const [breed, setBreed] = useState(animal.breed);
  const [description, setDescription] = useState(animal.description);
  const [images, setImages] = useState(animal.images || []);
  const dispatch = useDispatch();

  
  const handleEditAnimal = () => {
    if (!name || !breed || !description || images.length === 0) {
      alert('Please fill all fields and upload at least one image!');
      return;
    }

    dispatch(editAnimal({ id: animalId, name, breed, description, images }));
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
      <Text style={styles.title}>Edit Animal</Text>

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

      <TouchableOpacity style={styles.saveButton} onPress={handleEditAnimal}>
        <Icon name="save" size={24} color="#FFFFFF" />
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default EditAnimalScreen;