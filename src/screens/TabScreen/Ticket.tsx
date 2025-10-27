import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Ticket = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={22} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Tickets</Text>
        <Icon name="ellipsis-vertical" size={20} color="#333" />
      </View>

      {/* Location */}
      <Text style={styles.locationLabel}>Current locations</Text>
      <Text style={styles.location}>Netherlands ▼</Text>

      {/* Category */}
      <View style={styles.categoryRow}>
        <TouchableOpacity style={styles.categoryBtnInactive}>
          <Text>Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtnActive}>
          <Text style={{ color: '#fff' }}>Aircraft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtnInactive}>
          <Text>Villa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtnInactive}>
          <Text>Attraction</Text>
        </TouchableOpacity>
      </View>

      {/* Date */}
      <Text style={styles.monthLabel}>June, 2025</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.dateRow}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <View key={i} style={[styles.dateBox, i === 1 && styles.dateBoxActive]}>
              <Text style={[styles.dateText, i === 1 && { color: '#fff' }]}>{day}</Text>
              <Text style={[styles.dateNum, i === 1 && { color: '#fff' }]}>{22 + i}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.foundText}>4 Tickets Found</Text>

      {/* Tickets */}
      <ScrollView>
        {[1, 2, 3, 4].map((_, index) => (
          <View key={index} style={styles.ticketCard}>
            <View style={styles.ticketLeft}>
              <Text style={styles.airlineLabel}>AIRLINES</Text>
              <Icon name="airplane" size={22} color="#fff" />
            </View>

            <View style={styles.ticketRight}>
              <View style={styles.row}>
                <Text style={styles.code}>NL</Text>
                <Icon name="airplane-outline" size={20} color="#333" />
                <Text style={styles.code}>IDN</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.subText}>Rotterdam</Text>
                <Text style={styles.subText}>Labuan Bajo</Text>
              </View>

              <View style={styles.row}>
                <View>
                  <Text style={styles.time}>5:30pm</Text>
                  <Text style={styles.date}>Mon, 23 Jun</Text>
                </View>
                <View>
                  <Text style={styles.time}>3:30am</Text>
                  <Text style={styles.date}>Tue, 24 Jun</Text>
                </View>
              </View>

              <Text style={styles.price}>$1,700</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F1',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  locationLabel: {
    fontSize: 12,
    color: '#666',
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryBtnActive: {
    backgroundColor: '#FF7A00',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  categoryBtnInactive: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  monthLabel: {
    fontWeight: '600',
    marginTop: 5,
  },
  dateRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  dateBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 70,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#EFEFEF',
  },
  dateBoxActive: {
    backgroundColor: '#FF7A00',
  },
  dateText: {
    fontWeight: '500',
  },
  dateNum: {
    fontSize: 16,
    fontWeight: '600',
  },
  foundText: {
    marginVertical: 10,
    fontWeight: '600',
  },
  ticketCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  ticketLeft: {
    backgroundColor: '#FF7A00',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
  },
  airlineLabel: {
    color: '#fff',
    transform: [{ rotate: '-90deg' }],
    fontSize: 10,
    fontWeight: '600',
  },
  ticketRight: {
    flex: 1,
    padding: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  code: {
    fontSize: 20,
    fontWeight: '700',
  },
  subText: {
    color: '#666',
  },
  time: {
    fontWeight: '600',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 6,
  },
});
