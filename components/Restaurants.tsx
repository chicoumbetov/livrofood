import { Link } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { restaurants } from "../assets/data/home";
import Colors from "../constants/Colors";

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {restaurants.map((restaurant, index) => (
        <Link href={"/details"} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={restaurant.img} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{restaurant.name}</Text>
                <Text style={{ color: Colors.green }}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text style={{ color: Colors.medium }}>
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    flex: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    width: "100%",
    height: "5%",
  },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
});

export default Restaurants;
