import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import { champions } from '../content';

const pilotImages: Record<string, string> = {
  'Max Verstappen': 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/04/05042008/Verstappen-Red-Bull-F1.jpg',
  'Lewis Hamilton': 'https://cdn-4.motorsport.com/images/amp/0oOz3n70/s1000/lewis-hamilton-ferrari.jpg',
  'Nico Rosberg': 'https://blog.balaclavaf1.com.br/wp-content/uploads/2021/12/nICO-rOSBERG-1.jpg',
  'Fernando Alonso': 'https://uploads.metroimg.com/wp-content/uploads/2024/12/30124155/Fernando-Alonso-Aston-Martin-Formula-1.jpg',
  'Kimi Räikkönen': 'https://cdn-4.motorsport.com/images/amp/2jXyg1p6/s1000/kimi-raikkonen-ferrari-sf71h--.jpg',
  'Jenson Button': 'https://cdn.williamsf1.tech/images/fnx611yr/production/46918874177dfb2945d8fa4f35998657a21bff37-600x315.jpg?rect=64,0,473,315&w=960&h=640&auto=format',
  'Sebastian Vettel': 'https://sampi.net.br/dir-arquivo-imagem/2020/09/0f0460ac3e63e97b203cd6d4cc078a2b.jpg',
};

const teamImages: Record<string, string> = {
  'Mercedes': 'https://cdn-5.motorsport.com/images/mgl/0RrzmDo0/s8/mercedes-f1-logo-1.jpg',
  'Red Bull Racing': 'https://cdn-8.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg',
  'Renault': 'https://static.wikia.nocookie.net/gp4-offline-championship/images/c/c2/Renault_2023.png/revision/latest?cb=20230717141458',
  'Brawn GP': 'https://i.pinimg.com/736x/8d/2e/b7/8d2eb799a43d88c173e85c284ce896bf.jpg',
  'McLaren': 'https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2025%2F01%2F23171426%2Fmclaren-logo-2024-1320x742.jpg',
};

export default function ChampionsListFull() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (name: string) => {
    const image = pilotImages[name] || teamImages[name];
    if (image) {
      setSelectedImage(image);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campeões - Últimos 20 anos</Text>
      <FlatList
        data={champions}
        keyExtractor={(item) => item.year.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.year}>Campeões de {item.year}</Text>
            <TouchableOpacity onPress={() => handlePress(item.driver)}>
              <Text style={styles.link}>Piloto: {item.driver}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(item.constructor)}>
              <Text style={styles.link}>Equipe: {item.constructor}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedImage || '' }}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingBottom: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    margin: 4,
    padding: 12,
    borderRadius: 10,
  },
  year: {
    color: '#bbb',
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  link: {
    color: '#4fc3f7',
    textAlign: 'center',
    marginVertical: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4fc3f7',
    borderRadius: 6,
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
