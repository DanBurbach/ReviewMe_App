import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


export default function Review({navigation}) {

    const pressHomeHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style= {styles.TitleText}>Review Screen</Text>
            <Text style= {styles.ReviewList}>{ navigation.getParam('title')}</Text>
            <Text style= {styles.ReviewList}>{ navigation.getParam('rating')}</Text>
            <Text style= {styles.ReviewList}>{ navigation.getParam('body')}</Text>
            <TouchableOpacity
                style={styles.HomeButton}>
                <Button 
                    title='Go back to Home Screen' 
                    color = 'white'
                    fontSize={18}
                    fontFamily= 'girassol-regular'
                    onPress={pressHomeHandler}
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
    TitleText: {
        fontFamily: 'girassol-regular',
        fontSize: 36,
    },
    ReviewList: {
        fontFamily: 'girassol-regular',
        fontSize: 20,
    },
    HomeButton : {
        backgroundColor: 'orange',
        color: 'white',
    }
});