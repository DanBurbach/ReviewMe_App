import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string().
        required().
        min(8),
    rating: yup.number()
        .required()
        .test('is-number-1-5', 'Rating must be a whole number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm ({ addReview }) {

    return(
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions)=> {
                    actions.resetForm();
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
                            onBlur={formikprops.handleBlur('title')}
                        />
                        <Text style={styles.errorText}>{ formikprops.touched.title && formikprops.errors.title }</Text>

                        <TextInput
                            style={styles.input}
                            multiline minHeight={100}
                            placeholder='Review Summery'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                            onBlur={formikprops.handleBlur('body')}
                        />
                        <Text style={styles.errorText}>{ formikprops.touched.body && formikprops.errors.body }</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Review Rating (1-5)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            keyboardType='numeric'
                            onBlur={formikprops.handleBlur('rating')}
                        />
                        <Text style={styles.errorText}>{ formikprops.touched.rating && formikprops.errors.rating }</Text>

                        <FlatButton text="Submit" onPress={formikprops.handleSubmit} />

                        {/* ================ below is another way of wrapping your button for stylesheet ==============================*/}
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
                borderRadius: 6,
            },
            errorText: {
                color: 'crimson',
                fontWeight: 'bold',
                marginBottom: 10, 
                marginTop: 6,
                textAlign: 'center',
            }
})