import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Big Trouble in Little China', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Plan 9 From Outer Space', rating: 1, body: 'lorem ipsum', key: '2'},
        { title: '12 Monkeys', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);
    
    const reviewPressHandler = () => {
        navigation.push('Review');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHomeText}>Home Screen</Text>

            <Modal visable={modalOpen} animationType='slide'>
                <View style={StyleSheet.modalContent}>
                <MaterialIcons
                    name= 'close'
                    size={24}
                    // style= {}
                    onPress={() => setModalOpen(false)}
                />
                    <Text>Hello from the modal</Text>
                </View>
            </Modal>
            

            <FlatList data={reviews} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                            <Text style={styles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity 
                style = {styles.ReviewButton}>
                <Button 
                    title = 'Go to Review'
                    color = 'white'
                    fontSize={18}
                    fontFamily= 'girassol-regular'
                    onPress = {reviewPressHandler}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        padding: 24,
    },
    titleHomeText: {
        fontFamily: 'girassol-regular',
        fontSize: 36,
    },
    titleText: {
        fontFamily: 'girassol-regular',
        fontSize: 20,
        color: 'black'
    },
    ReviewButton: {
        backgroundColor: 'orange',
        color: 'white',
    },
    modalContent: {
        padding: 60,
    }
});