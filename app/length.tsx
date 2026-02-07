import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Square() {

  const [foot, setFoot] = useState(0);
  const [meter, setMeter] = useState(0);

  function calFootToMeter() {
    const result = foot * 0.3048;
    setMeter(result);
  }

  return (
    <View style={style.container}>

      <Text style={style.mainTitle}>แปลงหน่วย ฟุต เป็น เมตร</Text>

      <Text>
        {foot} ฟุต = {meter.toFixed(3)} เมตร
      </Text>

      <TextInput
        style={style.textInput}
        placeholder="กรอกจำนวนฟุต"
        keyboardType="numeric"
        value={foot.toString()}
        onChangeText={(f) => setFoot(Number(f))}
      />

      <Button title="คำนวณ" onPress={calFootToMeter} />

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  textInput: {
    borderWidth: 1,
    width: "80%",
    borderColor: "green",
    padding: 10
  }
});
