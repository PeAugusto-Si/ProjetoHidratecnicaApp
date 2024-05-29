import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Servicos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Serviços</Text>

      <View style={styles.servicoContainer}>
        <Text style={styles.titulo}>Instalação de Produtos</Text>
        <Text style={styles.descricao}>
        Oferecemos serviços especializados de instalação para uma variedade de produtos, incluindo itens nacionais e internacionais. Nossa equipe qualificada garante a instalação segura e eficiente de produtos, proporcionando tranquilidade aos nossos clientes. Conte conosco para instalações de alta qualidade, seja para produtos locais ou importados.
        </Text>
        {<Image source={require('./instalação.jpg')} style={styles.imagemServico} />}
      </View>

      <View style={styles.servicoContainer}>
        <Text style={styles.titulo}>Manutenção</Text>
        <Text style={styles.descricao}>
        Nossa equipe especializada oferece serviços abrangentes de manutenção para produtos nacionais e internacionais. Estamos comprometidos em garantir o desempenho ideal e a durabilidade dos seus itens, proporcionando soluções eficientes e confiáveis. Seja para manutenção preventiva ou corretiva, conte conosco para cuidar dos seus produtos com profissionalismo e qualidade.
        </Text>
        {<Image source={require('./manutenção.png')} style={styles.imagemServico} />}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Cor de fundo azul
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto branco
    marginBottom: 20,
  },
  servicoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto branco
  },
  descricao: {
    fontSize: 16,
    color: '#fff', // Cor do texto branco
    textAlign: 'center',
    marginVertical: 10,
  },
  imagemServico: {
    width: 150,
    height: 150,
    marginVertical: 10,
    
  },
});

export default Servicos;
