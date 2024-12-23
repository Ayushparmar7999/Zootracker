import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
      padding: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      flexDirection: 'column',
    },
    imageScroll: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    textContainer: {
      flex: 1,
      marginTop: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#008080',
      marginBottom: 5,
    },
    breed: {
      fontSize: 14,
      color: '#555555',
      marginBottom: 5,
      fontStyle: 'italic',
    },
    description: {
      fontSize: 14,
      color: '#333333',
      marginBottom: 10,
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    editButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#008080',
      padding: 8,
      borderRadius: 5,
      marginRight: 10,
    },
    editButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      marginLeft: 5,
    },
    removeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FF3B30',
      padding: 8,
      borderRadius: 5,
    },
    removeButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      marginLeft: 5,
    },
    emptyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    emptyText: {
      fontSize: 16,
      color: '#555555',
      marginTop: 10,
      textAlign: 'center',
    },
  });
  export default styles;