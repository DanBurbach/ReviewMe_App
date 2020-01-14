import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ReviewForm ({ addReview }) {

    return(
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values)=> {
                    addReview(values);
                }}
            >
                {(formikprops) => (
                    <View>
                        <Text style={styles.newReviewHeader}>
                            Add A Review
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Review Title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                        />
                        <TextInput
                            multiline
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
                        <TouchableOpacity style={styles.submitButton}>
                            <Button title='Submit' color='white' onPress={formikprops.handleSubmit} />
                        </TouchableOpacity>
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
            newReviewHeader: {
                fontFamily: 'girassol-regular',
                fontSize: 36,
                padding: 5,
                margin: 5,
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
            submitButton: {
                margin: 2,
                backgroundColor: 'orange',
                color: 'white',
                borderRadius: 6,
            }
})