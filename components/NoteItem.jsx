import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import DeleteIcon from "@/assets/images/delete.png"
import { useState } from 'react';
import DeleteNoteModal from './DeleteNoteModal';

const NoteItem = ({note, onDelete}) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.noteItems}>
      <Text style={styles.noteText}>{note.text}</Text>
      <Pressable onPress={() => onDelete(note.$id)}>
        <Image source={DeleteIcon} style={styles.icon} />
      </Pressable>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ccc7c7ff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 8,
      },
      noteText: {
        fontSize: 16,
        color: '#000'
      },
      icon: {
        width: 20,
        height: 20
      }
});
export default NoteItem;
