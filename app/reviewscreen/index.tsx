
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

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
  { id: '4', clientName: 'Michael Brown', service: 'Numerology', stars: 5, comment: 'The numbers never lie, incredible insights!' },
  { id: '5', clientName: 'Sarah Lee', service: 'Vedic Astrology', stars: 2, comment: 'I didn’t feel the connection, unfortunately.' },
  { id: '6', clientName: 'David Kim', service: 'Tarot Cards', stars: 4, comment: 'The reading was great but I would’ve liked more detail.' },
  { id: '7', clientName: 'Rebecca Harris', service: 'Palmistry', stars: 5, comment: 'Fascinating! The lines on my palm really spoke to me.' },
  { id: '8', clientName: 'Christopher Lee', service: 'Vedic Astrology', stars: 4, comment: 'Good session, but would have liked to know more about my future.' },
  { id: '9', clientName: 'Megan White', service: 'Tarot Cards', stars: 5, comment: 'The Tarot cards were spot on, such a positive experience!' },
  { id: '10', clientName: 'James Clark', service: 'Numerology', stars: 3, comment: 'It was an interesting session but I didn’t learn anything new.' },
  { id: '11', clientName: 'Emma Robinson', service: 'Palmistry', stars: 5, comment: 'Amazing experience! She knew things no one could have known.' },
  { id: '12', clientName: 'Matthew Turner', service: 'Vedic Astrology', stars: 5, comment: 'Life-changing insights, definitely worth the time.' },
  { id: '13', clientName: 'Olivia Adams', service: 'Tarot Cards', stars: 4, comment: 'Great experience, though I wish the session was a bit longer.' },
  { id: '14', clientName: 'Ethan Lewis', service: 'Palmistry', stars: 4, comment: 'It was good, though the reading was a bit vague in parts.' },
  { id: '15', clientName: 'Sophia Scott', service: 'Vedic Astrology', stars: 5, comment: 'Absolutely amazing, I felt understood and empowered.' },
  { id: '16', clientName: 'Daniel Martinez', service: 'Numerology', stars: 3, comment: 'It was interesting, but didn’t quite feel personal.' },
  { id: '17', clientName: 'Lily Harris', service: 'Vedic Astrology', stars: 5, comment: 'Spot on! Everything aligned perfectly with my life right now.' },
  { id: '18', clientName: 'Jack Wilson', service: 'Tarot Cards', stars: 5, comment: 'Wonderful experience, I felt a real connection with the reader.' },
  { id: '19', clientName: 'Lucas Evans', service: 'Palmistry', stars: 4, comment: 'I enjoyed it, but I expected a bit more depth.' },
  { id: '20', clientName: 'Ava Martinez', service: 'Numerology', stars: 5, comment: 'Incredible! The numbers gave me clarity I didn’t expect.' }
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
    backgroundColor: Colors.primary,
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


