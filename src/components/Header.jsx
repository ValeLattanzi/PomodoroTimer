import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({setTime, currentTime, setCurrentTime, setIsActive}) {

    function handlePress(index) {
        setIsActive(false);
        const newTime = index === 0 ? (25*60) : index === 1 ? (5*60) : (15*60);
        setCurrentTime(index);
        setTime(newTime);
    }

    return (
    <View style = {{flexDirection: "row"}}>
        {options.map((item, index) => (
            <TouchableOpacity 
                key={index} 
                style={[styles.item, currentTime !== index  && {borderColor: 'transparent'}]}
                onPress={() => handlePress(index)}>
                <Text style={{fontWeight:'bold'}}>{item}</Text>
            </TouchableOpacity>
        ))}
    </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        alignItems: "center",
        borderColor: 'white',
        marginVertical: 20,
    }
});