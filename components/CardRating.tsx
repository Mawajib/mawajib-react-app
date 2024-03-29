import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

const CardRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const maxStars = 5;

  return (
    <View style={styles.ratingContainer}>
      {[...Array(filledStars)].map((_, index) => (
      <Text>⭐️</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardRating;
