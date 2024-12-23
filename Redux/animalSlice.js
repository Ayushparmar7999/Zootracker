
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ANIMALS_STORAGE_KEY = 'animals_data';

const animalSlice = createSlice({
  name: 'animal',
  initialState: {
    animals: [],
  },
  reducers: {
    setAnimals: (state, action) => {
      state.animals = action.payload;
    },
    addAnimal: (state, action) => {
      const { name, breed, description, images } = action.payload;
      const newAnimal = {
        id: Date.now().toString(),
        name,
        breed,
        description,
        images,
      };
      state.animals.push(newAnimal);
      saveAnimalsToStorage(state.animals); 
    },
    editAnimal: (state, action) => {
      const index = state.animals.findIndex((animal) => animal.id === action.payload.id);
      if (index !== -1) {
        state.animals[index] = { ...state.animals[index], ...action.payload };
        saveAnimalsToStorage(state.animals); 
      }
    },
    removeAnimal: (state, action) => {
      state.animals = state.animals.filter((animal) => animal.id !== action.payload);
      saveAnimalsToStorage(state.animals); // Save to AsyncStorage
    }
  }
  
});

const saveAnimalsToStorage = async (animals) => {
  try {
    await AsyncStorage.setItem(ANIMALS_STORAGE_KEY, JSON.stringify(animals));
  } catch (error) {
    console.error('Error saving animals to AsyncStorage:', error);
  }
};

export const loadAnimalsFromStorage = () => async (dispatch) => {
  try {
    const storedAnimals = await AsyncStorage.getItem(ANIMALS_STORAGE_KEY);
    if (storedAnimals) {
      dispatch(setAnimals(JSON.parse(storedAnimals)));
    }
  } catch (error) {
    console.error('Error loading animals from AsyncStorage:', error);
  }
};

export const { setAnimals, addAnimal,editAnimal,removeAnimal } = animalSlice.actions;
export default animalSlice.reducer;
