import { StyleSheet, Text, TextInput, View,} from 'react-native'
import React from 'react'

const AddNote = () => {
  return (
    <View style={styles.container}>
        <TextInput style={{backgroundColor: 'rgba(255, 253, 250, 1)', borderWidth: 1, borderRadius: 10, marginTop: 8, height: '100%', fontSize: 18, paddingHorizontal: 16, paddingVertical:19}}
            placeholder='Write note' 
            multiline={true}
         />
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})