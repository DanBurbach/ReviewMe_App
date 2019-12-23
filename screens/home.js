import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    const reviewPressHandler = () => {
        navigation.navigate('Review');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHomeText}>Home Screen</Text>
            <Button title='GotoReview' onPress={reviewPressHandler}/>
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
    }
});