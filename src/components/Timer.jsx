import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Timer({time}) {
    const formattedTime = `${Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(time % 60)
        .toString()
        .padStart(2, "0")}`;

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2f2f2",
        borderRadius: 15,
        padding: 15,
    },
    time: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});