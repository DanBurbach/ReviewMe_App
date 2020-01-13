import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';

export default function ReviewForm () {

    return(
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values)=> {
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
                            placeholder='Review Rating'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                        />
                        <Button title='Submit' color='maroon' onPress={formikprops.handleSubmit} />
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
            }
})