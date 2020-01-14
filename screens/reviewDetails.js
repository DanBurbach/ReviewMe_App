import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

import Card from '../shared/card';
import { images } from '../styles/global';


export default function Review({navigation}) {
    const pressHomeHandler = () => {
        navigation.goBack();
    }

    const rating = navigation.getParam('rating');

    return (
        <View style={styles.container}>
            <Text style= {styles.TitleText}>Review Screen</Text>
            <Card>
                <Text style= {styles.ReviewList}>{ navigation.getParam('title')}</Text>

                <View style={styles.rating}>
                    <Text style= {styles.ReviewList}>ReviewMe rating: </Text>
                    <Image source={images.ratings[rating]}
                    />
                </View>
                <Text style= {styles.ReviewList}>{ navigation.getParam('body')}</Text>
            </Card>

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