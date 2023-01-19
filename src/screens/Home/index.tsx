import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {

    if (participantName == '' || participantName.length < 3) {
      return Alert.alert('Falha ao inserir','O nome do participante deve conter 3 ou mais caracteres.');
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante na lista com esse nome."
      );
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {

      Alert.alert(
      "Remover participante",
      `Você deseja remover o ${name}?`,
      [
        {
          text: "Sim", 
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>NLW SETUP</Text>

      <Text style={styles.eventDate}>De 16 à 20 de janeiro.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Sua lista está vazia.</Text>
        )}
      />
    </View>
  );
}
