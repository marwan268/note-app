import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Modal } from "react-native";
import AppButton from "../../components/AppButton.jsx";
import NoteList from "../../components/NoteList.jsx";
import AddNoteModal from "../../components/AddNoteModal.jsx";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: "1", text: "Note 1" },
    { id: "2", text: "Note 2" },
    { id: "3", text: "Note 3" },
    { id: "4", text: "Note 4" },
    { id: "5", text: "Note 5" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes((prevNote) => [
      ...prevNote,
      { id: Date.now().toString(), text: newNote },
    ]);
    setNewNote("");
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
      <AppButton
        onPress={() => setModalVisible(true)}
        color={"#044eb4ff"}
        pressedColor={"#0060e6ff"}
        title="+ Add note"
      />
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  notescontainer: {
    padding: 8,
  },
});
export default NoteScreen;
