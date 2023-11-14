import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, AntDesign} from '@expo/vector-icons';

const TakeNote = ({route, editingMode, navigation}) => {
    const [refresh, setRefresh] = useState(false);
    const [data1, setData1] = useState([]);
    useEffect(() => {
        fetch(`https://6509669ef6553137159b5c22.mockapi.io/api/v1/takenote/${route.params.id}`, {
            method: 'GET',
            headers: {'content-type':'application/json'},
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            // console.log(tasks);
            setData1(tasks.notes);
        }).catch(error => {
            // handle error
        })
    }, []);
    // useEffect(() => {
    //     setData1(route.params.user.notes);
    // },[])
    var deleteTask = (noteId) => {
        // Lấy ID của user từ route.params (trong trường hợp này, có vẻ là "1")
        const userId = route.params.id;

        fetch(`https://6509669ef6553137159b5c22.mockapi.io/api/v1/takenote/${userId}`, {
            method: 'GET',
            headers: {'content-type':'application/json'},
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Failed to fetch user data');
        }).then(userData => {
            // Lấy danh sách ghi chú của user
            const userNotes = userData.notes || [];
            console.log(userNotes);

            // Tìm và xoá ghi chú có id trùng khớp
            const updatedNotes = userNotes.filter(note => note.id !== noteId);
            console.log(updatedNotes);
            setData1(updatedNotes);
            // Cập nhật dữ liệu trên server
            fetch(`https://6509669ef6553137159b5c22.mockapi.io/api/v1/takenote/${userId}`, {
                method: 'PUT',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({ ...userData, notes: updatedNotes }),
            }).then(res => {
                if (res.ok) {
                    setRefresh(prevRefresh => !prevRefresh);
                } else {
                    throw new Error('Failed to update user data');
                }
            }).catch(error => {
                console.error("Error deleting task:", error);
            });
        }).catch(error => {
            console.error("Error fetching user data:", error);
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.style1}>
                <View style={{flexDirection: 'row', width: '100%', borderWidth: 0, justifyContent: 'space-between', paddingHorizontal: 10}}>
                    <TouchableOpacity style={{backgroundColor: 'rgba(217, 97, 76, 1)', width: '30%', borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>Long Term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'rgba(217, 97, 76, 1)', width: '30%', borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>Short Term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'rgba(217, 97, 76, 1)', width: '30%', borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.style2}>
                <View style={{width: '100%', marginTop: 10}}>
                    <FlatList
                        data={data1}
                        renderItem={({item}) => (
                            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 15, paddingRight: 25, height: 60, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'silver'}}>
                                {editingMode && (
                                    <TouchableOpacity onPress={() => {
                                        deleteTask(item.id)
                                    }}>
                                        <Ionicons name="remove-circle" size={30} color="red" />
                                    </TouchableOpacity>
                                    )}
                                <TouchableOpacity onPress={()=>navigation.navigate({
                                    name: 'UpdateNote',
                                    params: {
                                        id: item.id,
                                        title: item.title,
                                    }
                                })} style={{width: editingMode?'90%':'100%'}}>
                                    <View style={{flexDirection: 'row', height: 40 , borderWidth: 0, alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                                        
                                            <Text style={{ fontSize: 18, fontWeight: '500' , marginLeft: 10, }}>{item.title}</Text>
                                            <AntDesign name="right" size={18} color="silver" />
                                        
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        extraData={refresh}
                    />
                </View>
            </View>
            <View style={styles.style3}>
                <Ionicons name="add-circle-outline" size={80} color="#D9614C" />
            </View>
        </View>
    )
}

export default TakeNote

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    style1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style2:{
        flex: 9,
        alignItems: 'center',
    },
    style3:{
        position: 'fixed',
        alignItems: 'center',
        width: '100%',
        bottom: 90,
        justifyContent: 'center',
    },
})
