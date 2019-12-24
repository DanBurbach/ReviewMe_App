import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    const reviewPressHandler = () => {
        navigation.push('Review');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHomeText}>Home Screen</Text>
            <TouchableOpacity style = {
                    styles.ReviewButton
            }>
                <Button title='GotoReview' color='white' onPress={reviewPressHandler}/>
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
    ReviewButton: {
        backgroundColor: 'orange',
        color: 'white'
    }
});