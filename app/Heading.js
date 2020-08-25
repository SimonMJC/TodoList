import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            Components
        </Text>
    </View>
)
const styles = StyleSheet.create({
    header:{
        marginTop: 80
    },
    headerText:{
        textAlign: 'center',
        fontSize: 60,
        color: 'rgba(175, 47, 47, 0.25)',
        fontWeight:'100'
    
    }
})
export default Heading