import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Servicos = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Nossos Serviços</Text>

        <View style={styles.serviceContainer}>
          <Image source={require('./instalação.jpg')} style={styles.serviceImage} />
          <Text style={styles.serviceTitle}>Instalação de Produtos</Text>
          <Text style={styles.serviceDescription}>
            Oferecemos serviços especializados de instalação para uma variedade de produtos, incluindo itens nacionais e internacionais. Nossa equipe qualificada garante a instalação segura e eficiente de produtos, proporcionando tranquilidade aos nossos clientes.
          </Text>
        </View>

        <View style={styles.serviceContainer}>
          <Image source={require('./manutenção.png')} style={styles.serviceImage} />
          <Text style={styles.serviceTitle}>Manutenção</Text>
          <Text style={styles.serviceDescription}>
            Nossa equipe especializada oferece serviços abrangentes de manutenção para produtos nacionais e internacionais. Estamos comprometidos em garantir o desempenho ideal e a durabilidade dos seus itens, proporcionando soluções eficientes e confiáveis.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo clara
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db', // Cor do texto azul
    marginBottom: 20,
  },
  serviceContainer: {
    backgroundColor: '#fff', // Cor de fundo branca
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  serviceImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db', // Cor do texto azul
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#7f8c8d', // Cor do texto cinza
    textAlign: 'center',
  },
});

export default Servicos;

