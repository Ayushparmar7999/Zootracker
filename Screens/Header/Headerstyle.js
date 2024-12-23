import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containr: {
    height: 72,
    backgroundColor: '#007BFF',
    // backgroundColor: '#3D85C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 36,
    height: 50,
    resizeMode: 'contain'
    

   
  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});
export default styles;