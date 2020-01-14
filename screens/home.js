import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';import { MaterialIcons } from '@expo/vector-icons';

import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Big Trouble in Little China', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Plan 9 From Outer Space', rating: 1, body: 'lorem ipsum', key: '2'},
        { title: '12 Monkeys', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);

    const addReview = (review) => {
        // for simplicity
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return[review, ...currentReviews];
        })
        setModalOpen(false);
    }
    
    // const reviewPressHandler = () => {
    //     navigation.push('Review');
    // }

    return (
        <View style={styles.container}>

            <Text style={styles.titleHomeText}>Home Screen</Text>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                    name='close'
                    size={24} 
                    style={{...styles.modalToggle, ...styles.modalClose}} 
                    onPress={() => setModalOpen(false)} 
                    />
                    <ReviewForm addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add' 
                size={24} 
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)} 
            />

            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                    <Card>
                        <Text style={styles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
                )}
            />
{/* 
            <TouchableOpacity 
                style = {styles.ReviewButton}>
                <Button 
                    title = 'Go to Review'
                    color = 'white'
                    fontSize={18}
                    fontFamily= 'girassol-regular'
                    onPress = {reviewPressHandler}
                />
            </TouchableOpacity> */}
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
        flex: 1,
    },
    modalClose: {
        marginTop: 60,
        marginBottom: 0,
        alignSelf: 'center',
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    }
});