import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
const Input = ({inputValue, inputChange}) => ( //inputValue, inputChange prop들을 비구조화
    <View style={styles.inputContainer}>
<TextInput
value = {inputValue}
style={styles.input}
placeholder='What needs to be done?'
placeholderTextColor='#CACACA'
selectionColor='#666666' 
onChangeText={inputChange} // onChangeText 메서드를 InputChange로 지정
/> 
    </View>
)

const styles = StyleSheet.create({
    inputContainer:{
        marginLeft: 20,
        marginRight:20,
        marginTop:10,
        shadowOpacity: 0.2, 
        shadowRadius: 3, 
        shadowColor: '#000000',
        shadowOffset:{width: 2, height: 2}
    },
    input:{
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10, 
        paddingRight: 10
    }
})
export default Input