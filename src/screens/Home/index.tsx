import React from "react";
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
  const participants = [
    "Rodrigo",
    "Diego",
    "Vinicius",
    "João",
    "Pedro",
    "Gabriel",
    "Fernando",
    "José",
    "Marcos",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante na lista com esse nome."
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Você deseja remover o ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert(`O ${name} foi removido do evento.`),
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
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Segunda, 16 de Janeiro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
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
