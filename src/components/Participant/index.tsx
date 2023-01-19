import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }:Props) {
  return (
    <View style={styles.container}>
      <View style={styles.participant}>
        <View style={styles.participantLabel}>
          <Text style={styles.participantName}>
            { name }
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
