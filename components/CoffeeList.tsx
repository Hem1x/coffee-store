import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { coffeeData } from '../mock/data';
import CoffeeItem from './CoffeeItem';
import { useRoute } from '@react-navigation/native';

const CoffeeList = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginTop: 28,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {coffeeData.map((item) => (
        <CoffeeItem key={item.id} details={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CoffeeList;
