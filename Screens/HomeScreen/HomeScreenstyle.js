import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#E8F5FF',
    },
    logo: {
      width: 250,
    //   width: 190,
      height: 250,
      marginBottom: 40,
      borderRadius: 20, 
      borderWidth: 2,
      borderColor: '#007BFF',
    },
    titl: {
      fontSize: 28,
      color: '#004085', 
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#008080', 
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 4, 
      transform: [{ scale: 1 }],
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
  });

  export default styles;