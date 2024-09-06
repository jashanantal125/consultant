import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface PaymentHistoryItem {
  id: string;
  date: string;
  description: string;
  amount: string;
}

const paymentHistory: PaymentHistoryItem[] = [
  { id: '1', date: '2024-07-01', description: 'Payment from client', amount: '+₹120' },
  { id: '2', date: '2024-07-02', description: 'Payment from client', amount: '+₹200' },
  { id: '3', date: '2024-07-03', description: 'Payment from client', amount: '+₹30' },
  // Add more items as needed
];

const WalletScreen: React.FC = () => {
  const balance = '₹350';

  const renderItem = ({ item }: { item: PaymentHistoryItem }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyDate}>{item.date}</Text>
      <View style={styles.historyDetails}>
        <Text style={styles.historyDescription}>{item.description}</Text>
        <Text style={styles.historyAmount}>{item.amount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceAmount}>{balance}</Text>
      </View>
      <FlatList
        data={paymentHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.historyList}
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
  balanceCard: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 18,
    color: '#fff',
  },
  balanceAmount: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  historyList: {
    paddingBottom: 16,
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  historyDate: {
    fontSize: 14,
    color: '#666',
  },
  historyDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  historyDescription: {
    fontSize: 16,
    color: '#333',
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WalletScreen;

