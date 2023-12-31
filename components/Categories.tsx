import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { categories } from "../assets/data/home";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {categories.map((category, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image style={styles.categoryImage} source={category.img} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 6,
  },
  categoryImage: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  categoryText: {
    padding: 6,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Categories;
