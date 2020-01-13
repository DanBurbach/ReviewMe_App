import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';

export default function ReviewForm () {

    return(
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values)=> {
                    
                }}
            >

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
            container: {
                paddingTop: 40,
                padding: 24,
            }
})