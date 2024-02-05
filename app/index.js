import React from 'react';
import { View, StyleSheet, Image, Text, FlatList, Pressable } from 'react-native';
import cities from "../data/cities"
import { Link } from 'expo-router';
import  Animated  from 'react-native-reanimated';

const CityGrid = () => {
  const renderItem = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
    <Pressable style={styles.city}>
      <Animated.Image sharedTransitionTag={`image${item.id}`} style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={cities}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#F5F5F5',
    },
    city: {
      flex: 1,
      aspectRatio: 1,
      marginHorizontal: 8,
      marginBottom: 16,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      elevation: 2,
      overflow: 'hidden',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '70%',
      backgroundColor: 'gainsboro',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 8,
    },
  });

export default CityGrid;