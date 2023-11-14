import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { AntDesign} from '@expo/vector-icons';

const UpdateNote = ({route, navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
            headerRight:()=>(
                <View style={{marginRight: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate({
                        name: 'TakeNote',
                        params: {
                            id: route.params.id,
                            title: title,
                        },
                    })}>
                    <Text style={{fontSize: 22, color: 'blue'}}>Save</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    },[navigation, title]);
    console.log(route.params);
    const [title, setTitle] = useState(route.params.title);
  return (
    <View style={styles.container}>
        <TextInput style={{backgroundColor: 'rgba(255, 253, 250, 1)', borderWidth: 1, borderRadius: 10, marginTop: 8, height: '100%', fontSize: 18, paddingHorizontal: 16, paddingVertical:19}}
            value={title}
            multiline={true}
            onChangeText={(text) => setTitle(text)}
         />
    </View>
  )
}

export default UpdateNote

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})