import React, { useState, useEffect } from 'react';
import { FlatList, View , StyleSheet} from 'react-native';
import ServiceCard from './components/ServiceCard'; // Assuming your ServiceCard is in a separate file.
import SearchBar from './components/SearchBar'

const servicesData = [
  {
    id: 1,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1673897888993-a1db844c2ca1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    title: 'Elegant Wedding Decorations',
    vendor: 'Floral Dreams',
    rating: 3,
    location: '182C, 3km, Clifton Road, Karachi',
    isSaved:true
  },{
    id: 2,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wedding_cake_with_pillar_supports%2C_2009.jpg/1200px-Wedding_cake_with_pillar_supports%2C_2009.jpg', // Placeholder image
    title: 'Layers Wedding Cakes',
    vendor: 'Layers Bakery',
    rating: 5,
    location: '239, R3, Johar Town, Lahore',
    isSaved:false
  },{
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1561593367-66c79c2294e6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    title: 'Catering Utensils',
    vendor: 'Mawajib Catering Services',
    rating: 2,
    location: 'Phase 9, DHA, near Ring Road, Lahore',
    isSaved:false
  },{
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1618107095181-e3ba0f53ee59?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
      title: 'Wedding DJ',
      vendor: 'DJ Mehdi',
      rating: 3,
      location: 'Phase 9, DHA, near Ring Road, Lahore',
      isSaved:true
    },
];

const App = () => {
  const [savedServices, setSavedServices] = useState([]);

  const handleSave = (serviceId) => {
    setSavedServices((prevServices) =>
      prevServices.includes(serviceId)
        ? prevServices.filter((id) => id !== serviceId) // Remove if already saved
        : [...prevServices, serviceId] // Add if not saved
    );
  };
  return (
  <>
  <SearchBar/>
    <FlatList
      data={servicesData}
      renderItem={({ item }) => (
        <ServiceCard
          service={item}
          onPressSave={() => handleSave(item.id)}
          isSaved={savedServices.includes(item.id)} // Add prop for saved state
        />
      )}
      keyExtractor={(item) => item.id}

      contentContainerStyle={{ padding: 20 }}
    />
  </>
  );
};

export default App;
