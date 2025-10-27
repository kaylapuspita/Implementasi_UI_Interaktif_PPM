import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';


type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;


const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hiText}>Hi,</Text>
            <Text style={styles.nameText}>Haikal</Text>
          </View>
          <TouchableOpacity style={styles.heartIcon}>
            <Icon name="heart-outline" size={22} color="#fff" />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>8</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerText}>Plan Your</Text>
            <Text style={styles.bannerText}>Summer!</Text>
          </View>
          <TouchableOpacity style={styles.bannerButton}>
            <Icon name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={22} color="#999" />
          <TextInput
            placeholder="Search destination..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="tune" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Popular Destination Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>



        {/* Destination Cards */}
        <TouchableOpacity
  style={styles.card}
  activeOpacity={0.8}
  onPress={() => navigation.navigate('DetailExample')}
>
  <Image
    source={require("../../../assets/lb.jpg")}
    style={styles.cardImage}
  />
  <TouchableOpacity style={styles.likeButton}>
    <Icon name="heart-outline" size={20} color="#fff" />
  </TouchableOpacity>
  <View style={styles.cardContent}>
    <View style={styles.locationRow}>
      <Icon name="map-marker-outline" size={16} color="#fff" />
      <Text style={styles.locationText}>Indonesia</Text>
    </View>
    <Text style={styles.destinationName}>Labuan Bajo</Text>
    <View style={styles.priceRow}>
      <View style={styles.ratingRow}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>5.0</Text>
      </View>
      <Text style={styles.priceText}>$4.000/pax</Text>
    </View>
  </View>
</TouchableOpacity>




        <View style={styles.card}>
          <Image source={require("../../../assets/2.jpg")} style={styles.cardImage} />
          <TouchableOpacity style={styles.likeButton}>
            <Icon name="heart-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <View style={styles.cardContent}>
            <View style={styles.locationRow}>
              <Icon name="map-marker-outline" size={16} color="#fff" />
              <Text style={styles.locationText}>Italia</Text>
            </View>
            <Text style={styles.destinationName}>Venezia</Text>
            <View style={styles.priceRow}>
              <View style={styles.ratingRow}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.7</Text>
              </View>
              <Text style={styles.priceText}>$4.700/pax</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ticket-percent-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="account" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F1",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hiText: {
    fontSize: 20,
    color: "#111",
  },
  nameText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },
  heartIcon: {
    backgroundColor: "#FF7B54",
    padding: 10,
    borderRadius: 25,
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#111",
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
  banner: {
    backgroundColor: "#FF7B54",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bannerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
  },
  bannerButton: {
    backgroundColor: "#FF9B6A",
    padding: 10,
    borderRadius: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEADF",
    marginHorizontal: 20,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: "#111",
    padding: 8,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  viewAll: {
    fontSize: 14,
    color: "#777",
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 16,
  },
  likeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 8,
    borderRadius: 20,
  },
  cardContent: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12,
  },
  destinationName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
    marginLeft: 4,
    fontSize: 14,
  },
  priceText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#111",
    paddingVertical: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
