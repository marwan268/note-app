import { TextInput, Text, View, StyleSheet, Image, Pressable } from "react-native";
import DeleteIcon from "@/assets/images/delete.png";
import EditIcon from "@/assets/images/edit.png";
import SaveIcon from "@/assets/images/save.png";
import { useRef, useState } from "react";
import DeleteNoteModal from "./DeleteNoteModal";

const NoteItem = ({ note, onDelete, onEdit}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);
  const handlesave = async () => {
    if(editedText.trim() === "") return;
    await onEdit(note.$id, editedText);
    setIsEditing(false);
  }

  return (
    <View style={styles.noteItems}>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={editedText}
          onChangeText={setEditedText}
          autoFocus
          onSubmitEditing={handlesave}
          returnKeyType="done"
        />
      ) : (
        <Text style={styles.noteText}>{note.text}</Text>
      )}
      <View style={styles.actions}>
        {isEditing ? (
          <Pressable onPress={() => {
            handlesave();
          }}>
            <Image source={SaveIcon} style={styles.icon} />
          </Pressable>
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <Image source={EditIcon} style={styles.icon} />
          </Pressable>
        )
        }
        <Pressable onPress={() => onDelete(note.$id)}>
          <Image source={DeleteIcon} style={styles.icon} />
        </Pressable>
      </View>

      {/* <DeleteNoteModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDelete={onDelete}
        id={note.$id}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  noteItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc7c7ff",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  noteText: {
    fontSize: 16,
    color: "#000",
  },
  input: {
    fontSize: 16,
    color: "#000",
    flex: 1,
    padding: 0,
  },
  icon: {
    width: 20,
    height: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 8
  }
});
export default NoteItem;
