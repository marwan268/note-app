import { Text, View, StyleSheet } from 'react-native';

const NoteItem = ({note}) => {
  return (
    <View style={styles.noteItems}>
      <Text style={styles.noteText}>{note.text}</Text>
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
});
export default NoteItem;
