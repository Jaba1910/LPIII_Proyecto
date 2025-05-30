import { useCameraPermissions } from "expo-camera";
import { Link, Stack } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [permission, requestPermission ] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

  return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: "Overview", headerShown: false }} />
        <Text style={ styles.titulo }>Escanea un QR</Text>
        <View style={{ gap: 20 }}>
          <Pressable onPress={requestPermission}>
            <Text style={[ styles.boton, {opacity: !isPermissionGranted ? 1 : 0.5} ]} >
              Solicitar permiso
            </Text>
          </Pressable>
          <Link href={"../scanner"} asChild>
            <Pressable disabled={!isPermissionGranted} >
              <Text style={[ styles.boton, {opacity: !isPermissionGranted ? 0.5 : 1} ]} >
                Escanear código
              </Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    justifyContent: "space-around",
    paddingVertical: 80,
  },
  titulo: {
    color: "#eee",
    fontSize: 45,
  },
  boton: {
    color: "#eee",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#00e",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
    margin: 5
  }
})