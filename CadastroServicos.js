import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const CadastroServicos = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');
  const [servicoDesejado, setServicoDesejado] = useState('');

  const cadastrarServico = () => {
    Alert.alert('Cadastrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Cadastro de Serviços</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={setCpf}
      />

      <Text style={styles.label}>Contato:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu contato"
        value={contato}
        onChangeText={setContato}
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.label}>Serviço desejado:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o serviço desejado"
        value={servicoDesejado}
        onChangeText={setServicoDesejado}
      />

      <TouchableOpacity style={styles.botao} onPress={cadastrarServico}>
        <Text style={styles.botaoTexto}>Cadastrar Serviço</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 18,
    color: '#fff', // Cor do texto branco
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff', // Cor de fundo branco para o input
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#27ae60', // Cor do botão verde
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000', // Adiciona sombra aos botões
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  botaoTexto: {
    color: '#fff', // Cor do texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroServicos;

