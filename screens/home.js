import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHomeText}>Home Screen</Text>
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