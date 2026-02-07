import { useRouter } from "expo-router";
import { Button,StyleSheet,Text,View } from "react-native";

export default function App() {

const router = useRouter()

return(
<View style={style.container}>
<Text style={style.mainTitle}>หน้าแรก</Text>
<Button title="ไปหน้า 2" onPress={() => router.navigate('/length')} />
</View>
)
}

const style = StyleSheet.create({
container:{
flex: 1,
backgroundColor: "white",
justifyContent: "center",
alignItems: "center"
},
mainTitle:{
fontSize: 20,
fontWeight: "700"
}

})