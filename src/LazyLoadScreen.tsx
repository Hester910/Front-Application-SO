import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import { F1Item, data as allData } from './content';
import ChampionsList from './components/ChampionsListLazy';

export default function LazyLoadScreen() {
  const [data, setData] = useState<F1Item[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 5;

  const handlePress = (index: number) => {
    Alert.alert('Interação', `Você tocou no item ${index + 1}`);
  };

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    const nextItems = allData.slice(0, nextPage * itemsPerPage);
    setData(nextItems);
    setPage(nextPage);
  }, [page]);

  useEffect(() => {
    const initialItems = allData.slice(0, itemsPerPage);
    setData(initialItems);
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={
        <Text style={styles.title}>Pilotos de Fórmula 1 - Temporada 2025</Text>
      }
      renderItem={({ item, index }: { item: F1Item; index: number }) => (
        <TouchableOpacity onPress={() => handlePress(index)} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.team}>Equipe: {item.team}</Text>
          </View>
        </TouchableOpacity>
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={ChampionsList}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  item: {
    marginBottom: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 4,
  },
  team: {
    fontSize: 14,
    color: '#bbbbbb',
  },
  championsSection: {
    marginTop: 32,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  championsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  championItem: {
    marginBottom: 8,
  },
  championText: {
    color: '#dddddd',
    fontSize: 14,
    textAlign: 'center',
  },
});
