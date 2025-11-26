import { StyleSheet, Text, View, TextInput, Modal } from "react-native";
import AppButton from "./AppButton";
 

const AddNoteModal = ({
  modalVisible,
  setModalVisible,
  newNote,
  setNewNote,
  addNote,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add a new note</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter note..."
            placeholderTextColor="#aaa"
            value={newNote}
            onChangeText={setNewNote}
          />
          <View style={styles.modalButtons}>
            <AppButton
              style={styles.saveBtn}
              onPress={addNote}
              color={"#04d22dff"}
              pressedColor={"#019c20ff"}
              title="Save"
              flex={1}
            />
            <AppButton
              style={styles.cancelBtn}
              onPress={() => setModalVisible(false)}
              color={"#d2041cff"}
              pressedColor={"#a20315ff"}
              title="Cancel"
              flex={1}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default AddNoteModal;
