import React, { useState, useCallback } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import { champions } from '../content';

const images: Record<string, string> = {
  'Max Verstappen': 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/04/05042008/Verstappen-Red-Bull-F1.jpg',
  'Lewis Hamilton': 'https://cdn-4.motorsport.com/images/amp/0oOz3n70/s1000/lewis-hamilton-ferrari.jpg',
  'Nico Rosberg': 'https://blog.balaclavaf1.com.br/wp-content/uploads/2021/12/nICO-rOSBERG-1.jpg',
  'Fernando Alonso': 'https://uploads.metroimg.com/wp-content/uploads/2024/12/30124155/Fernando-Alonso-Aston-Martin-Formula-1.jpg',
  'Kimi Räikkönen': 'https://cdn-4.motorsport.com/images/amp/2jXyg1p6/s1000/kimi-raikkonen-ferrari-sf71h--.jpg',
  'Jenson Button': 'https://cdn.williamsf1.tech/images/fnx611yr/production/46918874177dfb2945d8fa4f35998657a21bff37-600x315.jpg?rect=64,0,473,315&w=960&h=640&auto=format',
  'Sebastian Vettel': 'https://sampi.net.br/dir-arquivo-imagem/2020/09/0f0460ac3e63e97b203cd6d4cc078a2b.jpg',
  'Mercedes': 'https://cdn-5.motorsport.com/images/mgl/0RrzmDo0/s8/mercedes-f1-logo-1.jpg',
  'Red Bull Racing': 'https://cdn-8.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg',
  'Renault': 'https://static.wikia.nocookie.net/gp4-offline-championship/images/c/c2/Renault_2023.png/revision/latest?cb=20230717141458',
  'Brawn GP': 'https://i.pinimg.com/736x/8d/2e/b7/8d2eb799a43d88c173e85c284ce896bf.jpg',
  'McLaren': 'https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2025%2F01%2F23171426%2Fmclaren-logo-2024-1320x742.jpg',
};

const ChampionsListLazy = () => {
  const [visibleItems, setVisibleItems] = useState(champions.slice(0, 6));
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const itemsPerPage = 6;

  const handleImagePress = (name: string) => {
    const imageUrl = images[name];
    if (imageUrl) {
      setSelectedImage(imageUrl);
      setModalVisible(true);
    }
  };

  const renderItem = ({ item }: { item: typeof champions[0] }) => (
    <View style={styles.card}>
      <Text style={styles.year}>Campeões de {item.year}</Text>
      <Text style={styles.text}>
        Piloto:{' '}
        <Text style={styles.link} onPress={() => handleImagePress(item.driver)}>
          {item.driver}
        </Text>
      </Text>
      <Text style={styles.text}>
        Equipe:{' '}
        <Text style={styles.link} onPress={() => handleImagePress(item.constructor)}>
          {item.constructor}
        </Text>
      </Text>
    </View>
  );

  const loadMoreItems = useCallback(() => {
    const nextPage = page + 1;
    const nextItems = champions.slice(0, nextPage * itemsPerPage);
    setVisibleItems(nextItems);
    setPage(nextPage);
  }, [page]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={visibleItems}
        keyExtractor={(item) => item.year.toString()}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.container}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={{ uri: selectedImage || '' }} style={styles.modalImage} />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
  },
  card: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 12,
    margin: 8,
  },
  year: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  text: {
    color: '#ffffff',
    marginBottom: 4,
  },
  link: {
    color: '#4da6ff',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4da6ff',
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  wrapper: {
    flex: 1,
  },
});

export default ChampionsListLazy;
