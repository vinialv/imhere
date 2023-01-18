import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: '100%',
  },
  participant:{
    flexDirection: 'row',
    marginBottom: 12,
  },
  participantLabel:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F1E25',
    marginRight: 12,
    borderRadius: 5,
    height: 56
  },
  participantName:{
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText:{
    color: "#FFF",
    fontSize: 24,
  },
});
