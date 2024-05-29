import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Servicos from './Servicos';
import CadastroServicos from './CadastroServicos';
import Calendario from './Calendario';
import NotificationService from './src/NotificationService';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    NotificationService.createChannel();

    // Agendar uma notificação
    const date = new Date(Date.now() + 30 * 1000);
    const message = 'Esta é uma notificação agendada!';
    NotificationService.scheduleNotification(date, message);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'HidratécnicaApp' }}
        />
        <Stack.Screen name="Servicos" component={Servicos} />
        <Stack.Screen name="CadastroServicos" component={CadastroServicos} />
        <Stack.Screen name="Calendario" component={Calendario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo da empresa */}
      <Image source={require('./Logo.jpg')} style={styles.logo} />

      {/* Apresentação da empresa */}
      <Text style={styles.presentationText}>
        Bem-vindo à Hidratécnica! Somos especialistas em serviços de hidráulica para sua casa ou empresa.
      </Text>

      {/* Botões no rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Servicos')}
        >
          <Text style={styles.buttonText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CadastroServicos')}
        >
          <Text style={styles.buttonText}>Cadastro de Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calendario')}
        >
          <Text style={styles.buttonText}>Calendário</Text>
        </TouchableOpacity>
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
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100, // Adiciona bordas arredondadas à logo
    marginBottom: 20,
  },
  presentationText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
    color: '#fff', // Cor do texto branco
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2980b9', // Cor do botão azul mais escuro
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: '#000', // Adiciona sombra aos botões
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;



