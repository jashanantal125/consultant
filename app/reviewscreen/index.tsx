
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Review {
  id: string;
  clientName: string;
  service: string;
  stars: number;
  comment: string;
}

const reviews: Review[] = [
  { id: '1', clientName: 'John Doe', service: 'Vedic Astrology', stars: 5, comment: 'I liked the service, thank you!' },
  { id: '2', clientName: 'Jane Smith', service: 'Tarot Cards', stars: 4, comment: 'Very insightful reading.' },
  { id: '3', clientName: 'Alice Johnson', service: 'Palmistry', stars: 3, comment: 'It was okay, not what I expected.' },
  // Add more reviews as needed
];

const ReviewsScreen: React.FC = () => {
  const renderStars = (stars: number) => {
    let starIcons = [];
    for (let i = 0; i < 5; i++) {
      starIcons.push(
        <FontAwesome
          key={i}
          name="star"
          size={24}
          color={i < stars ? "#FFD700" : "#C0C0C0"}
        />
      );
    }
    return <View style={styles.starsContainer}>{starIcons}</View>;
  };

  const renderItem = ({ item }: { item: Review }) => (
    <View style={styles.reviewCard}>
      <Text style={styles.clientName}>{item.clientName}</Text>
      <Text style={styles.service}>{item.service}</Text>
      {renderStars(item.stars)}
      <Text style={styles.comment}>{item.comment}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.reviewsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reviewsList: {
    paddingBottom: 16,
  },
  reviewCard: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  clientName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  service: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  comment: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
});

export default ReviewsScreen;


