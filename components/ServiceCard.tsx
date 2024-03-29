import {React, useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardRating from './CardRating'
import Icon from 'react-native-vector-icons/FontAwesome';

const ServiceCard = ({ service}) => {


  const [isSaved, setIsSaved] = useState(service.isSaved)
  const onPressSave = ()=>{
    setIsSaved(!isSaved)
  }

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: service.imageUrl }} style={styles.cardImage} progressiveRenderingEnabled={true}/>
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{service.title}</Text>
        <Text style={styles.cardVendor}>{service.vendor}</Text>
        <View style={styles.cardRating}>
          <CardRating rating={service.rating}/>
        </View>
        <Icon name='map-marker' size={20} color='#D0A8A9'/>
        <Text style={styles.cardLocation}>{service.location}</Text>
      </View>
      <TouchableOpacity onPress={onPressSave} style={styles.saveButton}>
        {/* Save button icon can be placed here */}
        <Icon name={isSaved ? 'heart-o': 'heart'} size={22} color='#681F2A'/>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height:200,
    marginTop: 20,
  },
  cardImage: {
    width: '40%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardVendor: {
    fontSize: 14,
    color: '#888',
  },
  cardRating: {
    flexDirection: 'row',
  },
  cardLocation: {
    fontSize: 12,
    color: '#888',
  },
  saveButton: {
    padding: 10,
  },
});

export default ServiceCard;
