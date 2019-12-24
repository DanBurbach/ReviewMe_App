import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Home({ navigation }) {

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
            <FlatList data={reviews} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Text style={styles.titleText}>{ item.title }</Text>
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
    }
});