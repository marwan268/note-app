
import { StyleSheet, View, Modal, Text } from "react-native";
import AppButton from "./AppButton";
 

const DeleteNoteModal = ({
  modalVisible,
  setModalVisible,
  id,
  onDelete,
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
          <Text style={styles.modalTitle}>Warning !</Text>
          <Text>Are you sure ?</Text>
          <View style={styles.modalButtons}>
            <AppButton
              onPress={() => onDelete(id)}
              color={"#d2041cff"}
              pressedColor={"#a20315ff"}
              title="Delete"
              flex={1}
              styles={{
                marginRight: 2
              }}
            />
            <AppButton
              onPress={() => setModalVisible(false)}
              color={"#c5c5c5ff"}
              pressedColor={"#a3a2a2ff"}
              title="Cancel"
              flex={1}
              styles={{
                marginLeft: 2
              }}
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
    color: 'red',
    textAlign: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});


export default DeleteNoteModal