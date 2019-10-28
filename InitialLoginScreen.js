import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from "../../components/Spacer";




const InitialLoginScreen = ({navigation}) => {

    console.log('initial log in screen')

    return (

        <View style={styles.container}>
            <View style={styles.logo}>
                <Spacer>
                    <Text style={styles.logoText}>Tally</Text>
                </Spacer>
            </View>
            <Spacer>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity>
            </Spacer>

            <Spacer/>

            <Spacer>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.text}>Create Account</Text>
                </TouchableOpacity>
            </Spacer>



        </View>

    );
};

InitialLoginScreen.navigationOptions = () => {
    return {
        header: null

    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    button: {
        paddingVertical: 15,
        marginHorizontal: 30,
        backgroundColor:'rgb(255,83,84)',
        borderRadius:10,
        shadowOffset:{height: 5},
        shadowColor: 'gray',
        shadowOpacity: 0.6,
    },
    /*

     */
    text: {
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: 18
    },
    logoText: {

        textAlign: 'center',
        color: 'rgb(255,83,84)',
        fontSize: 50,
        fontFamily: 'AmericanTypewriter',
    },
    logo: {
        marginHorizontal: 100,
        marginBottom: 100,
        paddingVertical: 60,
        backgroundColor:'white',
        borderRadius:10,
    }

});

export default InitialLoginScreen;
