import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 24,
  },
  
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },
  
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },
  
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
    marginTop: 24,
  },
  
  description: {
    fontSize: 15,
    color: '#737380',
    marginTop: 24,
    marginBottom: 8,
  },

  detailsButton: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
    width: '48%',
  },
});