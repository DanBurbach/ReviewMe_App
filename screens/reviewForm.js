import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';

export default function ReviewForm ({ addReview }) {

    return(
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values)=> {
                    addReview(values);
                    console.log(values);
                }}
            >
                {(formikprops) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Review Title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Review Body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Review Rating (1-5)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            keyboardType='numeric'
                        />
                        <Button title='Submit' color='orange' onPress={formikprops.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
            container: {
                paddingTop: 40,
                padding: 24,
            },
            input: {
                borderWidth: 1, 
                borderColor: '#ddd',
                padding: 10,
                margin: 2,
                fontSize: 18,
                borderRadius: 6,
                fontFamily: 'girassol-regular',
                fontSize: 24,
            },
})