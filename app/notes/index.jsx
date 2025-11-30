import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Modal, Alert } from "react-native";
import AppButton from "../../components/AppButton.jsx";
import NoteList from "../../components/NoteList.jsx";
import AddNoteModal from "../../components/AddNoteModal.jsx";
import noteService from "../../services/noteService.js";

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes();

    if(response.error) {
      setError(response.error);
      Alert.alert('Error', response.error);
    }else {
      setNotes(response.data);
      setError(null);
    }
    setLoading(false);
  };
  
  //Add new note
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
