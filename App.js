import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ["#FA5858", "#FE9A2E", "#58FAD0"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMODORO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);;

  useEffect(() => {
    let interval = null;

    if (isActive) {
      // Correr el timer
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    else {
      // Limpiar el intervalo
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? (300) : (1500));
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  return (
    <View 
      style={
        [
          styles.container,
          {backgroundColor: colors[currentTime]},
          {paddingHorizontal: 15}
        ]
      }>
      <Text style={styles.text}>Pomodoro</Text>
      <Header 
        setTime={setTime} 
        currentTime={currentTime} 
        setCurrentTime={setCurrentTime} 
        setIsActive={setIsActive}/>
      <Timer time={time}/>
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text
          style= {{color: "white", fontWeight: "bold"}}
        >{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  text :{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333333',
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
  }
});
